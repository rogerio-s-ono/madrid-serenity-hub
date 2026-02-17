import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <p className="font-serif-display text-lg font-medium text-primary-foreground">
          Dra. María García
        </p>
        <div className="gold-line mx-auto my-4 w-12" />
        <p className="text-xs font-light tracking-wider text-primary-foreground/50">
          © {new Date().getFullYear()} — {t("Todos los derechos reservados", "All rights reserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
