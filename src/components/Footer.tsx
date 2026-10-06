import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = useCallback(
    (hash: string) => {
      if (location.pathname === "/") {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + hash);
      }
    },
    [location.pathname, navigate]
  );

  return (
    <footer className="bg-background border-t border-border py-14">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <img
            src={logo}
            alt="Heart & Soul Therapy"
            className="h-10 w-auto object-contain opacity-70"
          />
          <p className="font-sans-body text-[10px] font-light uppercase tracking-[0.22em] text-muted-foreground/50 text-center">
            © {new Date().getFullYear()} Heart & Soul Therapy · Madrid ·{" "}
            {t("Todos los derechos reservados", "All rights reserved", "Todos os direitos reservados")}
          </p>
          <div className="flex gap-6">
            {["#about", "#specialties", "#approach", "#contact"].map((href, i) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); goToSection(href); }}
                className="font-sans-body text-[10px] font-light uppercase tracking-[0.18em] text-muted-foreground/40 hover:text-muted-foreground/80 transition-colors"
              >
                {[
                  t("Sobre mí", "About", "Sobre mim"),
                  t("Especialidades", "Specialties", "Especialidades"),
                  t("Enfoque", "Approach", "Abordagem"),
                  t("Contacto", "Contact", "Contato"),
                ][i]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
