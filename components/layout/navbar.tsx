"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { Sun, Moon, Globe, Menu, X, Github, ArrowUpRight, Code2 } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, toggleLang, t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      href: "#projects",
      label: { en: "Projects", vi: "Dự án" },
    },
    {
      href: "#experience",
      label: { en: "Experience", vi: "Kinh nghiệm" },
    },
    {
      href: "#skills",
      label: { en: "Tech Matrix", vi: "Kỹ năng" },
    },
    {
      href: "#architecture",
      label: { en: "Engineering", vi: "Kỹ thuật" },
    },
    {
      href: "#github",
      label: { en: "GitHub", vi: "GitHub" },
    },
    {
      href: "#contact",
      label: { en: "Contact", vi: "Liên hệ" },
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-[#070b14]/80 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/[0.08] shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-foreground font-medium"
        >
          <div className="w-9 h-9 rounded-lg bg-zinc-900 text-cyan-400 dark:bg-white/[0.06] dark:text-cyan-300 border border-zinc-300 dark:border-white/10 flex items-center justify-center font-mono font-bold text-sm tracking-tight group-hover:border-cyan-500 transition-colors shadow-sm">
            DA
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {profile.nativeName}
            </span>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono leading-none mt-0.5">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/70 dark:bg-white/[0.04] p-1.5 rounded-full border border-zinc-200/80 dark:border-white/[0.06] backdrop-blur-md">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-white/[0.08] transition-all"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        {/* Action Controls: Lang, Theme, GitHub */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-zinc-200 dark:border-white/[0.08] bg-zinc-50/80 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
            title={lang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
          >
            <Globe className="w-3.5 h-3.5 text-zinc-400" />
            <span className="uppercase">{lang}</span>
            <span className="text-[10px] text-zinc-400">({lang === "en" ? "VI" : "EN"})</span>
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-white/[0.08] bg-zinc-50/80 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 flex items-center justify-center hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-600 transition-transform" />
              )}
            </button>
          )}

          {/* GitHub Profile Button */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] border border-transparent dark:border-white/10 transition-all shadow-sm"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>
        </div>

        {/* Mobile Hamburger & Quick Toggles */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2 py-1 rounded text-xs font-mono font-bold border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/[0.04] uppercase"
          >
            {lang}
          </button>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 rounded border border-zinc-200 dark:border-white/10 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-zinc-700" />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-700 dark:text-zinc-200"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-2xl border-b border-zinc-200 dark:border-white/10 animate-fade-in shadow-xl">
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/[0.06] transition-colors"
              >
                {t(item.label)}
              </a>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-zinc-900 text-white dark:bg-white/[0.1] dark:text-white"
            >
              <Github className="w-4 h-4" />
              <span>GitHub (TranHoDuyAnh)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
