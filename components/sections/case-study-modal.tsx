"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ProjectData } from "@/data/projects";
import { useI18n } from "@/lib/i18n";
import {
  X,
  Github,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Layers,
  Cpu,
  Database,
  Code2,
  BookOpen,
  Sparkles,
  ExternalLink,
  Monitor,
  Shield,
  Building2,
  Users,
} from "lucide-react";

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

type TabType = "overview" | "screens" | "architecture" | "features" | "challenges" | "stack";

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [selectedScreenIdx, setSelectedScreenIdx] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setActiveTab("overview");
      setSelectedScreenIdx(0);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const tabs: { id: TabType; label: { en: string; vi: string } }[] = [
    { id: "overview", label: { en: "Problem & Solution", vi: "Vấn Đề & Giải Pháp" } },
    { id: "screens", label: { en: "Interface & Dashboards", vi: "Giao Diện & Dashboard" } },
    { id: "architecture", label: { en: "Architecture & Dataflow", vi: "Kiến Trúc & Luồng Dữ Liệu" } },
    { id: "features", label: { en: "Key Features", vi: "Chức Năng Chính" } },
    { id: "challenges", label: { en: "Challenges & Trade-offs", vi: "Thách Thức & Đánh Đổi" } },
    { id: "stack", label: { en: "Tech Stack & Role", vi: "Công Nghệ & Vai Trò" } },
  ];

  const currentScreenshots = project.screenshots && project.screenshots.length > 0
    ? project.screenshots
    : [{ url: project.image, title: { en: project.name, vi: project.name }, description: project.shortDescription }];

  const activeScreen = currentScreenshots[selectedScreenIdx] || currentScreenshots[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl my-auto max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-zinc-200 dark:border-white/10 flex items-start justify-between bg-zinc-50/70 dark:bg-white/[0.02]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                {t(project.badge)}
              </span>
              <span className="text-xs font-mono text-zinc-500">
                {t(project.category)}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {project.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-zinc-200 dark:border-white/10 flex items-center gap-1 overflow-x-auto bg-zinc-100/40 dark:bg-black/20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold"
                  : "border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              {t(tab.label)}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {/* TAB 1: OVERVIEW & PROBLEM */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-fade-in">
              {/* Top Hero Preview Image */}
              <div className="rounded-2xl border border-zinc-200 dark:border-white/10 overflow-hidden bg-zinc-950 shadow-lg">
                <div className="relative aspect-video w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
                <div className="px-4 py-2 bg-zinc-900 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                  <span>{project.slug} - Production Interface Snapshot</span>
                  <button
                    onClick={() => setActiveTab("screens")}
                    className="text-cyan-400 hover:underline"
                  >
                    {t({ en: "View All Dashboards →", vi: "Xem Toàn Bộ Dashboard →" })}
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 font-semibold">
                  {t({ en: "Project Overview", vi: "Tổng quan dự án" })}
                </h3>
                <p className="text-base text-zinc-800 dark:text-zinc-200 font-medium">
                  {t(project.overview)}
                </p>
              </div>

              <div className="p-5 rounded-xl border border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/[0.04]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{t({ en: "The Problem", vi: "Vấn đề kỹ thuật & nghiệp vụ" })}</span>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  {t(project.problem)}
                </p>
              </div>

              <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/[0.04]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t({ en: "The Solution", vi: "Giải pháp kiến trúc & triển khai" })}</span>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  {t(project.solution)}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: SCREENSHOTS & DASHBOARDS */}
          {activeTab === "screens" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                    {t({ en: "Real Production Screenshots", vi: "Hình Ảnh Dashboard Thực Tế" })}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    {t({
                      en: "100% genuine screenshots captured from the working system.",
                      vi: "Hình ảnh chụp trực tiếp từ hệ thống đang vận hành thực tế.",
                    })}
                  </p>
                </div>

                {/* Sub-selector for multi-screenshot projects like Pulse */}
                {currentScreenshots.length > 1 && (
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 font-mono text-xs">
                    {currentScreenshots.map((screen, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedScreenIdx(idx)}
                        className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                          selectedScreenIdx === idx
                            ? "bg-cyan-500 text-zinc-950 font-bold shadow-xs"
                            : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                        }`}
                      >
                        {screen.role === "admin" && <Shield className="w-3.5 h-3.5" />}
                        {screen.role === "staff" && <Building2 className="w-3.5 h-3.5" />}
                        {screen.role === "resident" && <Users className="w-3.5 h-3.5" />}
                        <span>{t(screen.title).split(" ")[0]}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Main Active Screenshot Viewer */}
              <div className="rounded-2xl border border-zinc-200 dark:border-white/10 overflow-hidden bg-zinc-950 shadow-2xl">
                {/* Browser bar */}
                <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-zinc-400 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-zinc-300 font-semibold">{t(activeScreen.title)}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">{activeScreen.url}</span>
                </div>

                {/* Screenshot Image */}
                <div className="relative aspect-video w-full bg-zinc-900">
                  <Image
                    src={activeScreen.url}
                    alt={t(activeScreen.title)}
                    fill
                    className="object-contain bg-zinc-950"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>

                {/* Caption description */}
                <div className="p-4 bg-zinc-900/95 border-t border-zinc-800">
                  <div className="font-semibold text-xs text-cyan-400 font-mono mb-1">
                    {t(activeScreen.title)}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {t(activeScreen.description)}
                  </p>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {currentScreenshots.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {currentScreenshots.map((screen, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedScreenIdx(idx)}
                      className={`rounded-xl border overflow-hidden cursor-pointer transition-all ${
                        selectedScreenIdx === idx
                          ? "border-cyan-500 ring-2 ring-cyan-500/30 shadow-md"
                          : "border-zinc-200 dark:border-white/10 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <div className="relative aspect-video w-full">
                        <Image
                          src={screen.url}
                          alt={t(screen.title)}
                          fill
                          className="object-cover"
                          sizes="200px"
                        />
                      </div>
                      <div className="p-2 bg-zinc-100 dark:bg-zinc-900 text-[10px] font-mono truncate text-zinc-700 dark:text-zinc-300 text-center font-medium">
                        {t(screen.title)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ARCHITECTURE */}
          {activeTab === "architecture" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 font-semibold">
                  {t({ en: "Architecture Summary", vi: "Khái quát kiến trúc" })}
                </h3>
                <p className="text-zinc-800 dark:text-zinc-200">
                  {t(project.architecture.overview)}
                </p>
              </div>

              {/* Architecture Diagram Box */}
              <div className="rounded-xl border border-zinc-300 dark:border-white/10 bg-zinc-950 text-cyan-300 p-4 sm:p-5 font-mono text-xs overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-zinc-400 text-[11px]">
                  <span>ARCHITECTURE DATAFLOW DIAGRAM</span>
                  <span>RAW SPEC</span>
                </div>
                <pre className="leading-relaxed font-mono whitespace-pre text-[11.5px]">
                  {project.architecture.diagram}
                </pre>
              </div>

              {/* Architectural Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  {t({ en: "Architectural Principles", vi: "Nguyên tắc thiết kế hệ thống" })}
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.architecture.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.02]"
                    >
                      <Cpu className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        {t(item)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: KEY FEATURES */}
          {activeTab === "features" && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-3">
                {t({ en: "Core Implemented Features", vi: "Các tính năng nổi bật đã hoàn thiện" })}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50/80 dark:bg-white/[0.02] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-white text-sm mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        <span>{t(feat.title)}</span>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {t(feat.description)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CHALLENGES */}
          {activeTab === "challenges" && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                {t({
                  en: "Real Engineering Challenges & Technical Resolutions",
                  vi: "Thách Thức Kỹ Thuật & Phương Pháp Giải Quyết",
                })}
              </h3>
              <div className="space-y-4">
                {project.challenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-200 dark:border-white/10 overflow-hidden bg-white dark:bg-white/[0.02]"
                  >
                    <div className="p-4 bg-zinc-100/70 dark:bg-white/[0.04] border-b border-zinc-200 dark:border-white/10">
                      <div className="font-mono text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wide mb-1">
                        {t({ en: "Challenge", vi: "Vấn đề kỹ thuật" })} #{idx + 1}
                      </div>
                      <p className="text-zinc-800 dark:text-zinc-200 font-medium text-xs sm:text-sm">
                        {t(item.challenge)}
                      </p>
                    </div>
                    <div className="p-4">
                      <div className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1">
                        {t({ en: "Engineering Resolution", vi: "Giải pháp thực hiện" })}
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                        {t(item.resolution)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What I Learned */}
              <div className="pt-4 border-t border-zinc-200 dark:border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-3">
                  {t({ en: "Key Takeaways & Mastery", vi: "Kinh nghiệm thực tiễn đúc kết" })}
                </h4>
                <ul className="space-y-2">
                  {project.learnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{t(learning)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 6: TECH STACK & ROLE */}
          {activeTab === "stack" && (
            <div className="space-y-6 animate-fade-in">
              {/* My Role */}
              <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                <div className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
                  {t({ en: "My Engineering Role", vi: "Trách nhiệm & Vai trò của tôi" })}
                </div>
                <p className="text-zinc-800 dark:text-zinc-200 font-medium text-sm">
                  {t(project.myRole)}
                </p>
              </div>

              {/* Categorized Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-4">
                  {t({ en: "Actual Technologies Used in this Project", vi: "Các công nghệ thực tế sử dụng trong dự án" })}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.techStack.map((category, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.02]"
                    >
                      <div className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 uppercase mb-3">
                        {t(category.category)}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {category.items.map((item, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-1 rounded-md text-[11px] font-mono bg-white dark:bg-white/10 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/5"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Links */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-white/10 bg-zinc-50/70 dark:bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white/[0.1] dark:hover:bg-white/[0.18] font-mono text-xs font-medium transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>Primary Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            {project.links.extraLinks?.map((extra, idx) => (
              <a
                key={idx}
                href={extra.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-500 font-mono text-xs transition-all"
              >
                <span>{extra.label}</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {t({ en: "Close Case Study", vi: "Đóng cửa sổ" })}
          </button>
        </div>
      </div>
    </div>
  );
}
