"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { useI18n } from "@/lib/i18n";
import {
  Code2,
  Server,
  Database,
  Cpu,
  CheckCircle2,
  Terminal,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export function TechMatrix() {
  const { t } = useI18n();
  const [selectedProjectFilter, setSelectedProjectFilter] = useState<string>("all");

  const projectList = ["CreatorOS", "Pulse", "AdaptiveLMS", "Tiệm Người Quảng", "Shi-Perfume", "EV Battery Swap"];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-zinc-100/50 dark:bg-[#080d19]/40 border-y border-zinc-200/80 dark:border-white/[0.06] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              <Code2 className="w-3.5 h-3.5" />
              <span>{t({ en: "Verified Capabilities", vi: "Năng Lực Kỹ Thuật Đã Kiểm Chứng" })}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              {t({ en: "Technology & Engineering Matrix", vi: "Ma Trận Công Nghệ & Kỹ Năng" })}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              {t({
                en: "Every technology listed is tied to hands-on deployment experience across 6 production codebases.",
                vi: "Mỗi công nghệ trong danh sách đều gắn với kinh nghiệm triển khai thực tế trong 6 codebase.",
              })}
            </p>
          </div>

          {/* Project association filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-200/60 dark:bg-white/[0.04] border border-zinc-300/80 dark:border-white/10 font-mono text-xs">
            <button
              onClick={() => setSelectedProjectFilter("all")}
              className={`relative px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedProjectFilter === "all"
                  ? "text-zinc-900 dark:text-white font-semibold"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {selectedProjectFilter === "all" && (
                <motion.div
                  layoutId="activeTechFilter"
                  className="absolute inset-0 bg-white dark:bg-white/10 rounded-lg shadow-xs"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t({ en: "All Projects", vi: "Tất cả dự án" })}</span>
            </button>
            {projectList.map((proj) => {
              const isActive = selectedProjectFilter === proj;
              return (
                <button
                  key={proj}
                  onClick={() => setSelectedProjectFilter(proj)}
                  className={`relative px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTechFilter"
                      className="absolute inset-0 bg-white dark:bg-white/10 rounded-lg shadow-xs"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{proj}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl glass-card card-hover-glow p-6 border border-zinc-200 dark:border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-mono">
                    {idx === 0 && <Server className="w-4 h-4" />}
                    {idx === 1 && <Code2 className="w-4 h-4" />}
                    {idx === 2 && <Database className="w-4 h-4" />}
                    {idx === 3 && <Cpu className="w-4 h-4" />}
                  </div>
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
                    {t(cat.title)}
                  </h3>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-5 leading-relaxed">
                  {t(cat.description)}
                </p>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills
                    .filter(
                      (skill) =>
                        selectedProjectFilter === "all" ||
                        skill.projects.includes(selectedProjectFilter)
                    )
                    .map((skill, sIdx) => {
                      const isMatchedByFilter =
                        selectedProjectFilter !== "all" &&
                        skill.projects.includes(selectedProjectFilter);

                      return (
                        <div
                          key={sIdx}
                          className={`group flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs transition-all duration-200 hover:scale-[1.03] cursor-default ${
                            isMatchedByFilter
                              ? "bg-cyan-500/15 border-cyan-500 text-cyan-700 dark:text-cyan-300 ring-2 ring-cyan-500/20 shadow-sm"
                              : skill.highlight
                              ? "bg-white dark:bg-cyan-500/[0.05] border-cyan-500/30 text-zinc-900 dark:text-cyan-200 shadow-xs hover:border-cyan-500/60"
                              : "bg-zinc-50 dark:bg-white/[0.02] border-zinc-200/80 dark:border-white/[0.06] text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-white/20"
                          }`}
                        >
                          {isMatchedByFilter && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                          )}
                          <span className="font-medium font-mono">{skill.name}</span>
                          <div className="flex items-center gap-1">
                            {skill.projects.map((p, pIdx) => (
                              <span
                                key={pIdx}
                                className={`text-[9px] font-mono px-1 py-0.5 rounded transition-colors ${
                                  selectedProjectFilter === p
                                    ? "bg-cyan-500 text-zinc-950 font-bold"
                                    : "bg-zinc-200/80 dark:bg-white/10 text-zinc-600 dark:text-zinc-400"
                                }`}
                                title={`Implemented in ${p}`}
                              >
                                {p.slice(0, 3)}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
