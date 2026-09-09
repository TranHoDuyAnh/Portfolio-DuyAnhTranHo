"use client";

import React from "react";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n";
import { Github, Mail, ArrowUp, Terminal, ShieldCheck } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/50 dark:bg-[#070b14]/50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
          <div className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            <Terminal className="w-4 h-4 text-cyan-500" />
            <span>{profile.name}</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span className="text-xs text-zinc-500 font-normal">Software Engineer</span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Turning ideas into scalable, production-ready software.
          </p>
          <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            Next.js · TypeScript · Tailwind CSS · Clean Architecture
          </p>
        </div>

        {/* Right socials & scroll top */}
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-300 flex items-center justify-center hover:text-cyan-500 hover:border-cyan-500/50 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-300 flex items-center justify-center hover:text-cyan-500 hover:border-cyan-500/50 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-500 transition-all"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
