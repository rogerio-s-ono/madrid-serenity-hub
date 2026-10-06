import { Suspense, lazy } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ConsultationProvider, useConsultation } from "@/contexts/ConsultationContext";
import ConsultationModal from "@/components/ConsultationModal";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

// Detail/error routes are lazy-loaded so they aren't in the initial bundle.
const NotFound = lazy(() => import("./pages/NotFound"));
const SpecialtyPage = lazy(() => import("./pages/SpecialtyPage"));
const ApproachPage = lazy(() => import("./pages/ApproachPage"));

const queryClient = new QueryClient();

const ModalWrapper = () => {
  const { open, closeModal } = useConsultation();
  return <ConsultationModal open={open} onClose={closeModal} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ConsultationProvider>
        <TooltipProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <ScrollToTop />
            <ModalWrapper />
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/especialidad/:slug" element={<SpecialtyPage />} />
                <Route path="/enfoque/:slug" element={<ApproachPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ConsultationProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
