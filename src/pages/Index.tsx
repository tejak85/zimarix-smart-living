import { lazy, Suspense, useCallback, useEffect, useState } from "react";
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
    </div>
  );
};

export default Index;
