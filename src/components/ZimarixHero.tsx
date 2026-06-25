import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const FEATURE_DEMO_EMBED =
  "https://www.youtube.com/embed/kSxo5FUI3A8?autoplay=1&rel=0&modestbranding=1";
const MODAL_HISTORY_STATE = "__zimarixModal";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackGAEvent(eventName: string, eventParams?: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, eventParams ?? {});
}

function usePrefersReducedMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handleChange = () => setReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reduceMotion;
}

function usePopupHistory(onDismiss: () => void) {
  const onDismissRef = useRef(onDismiss);
  const pushedStateRef = useRef(false);
  const scrollPositionRef = useRef({ x: 0, y: 0 });
  const scrollRestorationRef = useRef<History["scrollRestoration"] | null>(null);

  useEffect(() => {
    onDismissRef.current = onDismiss;
  }, [onDismiss]);

  useEffect(() => {
    scrollPositionRef.current = {
      x: window.scrollX,
      y: window.scrollY,
    };
    scrollRestorationRef.current = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const currentState =
      typeof window.history.state === "object" && window.history.state !== null
        ? window.history.state
        : {};

    window.history.pushState(
      { ...currentState, [MODAL_HISTORY_STATE]: true },
      "",
      window.location.href,
    );
    pushedStateRef.current = true;

    const handlePopState = () => {
      if (!pushedStateRef.current) {
        return;
      }

      pushedStateRef.current = false;
      onDismissRef.current();
      window.requestAnimationFrame(() => {
        window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y);
      });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      if (scrollRestorationRef.current) {
        window.history.scrollRestoration = scrollRestorationRef.current;
      }
    };
  }, []);

  return useCallback(() => {
    if (pushedStateRef.current) {
      window.history.back();
      return;
    }

    onDismissRef.current();
  }, []);
}

function ConsultationCTA({ trackingLocation }: { trackingLocation: string }) {
  return (
    <a
      href="#consultation"
      onClick={() =>
        trackGAEvent("book_consultation_click", {
          location: trackingLocation,
        })
      }
      className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(30,140,255,0.18)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-7"
    >
      Book a Free Demo
      <span aria-hidden="true">→</span>
    </a>
  );
}

function WatchDemoButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white/88 transition-all hover:border-accent hover:bg-accent/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090C]"
    >
      {children}
      <span aria-hidden="true" className="text-[0.7rem] leading-none">
        ▶
      </span>
    </button>
  );
}

function VideoPopup({
  title,
  embedUrl,
  onClose,
}: {
  title: string;
  embedUrl: string;
  onClose: () => void;
}) {
  const reduceMotion = usePrefersReducedMotion();
  const [isClosing, setIsClosing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const videoId = embedUrl.match(/\/embed\/([^?]+)/)?.[1];
  const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";

  const handleClose = useCallback(() => {
    if (isClosing) {
      return;
    }

    if (reduceMotion) {
      onClose();
      return;
    }

    setIsClosing(true);
    window.setTimeout(onClose, 200);
  }, [isClosing, onClose, reduceMotion]);
  const requestClose = usePopupHistory(handleClose);

  useEffect(() => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        requestClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, iframe, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [requestClose]);

  return createPortal(
    <div
      style={
        reduceMotion
          ? undefined
          : {
              opacity: isClosing ? 0 : 1,
              transition: "opacity 200ms ease",
            }
      }
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={requestClose}
    >
      <div
        ref={modalRef}
        className="relative aspect-[9/16] max-h-[88vh] w-full max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-[#111] shadow-2xl sm:max-w-md"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={requestClose}
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-3xl leading-none text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close video preview"
        >
          ×
        </button>
        {isPlaying ? (
          <iframe
            src={embedUrl}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group relative h-full w-full overflow-hidden bg-black text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
            aria-label={`Play ${title}`}
          >
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={`Zimarix smart home demo video preview for ${title}`}
                className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                decoding="async"
              />
            )}
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,140,255,0.2),rgba(0,0,0,0.72))]" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-3xl shadow-2xl backdrop-blur-md transition-transform group-hover:scale-105">
              ▶
            </span>
          </button>
        )}
      </div>
    </div>,
    document.body,
  );
}

export function ZimarixHero() {
  const [activeDemo, setActiveDemo] = useState<{
    title: string;
    embedUrl: string;
  } | null>(null);

  return (
    <section id="hero" className="relative overflow-hidden bg-[#07090C] pt-20 text-white sm:pt-24">
      <div className="absolute inset-0">
        <img
          src="/zimarix-luxury-smart-home-switch-panel-marble-wall-bangalore.webp"
          alt="Zimarix premium smart home switch panel mounted on marble wall — aircraft-grade aluminium anodised finish, Bangalore"
          width={1200}
          height={670}
          className="h-full w-full object-cover object-[22%_50%] opacity-100 contrast-110 saturate-110 sm:object-[24%_50%] lg:object-left"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_46%,rgba(30,140,255,0.12),transparent_22%),radial-gradient(circle_at_28%_48%,transparent_0%,transparent_36%,rgba(7,9,12,0.08)_56%,rgba(7,9,12,0.84)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,12,0)_0%,rgba(7,9,12,0.02)_34%,rgba(7,9,12,0.48)_62%,rgba(7,9,12,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,12,0.2)_0%,rgba(7,9,12,0)_42%,#07090C_100%)]" />
      </div>

      <div className="container-tight relative flex min-h-[calc(100vh-5rem)] flex-col justify-center pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-3xl lg:ml-auto lg:w-[56%]">
          <h1 className="font-heading font-medium leading-[1.08] tracking-[-0.045em]">
            <span className="block text-[clamp(2.35rem,4.55vw,4.75rem)] text-white">
              A switch that never feels <span className="text-accent">cheap.</span>
            </span>
            <span className="mt-3 block text-[clamp(1.95rem,3.75vw,4.05rem)] text-white">
              A touch that never <span className="text-accent">lags.</span>
            </span>
            <span className="mt-3 block text-[clamp(1.95rem,3.75vw,4.05rem)] text-white">
              A home that never depends on someone else's{" "}
              <span className="text-accent">server.</span>
            </span>
          </h1>

          <p className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
            This is Zimarix.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ConsultationCTA trackingLocation="hero" />
            <WatchDemoButton
              onClick={() =>
                setActiveDemo({
                  title: "See It In Action",
                  embedUrl: FEATURE_DEMO_EMBED,
                })
              }
            >
              See It In Action
            </WatchDemoButton>
          </div>

          <p className="mt-6 rounded-full border border-white/12 bg-white/[0.06] px-5 py-3 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md sm:inline-flex sm:text-left">
            5-Year Warranty · 48-Hour Diagnosis · In-House Service
          </p>
        </div>

        <div className="mt-12 hidden border-t border-white/10 pt-5 sm:block lg:ml-auto lg:w-[56%]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/46 lg:grid-cols-4">
            <span className="whitespace-nowrap">Aluminium 6061 T6</span>
            <span className="whitespace-nowrap">Anodise 20+ micron</span>
            <span className="whitespace-nowrap">Protocol ZX</span>
            <span className="whitespace-nowrap">Made in India</span>
          </div>
        </div>
      </div>

      {activeDemo && (
        <VideoPopup
          title={activeDemo.title}
          embedUrl={activeDemo.embedUrl}
          onClose={() => setActiveDemo(null)}
        />
      )}
    </section>
  );
}
