"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { projects, ProjectData } from "@/data/projects";
import { useI18n } from "@/lib/i18n";
import { CaseStudyModal } from "@/components/sections/case-study-modal";
import {
  ArrowLeft,
  Github,
  ArrowUpRight,
  ChevronRight,
  Terminal,
  Search,
  CheckCircle2,
  ExternalLink,
  Maximize2,
} from "lucide-react";

export default function ProjectsPage() {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filtered = projects.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      t(p.shortDescription).toLowerCase().includes(q) ||
      t(p.category).toLowerCase().includes(q) ||
      p.techStack.some((c) =>
        c.items.some((item) => item.toLowerCase().includes(q))
      )
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-cyan-500 transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t({ en: "Back to Home", vi: "Quay lại trang chủ" })}</span>
          </Link>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>{t({ en: "Complete Engineering Catalog", vi: "Toàn Bộ Danh Mục Dự Án" })}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                {t({ en: "All Projects & Codebases", vi: "Tất Cả Dự Án & Mã Nguồn" })}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 max-w-xl">
                {t({
                  en: "Explore all 6 audited production codebases across distributed backends, SaaS platforms, green mobility, AI services, and modern frontend architectures.",
                  vi: "Khám phá toàn bộ 6 hệ sinh thái phần mềm thực tế thuộc các lĩnh vực: backend phân tán, SaaS, giao thông xanh, dịch vụ AI và kiến trúc frontend hiện đại.",
                })}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t({
                  en: "Search projects or tech...",
                  vi: "Tìm dự án hoặc công nghệ...",
                })}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-xs font-mono text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
            </div>
          </div>

          {/* Projects Table / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl glass-card border border-zinc-200 dark:border-white/[0.08] overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-lg transition-all"
              >
                {/* Screenshot thumbnail */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-video w-full bg-zinc-900 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{t({ en: "View Case Study", vi: "Xem Case Study" })}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                        {t(project.badge)}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        {t(project.category)}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
                      {project.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                      {t(project.shortDescription)}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-5">
                      {project.technicalHighlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{t(item)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.techStack.flatMap((c) => c.items).slice(0, 6).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-white/[0.05] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-200/80 dark:border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                    >
                      <span>{t({ en: "Case Study & Specs", vi: "Case Study & Kiến Trúc" })}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.04] text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-cyan-500/50"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
