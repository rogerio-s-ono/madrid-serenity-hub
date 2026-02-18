import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-sm shadow-sm border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Therapy for your Heart and Soul" className="h-20 w-auto" />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm font-light uppercase tracking-widest text-foreground/70 transition-colors hover:text-accent">
            {t("Sobre mí", "About", "Sobre mim")}
          </a>
          <a href="#specialties" className="text-sm font-light uppercase tracking-widest text-foreground/70 transition-colors hover:text-accent">
            {t("Especialidades", "Specialties", "Especialidades")}
          </a>
          <a href="#approach" className="text-sm font-light uppercase tracking-widest text-foreground/70 transition-colors hover:text-accent">
            {t("Enfoque", "Approach", "Abordagem")}
          </a>
          <a href="#contact" className="text-sm font-light uppercase tracking-widest text-foreground/70 transition-colors hover:text-accent">
            {t("Contacto", "Contact", "Contato")}
          </a>
          <div className="ml-4 flex gap-2">
            {(["es", "en", "pt"] as const)
              .filter((l) => l !== lang)
              .map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="rounded border border-accent/60 px-3 py-1 text-xs font-light uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  {l === "es" ? "ES" : l === "en" ? "EN" : "PT"}
                </button>
              ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
