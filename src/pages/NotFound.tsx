import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-8">
        <h1 className="font-serif-display mb-4 text-5xl font-light text-foreground">404</h1>
        <p className="font-sans-body mb-6 text-lg font-light text-muted-foreground">
          {t(
            "Lo sentimos, esta página no existe.",
            "Sorry, this page does not exist.",
            "Desculpe, esta página não existe."
          )}
        </p>
        <Link
          to="/"
          className="font-sans-body inline-block border border-accent/60 px-8 py-3 text-[11px] font-light uppercase tracking-[0.22em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
        >
          {t("Volver al inicio", "Return to Home", "Voltar ao início")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
