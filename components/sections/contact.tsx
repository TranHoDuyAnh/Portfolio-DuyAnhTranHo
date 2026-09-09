"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n";
import {
  Mail,
  Phone,
  Github,
  Copy,
  Check,
  Send,
  MapPin,
  Terminal,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";

export function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || "Recruiter/Collaborator"}`);
    const body = encodeURIComponent(
      `Hello Duy Anh,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>{t({ en: "Direct Communication", vi: "Kết Nối Trực Tiếp" })}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
              {t({ en: "Let's Build Together", vi: "Sẵn Sàng Hợp Tác & Thảo Luận" })}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
              {t({
                en: "Whether you are looking for a Software Engineer to join your team, need an end-to-end technical architect, or want to discuss engineering trade-offs, my inbox is always open.",
                vi: "Nếu bạn đang tìm kiếm Kỹ sư Phần mềm cho đội ngũ, cần xây dựng kiến trúc hệ thống toàn diện, hoặc muốn trao đổi về các giải pháp kỹ thuật, tôi luôn sẵn sàng kết nối.",
              })}
            </p>

            <div className="space-y-4">
              {/* Direct email card with 1-click copy */}
              <div className="p-4 rounded-2xl glass-card border border-zinc-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">
                      {t({ en: "Direct Email", vi: "Email Trực Tiếp" })}
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white hover:text-cyan-500 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-zinc-500 hover:text-cyan-500 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-500 font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      <span>{t({ en: "Copied", vi: "Đã chép" })}</span>
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Direct phone card with 1-click copy & tel: */}
              <div className="p-4 rounded-2xl glass-card border border-zinc-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">
                      {t({ en: "Phone Number", vi: "Số Điện Thoại" })}
                    </div>
                    <a
                      href={`tel:${profile.phone}`}
                      className="font-mono text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white hover:text-cyan-500 transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg text-zinc-500 hover:text-cyan-500 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-500 font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      <span>{t({ en: "Copied", vi: "Đã chép" })}</span>
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub card */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl glass-card border border-zinc-200 dark:border-white/10 flex items-center justify-between hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase">
                      GitHub Profile
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      github.com/TranHoDuyAnh
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Location card */}
              <div className="p-4 rounded-2xl glass-card border border-zinc-200 dark:border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">
                    {t({ en: "Location", vi: "Địa Điểm" })}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                    {t(profile.location)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSendMessage}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-zinc-200 dark:border-white/10 shadow-lg space-y-4"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                <MessageSquare className="w-4 h-4 text-cyan-500" />
                <span>{t({ en: "Send Direct Message", vi: "Gửi Tin Nhắn Nhanh" })}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5 font-medium">
                    {t({ en: "Your Name", vi: "Tên của bạn" })} *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-mono placeholder:text-zinc-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5 font-medium">
                    {t({ en: "Your Email", vi: "Email của bạn" })} *
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-mono placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5 font-medium">
                  {t({ en: "Project or Opportunity Details", vi: "Nội dung trao đổi" })} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t({
                    en: "Tell me about your team, architecture needs, or project scope...",
                    vi: "Chia sẻ ngắn về dự án, yêu cầu kỹ thuật hoặc cơ hội hợp tác...",
                  })}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-mono placeholder:text-zinc-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-zinc-950 font-semibold text-sm transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 font-mono"
              >
                <Send className="w-4 h-4" />
                <span>
                  {t({
                    en: "Send Message via Email Client",
                    vi: "Gửi Tin Nhắn Qua Email Client",
                  })}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
