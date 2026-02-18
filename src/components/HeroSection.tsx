import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="gold-line mx-auto mb-8 w-24" />
          <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-accent">
            {t("Psicoterapia de Excelencia", "Excellence in Psychotherapy", "Psicoterapia de Excelência")}
          </p>
          <h1 className="mb-6 font-serif-display text-5xl font-medium leading-tight tracking-wide text-primary-foreground md:text-7xl">
            Tania Ono
          </h1>
          <p className="mx-auto mb-10 max-w-lg text-lg font-light leading-relaxed text-primary-foreground/80">
            {t(
              "Un espacio seguro y confidencial para tu bienestar emocional en el corazón de Madrid.",
              "A safe and confidential space for your emotional wellbeing in the heart of Madrid.",
              "Um espaço seguro e confidencial para o seu bem-estar emocional no coração de Madrid."
            )}
          </p>
          <a
            href="#contact"
            className="gold-gradient inline-block rounded-sm px-10 py-4 text-sm font-medium uppercase tracking-widest text-accent-foreground transition-transform hover:scale-105"
          >
            {t("Solicitar Cita", "Book a Session", "Agendar Sessão")}
          </a>
          <div className="gold-line mx-auto mt-12 w-24" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
