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
      <div className="absolute inset-0 bg-primary/65" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="gold-line mx-auto mb-8 w-24" />
          <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-accent">
            {t(
              "Psicoterapia & Coaching Ejecutivo · Madrid",
              "Psychotherapy & Executive Coaching · Madrid",
              "Psicoterapia & Coaching Executivo · Madrid"
            )}
          </p>
          <h1 className="mb-5 font-serif-display text-5xl font-medium leading-tight tracking-wide text-primary-foreground md:text-7xl">
            {t(
              "Claridad interior para quienes exigen excelencia",
              "Inner Clarity for Those Who Demand Excellence",
              "Clareza Interior para Quem Exige Excelência"
            )}
          </h1>
          <p className="mx-auto mb-4 max-w-xl text-base font-light italic leading-relaxed text-accent/90">
            {t(
              "Para familias internacionales y profesionales de alto rendimiento en Madrid.",
              "For international families and high-performing professionals in Madrid.",
              "Para famílias internacionais e profissionais de alto desempenho em Madrid."
            )}
          </p>
          <p className="mx-auto mb-10 max-w-xl text-lg font-light leading-relaxed text-primary-foreground/80">
            {t(
              "Navegar un nuevo país, mantener una familia unida y liderar con claridad exige más de lo que nadie ve. Este es el espacio donde todo eso se sostiene — con absoluta discreción y rigor profesional.",
              "Navigating a new country, holding a family together, and leading with clarity demands more than anyone sees. This is the space where all of that is held — with absolute discretion and professional rigour.",
              "Navegar um novo país, manter a família unida e liderar com clareza exige mais do que ninguém vê. Este é o espaço onde tudo isso é sustentado — com absoluta discrição e rigor profissional."
            )}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="gold-gradient inline-block rounded-sm px-10 py-4 text-sm font-medium uppercase tracking-widest text-accent-foreground transition-transform hover:scale-105"
            >
              {t("Consulta Privada", "Private Consultation", "Consulta Privada")}
            </a>
            <a
              href="#about"
              className="inline-block rounded-sm border border-primary-foreground/40 px-10 py-4 text-sm font-light uppercase tracking-widest text-primary-foreground/80 transition-all hover:border-accent/60 hover:text-accent"
            >
              {t("Conocer más", "Learn More", "Saiba mais")}
            </a>
          </div>
          <div className="gold-line mx-auto mt-12 w-24" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
