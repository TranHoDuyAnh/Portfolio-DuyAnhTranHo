import { BilingualText } from "@/lib/i18n";

export interface SkillCategory {
  title: BilingualText;
  description: BilingualText;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    highlight?: boolean;
    projects: string[];
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: {
      en: "Frontend & Mobile Engineering",
      vi: "Kỹ Thuật Frontend & Mobile",
    },
    description: {
      en: "Server-side rendering, component architectures, cross-platform mobile apps, and fluid interactions.",
      vi: "Server-side rendering, kiến trúc component, ứng dụng di động đa nền tảng và tối ưu trải nghiệm.",
    },
    skills: [
      { name: "React.js / Next.js (App Router 15/16)", level: "Advanced", highlight: true, projects: ["CreatorOS", "AdaptiveLMS", "Tiệm Người Quảng", "Shi-Perfume"] },
      { name: "React 19 & Material-UI (MUI v7)", level: "Advanced", highlight: true, projects: ["EV Battery Swap"] },
      { name: "Redux Toolkit & Leaflet GIS Maps", level: "Advanced", highlight: true, projects: ["EV Battery Swap"] },
      { name: "Flutter (Dart)", level: "Advanced", highlight: true, projects: ["Pulse"] },
      { name: "TypeScript (Strict) & JavaScript (ES6+)", level: "Advanced", highlight: true, projects: ["CreatorOS", "Pulse", "AdaptiveLMS", "Tiệm Người Quảng", "Shi-Perfume", "EV Battery Swap"] },
      { name: "HTML5 / CSS3 / Tailwind CSS v4", level: "Advanced", highlight: true, projects: ["CreatorOS", "AdaptiveLMS", "Tiệm Người Quảng", "Pulse", "Shi-Perfume"] },
      { name: "Vue.js & Angular", level: "Proficient", projects: ["FPT Software"] },
      { name: "React Native (Foundation)", level: "Proficient", projects: ["Pulse"] },
      { name: "Mobile-First & UI/UX Optimization", level: "Advanced", highlight: true, projects: ["CreatorOS", "Pulse", "Tiệm Người Quảng", "Shi-Perfume", "EV Battery Swap"] },
      { name: "Performance Tuning & Core Web Vitals", level: "Advanced", projects: ["CreatorOS", "Tiệm Người Quảng", "Shi-Perfume"] },
    ],
  },
  {
    title: {
      en: "Backend & Distributed Systems",
      vi: "Backend & Hệ Thống Phân Tán",
    },
    description: {
      en: "Clean Architecture, CQRS vertical slices, modular microservices, and real-time streaming.",
      vi: "Clean Architecture, CQRS vertical slices, kiến trúc modular và truyền dữ liệu thời gian thực.",
    },
    skills: [
      { name: ".NET 8 / 9 (ASP.NET Core Web API)", level: "Advanced", highlight: true, projects: ["Pulse", "EV Battery Swap"] },
      { name: "Clean Architecture & 3-Tier Layering", level: "Advanced", highlight: true, projects: ["Pulse", "EV Battery Swap"] },
      { name: "NestJS (Modular Architecture)", level: "Advanced", highlight: true, projects: ["AdaptiveLMS"] },
      { name: "Next.js Server Actions & REST APIs", level: "Advanced", highlight: true, projects: ["CreatorOS", "Tiệm Người Quảng", "Shi-Perfume", "EV Battery Swap"] },
      { name: "SignalR (Real-Time WebSockets)", level: "Proficient", projects: ["Pulse"] },
      { name: "Python / FastAPI", level: "Proficient", projects: ["Pulse"] },
      { name: "JWT & Role-Based Access Control (RBAC)", level: "Core", projects: ["CreatorOS", "AdaptiveLMS", "Pulse", "Shi-Perfume", "EV Battery Swap"] },
    ],
  },
  {
    title: {
      en: "Databases & Cloud Architecture",
      vi: "Cơ Sở Dữ Liệu & Điện Toán Đám Mây",
    },
    description: {
      en: "Relational data modeling, connection pooling, multi-tenancy, and row-level security.",
      vi: "Thiết kế CSDL quan hệ, connection pooling, multi-tenancy và bảo mật cấp dòng.",
    },
    skills: [
      { name: "Microsoft SQL Server", level: "Advanced", highlight: true, projects: ["EV Battery Swap"] },
      { name: "Entity Framework Core 9", level: "Advanced", highlight: true, projects: ["Pulse", "EV Battery Swap"] },
      { name: "PostgreSQL (GIN Full-Text Search)", level: "Advanced", highlight: true, projects: ["CreatorOS", "Pulse", "AdaptiveLMS", "Tiệm Người Quảng", "Shi-Perfume"] },
      { name: "Prisma ORM 6", level: "Advanced", highlight: true, projects: ["CreatorOS", "AdaptiveLMS"] },
      { name: "Neon Serverless Postgres", level: "Proficient", projects: ["CreatorOS"] },
      { name: "Supabase (PostgreSQL, Auth & Storage RLS)", level: "Advanced", highlight: true, projects: ["Tiệm Người Quảng", "Shi-Perfume"] },
    ],
  },
  {
    title: {
      en: "AI, Integrations & DevOps Workflows",
      vi: "Tích Hợp AI, Thanh Toán & Quy Trình DevOps",
    },
    description: {
      en: "Generative AI APIs, payment webhooks, Git workflows, and automated test runners.",
      vi: "Generative AI APIs, webhook thanh toán, quy trình Git chuyên nghiệp và kiểm thử tự động.",
    },
    skills: [
      { name: "Google Gemini 1.5 Flash SDK", level: "Advanced", highlight: true, projects: ["AdaptiveLMS"] },
      { name: "OpenAI GPT-4o Integration", level: "Advanced", projects: ["CreatorOS"] },
      { name: "Stripe Billing & Webhooks", level: "Advanced", highlight: true, projects: ["CreatorOS"] },
      { name: "VNPay & MoMo Payment Gateways", level: "Advanced", highlight: true, projects: ["Pulse", "EV Battery Swap"] },
      { name: "Git / GitHub / GitLab Workflows", level: "Advanced", highlight: true, projects: ["CreatorOS", "Pulse", "FPT Software", "Shi-Perfume", "EV Battery Swap"] },
      { name: "Docker & Docker Compose", level: "Proficient", projects: ["Pulse", "AdaptiveLMS"] },
      { name: "Vitest, Jest & Agile/Scrum", level: "Proficient", projects: ["CreatorOS", "AdaptiveLMS", "FPT Software"] },
      { name: "Zod Schema Validation & Zustand", level: "Advanced", highlight: true, projects: ["CreatorOS", "Tiệm Người Quảng", "AdaptiveLMS", "Shi-Perfume"] },
    ],
  },
];
