import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useConsultation } from "@/contexts/ConsultationContext";
import type { Specialty } from "@/data/specialties";

interface Props {
  specialty: Specialty | null;
  onClose: () => void;
}

const SpecialtyModal = ({ specialty, onClose }: Props) => {
  const { t, pick } = useLanguage();
  const navigate = useNavigate();
  const { openModal } = useConsultation();
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const title = specialty ? pick(specialty, "title") : "";
  const tag = specialty ? pick(specialty, "tag") : "";
  const summary = specialty ? pick(specialty, "summary") : "";

  // Escape key
  useEffect(() => {
    if (!specialty) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [specialty, onClose]);

  // Body scroll lock + focus management
  useEffect(() => {
    if (specialty) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => panelRef.current?.focus());
    } else {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    }
    return () => { document.body.style.overflow = ""; };
  }, [specialty]);

  // Focus trap
  const handleTrapKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !panelRef.current) return;
    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  return (
    <AnimatePresence>
      {specialty && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            {/* onKeyDown implements the focus trap for this dialog — a standard
                ARIA pattern, so the non-interactive-element rule is a false positive here. */}
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="specialty-modal-title"
              tabIndex={-1}
              onKeyDown={handleTrapKeyDown}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto bg-background focus:outline-none"
              style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.35)" }}
            >
              {/* Gold top accent */}
              <div className="h-[2px] w-full gold-gradient" />

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>

              {/* Hero image */}
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={specialty.image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-[2px] left-0 right-0 h-64 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="px-10 pb-10 pt-8">
                {/* Tag + number */}
                <div className="mb-4 flex items-center gap-4">
                  <span
                    className="font-sans-body text-[10px] font-light uppercase tracking-[0.22em]"
                    style={{ color: "hsl(var(--gold))" }}
                  >
                    {specialty.num}
                  </span>
                  <span className="font-sans-body border border-border px-3 py-1 text-[10px] font-light uppercase tracking-[0.18em] text-muted-foreground">
                    {tag}
                  </span>
                </div>

                <h2 id="specialty-modal-title" className="font-serif-display mb-4 text-3xl font-light leading-snug text-foreground">
                  {title}
                </h2>

                <div className="gold-line mb-6 w-10" />

                <p className="font-sans-body mb-8 text-[15px] font-light leading-[1.85] text-muted-foreground">
                  {summary}
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => {
                      onClose();
                      navigate(`/especialidad/${specialty.slug}`);
                    }}
                    className="font-sans-body flex-1 border border-border px-6 py-3.5 text-[11px] font-light uppercase tracking-[0.22em] text-foreground/70 transition-all duration-300 hover:border-accent/60 hover:text-foreground"
                  >
                    {t("Más detalles", "More Details", "Mais detalhes")}
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      openModal(specialty.slug);
                    }}
                    className="gold-gradient font-sans-body flex-1 text-center px-6 py-3.5 text-[11px] font-light uppercase tracking-[0.22em] text-accent-foreground transition-all duration-300 hover:opacity-90"
                  >
                    {t("Consulta Privada", "Private Consultation", "Consulta Privada")}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SpecialtyModal;
