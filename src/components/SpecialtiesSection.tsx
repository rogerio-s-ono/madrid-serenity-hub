import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { specialties } from "@/data/specialties";
import SpecialtyModal from "@/components/SpecialtyModal";
import type { Specialty } from "@/data/specialties";

const SpecialtiesSection = () => {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const [modalItem, setModalItem] = useState<Specialty | null>(null);

  const heading =
    lang === "es" ? (
      <>Diseñado para familias que han elegido<br /><em>construir su vida en Madrid</em></>
    ) : lang === "pt" ? (
      <>Desenhado para famílias que escolheram<br /><em>construir sua vida em Madrid</em></>
    ) : (
      <>Designed for families who have chosen<br /><em>to build their life in Madrid</em></>
    );

  return (
    <>
      <section id="specialties" className="bg-primary py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mb-20 max-w-2xl"
          >
            <p className="section-label mb-5" style={{ color: "hsl(var(--gold-light))" }}>
              {t("Áreas de Especialización", "Areas of Expertise", "Áreas de Especialização")}
            </p>
            <h2 className="font-serif-display text-4xl font-light leading-[1.2] text-primary-foreground lg:text-5xl">
              {heading}
            </h2>
          </motion.div>

          {/* Grid */}
          <div
            className="grid border border-primary-foreground/10 md:grid-cols-2 lg:grid-cols-3"
            style={{ perspective: "1200px" }}
          >
            {specialties.map((s, i) => {
              const isSelected = selected === i;
              const title = t(s.titleEs, s.titleEn, s.titlePt);
              return (
                <motion.div
                  key={s.slug}
                  role="button"
                  tabIndex={0}
                  aria-label={`${title} — ${t("Ver más", "View more", "Ver mais")}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{
                    y: -6,
                    scale: 1.025,
                    rotateX: 2,
                    rotateY: -1,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.45), 0 0 0 1px hsl(var(--gold)/0.25)",
                    zIndex: 10,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  animate={
                    isSelected
                      ? {
                          y: -10,
                          scale: 1.04,
                          boxShadow: "0 28px 60px rgba(0,0,0,0.55), 0 0 0 1.5px hsl(var(--gold)/0.5)",
                          zIndex: 20,
                        }
                      : {
                          y: 0,
                          scale: 1,
                          boxShadow: "none",
                          zIndex: 1,
                        }
                  }
                  onClick={() => {
                    setSelected(isSelected ? null : i);
                    setModalItem(s);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(isSelected ? null : i);
                      setModalItem(s);
                    }
                  }}
                  className="relative border border-primary-foreground/10 bg-primary p-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/60 focus:ring-offset-2 focus:ring-offset-primary"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Gold accent line on selected */}
                  {isSelected && (
                    <motion.div
                      layoutId="selected-accent"
                      className="absolute top-0 left-0 right-0 h-[2px] gold-gradient"
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  <p className="font-serif-display mb-5 text-3xl font-medium" style={{ color: "hsl(var(--gold-light))" }}>
                    {s.num}
                  </p>
                  <h3 className="font-serif-display mb-4 text-xl font-light leading-snug text-primary-foreground">
                    {t(s.titleEs, s.titleEn, s.titlePt)}
                  </h3>
                  <div className={`mb-4 h-px bg-accent/50 transition-all duration-300 ${isSelected ? "w-14" : "w-8"}`} />
                  <p className="font-sans-body text-sm font-light leading-[1.85]" style={{ color: "hsl(var(--primary-foreground) / 0.75)" }}>
                    {t(s.summaryEs, s.summaryEn, s.summaryPt)}
                  </p>

                  {/* Hint */}
                  <p
                    className="font-sans-body mt-6 text-[10px] font-light uppercase tracking-[0.18em] transition-opacity duration-300"
                    style={{ color: "hsl(var(--gold-light))", opacity: 0.5 }}
                  >
                    {t("Ver más →", "View more →", "Ver mais →")}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <SpecialtyModal
        specialty={modalItem}
        onClose={() => {
          setModalItem(null);
          setSelected(null);
        }}
      />
    </>
  );
};

export default SpecialtiesSection;
