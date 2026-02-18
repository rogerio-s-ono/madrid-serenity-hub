import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t("Sobre mí", "About", "Sobre mim") },
    { href: "#specialties", label: t("Especialidades", "Specialties", "Especialidades") },
    { href: "#approach", label: t("Enfoque", "Approach", "Abordagem") },
    { href: "#contact", label: t("Contacto", "Contact", "Contato") },
  ];

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ivory shadow-[0_2px_30px_rgba(0,0,0,0.06)] border-b border-border/60"
          : "bg-ivory/96 backdrop-blur-sm"
      }`}
    >
      {/* Gold top bar */}
      <div className="h-[1px] w-full gold-gradient opacity-80" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-4">
        {/* Logo */}
        <a href="#" className="block shrink-0">
          <img
            src={logo}
            alt="Heart & Soul Therapy"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-sans-body text-[10.5px] font-light uppercase tracking-[0.22em] text-foreground/55 transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent/70 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right: language + CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-1">
            {(["es", "en", "pt"] as const).map((l, i) => (
              <span key={l} className="flex items-center">
                <button
                  onClick={() => setLang(l)}
                  className={`font-sans-body text-[10px] font-light uppercase tracking-widest transition-all duration-200 ${
                    lang === l
                      ? "text-accent"
                      : "text-foreground/35 hover:text-foreground/70"
                  }`}
                >
                  {l === "es" ? "ES" : l === "en" ? "EN" : "PT"}
                </button>
                {i < 2 && <span className="mx-1.5 text-foreground/20 text-[10px]">·</span>}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="font-sans-body text-[10px] font-light uppercase tracking-[0.22em] border border-accent/60 px-6 py-2.5 text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            {t("Reservar", "Book a Session", "Reservar")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col items-end gap-[5px] p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px bg-foreground/50 transition-all duration-300 ${mobileOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"}`} />
          <span className={`block h-px bg-foreground/50 transition-all duration-300 ${mobileOpen ? "w-0 opacity-0" : "w-3.5"}`} />
          <span className={`block h-px bg-foreground/50 transition-all duration-300 ${mobileOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden border-t border-border/40 bg-ivory md:hidden"
      >
        <div className="flex flex-col gap-6 px-10 py-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-sans-body text-[10.5px] font-light uppercase tracking-[0.22em] text-foreground/55 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-1">
            {(["es", "en", "pt"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`font-sans-body text-[10px] uppercase tracking-widest transition-all ${
                  lang === l ? "text-accent" : "text-foreground/35 hover:text-foreground/70"
                }`}
              >
                {l === "es" ? "ES" : l === "en" ? "EN" : "PT"}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="w-fit font-sans-body text-[10px] font-light uppercase tracking-[0.22em] border border-accent/60 px-6 py-2.5 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            {t("Reservar", "Book a Session", "Reservar")}
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
