import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Layered overlay for depth */}
      <div className="absolute inset-0 bg-navy/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-navy/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          {/* Eyebrow */}
          <p className="section-label mb-8" style={{ color: "hsl(var(--gold-light))", opacity: 1, textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
            {t(
              "Psicoterapia para Familias Internacionales · Madrid",
              "Psychotherapy for International Families · Madrid",
              "Psicoterapia para Famílias Internacionais · Madrid"
            )}
          </p>

          {/* Main heading */}
          <h1 className="font-serif-display mb-8 text-5xl font-light leading-[1.12] tracking-wide text-primary-foreground md:text-7xl lg:text-[82px]">
            {lang === "es" && (<>Claridad interior para quienes<br /><em>exigen excelencia</em></>)}
            {lang === "en" && (<>Inner clarity for those who<br /><em>demand excellence</em></>)}
            {lang === "pt" && (<>Clareza interior para quem<br /><em>exige excelência</em></>)}
          </h1>

          {/* Gold divider */}
          <div className="gold-line mx-auto mb-8 w-20 opacity-70" />

          {/* Body */}
          <p className="mx-auto mb-12 max-w-2xl font-sans-body text-base font-light leading-[1.9] tracking-wide text-primary-foreground/75">
            {t(
              "Para familias internacionales que viven en Madrid. Un espacio confidencial donde la complejidad de criar, amar y crecer entre culturas se sostiene con rigor clínico y discreción absoluta.",
              "For international families living in Madrid. A confidential space where the complexity of raising children, loving, and growing between cultures is held with clinical rigour and absolute discretion.",
              "Para famílias internacionais que vivem em Madrid. Um espaço confidencial onde a complexidade de criar, amar e crescer entre culturas é sustentada com rigor clínico e discrição absoluta."
            )}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="gold-gradient font-sans-body inline-block px-12 py-4 text-[11px] font-light uppercase tracking-[0.22em] text-accent-foreground transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            >
              {t("Consulta Privada", "Private Consultation", "Consulta Privada")}
            </a>
            <a
              href="#about"
              className="font-sans-body inline-block border border-primary-foreground/30 px-12 py-4 text-[11px] font-light uppercase tracking-[0.22em] text-primary-foreground/70 transition-all duration-300 hover:border-gold/60 hover:text-primary-foreground"
            >
              {t("Conocer más", "Learn More", "Saiba mais")}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-px bg-gradient-to-b from-transparent to-primary-foreground/30" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
