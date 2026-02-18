import { createContext, useContext, useState, ReactNode } from "react";

interface ConsultationContextType {
  open: boolean;
  preselectedSpecialty: string;
  openModal: (specialtySlug?: string) => void;
  closeModal: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const ConsultationProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  // Persists the last selected specialty across opens
  const [preselectedSpecialty, setPreselectedSpecialty] = useState("");

  const openModal = (specialtySlug?: string) => {
    // If a specific slug is passed, update preselection; otherwise keep the last one
    if (specialtySlug !== undefined) {
      setPreselectedSpecialty(specialtySlug);
    }
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  return (
    <ConsultationContext.Provider value={{ open, preselectedSpecialty, openModal, closeModal }}>
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => {
  const ctx = useContext(ConsultationContext);
  if (!ctx) throw new Error("useConsultation must be used within ConsultationProvider");
  return ctx;
};
