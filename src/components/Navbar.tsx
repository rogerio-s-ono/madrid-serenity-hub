import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { lang, toggle, t } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-serif-display text-xl font-semibold tracking-wide text-primary-foreground">
          Tania Ono
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm font-light uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-accent">
            {t("Sobre mí", "About")}
          </a>
          <a href="#specialties" className="text-sm font-light uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-accent">
            {t("Especialidades", "Specialties")}
          </a>
          <a href="#approach" className="text-sm font-light uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-accent">
            {t("Enfoque", "Approach")}
          </a>
          <a href="#contact" className="text-sm font-light uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-accent">
            {t("Contacto", "Contact")}
          </a>
          <button
            onClick={toggle}
            className="ml-4 rounded border border-accent/40 px-3 py-1 text-xs font-light uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-accent-foreground"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
