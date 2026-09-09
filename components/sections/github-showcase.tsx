"use client";

import React from "react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { useI18n } from "@/lib/i18n";
import {
  Github,
  GitBranch,
  ArrowUpRight,
  Terminal,
  Code2,
  FolderGit2,
  CheckCircle2,
} from "lucide-react";

export function GithubShowcase() {
  const { t } = useI18n();

  const repos = [
    {
      name: "CreatorOS",
      url: "https://github.com/TranHoDuyAnh/CreatorOS",
      description: {
        en: "Multi-tenant social media management & analytics SaaS platform built with Next.js 15, Neon Postgres, Better Auth & Stripe.",
        vi: "Nền tảng SaaS quản lý nội dung đa kênh và phân tích hiệu suất với Next.js 15, Neon Postgres, Better Auth và Stripe.",
      },
      language: "TypeScript",
      langColor: "bg-blue-500",
      branch: "main",
    },
    {
      name: "Pulse-dotnetBE",
      url: "https://github.com/Pulse-The-AI-Powered-Living-Ecosystem/Pulse-dotnetBE",
      description: {
        en: "Clean Architecture .NET 9 backend with CQRS (MediatR), PostgreSQL, SignalR real-time hubs, and VNPay/MoMo gateways.",
        vi: "Backend .NET 9 chuẩn Clean Architecture theo mô hình CQRS (MediatR), PostgreSQL, SignalR và cổng thanh toán VNPay/MoMo.",
      },
      language: "C# (.NET 9)",
      langColor: "bg-purple-500",
      branch: "testflow / ShiBe",
    },
    {
      name: "AdaptiveLMS",
      url: "https://github.com/TranHoDuyAnh/AdaptiveLMS",
      description: {
        en: "AI-powered personalized LMS monorepo featuring Google Gemini 1.5 Flash, NestJS modular API gateway, and Next.js 15 frontend.",
        vi: "Hệ thống cá nhân hóa học tập tích hợp Google Gemini 1.5 Flash, NestJS modular API gateway và Next.js 15 frontend.",
      },
      language: "TypeScript / NestJS",
      langColor: "bg-red-500",
      branch: "main",
    },
    {
      name: "Tiemnguoiquang",
      url: "https://github.com/TranHoDuyAnh/Tiemnguoiquang",
      description: {
        en: "Production-ready F&B platform with Next.js 14 React Server Components, Server Actions, Supabase RLS, and admin CMS.",
        vi: "Website ẩm thực thương mại hoàn chỉnh với Next.js 14 React Server Components, Server Actions và Supabase RLS.",
      },
      language: "TypeScript / Supabase",
      langColor: "bg-emerald-500",
      branch: "main",
    },
    {
      name: "Shi-Perfume",
      url: "https://github.com/TranHoDuyAnh/Shi-Perfume",
      description: {
        en: "Boutique luxury fragrance catalog with Next.js 16 App Router, PostgreSQL GIN full-text search, and Supabase Server Actions.",
        vi: "Catalog nước hoa cao cấp với Next.js 16 App Router, PostgreSQL GIN full-text search và Supabase Server Actions.",
      },
      language: "TypeScript / Next.js 16",
      langColor: "bg-amber-500",
      branch: "main",
    },
    {
      name: "EvBatterySwapStationManagementSystem",
      url: "https://github.com/TranHoDuyAnh/EvBatterySwapStationManagementSystem",
      description: {
        en: "Multi-role EV battery swap platform with .NET 8 Web API, React 19 + MUI, Leaflet GPS maps, and VNPay billing.",
        vi: "Hệ thống quản lý trạm đổi pin xe điện với .NET 8 Web API, React 19 + MUI, bản đồ số Leaflet và thanh toán VNPay.",
      },
      language: "C# (.NET 8) / React 19",
      langColor: "bg-teal-500",
      branch: "main",
    },
  ];

  return (
    <section id="github" className="py-24 px-4 sm:px-6 bg-zinc-100/50 dark:bg-[#080d19]/40 border-y border-zinc-200/80 dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{t({ en: "Open Source & Codebases", vi: "Mã Nguồn Mở & Repository" })}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              {t({ en: "GitHub Repositories", vi: "Kho Mã Nguồn GitHub" })}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              {t({
                en: "Direct access to full source code, commit logs, database migrations, and unit tests.",
                vi: "Truy cập trực tiếp mã nguồn đầy đủ, lịch sử commit, migration cơ sở dữ liệu và bộ unit tests.",
              })}
            </p>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white/[0.08] hover:bg-zinc-800 dark:hover:bg-white/[0.14] font-mono text-xs font-semibold transition-all border border-transparent dark:border-white/10 self-start md:self-auto shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>github.com/TranHoDuyAnh</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl glass-card border border-zinc-200 dark:border-white/[0.08] hover:border-cyan-500/50 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-start justify-between mb-3 gap-3">
                  <div className="flex items-start gap-2 font-mono font-bold text-sm sm:text-base text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors min-w-0 flex-1">
                    <Github className="w-4 h-4 text-zinc-400 group-hover:text-cyan-500 shrink-0 mt-1" />
                    <span className="break-all tracking-tight leading-snug">{repo.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1" />
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {t(repo.description)}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-200/80 dark:border-white/5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                  <GitBranch className="w-3 h-3" />
                  <span>{repo.branch}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
