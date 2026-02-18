import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en" | "pt";

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
  t: (es: string, en: string, pt?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const cycle: Language[] = ["es", "en", "pt"];

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("es");
  const toggle = () =>
    setLang((l) => cycle[(cycle.indexOf(l) + 1) % cycle.length]);
  const t = (es: string, en: string, pt?: string) => {
    if (lang === "es") return es;
    if (lang === "pt") return pt ?? en;
    return en;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
