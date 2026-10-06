import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe("LanguageContext", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "";
  });

  it("defaults to Spanish", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.lang).toBe("es");
  });

  it("t() returns the value for the active language with pt fallback to en", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    // default es
    expect(result.current.t("hola", "hello", "olá")).toBe("hola");

    act(() => result.current.setLang("en"));
    expect(result.current.t("hola", "hello", "olá")).toBe("hello");

    act(() => result.current.setLang("pt"));
    expect(result.current.t("hola", "hello", "olá")).toBe("olá");
    // pt omitted -> falls back to en
    expect(result.current.t("hola", "hello")).toBe("hello");
  });

  it("toggle() cycles es -> en -> pt -> es", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.lang).toBe("es");
    act(() => result.current.toggle());
    expect(result.current.lang).toBe("en");
    act(() => result.current.toggle());
    expect(result.current.lang).toBe("pt");
    act(() => result.current.toggle());
    expect(result.current.lang).toBe("es");
  });

  it("pick() selects the correct localized field and falls back to En", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    const obj = { titleEs: "Título", titleEn: "Title", titlePt: "Título PT" };

    expect(result.current.pick(obj, "title")).toBe("Título"); // es
    act(() => result.current.setLang("en"));
    expect(result.current.pick(obj, "title")).toBe("Title");
    act(() => result.current.setLang("pt"));
    expect(result.current.pick(obj, "title")).toBe("Título PT");

    // Missing field -> empty string
    expect(result.current.pick(obj, "missing")).toBe("");
  });

  it("persists the selected language to localStorage", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    act(() => result.current.setLang("pt"));
    expect(window.localStorage.getItem("tania-lang")).toBe("pt");
  });

  it("syncs the <html lang> attribute", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    act(() => result.current.setLang("en"));
    expect(document.documentElement.lang).toBe("en");
  });
});
