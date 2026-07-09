import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Navbar } from "@/components/Navbar";
import { ZimarixHero } from "@/components/ZimarixHero";

const ZimarixLandingPage = lazy(() =>
  import("@/components/ZimarixLandingPage").then((module) => ({
    default: module.ZimarixLandingPage,
  })),
);
const Footer = lazy(() =>
  import("@/components/Footer").then((module) => ({
    default: module.Footer,
  })),
);

const Index = () => {
  const [loadBelowFold, setLoadBelowFold] = useState(false);
  const loadRestOfPage = useCallback(() => {
    setLoadBelowFold(true);
  }, []);

  const scrollToConsultation = useCallback(() => {
    setLoadBelowFold(true);

    const scroll = () => {
      const target = document.getElementById("consultation");

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return true;
      }

      return false;
    };

    if (scroll()) {
      return;
    }

    let attempts = 0;
    const interval = window.setInterval(() => {
      if (scroll() || ++attempts >= 30) {
        window.clearInterval(interval);
      }
    }, 100);
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    setLoadBelowFold(true);
  }, []);

  useEffect(() => {
    if (loadBelowFold) {
      return;
    }

    const options = { passive: true } as AddEventListenerOptions;
    const interactionEvents = ["scroll", "wheel", "touchstart", "pointerdown", "keydown"];
    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, loadRestOfPage, options);
    });

    const timeout = window.setTimeout(loadRestOfPage, 8000);

    return () => {
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, loadRestOfPage);
      });
      window.clearTimeout(timeout);
    };
  }, [loadBelowFold, loadRestOfPage]);

  // The below-fold chunks only *render* once the user interacts (see above) —
  // that keeps the initial hero paint fast. But if we wait until the first
  // scroll event to even start fetching the JS, anyone who scrolls quickly
  // right after the page loads can outrun the network request and hit a
  // visibly blank section for a moment. So we warm the module cache in the
  // background as soon as the browser is idle, well before the user is
  // likely to have scrolled — the render itself still waits for interaction.
  useEffect(() => {
    if (loadBelowFold) {
      return;
    }

    const prefetch = () => {
      import("@/components/ZimarixLandingPage");
      import("@/components/Footer");
    };

    const win = window as Window & {
      requestIdleCallback?: (cb: IdleRequestCallback, opts?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof win.requestIdleCallback === "function") {
      const handle = win.requestIdleCallback(prefetch, { timeout: 2000 });
      return () => win.cancelIdleCallback?.(handle);
    }

    const timeoutId = window.setTimeout(prefetch, 1000);
    return () => window.clearTimeout(timeoutId);
  }, [loadBelowFold]);

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      return;
    }

    let attempts = 0;
    const maxAttempts = 30;

    const scrollToHash = () => {
      const target = document.querySelector(hash);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.clearInterval(interval);
        return;
      }

      attempts += 1;
      if (attempts >= maxAttempts) {
        window.clearInterval(interval);
      }
    };

    const timeout = window.setTimeout(scrollToHash, 300);
    const interval = window.setInterval(scrollToHash, 100);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [loadBelowFold]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ZimarixHero />
        {loadBelowFold && (
          <Suspense fallback={null}>
            <ZimarixLandingPage />
          </Suspense>
        )}
      </main>
      {loadBelowFold && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
      <FloatingCTA onBookDemo={scrollToConsultation} />
    </div>
  );
};

export default Index;
