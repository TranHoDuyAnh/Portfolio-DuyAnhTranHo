"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "vi";

export interface BilingualText {
  en: string;
  vi: string;
}

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (text: BilingualText) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio_lang") as Language;
    if (saved === "vi" || saved === "en") {
      setLangState(saved);
    } else {
      // detect browser language
      const browserLang = navigator.language.startsWith("vi") ? "vi" : "en";
      setLangState(browserLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", newLang);
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "vi" : "en");
  };

  const t = (text: BilingualText): string => {
    if (!mounted) return text.en; // Avoid hydration mismatch on initial render
    return text[lang] || text.en;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
