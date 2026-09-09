"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n";
import {
  ArrowDown,
  Github,
  Mail,
  Terminal,
  MapPin,
  Calendar,
  GraduationCap,
  Languages,
  Phone,
  Check,
  Copy,
  Briefcase,
  Sparkles,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
} from "lucide-react";

export function Hero() {
  const { t } = useI18n();
  const [copiedCmd, setCopiedCmd] = useState(false);

  const commandText = "git clone https://github.com/TranHoDuyAnh/CreatorOS.git";

  const handleCopy = () => {
    navigator.clipboard.writeText(commandText);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Developer Grid & Ambient Glowing Backdrops */}
      <div className="absolute inset-0 bg-grid-pattern mask-radial pointer-events-none opacity-60 dark:opacity-40 -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-teal-500/10 to-transparent blur-3xl -z-10 pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/10 blur-3xl -z-10 pointer-events-none rounded-full animate-blob" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Personal Bio, Metadata & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1"
          >
            {/* Availability & Senior Status */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-mono backdrop-blur-sm shadow-xs hover:border-emerald-500/50 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t(profile.availability)}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-700 dark:text-cyan-300 text-xs font-mono backdrop-blur-sm">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{t({ en: "FPT University · Graduated", vi: "Đại học FPT · Đã tốt nghiệp" })}</span>
              </div>
            </motion.div>

            {/* Name and Title tag */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-zinc-500 dark:text-zinc-400 font-mono text-xs tracking-wider uppercase mb-3">
              <span className="font-semibold text-zinc-900 dark:text-white text-sm tracking-normal">
                {profile.nativeName}
              </span>
              <span>•</span>
              <span>(Duy Anh Tran Ho)</span>
              <span>•</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                {t({ en: "Software Engineer · FPT Graduate", vi: "Kỹ sư Phần mềm · Đã tốt nghiệp FPT" })}
              </span>
            </motion.div>

            {/* Headline with gradient highlight */}
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15] mb-5">
              {t({
                en: "Front-End & Mobile Specialist building high-quality, pixel-perfect software.",
                vi: "Kỹ sư Front-End & Mobile tâm huyết, xây dựng ứng dụng chuẩn mực từng pixel.",
              })}
            </motion.h1>

            {/* User's Exact Detailed Bio */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
              {t(profile.detailedBio)}
            </motion.p>

            {/* Personal Key Details Pills */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8 font-mono text-xs">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] hover:border-cyan-500/40 transition-colors">
                <Calendar className="w-4 h-4 text-cyan-500 shrink-0" />
                <span className="text-zinc-500">{t({ en: "DOB:", vi: "Ngày sinh:" })}</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{profile.dob}</span>
              </div>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group/phone"
              >
                <Phone className="w-4 h-4 text-cyan-500 shrink-0 group-hover/phone:animate-bounce" />
                <span className="text-zinc-500">{t({ en: "Phone:", vi: "SĐT:" })}</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 group-hover/phone:text-cyan-600 dark:group-hover/phone:text-cyan-400">
                  {profile.phone}
                </span>
              </a>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] hover:border-emerald-500/40 transition-colors">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-zinc-500">{t({ en: "Location:", vi: "Địa chỉ:" })}</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate">{t(profile.location)}</span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] hover:border-purple-500/40 transition-colors">
                <GraduationCap className="w-4 h-4 text-purple-500 shrink-0" />
                <span className="text-zinc-500">{t({ en: "Education:", vi: "Học vấn:" })}</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                  {t({ en: "FPT University (Graduated)", vi: "Đại học FPT (Đã tốt nghiệp)" })}
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] hover:border-amber-500/40 transition-colors">
                <Languages className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-zinc-500">{t({ en: "Languages:", vi: "Ngoại ngữ:" })}</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">IELTS 5.0 · Vietnamese</span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] hover:border-emerald-500/40 transition-colors">
                <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-zinc-500">{t({ en: "Status:", vi: "Trạng thái:" })}</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {t({ en: "Open for roles", vi: "Sẵn sàng nhận việc" })}
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 mb-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-zinc-950 font-semibold text-sm transition-all shadow-md hover:shadow-cyan-500/25 active:scale-95 cursor-pointer hover:-translate-y-0.5"
              >
                <span>{t({ en: "Explore Featured Projects", vi: "Xem Các Dự Án Nổi Bật" })}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-zinc-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.04] text-zinc-800 dark:text-zinc-200 hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-400 font-mono text-sm transition-all shadow-xs cursor-pointer hover:-translate-y-0.5"
              >
                <Briefcase className="w-4 h-4 text-cyan-500" />
                <span>{t({ en: "Work Experience", vi: "Kinh Nghiệm Làm Việc" })}</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-zinc-200 dark:border-white/10 bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-mono text-sm transition-all cursor-pointer hover:border-zinc-400 dark:hover:border-white/20"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (TranHoDuyAnh)</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: High-Impact Avatar Card with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full flex flex-col items-center order-1 lg:order-2 relative"
          >
            {/* Floating Tech Pill 1: Top-Left */}
            <div className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 shadow-lg backdrop-blur-md animate-float text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              <span>React 19 · Next.js 16</span>
            </div>

            {/* Floating Tech Pill 2: Bottom-Right */}
            <div className="hidden sm:flex absolute top-1/2 -right-6 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 shadow-lg backdrop-blur-md animate-float-delayed text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>.NET 9 & Flutter</span>
            </div>

            <div className="relative w-full max-w-sm rounded-3xl p-3 border border-zinc-200 dark:border-white/10 bg-gradient-to-b from-white/90 to-zinc-50 dark:from-zinc-900/90 dark:to-zinc-950/90 shadow-2xl backdrop-blur-xl group hover:border-cyan-500/50 transition-all duration-500">
              {/* Outer decorative ring */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200/80 dark:border-white/10 shadow-inner">
                <Image
                  src={profile.avatar}
                  alt={profile.nativeName}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 384px"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

                {/* Bottom badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between shadow-lg">
                  <div>
                    <div className="text-xs font-mono font-bold text-cyan-300">
                      {profile.nativeName}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400">
                      React.js · Next.js · Flutter · .NET
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold">Active</span>
                  </div>
                </div>
              </div>

              {/* Mini Terminal Snippet below photo */}
              <div className="mt-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300 flex items-center justify-between shadow-inner">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-zinc-400">duyanh@fpt:</span>
                  <span className="text-cyan-400">~/software-engineer</span>
                  <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-cursor ml-0.5" />
                </div>
                <button
                  onClick={handleCopy}
                  className="text-zinc-400 hover:text-cyan-400 transition-colors p-1 rounded hover:bg-zinc-800/80"
                  title="Copy GitHub clone command"
                >
                  {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlighted Stats Grid with hover motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-card card-hover-glow relative overflow-hidden group border border-zinc-200/80 dark:border-white/10"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="font-mono text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="font-semibold text-xs text-zinc-800 dark:text-zinc-200 mb-0.5">
                {t(stat.label)}
              </div>
              <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                {t(stat.sublabel)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
