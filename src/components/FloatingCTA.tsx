import { useEffect, useState } from "react";
import { BATCH_SPOTS_REMAINING, isBatchFull } from "@/config/batchAvailability";

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

type FloatingCTAProps = {
  onBookDemo: () => void;
};

const HERO_SCROLL_THRESHOLD = 400;
const CONSULTATION_HIDE_THRESHOLD = 100;

export function FloatingCTA({ onBookDemo }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);
  const ctaLabel = isBatchFull()
    ? "Join Waitlist — Batch Full →"
    : `Reserve a Spot — ${BATCH_SPOTS_REMAINING} Left →`;

  useEffect(() => {
    const handleScroll = () => {
      const pastHero = window.scrollY > HERO_SCROLL_THRESHOLD;
      const consultationSection = document.getElementById("consultation");

      if (!pastHero) {
        setVisible(false);
        return;
      }

      if (consultationSection) {
        const consultationTop = consultationSection.getBoundingClientRect().top;
        setVisible(consultationTop > CONSULTATION_HIDE_THRESHOLD);
        return;
      }

      setVisible(true);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleClick = () => {
    trackGAEvent("book_consultation_click", {
      location: "floating_cta",
    });
    onBookDemo();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed z-[999] inline-flex items-center justify-center rounded-full bg-accent px-7 py-[14px] text-sm font-semibold text-accent-foreground shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090C] max-sm:inset-x-4 max-sm:bottom-5 max-sm:w-[calc(100%-2rem)] sm:bottom-8 sm:right-8 sm:max-w-[320px] ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      {ctaLabel}
    </button>
  );
}
