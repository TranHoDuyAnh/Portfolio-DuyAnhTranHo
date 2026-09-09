"use client";

import React from "react";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building,
  CheckCircle2,
  Languages,
  BookOpen,
  Award,
  Terminal,
} from "lucide-react";

export function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t({ en: "Career & Education Track", vi: "Kinh Nghiệm & Học Vấn" })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {t({ en: "Professional Experience & Background", vi: "Kinh Nghiệm Làm Việc & Quá Trình Học Tập" })}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
            {t({
              en: "Hands-on engineering roles across software outsourcing, business systems automation, and commercial digital operations.",
              vi: "Quá trình công tác thực tế trong phát triển phần mềm, tự động hóa hệ thống doanh nghiệp và vận hành số thương mại.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 7 cols: Work Experience Timeline */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-bold flex items-center gap-2">
              <Building className="w-4 h-4 text-cyan-500" />
              <span>{t({ en: "Work History", vi: "Lịch Sử Công Tác" })}</span>
            </h3>

            <div className="relative border-l-2 border-zinc-200 dark:border-white/10 pl-6 sm:pl-8 space-y-12">
              {profile.experience.map((job, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-cyan-500 bg-white dark:bg-zinc-950 group-hover:scale-125 group-hover:bg-cyan-500 transition-all shadow-xs" />

                  <div className="p-6 rounded-2xl glass-card border border-zinc-200 dark:border-white/[0.08] group-hover:border-cyan-500/40 transition-all">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {t(job.role)}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 w-fit">
                        {job.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 mb-4">
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                        {job.company}
                      </span>
                      <span>•</span>
                      <span className="text-cyan-600 dark:text-cyan-400">
                        {t(job.type)}
                      </span>
                    </div>

                    {/* Responsibilities list */}
                    <ul className="space-y-2 mb-5">
                      {job.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-1" />
                          <span>{t(resp)}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack tags */}
                    {job.techStack && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/80 dark:border-white/5">
                        {job.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-white/[0.05] text-zinc-600 dark:text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 4 cols: Education & Certifications */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-500" />
              <span>{t({ en: "Education & Qualifications", vi: "Học Vấn & Bằng Cấp" })}</span>
            </h3>

            {/* University Card */}
            <div className="p-6 rounded-2xl glass-card border border-zinc-200 dark:border-white/[0.08]">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>

              <h4 className="font-bold text-base text-zinc-900 dark:text-white mb-1">
                {profile.education.institution}
              </h4>
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
                {t(profile.education.major)}
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4 pb-3 border-b border-zinc-200/80 dark:border-white/5">
                <span>{profile.education.period}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                  {t(profile.education.grade)}
                </span>
              </div>

              {/* Coursework */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 uppercase">
                  {t({ en: "Key Coursework:", vi: "Môn học trọng tâm:" })}
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                  {profile.education.coursework.map((course, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Languages Card */}
            <div className="p-6 rounded-2xl glass-card border border-zinc-200 dark:border-white/[0.08]">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <Languages className="w-5 h-5" />
              </div>

              <h4 className="font-bold text-base text-zinc-900 dark:text-white mb-3">
                {t({ en: "Language Competencies", vi: "Trình Độ Ngoại Ngữ" })}
              </h4>

              <div className="space-y-3">
                {profile.spokenLanguages.map((langItem, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/5 flex items-center justify-between text-xs font-mono"
                  >
                    <span className="font-bold text-zinc-800 dark:text-zinc-200">
                      {t(langItem.language)}
                    </span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                      {t(langItem.level)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
