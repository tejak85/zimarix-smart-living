import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const WarrantySupport = lazy(() => import("./pages/WarrantySupport"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/warranty" element={<WarrantySupport />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/alexa-terms-of-use" element={<Navigate to="/terms#alexa-skill" replace />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
