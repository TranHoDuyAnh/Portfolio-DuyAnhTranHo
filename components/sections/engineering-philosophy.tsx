"use client";

import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import {
  Layers,
  ShieldCheck,
  Zap,
  GitBranch,
  Terminal,
  Cpu,
  Boxes,
  Lock,
} from "lucide-react";

export function EngineeringPhilosophy() {
  const { t } = useI18n();

  const principles = [
    {
      icon: <Layers className="w-5 h-5 text-cyan-500" />,
      title: {
        en: "Clean Architecture & Vertical Slices",
        vi: "Clean Architecture & Lát Cắt Nghiệp Vụ (CQRS)",
      },
      description: {
        en: "Decoupling business logic from infrastructure details. Whether structuring .NET 9 with MediatR CQRS or NestJS modular layers, domain models stay clean and testable.",
        vi: "Tách biệt logic nghiệp vụ khỏi chi tiết hạ tầng. Từ .NET 9 với MediatR CQRS đến NestJS modular, tầng domain luôn tinh gọn và dễ viết test.",
      },
      codeSnippet: "Pulse.UseCases (CQRS) ➜ Pulse.Core (Domain) ➜ Pulse.Infrastructure",
    },
    {
      icon: <Lock className="w-5 h-5 text-emerald-500" />,
      title: {
        en: "Strict End-to-End Type Safety",
        vi: "Type-Safety Tuyệt Đối Đầu-Cuối",
      },
      description: {
        en: "Eliminating runtime regressions through strict TypeScript configs, C# record immutability, and database schema generators (Prisma ORM & EF Core 9).",
        vi: "Loại trừ lỗi runtime nhờ TypeScript strict mode, tính bất biến của C# record và công cụ sinh kiểu tự động từ Prisma và EF Core 9.",
      },
      codeSnippet: "Prisma Schema / EF Core ➜ Typed DTOs ➜ React Components",
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-500" />,
      title: {
        en: "Resilience Over Hype in AI Systems",
        vi: "Tính Bền Bỉ & Khả Năng Dự Phòng Trong AI",
      },
      description: {
        en: "Integrating Google Gemini 1.5 Flash and OpenAI GPT-4o with strict schema formatting and offline heuristic engines to ensure system availability if third-party APIs fail.",
        vi: "Tích hợp Gemini 1.5 Flash và GPT-4o với schema chuẩn xác, luôn trang bị engine heuristic dự phòng để hệ thống không bao giờ bị tê liệt.",
      },
      codeSnippet: "AIService.analyzeHook() ➜ HeuristicFallbackEngine.compute()",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: {
        en: "Zero-Mock Data & Real Database Aggregations",
        vi: "Dữ Liệu Thật & Phép Tính CSDL Tối Ưu",
      },
      description: {
        en: "Computing velocity, retention ratios, and time-series metrics natively using PostgreSQL date intervals and indexes instead of pulling raw blobs to client memory.",
        vi: "Thực hiện phép tính tốc độ tăng trưởng và chuỗi thời gian trực tiếp bằng PostgreSQL GROUP BY và date intervals thay vì kéo dữ liệu thô về client.",
      },
      codeSnippet: "SELECT date_trunc('day', created_at), COUNT(*) FROM ...",
    },
  ];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>{t({ en: "Engineering Philosophy", vi: "Triết Lý Kỹ Thuật Phần Mềm" })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {t({
              en: "How I Architect & Build Software",
              vi: "Nguyên Tắc Thiết Kế & Xây Dựng Hệ Thống",
            })}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            {t({
              en: "Principles distilled from designing and shipping production web platforms, SaaS ecosystems, and distributed services.",
              vi: "Các nguyên tắc cốt lõi đúc rút từ quá trình thiết kế và triển khai nền tảng web, SaaS và hệ thống phân tán thực tế.",
            })}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-7 rounded-2xl glass-card card-hover-glow border border-zinc-200 dark:border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">
                  {t(item.title)}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  {t(item.description)}
                </p>
              </div>

              {/* Monospace Code Snippet */}
              <div className="px-3.5 py-2 rounded-lg bg-zinc-100 dark:bg-black/40 border border-zinc-200/80 dark:border-white/5 font-mono text-[11px] text-zinc-700 dark:text-cyan-300/90 overflow-x-auto">
                <code>{item.codeSnippet}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
