import { lazy, Suspense, useEffect, useState } from "react";
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

declare global {
  interface Window {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
    cancelIdleCallback?: (handle: number) => void;
  }
}

const Index = () => {
  const [loadBelowFold, setLoadBelowFold] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window && window.requestIdleCallback) {
      const handle = window.requestIdleCallback(() => setLoadBelowFold(true), {
        timeout: 1200,
      });

      return () => window.cancelIdleCallback?.(handle);
    }

    const timeout = window.setTimeout(() => setLoadBelowFold(true), 300);
    return () => window.clearTimeout(timeout);
  }, []);

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
