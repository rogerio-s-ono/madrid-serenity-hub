import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type React from "react";

export type Language = "es" | "en" | "pt";

/** Shape of a data object that carries one value per language, e.g.
 *  { titleEs, titleEn, titlePt }. Used by the `pick` helper. */
export type Localized<Field extends string> = {
  [K in `${Field}${"Es" | "En" | "Pt"}`]: string;
} & Record<string, unknown>;

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
  setLang: (l: Language) => void;
  t: (es: React.ReactNode, en: React.ReactNode, pt?: React.ReactNode) => React.ReactNode;
  /** Pick the right field of a localized data object for the active language.
   *  pick(specialty, "title") -> specialty.titleEs | titleEn | titlePt */
  pick: (obj: object, field: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const cycle: Language[] = ["es", "en", "pt"];
const STORAGE_KEY = "tania-lang";

const isLanguage = (v: unknown): v is Language =>
  v === "es" || v === "en" || v === "pt";

const getInitialLang = (): Language => {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLanguage(stored) ? stored : "es";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(getInitialLang);

  // Persist the choice and keep the <html lang> attribute in sync (a11y + SEO).
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Language) => setLangState(l);

  const toggle = () =>
    setLangState((l) => cycle[(cycle.indexOf(l) + 1) % cycle.length]);

  const t = (es: React.ReactNode, en: React.ReactNode, pt?: React.ReactNode) => {
    if (lang === "es") return es;
    if (lang === "pt") return pt ?? en;
    return en;
  };

  const pick = (obj: object, field: string): string => {
    const suffix = lang === "es" ? "Es" : lang === "pt" ? "Pt" : "En";
    const record = obj as Record<string, unknown>;
    const value = record[`${field}${suffix}`] ?? record[`${field}En`];
    return typeof value === "string" ? value : "";
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, setLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
