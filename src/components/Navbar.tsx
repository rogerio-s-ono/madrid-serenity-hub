import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/98 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.07)] border-b border-border"
          : "bg-ivory/90 backdrop-blur-sm"
      }`}
    >
      {/* Top accent line */}
      <div className="h-[2px] gold-gradient w-full" />

      <div className="container mx-auto flex items-center justify-between px-8 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Heart & Soul Therapy"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[11px] font-light uppercase tracking-[0.18em] text-foreground/60 transition-colors duration-300 hover:text-accent group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Divider */}
          <div className="h-4 w-px bg-border/60" />

          {/* Language switcher */}
          <div className="flex gap-1.5">
            {(["es", "en", "pt"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-[10px] font-light uppercase tracking-widest transition-all duration-200 ${
                  lang === l
                    ? "text-accent border-b border-accent"
                    : "text-foreground/40 hover:text-accent"
                }`}
              >
                {l === "es" ? "ES" : l === "en" ? "EN" : "PT"}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 text-[10px] font-light uppercase tracking-[0.18em] border border-accent text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            {t("Reservar consulta", "Book Consultation", "Reservar consulta")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-foreground/60 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px w-6 bg-foreground/60 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground/60 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden bg-ivory/98 border-t border-border"
      >
        <div className="flex flex-col px-8 py-6 gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[11px] font-light uppercase tracking-[0.18em] text-foreground/60 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-1">
            {(["es", "en", "pt"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-[10px] uppercase tracking-widest transition-all ${
                  lang === l ? "text-accent border-b border-accent" : "text-foreground/40 hover:text-accent"
                }`}
              >
                {l === "es" ? "ES" : l === "en" ? "EN" : "PT"}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-1 w-fit px-5 py-2 text-[10px] font-light uppercase tracking-[0.18em] border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            {t("Reservar consulta", "Book Consultation", "Reservar consulta")}
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
