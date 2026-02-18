import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ConsultationProvider, useConsultation } from "@/contexts/ConsultationContext";
import ConsultationModal from "@/components/ConsultationModal";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SpecialtyPage from "./pages/SpecialtyPage";
import ApproachPage from "./pages/ApproachPage";
import ScrollToTop from "./components/ScrollToTop";

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
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <ModalWrapper />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/especialidad/:slug" element={<SpecialtyPage />} />
              <Route path="/enfoque/:slug" element={<ApproachPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ConsultationProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
