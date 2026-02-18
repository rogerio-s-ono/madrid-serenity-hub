import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import type { Specialty } from "@/data/specialties";

interface Props {
  specialty: Specialty | null;
  onClose: () => void;
}

const SpecialtyModal = ({ specialty, onClose }: Props) => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  const title = specialty ? (lang === "es" ? specialty.titleEs : lang === "pt" ? specialty.titlePt : specialty.titleEn) : "";
  const tag = specialty ? (lang === "es" ? specialty.tagEs : lang === "pt" ? specialty.tagPt : specialty.tagEn) : "";
  const summary = specialty ? (lang === "es" ? specialty.summaryEs : lang === "pt" ? specialty.summaryPt : specialty.summaryEn) : "";

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
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto bg-background"
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

                <h2 className="font-serif-display mb-4 text-3xl font-light leading-snug text-foreground">
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
                  <a
                    href="/#contact"
                    onClick={onClose}
                    className="gold-gradient font-sans-body flex-1 text-center px-6 py-3.5 text-[11px] font-light uppercase tracking-[0.22em] text-accent-foreground transition-all duration-300 hover:opacity-90"
                  >
                    {t("Consulta Privada", "Private Consultation", "Consulta Privada")}
                  </a>
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
