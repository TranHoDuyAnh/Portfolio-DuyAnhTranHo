"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects, ProjectData } from "@/data/projects";
import { useI18n } from "@/lib/i18n";
import { CaseStudyModal } from "./case-study-modal";
import {
  Github,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Maximize2,
  Monitor,
  Users,
  Building2,
  Shield,
} from "lucide-react";

export function FeaturedProjects() {
  const { t } = useI18n();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [pulseRole, setPulseRole] = useState<"admin" | "staff" | "resident">("admin");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "saas") return p.id === "creatoros" || p.id === "adaptivelms";
    if (filter === "systems") return p.id === "pulse" || p.id === "ev-battery-swap";
    if (filter === "commerce") return p.id === "tiemnguoiquang" || p.id === "shi-perfume";
    return true;
  });

  const getPulseImage = () => {
    if (pulseRole === "staff") return "/projects/Staff.png";
    if (pulseRole === "resident") return "/projects/Resident.png";
    return "/projects/Admin.png";
  };

  const getPulseRoleLabel = (role: "admin" | "staff" | "resident") => {
    if (role === "admin") return { en: "Admin Dashboard", vi: "Admin Quản Trị" };
    if (role === "staff") return { en: "Staff Operations", vi: "Nhân Viên Vận Hành" };
    return { en: "Resident Portal", vi: "Cổng Cư Dân" };
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      {/* Background glow accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/5 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>{t({ en: "Core Engineering Showcase", vi: "Sản Phẩm & Kiến Trúc Trọng Tâm" })}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              {t({ en: "Featured Production Projects", vi: "Các Dự Án Thực Tế Nổi Bật" })}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              {t({
                en: "Audited repositories demonstrating full-stack engineering, clean architectural patterns, and production-grade delivery.",
                vi: "Các codebase thực tế thể hiện năng lực full-stack, áp dụng kiến trúc chuẩn mực và tư duy kỹ thuật chuyên sâu.",
              })}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 self-start md:self-auto font-mono text-xs">
            {[
              { id: "all", label: { en: "All (6)", vi: "Tất cả (6)" } },
              { id: "saas", label: { en: "SaaS & AI", vi: "SaaS & AI" } },
              { id: "systems", label: { en: "Systems & IoT", vi: "Hệ Thống & IoT" } },
              { id: "commerce", label: { en: "E-Commerce & BaaS", vi: "Thương Mại & BaaS" } },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filter === tab.id
                    ? "bg-white dark:bg-white/10 text-zinc-900 dark:text-white font-semibold shadow-xs"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {t(tab.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl glass-card overflow-hidden border p-6 sm:p-8 transition-all ${
                project.featuredRank <= 2
                  ? "border-zinc-300 dark:border-white/[0.15] bg-gradient-to-b from-white/95 to-white/70 dark:from-zinc-900/90 dark:to-zinc-950/90 shadow-md"
                  : "border-zinc-200 dark:border-white/[0.08]"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left info column */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Badge & Category */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                        {t(project.badge)}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        {t(project.category)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
                      {project.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                      {t(project.shortDescription)}
                    </p>

                    {/* Key Technical Highlights (3 items) */}
                    <div className="space-y-2 mb-6">
                      {project.technicalHighlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{t(item)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.techStack.flatMap((c) => c.items).slice(0, 8).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-white/[0.05] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200/80 dark:border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
                    >
                      <span>{t({ en: "View Case Study & Architecture", vi: "Xem Case Study & Kiến Trúc" })}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 font-mono text-xs transition-all shadow-xs"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>

                    {project.links.extraLinks && project.links.extraLinks.length > 0 && (
                      <div className="flex items-center gap-2">
                        {project.links.extraLinks.map((extra, eIdx) => (
                          <a
                            key={eIdx}
                            href={extra.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1 px-3 py-2.5 rounded-xl border border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-mono text-xs transition-colors"
                          >
                            <span>{extra.label}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Visual / Real Screenshot Showcase */}
                <div className="lg:col-span-6 w-full">
                  <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-950 shadow-2xl overflow-hidden group">
                    {/* Browser Shell Top Bar */}
                    <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-zinc-400 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        <span className="ml-2 text-[11px] text-zinc-400 font-medium">
                          {project.id === "pulse" ? `pulse.${pulseRole}.app` : `${project.slug}.production.app`}
                        </span>
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-cyan-400 transition-colors"
                        title="Expand case study"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">{t({ en: "Inspect", vi: "Xem chi tiết" })}</span>
                      </button>
                    </div>

                    {/* Role Switcher for Pulse (Admin / Staff / Resident) */}
                    {project.id === "pulse" && (
                      <div className="px-3 py-2 bg-zinc-900/90 border-b border-zinc-800 flex items-center gap-1.5 font-mono text-[11px]">
                        <span className="text-zinc-500 px-1 hidden sm:inline">Role View:</span>
                        {(["admin", "staff", "resident"] as const).map((role) => (
                          <button
                            key={role}
                            onClick={() => setPulseRole(role)}
                            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                              pulseRole === role
                                ? "bg-cyan-500 text-zinc-950 font-bold shadow-xs"
                                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                            }`}
                          >
                            {role === "admin" && <Shield className="w-3 h-3" />}
                            {role === "staff" && <Building2 className="w-3 h-3" />}
                            {role === "resident" && <Users className="w-3 h-3" />}
                            <span>{t(getPulseRoleLabel(role))}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Image Display */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative aspect-video w-full cursor-pointer overflow-hidden bg-zinc-900 group/img"
                    >
                      <Image
                        src={project.id === "pulse" ? getPulseImage() : project.image}
                        alt={project.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={project.featuredRank <= 2}
                      />

                      {/* Subtle hover overlay hint */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>{t({ en: "Click to open full Case Study", vi: "Click để mở Case Study & Kiến trúc" })}</span>
                        </div>
                      </div>
                    </div>

                    {/* Screenshot caption footer */}
                    <div className="px-4 py-2.5 bg-zinc-900/90 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="truncate max-w-[85%]">
                        {project.id === "pulse"
                          ? t(getPulseRoleLabel(pulseRole))
                          : t({ en: `${project.name} Production Interface`, vi: `Giao diện thực tế ${project.name}` })}
                      </span>
                      <span className="text-emerald-400 shrink-0 font-bold">100% REAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
