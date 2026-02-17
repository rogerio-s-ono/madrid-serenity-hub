import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
  t: (es: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("es");
  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));
  const t = (es: string, en: string) => (lang === "es" ? es : en);

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
