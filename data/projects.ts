import { BilingualText } from "@/lib/i18n";

export interface ProjectScreenshot {
  url: string;
  role?: "admin" | "staff" | "resident" | "default";
  title: BilingualText;
  description: BilingualText;
}

export interface ProjectData {
  id: string;
  name: string;
  slug: string;
  featured: boolean;
  featuredRank: number;
  image: string;
  screenshots?: ProjectScreenshot[];
  badge: BilingualText;
  category: BilingualText;
  shortDescription: BilingualText;
  overview: BilingualText;
  problem: BilingualText;
  solution: BilingualText;
  architecture: {
    overview: BilingualText;
    diagram: string;
    highlights: BilingualText[];
  };
  keyFeatures: {
    title: BilingualText;
    description: BilingualText;
  }[];
  technicalHighlights: BilingualText[];
  challenges: {
    challenge: BilingualText;
    resolution: BilingualText;
  }[];
  learnings: BilingualText[];
  techStack: {
    category: BilingualText;
    items: string[];
  }[];
  myRole: BilingualText;
  links: {
    github: string;
    demo?: string;
    extraLinks?: { label: string; url: string }[];
  };
}

export const projects: ProjectData[] = [
  {
    id: "creatoros",
    name: "CreatorOS",
    slug: "creatoros",
    featured: true,
    featuredRank: 1,
    image: "/projects/CreatorOS.png",
    screenshots: [
      {
        url: "/projects/CreatorOS.png",
        role: "default",
        title: {
          en: "CreatorOS Analytics & Content Hub",
          vi: "CreatorOS Dashboard & Trung Tâm Nội Dung",
        },
        description: {
          en: "Omnichannel content scheduler and native PostgreSQL audience growth analytics dashboard.",
          vi: "Lịch lên lịch phát hành đa nền tảng và phân tích tăng trưởng người xem bằng PostgreSQL.",
        },
      },
    ],
    badge: {
      en: "Featured SaaS Platform",
      vi: "Sản phẩm SaaS Nổi bật",
    },
    category: {
      en: "Full-Stack SaaS & Analytics",
      vi: "SaaS Full-Stack & Phân Tích Dữ Liệu",
    },
    shortDescription: {
      en: "Multi-tenant social media analytics & content management SaaS platform for creators and digital agencies.",
      vi: "Nền tảng SaaS quản lý nội dung đa kênh và phân tích hiệu suất mạng xã hội dành cho creator và media agency.",
    },
    overview: {
      en: "CreatorOS unifies omnichannel content planning, real-time engagement analytics, campaign ROI tracking, and algorithmic retention diagnostics into a single workspace, solving the fragmentation caused by disconnected social dashboards and spreadsheet-based tracking.",
      vi: "CreatorOS hợp nhất quy trình lên lịch đăng bài đa kênh, phân tích tương tác thời gian thực, đo lường ROI chiến dịch và chuẩn đoán retention bằng thuật toán AI vào một workspace duy nhất, giải quyết triệt để sự rời rạc của các bảng tính và dashboard truyền thống.",
    },
    problem: {
      en: "Digital media agencies and high-output creators waste hours jumping between separate platforms (YouTube, Instagram, TikTok, X, Facebook) and manual spreadsheets. They lack unified cross-platform analytics, audience retention benchmarking, and team collaboration with granular permissions.",
      vi: "Các agency và creator thường mất hàng giờ chuyển đổi giữa các nền tảng riêng rẽ và bảng tính thủ công. Họ thiếu một hệ thống phân tích tăng trưởng hợp nhất, không có công cụ chẩn đoán tỷ lệ giữ chân người xem và thiếu cơ chế phân quyền làm việc nhóm an toàn.",
    },
    solution: {
      en: "Architected a full-featured SaaS with Next.js 15 App Router and Neon PostgreSQL. Features multi-platform content scheduling with visual calendars, server-side PostgreSQL aggregation queries calculating follower velocity and interaction rates without mock data, AI-driven retention hook diagnostics, Stripe subscription tiers, and 4-tier RBAC.",
      vi: "Xây dựng nền tảng SaaS hoàn chỉnh trên Next.js 15 App Router và Neon PostgreSQL. Hệ thống cung cấp lịch phát hành trực quan đa nền tảng, engine phân tích trực tiếp trên PostgreSQL tính toán tốc độ tăng trưởng với dữ liệu thực 100%, bộ chuẩn đoán retention bằng OpenAI GPT-4o, hệ thống gói cước Stripe và phân quyền RBAC 4 cấp.",
    },
    architecture: {
      overview: {
        en: "Multi-tenant monolithic service layer built inside Next.js 15 App Router with Better Auth cryptographic session management and Neon pooled PostgreSQL via Prisma ORM.",
        vi: "Kiến trúc Service Layer phân tách rõ ràng bên trong Next.js 15 App Router kết hợp phiên xác thực mã hóa Better Auth và Neon pooled PostgreSQL qua Prisma ORM.",
      },
      diagram: `[ Browser: Creator / Agency Team ]
       │
       ▼ (HTTPS / App Router)
[ Next.js 15 Frontend Shell + shadcn/ui ]
       │
       ▼ (Server Actions & Typed API Services)
[ Core Services Layer ]
  ├── ContentService (CRUD, Batch Schedule)
  ├── AnalyticsService (Postgres GroupBy Aggregations)
  ├── AIService (GPT-4o Hooks & Heuristic Engine)
  ├── BillingService (Stripe Portal & Webhook Verification)
  └── RBAC Guard (Owner, Admin, Editor, Viewer)
       │
       ▼
[ Neon PostgreSQL (Pooled Connections via Prisma ORM) ]`,
      highlights: [
        {
          en: "Isolated service layer (services/content, analytics, billing, ai) decoupling business logic from UI routes.",
          vi: "Tầng service độc lập (services/content, analytics, billing, ai) tách rời logic nghiệp vụ khỏi giao diện.",
        },
        {
          en: "Tenant isolation with strict workspaceId filtering enforced on every database query.",
          vi: "Cô lập dữ liệu multi-tenant nghiêm ngặt qua workspaceId trên mọi truy vấn cơ sở dữ liệu.",
        },
        {
          en: "Cryptographic session management via Better Auth with PostgreSQL adapter.",
          vi: "Xác thực phiên làm việc an toàn với Better Auth và adapter PostgreSQL chuyên dụng.",
        },
      ],
    },
    keyFeatures: [
      {
        title: {
          en: "Omnichannel Calendar & Hub",
          vi: "Lịch Đăng Bài Đa Kênh Trực Quan",
        },
        description: {
          en: "Unified release management for YouTube, Instagram, TikTok, X, and Facebook across Month, Week, and List views with bulk actions.",
          vi: "Quản lý bài đăng đồng nhất trên YouTube, Instagram, TikTok, X, Facebook với các chế độ Tháng, Tuần, Danh sách và thao tác hàng loạt.",
        },
      },
      {
        title: {
          en: "Zero-Mock PostgreSQL Analytics",
          vi: "Hệ Thống Phân Tích Dữ Liệu Thực",
        },
        description: {
          en: "Time-series aggregations computed natively via PostgreSQL date intervals and GROUP BY queries, tracking 90-day audience velocity.",
          vi: "Phân tích chuỗi thời gian tính toán trực tiếp bằng câu lệnh PostgreSQL GROUP BY và date intervals, theo dõi tăng trưởng 90 ngày.",
        },
      },
      {
        title: {
          en: "AI Retention & Hook Diagnostics",
          vi: "Chuẩn Đoán Hook & Retention Bằng AI",
        },
        description: {
          en: "GPT-4o analysis of video hooks, pacing, and bookmark ratios, paired with an offline heuristic fallback engine.",
          vi: "Ứng dụng GPT-4o phân tích câu mở đầu, nhịp điệu nội dung kết hợp thuật toán heuristic dự phòng khi không có API key.",
        },
      },
      {
        title: {
          en: "Role-Based Governance (RBAC)",
          vi: "Phân Quyền RBAC 4 Cấp Độ",
        },
        description: {
          en: "Granular access tiers (OWNER, ADMIN, EDITOR, VIEWER) with member invitations and immutable audit logging.",
          vi: "Phân quyền chặt chẽ (OWNER, ADMIN, EDITOR, VIEWER) đi kèm lời mời thành viên và nhật ký kiểm toán bất biến.",
        },
      },
      {
        title: {
          en: "Stripe Subscription Monetization",
          vi: "Tích Hợp Gói Cước Doanh Thu Stripe",
        },
        description: {
          en: "Multi-tier pricing (FREE, PRO, TEAM) with checkout sessions, customer portal, and webhook signature verification.",
          vi: "Mô hình định giá 3 gói (FREE, PRO, TEAM) với phiên checkout, trang quản lý hóa đơn khách hàng và webhook an toàn.",
        },
      },
    ],
    technicalHighlights: [
      {
        en: "Built on Next.js 15 App Router, React 19, TypeScript strict mode, and Tailwind CSS.",
        vi: "Xây dựng trên Next.js 15 App Router, React 19, TypeScript strict và Tailwind CSS.",
      },
      {
        en: "Neon serverless PostgreSQL database with Prisma ORM 6 and connection pooling.",
        vi: "Cơ sở dữ liệu serverless Neon PostgreSQL với Prisma ORM 6 và connection pooling.",
      },
      {
        en: "Comprehensive Vitest unit test suite covering RBAC logic, analytics calculations, and Zod schemas.",
        vi: "Bộ kiểm thử unit test Vitest toàn diện cho ma trận RBAC, thuật toán phân tích và schema Zod.",
      },
      {
        en: "Zero-dependency heuristic fallback ensuring application availability even if external AI APIs degrade.",
        vi: "Thuật toán heuristic độc lập đảm bảo hệ thống luôn phản hồi mượt mà ngay cả khi AI bên ngoài quá tải.",
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Calculating complex multi-platform engagement benchmarks across 90-day timeframes without slow SQL queries or bloated client bundles.",
          vi: "Tính toán chỉ số tương tác đa nền tảng trong 90 ngày mà không làm chậm câu truy vấn SQL hay phình to bundle client.",
        },
        resolution: {
          en: "Designed optimized SQL index strategies and performed database-level aggregation via PostgreSQL intervals, keeping API response latency under 60ms.",
          vi: "Thiết kế index chuẩn trên PostgreSQL và chuyển toàn bộ phép tính tổng hợp về phía CSDL, duy trì độ trễ API dưới 60ms.",
        },
      },
      {
        challenge: {
          en: "Preventing cross-tenant data leaks in an agency multi-workspace environment.",
          vi: "Ngăn chặn tuyệt đối nguy cơ rò rỉ dữ liệu giữa các workspace của các agency khác nhau.",
        },
        resolution: {
          en: "Implemented an authorization guard middleware and strict Prisma where-clause injection requiring verified workspaceId on every single mutation and query.",
          vi: "Áp dụng lớp bảo vệ middleware và tự động tiêm điều kiện workspaceId đã xác minh vào mọi câu lệnh Prisma.",
        },
      },
    ],
    learnings: [
      {
        en: "Architecting multi-tenant SaaS structures with strict tenant boundaries and cryptographic session cookies.",
        vi: "Kinh nghiệm thiết kế hệ thống SaaS đa khách thuê (multi-tenant) với biên giới dữ liệu an toàn và session cookie mã hóa.",
      },
      {
        en: "Handling Stripe subscription lifecycles, webhook idempotent processing, and plan downgrading logic.",
        vi: "Xử lý vòng đời thanh toán định kỳ Stripe, tính bất biến của webhook và xử lý hạ gói tài khoản người dùng.",
      },
    ],
    techStack: [
      {
        category: { en: "Frontend", vi: "Frontend" },
        items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"],
      },
      {
        category: { en: "Backend & Services", vi: "Backend & Dịch Vụ" },
        items: ["Next.js App Router", "Better Auth", "Zod", "Vitest", "Stripe SDK"],
      },
      {
        category: { en: "Database & AI", vi: "Cơ Sở Dữ Liệu & AI" },
        items: ["Neon PostgreSQL", "Prisma ORM 6", "OpenAI GPT-4o-mini"],
      },
    ],
    myRole: {
      en: "Designed and developed the entire application (Architecture, Database, Frontend, Backend, and Tests).",
      vi: "Thiết kế và phát triển toàn bộ ứng dụng (Kiến trúc hệ thống, Database, Frontend, Backend và Unit Tests).",
    },
    links: {
      github: "https://github.com/TranHoDuyAnh/CreatorOS",
    },
  },
  {
    id: "pulse",
    name: "Pulse — Living Ecosystem",
    slug: "pulse",
    featured: true,
    featuredRank: 2,
    image: "/projects/Admin.png",
    screenshots: [
      {
        url: "/projects/Admin.png",
        role: "admin",
        title: {
          en: "Pulse Admin Management Portal",
          vi: "Giao Diện Quản Trị Hệ Thống Admin",
        },
        description: {
          en: "Enterprise building operations dashboard for amenity configuration, utility billing oversight, and resident roster management.",
          vi: "Dashboard quản trị vận hành tòa nhà, cấu hình dịch vụ tiện ích, giám sát hóa đơn và danh sách cư dân.",
        },
      },
      {
        url: "/projects/Staff.png",
        role: "staff",
        title: {
          en: "Pulse Staff Operations Dashboard",
          vi: "Giao Diện Điều Phối Nhân Viên Vận Hành",
        },
        description: {
          en: "Operational taskboard for on-site staff handling incident resolution, maintenance schedules, and parcel intake.",
          vi: "Bảng phân công công việc thực địa cho nhân viên xử lý sự cố, lịch bảo trì và tiếp nhận bưu kiện cư dân.",
        },
      },
      {
        url: "/projects/Resident.png",
        role: "resident",
        title: {
          en: "Pulse Resident Services Portal",
          vi: "Cổng Dịch Vụ Cư Dân Trực Tuyến",
        },
        description: {
          en: "Resident self-service portal for amenity booking with capacity validation, utility payments via VNPay/MoMo, and issue reporting.",
          vi: "Cổng dịch vụ cư dân tự đặt chỗ tiện ích chống trùng lịch, thanh toán hóa đơn qua VNPay/MoMo và phản ánh sự cố.",
        },
      },
    ],
    badge: {
      en: "Enterprise Distributed System",
      vi: "Hệ Thống Phân Tán Doanh Nghiệp",
    },
    category: {
      en: "Enterprise Architecture & IoT / Real-Time",
      vi: "Kiến Trúc Doanh Nghiệp & Real-Time",
    },
    shortDescription: {
      en: "Distributed residential ecosystem combining .NET 9 Clean Architecture, real-time SignalR hubs, Next.js admin portal, and Flutter mobile.",
      vi: "Hệ sinh thái quản lý tòa nhà thông minh kết hợp Clean Architecture .NET 9, SignalR real-time, cổng Next.js admin và ứng dụng Flutter mobile.",
    },
    overview: {
      en: "Pulse replaces paper-based operations, disparate utility payment systems, and manual facility scheduling in residential complexes with a centralized ecosystem connecting residents, building management, and on-site staff across web and mobile platforms.",
      vi: "Pulse thay thế các quy trình ghi chép thủ công, thu phí rời rạc và đặt lịch tiện ích phức tạp tại các khu đô thị và chung cư hiện đại bằng hệ sinh thái đồng nhất kết nối Cư dân, Ban quản lý và Nhân viên kỹ thuật trên cả Web và Mobile.",
    },
    problem: {
      en: "High-density residential buildings suffer from severe communication bottlenecks: lost maintenance requests, double-booked community amenities, delayed parcel notifications, and friction-filled manual cash collections for utility bills.",
      vi: "Các tòa nhà chung cư cao tầng thường gặp tình trạng tắc nghẽn thông tin: thất lạc yêu cầu sửa chữa, trùng lịch đặt tiện ích hồ bơi/phòng gym, bưu kiện đến chậm và bất tiện khi thu phí quản lý, điện nước bằng tiền mặt.",
    },
    solution: {
      en: "Engineered a robust .NET 9 Clean Architecture backend organized into CQRS vertical slices with MediatR. Delivered real-time SignalR notification channels, automated monthly billing with VNPay/MoMo payment gateway integrations, an amenity booking engine enforcing capacity constraints, and cross-platform clients (Next.js web portal and Flutter mobile app).",
      vi: "Xây dựng hệ thống backend .NET 9 chuẩn Clean Architecture theo mô hình CQRS vertical slices với MediatR. Triển khai kênh thông báo thời gian thực SignalR, hệ thống xuất hóa đơn tự động tích hợp cổng VNPay/MoMo, công cụ đặt tiện ích chống trùng lịch và ứng dụng đa nền tảng (Next.js Admin và Flutter Mobile).",
    },
    architecture: {
      overview: {
        en: "Strict 4-layer Clean Architecture (.NET 9) with MediatR CQRS handlers, FluentValidation pipeline behaviors, Entity Framework Core 9, and duplex SignalR streaming.",
        vi: "Kiến trúc Clean Architecture 4 tầng chuẩn mực (.NET 9) kết hợp MediatR CQRS, pipeline kiểm tra FluentValidation, EF Core 9 và truyền dữ liệu hai chiều SignalR.",
      },
      diagram: `[ Web Admin (Next.js) ]     [ Resident/Staff Mobile (Flutter) ]     [ AI Assistant (FastAPI) ]
           │                                 │                                    │
           └────────────────────────┬────────┴────────────────────────────────────┘
                                    │ (RESTful HTTPS / SignalR WebSockets)
                                    ▼
                     [ Pulse.API (Presentation Layer) ]
                                    │
                                    ▼ (MediatR Pipeline + FluentValidation)
                   [ Pulse.UseCases (CQRS Application) ]
                     ├── Bookings (Capacity Constraints)
                     ├── Bills & Payments (VNPay / MoMo IPN)
                     ├── Incidents & Maintenance Dispatch
                     └── Real-Time Notification Publisher
                                    │
                         ┌──────────┴──────────┐
                         ▼                     ▼
               [ Pulse.Core (Domain) ]   [ Pulse.Infrastructure ]
               (Entities, Guard Rules)   (EF Core 9, BCrypt, Sentry)
                                               │
                                               ▼
                                  [ PostgreSQL Database (Docker) ]`,
      highlights: [
        {
          en: "Clean Architecture: API, UseCases (CQRS), Core (Domain), and Infrastructure completely isolated.",
          vi: "Phân tách Clean Architecture tuyệt đối giữa API, UseCases (CQRS), Core (Domain) và Infrastructure.",
        },
        {
          en: "Domain immutability enforced using C# record types and private entity setters.",
          vi: "Bảo đảm tính bất biến của dữ liệu nghiệp vụ bằng C# record và private entity setters.",
        },
        {
          en: "Dual-layer validation: FluentValidation at application layer and Domain Guards at entity boundaries.",
          vi: "Cơ chế phòng vệ 2 lớp: FluentValidation ở tầng ứng dụng và Domain Guards tại biên thực thể.",
        },
      ],
    },
    keyFeatures: [
      {
        title: {
          en: "Building Topology & Unit Registry",
          vi: "Cấu Trúc Tòa Nhà & Quản Lý Căn Hộ",
        },
        description: {
          en: "Hierarchical data modeling (Block → Floor → Unit) tracking occupancy, resident verification, and vehicle registrations.",
          vi: "Mô hình hóa dữ liệu dạng cây (Tòa → Tầng → Căn hộ) quản lý cư trú, xác thực thông tin và quản lý phương tiện cư dân.",
        },
      },
      {
        title: {
          en: "Automated Billing & VNPay / MoMo",
          vi: "Hóa Đơn Tự Động & Cổng VNPay / MoMo",
        },
        description: {
          en: "Automated monthly utility invoice generation with instant payment URLs, QR code scans, and IPN callback reconciliation.",
          vi: "Tự động lập hóa đơn định kỳ hàng tháng, tạo đường link thanh toán tức thì, quét mã QR và đối soát giao dịch qua IPN callback.",
        },
      },
      {
        title: {
          en: "Capacity-Guarded Amenity Bookings",
          vi: "Đặt Chỗ Tiện Ích Chống Trùng Lịch",
        },
        description: {
          en: "Concurrency-aware booking engine validating slot capacities, operational schedules, and active reservations.",
          vi: "Engine đặt chỗ thông minh kiểm tra giới hạn sức chứa, khung giờ hoạt động và chống xung đột thời gian.",
        },
      },
      {
        title: {
          en: "Real-Time Incident Lifecycle",
          vi: "Xử Lý Sự Cố & Điều Phối Kỹ Thuật",
        },
        description: {
          en: "Resident photo incident submissions, automated dispatching to technicians, and real-time state tracking.",
          vi: "Gửi báo cáo sự cố kèm hình ảnh, điều phối công việc tới kỹ thuật viên và cập nhật trạng thái thời gian thực.",
        },
      },
      {
        title: {
          en: "Parcel Logistics & QR Pickups",
          vi: "Quản Lý Bưu Kiện & Nhận Hàng Bằng QR",
        },
        description: {
          en: "Intake logging with pickup codes, resident notification triggers, and staff verification workflows.",
          vi: "Ghi nhận bưu kiện mới đến, phát thông báo nhận hàng tới cư dân và quy trình quét mã bàn giao minh bạch.",
        },
      },
    ],
    technicalHighlights: [
      {
        en: ".NET 9 backend running Clean Architecture with MediatR CQRS handlers and Entity Framework Core 9.",
        vi: "Backend .NET 9 xây dựng theo Clean Architecture với MediatR CQRS và Entity Framework Core 9.",
      },
      {
        en: "SignalR real-time hubs powering live notification broadcasts and dispatch updates.",
        vi: "SignalR real-time hubs xử lý truyền thông báo tức thì và cập nhật điều phối nhân sự.",
      },
      {
        en: "Next.js admin portal with TanStack Query, Framer Motion, Recharts, FullCalendar, and Sentry monitoring.",
        vi: "Trang admin Next.js trang bị TanStack Query, Framer Motion, Recharts, FullCalendar và giám sát Sentry.",
      },
      {
        en: "Docker containerization for rapid local reproduction with PostgreSQL and Swagger documentation.",
        vi: "Container hóa bằng Docker giúp khởi chạy toàn bộ database PostgreSQL và tài liệu API Swagger trong 1 lệnh.",
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Guaranteeing high-concurrency booking integrity when dozens of residents attempt to book limited slots simultaneously (e.g. tennis courts, barbecue pavilions).",
          vi: "Đảm bảo tính toàn vẹn khi hàng chục cư dân cùng đặt các tiện ích có giới hạn sức chứa trong cùng một thời điểm.",
        },
        resolution: {
          en: "Engineered strict application-level capacity validation in MediatR command pipelines combined with database transaction locking.",
          vi: "Thiết kế logic kiểm tra sức chứa đồng thời trong MediatR command pipeline kết hợp khóa giao dịch ở tầng CSDL.",
        },
      },
      {
        challenge: {
          en: "Handling asynchronous payment gateway webhooks (VNPay / MoMo) reliably despite network latency and potential duplicate IPN calls.",
          vi: "Xử lý an toàn webhook phản hồi từ cổng thanh toán VNPay và MoMo trước nguy cơ trễ mạng hoặc trùng lặp gói tin IPN.",
        },
        resolution: {
          en: "Implemented an idempotent payment handler checking existing transaction hashes and updating bill states within isolated transactions.",
          vi: "Xây dựng handler thanh toán bất biến (idempotent), kiểm tra chữ ký số và đối chiếu trạng thái hóa đơn trong transaction độc lập.",
        },
      },
    ],
    learnings: [
      {
        en: "Mastery of .NET 9 Clean Architecture, CQRS with MediatR, and Domain-Driven Design patterns in high-complexity systems.",
        vi: "Nắm vững chuyên sâu kiến trúc Clean Architecture trên .NET 9, mô hình CQRS với MediatR và tư duy Domain-Driven Design.",
      },
      {
        en: "Integrating multi-client ecosystems (Web, Flutter Mobile, AI Agent) with secure REST and WebSocket protocols.",
        vi: "Kỹ năng kết nối hệ sinh thái đa nền tảng (Web Admin, Flutter Mobile, AI Agent) qua giao thức REST và WebSocket an toàn.",
      },
    ],
    techStack: [
      {
        category: { en: "Backend & Systems", vi: "Backend & Hệ Thống" },
        items: [".NET 9 (C# 13)", "Clean Architecture", "CQRS / MediatR", "EF Core 9", "SignalR", "PostgreSQL (Docker)"],
      },
      {
        category: { en: "Frontend & Mobile", vi: "Frontend & Mobile" },
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter (Dart)", "TanStack Query", "FullCalendar"],
      },
      {
        category: { en: "Gateways & DevOps", vi: "Cổng Thanh Toán & DevOps" },
        items: ["VNPay IPN", "MoMo Gateway", "Docker Compose", "FastAPI (Python)", "Sentry"],
      },
    ],
    myRole: {
      en: "Full-Stack Software Engineer (Implemented .NET 9 CQRS backend features, amenity booking validation logic, Next.js admin portal screens, and payment gateway workflows).",
      vi: "Kỹ sư Phần mềm Full-Stack (Trực tiếp hiện thực hóa logic backend CQRS .NET 9, quy tắc xác thực đặt tiện ích, các màn hình admin Next.js và quy trình tích hợp cổng thanh toán).",
    },
    links: {
      github: "https://github.com/Pulse-The-AI-Powered-Living-Ecosystem/Pulse-dotnetBE",
      extraLinks: [
        { label: "Frontend Web Portal", url: "https://github.com/Pulse-The-AI-Powered-Living-Ecosystem/Pulse-FE" },
        { label: "Flutter Mobile App", url: "https://github.com/Pulse-The-AI-Powered-Living-Ecosystem/Pulse-Mobile" },
      ],
    },
  },
  {
    id: "adaptivelms",
    name: "AdaptiveLMS",
    slug: "adaptivelms",
    featured: true,
    featuredRank: 3,
    image: "/projects/AdaptiveLMS.png",
    screenshots: [
      {
        url: "/projects/AdaptiveLMS.png",
        role: "default",
        title: {
          en: "AdaptiveLMS AI & Learning Dashboard",
          vi: "AdaptiveLMS Dashboard & Lộ Trình AI",
        },
        description: {
          en: "Comprehensive learning environment with AI study recommendations, instant quiz synthesis, and real-time infrastructure telemetry.",
          vi: "Môi trường học tập toàn diện với gợi ý lộ trình AI, trợ lý tạo quiz 2 giây và giám sát tài nguyên hệ thống thời gian thực.",
        },
      },
    ],
    badge: {
      en: "AI-Powered EdTech Monorepo",
      vi: "Nền Tảng EdTech Tích Hợp GenAI",
    },
    category: {
      en: "Generative AI & Modular Architecture",
      vi: "Generative AI & Kiến Trúc Modular",
    },
    shortDescription: {
      en: "Personalized learning platform leveraging Google Gemini 1.5 Flash for dynamic curriculum paths, AI quiz generation, and rubric essay grading.",
      vi: "Nền tảng cá nhân hóa học tập ứng dụng Google Gemini 1.5 Flash sinh lộ trình thích ứng, tạo quiz tự động và chấm bài luận theo rubric.",
    },
    overview: {
      en: "AdaptiveLMS eliminates the 'one-size-fits-all' restriction of legacy learning management systems. It uses Google Gemini 1.5 Flash to automatically classify student proficiency tiers (EXCELLENT, AVERAGE, NEEDS_SUPPORT), synthesizes customized practice drills, generates quizzes in seconds for instructors, and monitors infrastructure telemetry in real time.",
      vi: "AdaptiveLMS giải quyết triệt để vấn đề 'cào bằng' của các hệ thống LMS truyền thống. Ứng dụng mô hình Google Gemini 1.5 Flash để tự động phân loại trình độ học viên (EXCELLENT, AVERAGE, NEEDS_SUPPORT), sinh lộ trình thích ứng, hỗ trợ giảng viên soạn quiz và chấm bài luận chỉ trong vài giây, đi kèm trung tâm giám sát hạ tầng thời gian thực.",
    },
    problem: {
      en: "Traditional online learning systems treat all students identically regardless of their learning velocity. Meanwhile, educators spend hours manually drafting multiple-choice questions and grading subjective open-ended essays, leading to slow student feedback cycles.",
      vi: "Các hệ thống học trực tuyến truyền thống đối xử với mọi học viên như nhau dù năng lực tiếp thu rất khác biệt. Giảng viên cũng tốn quá nhiều thời gian để soạn câu hỏi trắc nghiệm thủ công và chấm các bài luận tự luận, khiến phản hồi học tập bị chậm trễ.",
    },
    solution: {
      en: "Engineered a high-performance monorepo with Next.js 15 App Router and NestJS 10. Integrated Google Gemini 1.5 Flash with tailored prompt engineering to analyze student streaks and weak topics, generate 5-question quizzes from lesson text in under 2 seconds, evaluate essays against customizable rubrics, and provide a 360-degree admin infrastructure health monitor.",
      vi: "Xây dựng hệ thống monorepo hiệu năng cao kết hợp Next.js 15 App Router và NestJS 10. Tích hợp Google Gemini 1.5 Flash với kỹ thuật prompt engineering tối ưu nhằm phân tích điểm yếu học viên, tạo 5 câu hỏi quiz chỉ trong 2 giây từ bài học, chấm điểm bài luận theo thang rubric chuẩn và cung cấp dashboard theo dõi CPU/RAM/Database theo thời gian thực.",
    },
    architecture: {
      overview: {
        en: "Layered enterprise monorepo: Next.js 15 React 19 frontend communicating with a modular NestJS REST API Gateway backed by PostgreSQL and Prisma ORM 6.",
        vi: "Kiến trúc monorepo phân tầng: Giao diện Next.js 15 giao tiếp với REST API Gateway NestJS chuẩn modular, cơ sở dữ liệu PostgreSQL và Prisma ORM 6.",
      },
      diagram: `[ Next.js 15 App Router (React 19, Tailwind, TanStack Query) ]
                               │
                               ▼ (RESTful JWT Guarded Requests)
            [ NestJS 10 REST API Gateway ]
  ├── AuthModule (Passport JWT, Bcrypt, Access & Refresh)
  ├── Courses & Lessons Module
  ├── Quiz & Submission Engine
  ├── RecommendationAlgorithm (EXCELLENT / AVERAGE / NEEDS_SUPPORT)
  ├── AIModule (Google Gemini 1.5 Flash Engine)
  └── Analytics & System Health (CPU, RAM, Connections, Token Quotas)
                               │
                ┌──────────────┴──────────────┐
                ▼                             ▼
   [ PostgreSQL + Prisma ORM 6 ]   [ Google Gemini 1.5 Flash API ]`,
      highlights: [
        {
          en: "NestJS modular architecture: Controller-Service-DTO-Guards ensuring clean separation and enterprise maintainability.",
          vi: "Kiến trúc modular NestJS: Controller-Service-DTO-Guards phân tách rành mạch, dễ bảo trì và mở rộng.",
        },
        {
          en: "End-to-end type safety from Prisma PostgreSQL database models to client-side TypeScript interfaces.",
          vi: "Type-safety toàn diện từ lược đồ Prisma PostgreSQL tới giao diện TypeScript trên client.",
        },
        {
          en: "Optimized Gemini 1.5 prompt templates generating structured JSON with sub-2s response latency.",
          vi: "Bộ prompt tối ưu cho Gemini 1.5 tạo dữ liệu JSON có cấu trúc chuẩn xác với độ trễ dưới 2 giây.",
        },
      ],
    },
    keyFeatures: [
      {
        title: {
          en: "Adaptive Study Recommendations",
          vi: "Lộ Trình Thích Ứng Cá Nhân Hóa",
        },
        description: {
          en: "Algorithm evaluating student test scores, learning streaks, and weak topics to generate daily practice recommendations.",
          vi: "Thuật toán đánh giá điểm số, chuỗi ngày học và chủ đề yếu để sinh kế hoạch luyện tập phù hợp từng học viên.",
        },
      },
      {
        title: {
          en: "Instant AI Quiz Generator",
          vi: "Trợ Lý Soạn Quiz Bằng AI 2 Giây",
        },
        description: {
          en: "Generates 5 contextual multiple-choice questions with options and explanations directly from lesson text in ~2 seconds.",
          vi: "Sinh tự động 5 câu hỏi trắc nghiệm kèm đáp án và giải thích chi tiết trực tiếp từ nội dung bài giảng chỉ trong ~2 giây.",
        },
      },
      {
        title: {
          en: "Rubric-Based AI Essay Evaluator",
          vi: "Chấm Bài Luận Tự Luận Theo Rubric",
        },
        description: {
          en: "Evaluates student essay submissions against detailed scoring rubrics with constructive pedagogical feedback.",
          vi: "Phân tích câu trả lời tự luận của học sinh, đề xuất điểm số và nhận xét chi tiết theo khung tiêu chí sư phạm.",
        },
      },
      {
        title: {
          en: "Student Gamification Engine",
          vi: "Hệ Thống Gamification & Điểm Thưởng",
        },
        description: {
          en: "Levels, XP points, study streak flames, and badge unlock achievements motivating continuous daily engagement.",
          vi: "Cấp độ (Level), điểm kinh nghiệm (XP), chuỗi ngày học liên tục (Streak) và huy hiệu thành tích thúc đẩy tương tác.",
        },
      },
      {
        title: {
          en: "360° Admin Control Center",
          vi: "Trung Tâm Quản Trị Hệ Thống 360°",
        },
        description: {
          en: "Live CPU/RAM metrics, database connection pooling stats, active session management, and AI token cost tracking.",
          vi: "Theo dõi tải CPU/RAM, kết nối database, quản lý thu hồi phiên làm việc bất thường và thống kê chi phí token AI.",
        },
      },
    ],
    technicalHighlights: [
      {
        en: "Monorepo built with Next.js 15, React 19, NestJS 10, TypeScript 5, and Prisma ORM 6.",
        vi: "Kiến trúc Monorepo xây dựng với Next.js 15, React 19, NestJS 10, TypeScript 5 và Prisma ORM 6.",
      },
      {
        en: "Google Gemini 1.5 Flash SDK integration for high-speed, multilingual Vietnamese language comprehension.",
        vi: "Tích hợp SDK Google Gemini 1.5 Flash mang lại tốc độ phản hồi cực nhanh và hiểu sâu sắc ngữ cảnh tiếng Việt.",
      },
      {
        en: "TanStack React Query 5 client caching ensuring immediate optimistic updates and responsive quiz execution.",
        vi: "Cơ chế cache dữ liệu TanStack Query 5 giúp cập nhật giao diện mượt mà và làm quiz không gián đoạn.",
      },
      {
        en: "Automated Docker Compose setup with comprehensive Prisma database seeding script.",
        vi: "Cấu hình Docker Compose hoàn chỉnh kèm script seed dữ liệu mẫu phong phú với 50+ sinh viên và 200+ câu hỏi.",
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Ensuring Generative AI returns strict, parseable JSON payloads without hallucinations or syntax errors when generating complex quizzes.",
          vi: "Đảm bảo mô hình Generative AI luôn trả về dữ liệu JSON có cấu trúc chặt chẽ, không bị lỗi cú pháp hay bịa thông tin.",
        },
        resolution: {
          en: "Implemented strict JSON schema enforcement in prompt configurations alongside Zod validation parsing before persisting to PostgreSQL.",
          vi: "Áp dụng cấu hình JSON schema nghiêm ngặt trong prompt kết hợp lớp parse dữ liệu Zod trước khi lưu vào CSDL PostgreSQL.",
        },
      },
      {
        challenge: {
          en: "Maintaining zero-latency state synchronization between student quiz countdown timers, auto-submissions, and teacher grading queues.",
          vi: "Đồng bộ trạng thái bộ đếm thời gian thi, tự động nộp bài và hàng đợi chấm điểm của giáo viên với độ trễ tối thiểu.",
        },
        resolution: {
          en: "Leveraged client-side optimistic timers paired with server-side validation timestamps to prevent client-clock tampering.",
          vi: "Kết hợp bộ đếm giờ lạc quan trên client và mốc thời gian kiểm chứng phía server để chống gian lận thời gian làm bài.",
        },
      },
    ],
    learnings: [
      {
        en: "Designing enterprise NestJS backends with clean DTO validation, custom interceptors, and JWT guard lifecycles.",
        vi: "Thiết kế backend NestJS doanh nghiệp chuẩn mực với DTO validation, custom interceptors và vòng đời JWT guard.",
      },
      {
        en: "Effective prompt engineering for Google Gemini 1.5 models in real-world educational evaluation workflows.",
        vi: "Kỹ thuật tối ưu hóa prompt cho Google Gemini 1.5 trong bài toán giáo dục và đánh giá năng lực thực tế.",
      },
    ],
    techStack: [
      {
        category: { en: "Frontend", vi: "Frontend" },
        items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "TanStack Query", "Framer Motion", "Recharts"],
      },
      {
        category: { en: "Backend & AI", vi: "Backend & AI" },
        items: ["NestJS 10", "Google Gemini 1.5 Flash", "RxJS", "Passport JWT", "Bcrypt", "Class Validator"],
      },
      {
        category: { en: "Database & Tooling", vi: "Cơ Sở Dữ Liệu & Công Cụ" },
        items: ["PostgreSQL 16", "Prisma ORM 6", "Docker Compose", "Swagger OpenAPI"],
      },
    ],
    myRole: {
      en: "Designed and developed the entire application (Full Monorepo Architecture, NestJS Backend, Next.js Frontend, AI Integration).",
      vi: "Thiết kế và phát triển toàn bộ ứng dụng (Kiến trúc Monorepo, Backend NestJS, Frontend Next.js và tích hợp AI).",
    },
    links: {
      github: "https://github.com/TranHoDuyAnh/AdaptiveLMS",
    },
  },
  {
    id: "tiemnguoiquang",
    name: "Tiệm Người Quảng",
    slug: "tiemnguoiquang",
    featured: true,
    featuredRank: 4,
    image: "/projects/TiemNguoiQuang.png",
    screenshots: [
      {
        url: "/projects/TiemNguoiQuang.png",
        role: "default",
        title: {
          en: "Tiệm Người Quảng Storefront Homepage",
          vi: "Trang Chủ Thương Mại Tiệm Người Quảng",
        },
        description: {
          en: "Mobile-first digital storefront showcasing regional dishes (Mì Quảng, Cao Lầu), brand storytelling, and interactive booking.",
          vi: "Giao diện trang chủ số hóa ẩm thực truyền thống Quảng Nam với thực đơn tương tác, câu chuyện thương hiệu và đặt bàn.",
        },
      },
    ],
    badge: {
      en: "Commercial Production Platform",
      vi: "Website Thương Mại Thực Tế",
    },
    category: {
      en: "React Server Components & Jamstack / BaaS",
      vi: "React Server Components & BaaS",
    },
    shortDescription: {
      en: "Production-ready regional culinary platform with Next.js 14 Server Actions, Supabase RLS security, and an administrative CMS.",
      vi: "Nền tảng ẩm thực thương mại hoàn chỉnh với Next.js 14 Server Actions, bảo mật Supabase RLS và hệ quản trị Admin CMS.",
    },
    overview: {
      en: "Built to establish a high-performance digital presence for an artisanal Vietnamese restaurant in Thu Duc City, providing customers with an interactive menu, streamlined table reservations, and 1-click Google Maps navigation, supported by a real-time admin management portal.",
      vi: "Được xây dựng nhằm tạo lập kênh hiện diện số cao cấp cho quán ẩm thực truyền thống Quảng Nam tại TP. Thủ Đức, cung cấp thực đơn tương tác, form đặt bàn nhanh gọn, chỉ đường Google Maps 1-chạm và hệ thống quản trị admin thời gian thực.",
    },
    problem: {
      en: "Local culinary businesses face excessive commission fees on food delivery apps, lack brand identity on the web, lose potential dining reservations, and struggle to manage seasonal menus and operating hours without technical assistance.",
      vi: "Các quán ăn truyền thống thường chịu mức chiết khấu quá cao từ các app giao hàng, thiếu kênh nhận diện thương hiệu riêng, thất thoát lượng khách đặt bàn trước và gặp khó khăn khi muốn cập nhật giá món hay giờ mở cửa.",
    },
    solution: {
      en: "Developed an elegant, mobile-first web platform using Next.js 14 React Server Components and Supabase. Features server actions for zero-API form handling, client-validated image uploads to Supabase Storage, Supabase Auth with Row Level Security, dynamic VND currency formatting, and complete local SEO.",
      vi: "Phát triển website tối ưu mobile-first sử dụng Next.js 14 React Server Components và Supabase. Áp dụng Server Actions xử lý đặt bàn trực tiếp, upload ảnh món ăn lên Supabase Storage, bảo mật Supabase Auth với RLS, định dạng tiền tệ VND chuẩn xác và tối ưu SEO địa phương toàn diện.",
    },
    architecture: {
      overview: {
        en: "Server-first architecture leveraging React Server Components for minimal JavaScript delivery, backed by Supabase PostgreSQL with strict Row Level Security (RLS).",
        vi: "Kiến trúc Server-First tối ưu dung lượng JavaScript client bằng React Server Components kết hợp Supabase PostgreSQL và Row Level Security.",
      },
      diagram: `[ Customer (Mobile / Desktop) ]       [ Store Administrator ]
              │                                      │
              ▼                                      ▼
[ Next.js 14 App Router (RSC) ]        [ Admin Panel (/admin) ]
  ├── Localized Menu View                ├── Menu & Category CRUD
  ├── Table Booking & Contact            ├── Operating Hours Switch
  └── 1-Click Google Maps Routing        └── Booking Status Management
              │                                      │
              ▼ (Server Actions with Zod)            ▼ (Supabase Auth Session)
        [ Next.js Middleware Guard (HTTP 303 Redirects) ]
                             │
                             ▼
            [ Supabase Cloud Infrastructure ]
  ├── PostgreSQL Database (Row Level Security Enabled)
  ├── Supabase Storage (Pre-validated Menu Images)
  └── Supabase GoTrue Auth (Session Cookies)`,
      highlights: [
        {
          en: "React Server Components by default: Ultra-fast initial page loads and superior SEO indexability.",
          vi: "React Server Components mặc định: Tốc độ tải trang tức thì và tối ưu chỉ mục tìm kiếm Google.",
        },
        {
          en: "Direct Server Actions replacing boilerplate REST APIs with end-to-end Zod schema validation.",
          vi: "Server Actions thay thế toàn bộ REST API thủ công với kiểm tra tính hợp lệ dữ liệu bằng Zod.",
        },
        {
          en: "Robust Row Level Security (RLS) policies isolating public read-only views from administrative write privileges.",
          vi: "Chính sách bảo mật cấp dòng (RLS) cô lập tuyệt đối quyền đọc công khai và quyền ghi của quản trị viên.",
        },
      ],
    },
    keyFeatures: [
      {
        title: {
          en: "Mobile-First Artisanal Storefront",
          vi: "Giao Diện Ẩm Thực Tinh Tế Mobile-First",
        },
        description: {
          en: "Bespoke color palette (#24A7A1 Teal with Warm Brown and Cream), diacritic-aware search, and Vietnamese currency formatting.",
          vi: "Bộ màu thương hiệu đậm chất miền Trung (Xanh Teal phối Nâu ấm), tìm kiếm món không dấu và định dạng giá tiền chuẩn VND.",
        },
      },
      {
        title: {
          en: "Direct Server Action Reservations",
          vi: "Form Đặt Bàn Trực Tiếp Bằng Server Action",
        },
        description: {
          en: "Instant table booking and contact submissions with client + server Zod validation and Sonner toast notifications.",
          vi: "Đặt bàn và gửi tin nhắn tức thì qua Server Action kèm kiểm tra Zod 2 đầu và thông báo Sonner mượt mà.",
        },
      },
      {
        title: {
          en: "Comprehensive Admin Management CMS",
          vi: "Hệ Quản Trị Admin Quán Ăn Hoàn Chỉnh",
        },
        description: {
          en: "Authenticated control panel for managing menu items, categories, operating hours switches, and customer booking lifecycles.",
          vi: "Bảng điều khiển quản trị cập nhật món ăn, danh mục, bật/tắt giờ hoạt động trong tuần và đổi trạng thái đơn đặt bàn.",
        },
      },
      {
        title: {
          en: "Direct Asset Upload Pipeline",
          vi: "Tải Ảnh Trực Tiếp Lên Supabase Storage",
        },
        description: {
          en: "Pre-validated client uploads for menu photos, store logos, and cover images with structured storage bucket paths.",
          vi: "Kiểm tra định dạng và dung lượng ảnh phía client trước khi tải lên Supabase Storage theo cấu trúc đường dẫn gọn gàng.",
        },
      },
      {
        title: {
          en: "Turnkey Local SEO Architecture",
          vi: "Tối Ưu SEO Địa Phương Đầy Đủ",
        },
        description: {
          en: "JSON-LD schema markup, automated dynamic sitemap.ts, robots.ts, OpenGraph metadata, and Vietnamese diacritic URL slugs.",
          vi: "Schema cấu trúc JSON-LD, sitemap.ts tự động, thẻ OpenGraph và tạo đường dẫn URL chuẩn SEO không dấu tiếng Việt.",
        },
      },
    ],
    technicalHighlights: [
      {
        en: "Built with Next.js 14 App Router, React Server Components, TypeScript, and Tailwind CSS.",
        vi: "Xây dựng với Next.js 14 App Router, React Server Components, TypeScript và Tailwind CSS.",
      },
      {
        en: "Supabase backend utilizing PostgreSQL, Supabase Auth, and Storage with strict RLS policies.",
        vi: "Hệ thống Supabase tích hợp PostgreSQL, Supabase Auth và Storage với chính sách RLS chặt chẽ.",
      },
      {
        en: "Single-point middleware auth guard with HTTP 303 redirects eliminating circular redirect loops.",
        vi: "Middleware bảo vệ xác thực tập trung sử dụng mã HTTP 303 loại bỏ nguy cơ lặp chuyển hướng 307.",
      },
      {
        en: "High-performance image optimization using Next/Image with CDN delivery.",
        vi: "Tối ưu hóa ảnh với Next/Image kết hợp mạng phân phối nội dung CDN.",
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Eliminating complex Next.js middleware authentication loops and flickering redirects on edge route transitions.",
          vi: "Loại bỏ hoàn toàn hiện tượng redirect loop và nhấp nháy giao diện khi chuyển hướng bảo vệ trang admin.",
        },
        resolution: {
          en: "Configured explicit HTTP 303 See Other response codes in middleware while ensuring server layout components never trigger conflicting client redirects.",
          vi: "Cấu hình chuẩn mã phản hồi HTTP 303 trong middleware và bảo đảm layout server không kích hoạt redirect xung đột phía client.",
        },
      },
      {
        challenge: {
          en: "Handling image uploads securely without exposing storage bucket secrets or straining server memory with buffer streams.",
          vi: "Xử lý tải ảnh an toàn mà không làm lộ secret key của storage hay gây tốn bộ nhớ server vì buffer.",
        },
        resolution: {
          en: "Implemented client-side file sanitization and uploaded directly to public Supabase Storage buckets using scoped authenticated tokens.",
          vi: "Kiểm tra kích thước và loại file ngay tại client trước khi đẩy trực tiếp lên bucket Supabase Storage qua token xác thực.",
        },
      },
    ],
    learnings: [
      {
        en: "Building production-ready Jamstack / BaaS applications leveraging Supabase Row Level Security and Server Actions.",
        vi: "Kỹ năng xây dựng ứng dụng Jamstack thương mại với Supabase RLS và React Server Actions.",
      },
      {
        en: "Local SEO engineering with microdata schemas, localized slugs, and dynamic sitemap generation.",
        vi: "Kỹ thuật tối ưu SEO địa phương với microdata schema, slug tiếng Việt chuẩn và sitemap động.",
      },
    ],
    techStack: [
      {
        category: { en: "Frontend & RSC", vi: "Frontend & RSC" },
        items: ["Next.js 14", "React Server Components", "TypeScript", "Tailwind CSS", "Lucide Icons", "Sonner"],
      },
      {
        category: { en: "Backend & BaaS", vi: "Backend & BaaS" },
        items: ["Supabase (PostgreSQL, Auth, Storage)", "Server Actions", "Zod", "Row Level Security (RLS)"],
      },
      {
        category: { en: "SEO & Formats", vi: "SEO & Định Dạng" },
        items: ["JSON-LD Schema", "Sitemap & Robots API", "Intl Currency Formatter", "Google Maps Embed"],
      },
    ],
    myRole: {
      en: "Designed and developed the entire application (Storefront UI, Admin CMS, Supabase Database, SEO).",
      vi: "Thiết kế và phát triển toàn bộ ứng dụng (Giao diện đặt bàn, Admin CMS, Cơ sở dữ liệu Supabase, SEO).",
    },
    links: {
      github: "https://github.com/TranHoDuyAnh/Tiemnguoiquang",
    },
  },
  {
    id: "shi-perfume",
    name: "Shi Perfume — Luxury Catalog",
    slug: "shi-perfume",
    featured: true,
    featuredRank: 5,
    image: "/projects/Perfume.png",
    screenshots: [
      {
        url: "/projects/Perfume.png",
        role: "default",
        title: {
          en: "Shi Perfume Luxury Catalog Homepage",
          vi: "Trang Chủ Catalog Nước Hoa Cao Cấp Shi Perfume",
        },
        description: {
          en: "Editorial fragrance catalog with multi-criteria filtering (brand, notes, gender, price) and direct Facebook/Zalo advisory.",
          vi: "Catalog nước hoa phong cách Editorial cao cấp với bộ lọc đa tiêu chí và tư vấn trực tiếp qua Facebook / Zalo.",
        },
      },
    ],
    badge: {
      en: "Luxury E-Commerce Catalog",
      vi: "Catalog Thương Mại Cao Cấp",
    },
    category: {
      en: "E-Commerce & Server Actions / BaaS",
      vi: "Thương Mại Điện Tử & Server Actions / BaaS",
    },
    shortDescription: {
      en: "High-end fragrance catalog platform featuring Next.js 16, Supabase PostgreSQL with GIN full-text search, and an administrative inventory CMS.",
      vi: "Nền tảng catalog nước hoa cao cấp xây dựng với Next.js 16, Supabase PostgreSQL chỉ mục tìm kiếm GIN và hệ quản trị kho hàng CMS.",
    },
    overview: {
      en: "Shi Perfume is an editorial luxury fragrance showcase designed without cart friction, connecting clients directly with fragrance consultants via Facebook Messenger and Zalo. It features a sophisticated zero-radius modernist aesthetic, detailed 9-attribute fragrance olfactory profiles, and an authenticated administrative panel for inventory, pricing, and multi-asset gallery uploads.",
      vi: "Shi Perfume là nền tảng trưng bày nước hoa cao cấp theo phong cách editorial không giỏ hàng, kết nối khách hàng trực tiếp với chuyên viên tư vấn qua Facebook Messenger và Zalo. Giao diện thiết kế theo triết lý zero-radius sang trọng, bảng phân tích 9 tầng hương chuyên sâu và hệ quản trị admin bảo mật để cập nhật kho hàng, giá cả và upload thư viện ảnh.",
    },
    problem: {
      en: "High-end niche perfume retailers lose conversions on generic e-commerce templates cluttered with checkout barriers. Fragrances require personalized scent consultation, olfactory pyramids (Top/Heart/Base notes), and longevity/projection specs that conventional shopping carts fail to showcase gracefully.",
      vi: "Các cửa hàng nước hoa niche cao cấp thường bị giảm chuyển đổi khi dùng template bán hàng thông thường rườm rà. Nước hoa là mặt hàng đặc thù cần tư vấn cá nhân hóa, hiển thị rõ kim tự tháp mùi hương (hương đầu/giữa/cuối), độ lưu hương và tỏa hương mà các web bán lẻ đại trà không đáp ứng được.",
    },
    solution: {
      en: "Architected an ultra-fast catalog using Next.js 16 App Router, React 19, and Tailwind CSS v4. Implemented Supabase PostgreSQL with GIN full-text indexes for instant brand/scent queries, Zustand for filter state management, zero-API Next.js Server Actions for authenticated administrative CRUD, and Supabase Storage for multi-photo gallery management.",
      vi: "Thiết kế catalog tốc độ cao với Next.js 16 App Router, React 19 và Tailwind CSS v4. Sử dụng Supabase PostgreSQL với chỉ mục GIN full-text search để tìm kiếm nhanh theo thương hiệu và mùi hương, Zustand quản lý trạng thái bộ lọc, Server Actions xử lý CRUD quản trị an toàn không cần API route trung gian và Supabase Storage quản lý thư viện ảnh nhiều góc chụp.",
    },
    architecture: {
      overview: {
        en: "Modernist catalog architecture built with Next.js 16 Server Components and Server Actions, backed by Supabase PostgreSQL (GIN search index) and Supabase Storage bucket.",
        vi: "Kiến trúc catalog hiện đại kết hợp Next.js 16 Server Components và Server Actions, vận hành trên nền Supabase PostgreSQL (chỉ mục tìm kiếm GIN) và Supabase Storage.",
      },
      diagram: `[ Client: Luxury Fragrance Shopper ]        [ Boutique Administrator ]
              │                                      │
              ▼                                      ▼
[ Next.js 16 App Router (RSC) ]        [ Admin Portal (/admin) ]
  ├── Hero & Multi-Criteria Filters      ├── Dashboard Stats (Brands, Low Stock)
  ├── 9-Field Olfactory Specs Detail     ├── Product CRUD with Zod Validation
  └── 1-Click Facebook / Zalo Advisory   └── Multi-Image Gallery Upload
              │                                      │
              ▼ (Zustand & TanStack Query)           ▼ (Supabase Auth Session)
        [ Next.js Middleware Guard (Session Refresh & Admin Protection) ]
                             │
                             ▼ (Server Actions)
            [ Supabase Cloud Infrastructure ]
  ├── PostgreSQL Database (GIN Full-Text Indexes: to_tsvector)
  ├── Supabase Storage (Public 'perfumes' Bucket)
  └── Supabase GoTrue Auth (Admin Role Guard)`,
      highlights: [
        {
          en: "Next.js 16 App Router with React 19 and Tailwind CSS v4 @theme design tokens.",
          vi: "Next.js 16 App Router với React 19 và hệ thống design token Tailwind CSS v4 @theme.",
        },
        {
          en: "Supabase GIN full-text search index (to_tsvector) delivering instantaneous multi-field filtering.",
          vi: "Chỉ mục tìm kiếm GIN full-text search trên PostgreSQL cho tốc độ lọc đa tiêu chí tức thì.",
        },
        {
          en: "Single-admin RBAC with Supabase GoTrue Auth and Next.js middleware session guards.",
          vi: "Bảo mật tài khoản quản trị duy nhất bằng Supabase GoTrue Auth và middleware kiểm soát session.",
        },
      ],
    },
    keyFeatures: [
      {
        title: {
          en: "Multi-Criteria Olfactory Search",
          vi: "Bộ Lọc & Tìm Kiếm Đa Tiêu Chí",
        },
        description: {
          en: "Debounced real-time filtering across Brand, Gender, Volume, Price Range, and Sort order powered by Zustand store.",
          vi: "Bộ lọc thời gian thực debounced theo Thương hiệu, Giới tính, Dung tích, Khoảng giá và Sắp xếp qua Zustand store.",
        },
      },
      {
        title: {
          en: "9-Field Fragrance Olfactory Specs",
          vi: "Hồ Sơ Mùi Hương 9 Trường Chuyên Sâu",
        },
        description: {
          en: "Detailed product pages with scent pyramid (Top/Heart/Base notes), longevity, sillage projection, style, and occasion.",
          vi: "Trang chi tiết mùi hương với kim tự tháp mùi hương (hương đầu/giữa/cuối), độ bám tỏa, phong cách và hoàn cảnh sử dụng.",
        },
      },
      {
        title: {
          en: "Direct Advisory Integration",
          vi: "Tư Vấn 1-Chạm Qua Facebook & Zalo",
        },
        description: {
          en: "Direct inquiry buttons connecting customers with boutique fragrance specialists, bypassing cart drop-off.",
          vi: "Nút liên hệ tư vấn trực tiếp qua Facebook Messenger và Zalo, tối ưu tỷ lệ chốt đơn mà không qua giỏ hàng rườm rà.",
        },
      },
      {
        title: {
          en: "Admin Inventory CMS & Stats",
          vi: "Hệ Quản Trị Kho Hàng & Thống Kê Admin",
        },
        description: {
          en: "Authenticated administrative portal tracking total catalog items, active brands, and low stock warnings with quick active/inactive toggles.",
          vi: "Bảng điều khiển admin theo dõi tổng sản phẩm, số thương hiệu hoạt động, cảnh báo sắp hết hàng và bật/tắt hiển thị sản phẩm.",
        },
      },
      {
        title: {
          en: "Multi-Image Storage Pipeline",
          vi: "Tải Thư Viện Ảnh Lên Supabase Storage",
        },
        description: {
          en: "Multi-image gallery uploads directly to Supabase Storage bucket 'perfumes' with AlertDialog deletion confirmation.",
          vi: "Tải ảnh đại diện và thư viện ảnh phụ trực tiếp lên Supabase Storage với hộp thoại xác nhận xóa an toàn.",
        },
      },
    ],
    technicalHighlights: [
      {
        en: "Built with Next.js 16 App Router, React 19, TypeScript strict mode, and Tailwind CSS v4.",
        vi: "Xây dựng với Next.js 16 App Router, React 19, TypeScript strict và Tailwind CSS v4.",
      },
      {
        en: "Server Actions mutation layer eliminating manual REST boilerplate.",
        vi: "Tầng mutation thuần Server Actions loại bỏ hoàn toàn boilerplate của REST API trung gian.",
      },
      {
        en: "Optimized typography pairing Bodoni Moda with Montserrat and architectural 0-radius aesthetics.",
        vi: "Kết hợp font Bodoni Moda và Montserrat theo phong cách modernist sang trọng viền phẳng 0-radius.",
      },
      {
        en: "Comprehensive Product Schema (JSON-LD), automated sitemap, and dynamic OpenGraph social cards.",
        vi: "Tích hợp đầy đủ Schema Product JSON-LD, sitemap tự động và thẻ OpenGraph chuẩn SEO.",
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Implementing lightning-fast searches across large fragrance catalogs with multi-word scent notes and Vietnamese brand accents.",
          vi: "Xử lý tìm kiếm tức thì trên danh mục nước hoa phong phú với ghi chú hương nhiều tầng và tên thương hiệu tiếng Việt.",
        },
        resolution: {
          en: "Created PostgreSQL GIN indexes on to_tsvector('simple', name) and brand, combined with client-side debounced query triggers.",
          vi: "Thiết lập chỉ mục PostgreSQL GIN trên biểu thức to_tsvector kết hợp kỹ thuật debounce phía client để tối ưu tần suất truy vấn.",
        },
      },
      {
        challenge: {
          en: "Ensuring secure single-admin mutations without granting public client tokens write access to the catalog.",
          vi: "Đảm bảo tính bảo mật tuyệt đối cho quyền cập nhật sản phẩm mà không cấp quyền ghi cho token public của client.",
        },
        resolution: {
          en: "Configured Supabase Row Level Security (RLS) restricting INSERT/UPDATE/DELETE strictly to authenticated admin sessions verified in server actions.",
          vi: "Cấu hình chính sách Supabase RLS giới hạn các quyền INSERT/UPDATE/DELETE chỉ dành riêng cho session admin đã xác thực trong Server Actions.",
        },
      },
    ],
    learnings: [
      {
        en: "Leveraging Tailwind CSS v4 theme variables and Next.js 16 Server Components for luxury editorial experiences.",
        vi: "Kỹ năng khai thác Tailwind CSS v4 và Next.js 16 Server Components để kiến tạo trải nghiệm thương mại cao cấp.",
      },
      {
        en: "Architecting zero-cart advisory commerce workflows that improve conversion for high-ticket niche products.",
        vi: "Tư duy thiết kế luồng thương mại tư vấn không giỏ hàng, tối ưu hóa tỷ lệ chuyển đổi cho sản phẩm giá trị cao.",
      },
    ],
    techStack: [
      {
        category: { en: "Frontend & UI", vi: "Frontend & UI" },
        items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Zustand", "TanStack Query", "Framer Motion"],
      },
      {
        category: { en: "Backend & BaaS", vi: "Backend & BaaS" },
        items: ["Supabase (PostgreSQL, Auth, Storage)", "Server Actions", "Zod", "Row Level Security (RLS)"],
      },
      {
        category: { en: "Design & SEO", vi: "Thiết Kế & SEO" },
        items: ["Bodoni Moda / Montserrat", "JSON-LD Product Schema", "Open Graph", "Sitemap API"],
      },
    ],
    myRole: {
      en: "Designed and developed the entire application (Storefront UI, Admin Inventory CMS, Supabase Database & Search, SEO).",
      vi: "Thiết kế và phát triển toàn bộ ứng dụng (Giao diện Catalog, Admin CMS quản lý kho, Cơ sở dữ liệu Supabase, SEO).",
    },
    links: {
      github: "https://github.com/TranHoDuyAnh/Shi-Perfume",
    },
  },
  {
    id: "ev-battery-swap",
    name: "EV Battery Swap Station Management System",
    slug: "ev-battery-swap",
    featured: true,
    featuredRank: 6,
    image: "/projects/Evbattery.png",
    screenshots: [
      {
        url: "/projects/Evbattery.png",
        role: "default",
        title: {
          en: "EV Battery Swap Station Platform & Interactive Map",
          vi: "Nền Tảng Quản Lý Trạm Đổi Pin Xe Điện & Bản Đồ Số",
        },
        description: {
          en: "Full-scale multi-role operational portal connecting drivers, station staff, and network admins with live battery inventory tracking and cashless checkout.",
          vi: "Cổng vận hành đa vai trò quy mô lớn kết nối tài xế, nhân viên trạm và quản trị viên mạng lưới với khả năng theo dõi tồn kho pin trực tiếp và thanh toán không tiền mặt.",
        },
      },
    ],
    badge: {
      en: "Green Mobility IoT & Clean Architecture",
      vi: "Giao Thông Xanh & Kiến Trúc Đa Tầng",
    },
    category: {
      en: "IoT / Mobility & Enterprise Platform",
      vi: "IoT / Di Động & Hệ Thống Doanh Nghiệp",
    },
    shortDescription: {
      en: "Enterprise full-stack ecosystem for electric vehicle battery swapping, featuring .NET 8 Web API, React 19 + MUI, Leaflet GPS mapping, and automated VNPay billing.",
      vi: "Hệ sinh thái toàn diện quản lý trạm đổi pin xe điện với .NET 8 Web API, React 19 + MUI, bản đồ Leaflet định vị trạm và cổng thanh toán tự động VNPay.",
    },
    overview: {
      en: "An end-to-end multi-role operational management system for modern Electric Vehicle (EV) battery swap networks. It unites Drivers (station discovery via GPS, reservation booking, subscription packages, contactless billing), Station Staff (physical battery inspection, state-of-health tracking, 2-step swap execution), and Enterprise Administrators (network-wide battery redistribution, revenue audits, staff shifts) into a high-throughput, secure ecosystem.",
      vi: "Hệ thống quản lý vận hành toàn diện đa người dùng cho mạng lưới trạm đổi pin xe điện thông minh. Kết nối Tài xế (tìm trạm qua bản đồ GPS, đặt lịch đổi pin, mua gói cước thuê bao, thanh toán số), Nhân viên trạm (kiểm tra chỉ số SoH, thực hiện thao tác đổi pin cũ - pin mới, giải quyết sự cố) và Quản trị viên (điều phối kho pin liên trạm, đối soát doanh thu, phân ca nhân viên) trong một nền tảng thống nhất và bảo mật.",
    },
    problem: {
      en: "Long charging waiting times represent the biggest bottleneck for electric vehicle adoption among commercial fleets and ride-hailing drivers. However, battery swap networks suffer from complex logistical friction: uneven battery charge states across urban stations, manual battery serial tracking, risk of battery degradation disputes, and fragmented offline billing.",
      vi: "Thời gian sạc pin kéo dài là rào cản lớn nhất đối với việc phổ cập xe điện, đặc biệt là các tài xế dịch vụ và đội xe thương mại. Tuy nhiên, mô hình đổi pin gặp khó khăn lớn về điều phối vận hành: pin đầy phân bổ không đều giữa các trạm nội đô, ghi nhận serial pin thủ công dễ sai sót, tranh chấp về độ chai pin và quy trình thu phí tiền mặt rời rạc.",
    },
    solution: {
      en: "Engineered a robust 3-tier architecture with .NET 8 Web API and SQL Server, connected to an intuitive React 19 + Material-UI single-page app with Leaflet GPS mapping. Drivers reserve charged batteries within a 30-minute window; Station Staff execute 2-step verification (FromBatteryId -> ToBatteryId) with automated SoH telemetry; and integrated VNPay IPN webhook handles instant settlement for both pay-per-swap and monthly subscription plans.",
      vi: "Xây dựng kiến trúc 3 tầng chuẩn mực gồm .NET 8 Web API, Entity Framework Core và SQL Server, kết hợp giao diện React 19 + MUI và bản đồ số Leaflet. Tài xế dễ dàng giữ chỗ pin đầy trước 30 phút; Nhân viên trạm kích hoạt quy trình đổi pin 2 bước chuẩn hóa (thu hồi pin cũ -> cấp pin mới) với kiểm tra sức khỏe pin tự động; cổng VNPay IPN xử lý thanh toán tự động cho cả giao dịch đổi lẻ và gói cước thuê bao tháng.",
    },
    architecture: {
      overview: {
        en: ".NET 8 layered architecture (Web API -> Service Layer -> Repository Pattern) connected to SQL Server via EF Core 9, secured with JWT and integrated with VNPay gateways and Leaflet GIS.",
        vi: "Kiến trúc đa tầng .NET 8 (Web API -> Service Layer -> Repository Pattern) kết nối SQL Server qua EF Core 9, bảo mật bằng JWT và tích hợp cổng thanh toán VNPay cùng bản đồ Leaflet.",
      },
      diagram: `graph TD
    subgraph Clients["Frontend Clients (React 19 + Vite + MUI)"]
        DriverPortal["Driver Portal\\n(Leaflet Maps, Reservations, Vehicle VIN)"]
        StaffPortal["Staff Operations\\n(Battery Inventory, Swap Execution, Tickets)"]
        AdminPortal["Admin Dashboard\\n(Station Fleet, Analytics, Staff Management)"]
    end

    subgraph Gateway["ASP.NET Core Web API (.NET 8)"]
        JWTAuth["JWT Bearer Authentication & RBAC"]
        OData["OData 9 Querying & Filtering"]
        Controllers["17 Specialized REST Controllers"]
    end

    subgraph ServiceLayer["Business Logic & Service Layer"]
        SwapSvc["Battery Swap Workflow Engine"]
        StationSvc["Geospatial Station & Inventory Service"]
        VNPaySvc["VNPay Payment & Hash Verification Service"]
        FirebaseSvc["Firebase Storage (Vehicle & Asset Proofs)"]
    end

    subgraph DataLayer["Data & Persistence Layer"]
        EF["Entity Framework Core 9"]
        SQLServer[("Microsoft SQL Server\\n(Stations, Batteries, Swaps, Invoices)")]
    end

    DriverPortal --> JWTAuth
    StaffPortal --> JWTAuth
    AdminPortal --> JWTAuth
    JWTAuth --> Controllers
    Controllers --> SwapSvc
    Controllers --> StationSvc
    Controllers --> VNPaySvc
    Controllers --> FirebaseSvc
    SwapSvc --> EF
    StationSvc --> EF
    VNPaySvc --> EF
    EF --> SQLServer`,
      highlights: [
        {
          en: "3-tier Layered Architecture enforcing strict separation between API Controllers, Service business logic, and EF Core Repositories.",
          vi: "Mô hình kiến trúc 3 tầng đảm bảo phân tách trách nhiệm tuyệt đối giữa API Controllers, Service nghiệp vụ và Repository EF Core.",
        },
        {
          en: "Geospatial station discovery leveraging Leaflet map overlays with real-time battery status counters (Available, Charging, Maintenance).",
          vi: "Định vị trạm sạc trên nền bản đồ Leaflet với trạng thái pin cập nhật trực quan (Sẵn sàng, Đang sạc, Bảo dưỡng).",
        },
        {
          en: "Dual payment gateway architecture: Pay-per-swap microtransactions and recurring monthly subscription packages via VNPay checksum validation.",
          vi: "Kiến trúc thanh toán kép: Trả phí theo từng lượt đổi pin hoặc đăng ký gói thuê bao tháng tích hợp xác thực chữ ký số VNPay.",
        },
      ],
    },
    keyFeatures: [
      {
        title: {
          en: "GPS Station Discovery & Real-Time Battery Stock",
          vi: "Bản Đồ Tìm Kiếm Trạm GPS & Tồn Kho Pin Thời Gian Thực",
        },
        description: {
          en: "Interactive Leaflet map showing nearby stations with real-time counters of available, charging, and maintenance batteries.",
          vi: "Bản đồ tương tác Leaflet hiển thị các trạm gần nhất kèm số lượng pin sẵn sàng, đang sạc và bảo dưỡng cập nhật tức thì.",
        },
      },
      {
        title: {
          en: "Standardized 2-Step Battery Swap Workflow",
          vi: "Quy Trình Đổi Pin Chuẩn Hóa 2 Bước",
        },
        description: {
          en: "Station staff safely log the returned degraded battery (FromBatteryId), inspect State-of-Health (SoH), and pair the fresh battery (ToBatteryId).",
          vi: "Nhân viên trạm kiểm tra và ghi nhận pin cũ thu hồi (FromBatteryId), đo chỉ số độ chai pin (SoH) và kích hoạt pin mới thay thế (ToBatteryId).",
        },
      },
      {
        title: {
          en: "Vehicle VIN Registration & Firebase Asset Storage",
          vi: "Đăng Ký Phương Tiện Mã VIN & Lưu Trữ Ảnh Firebase",
        },
        description: {
          en: "Drivers register electric vehicles using VIN codes with photo documentation stored securely on Firebase Storage.",
          vi: "Tài xế quản lý danh sách xe điện theo mã định danh VIN kèm hình ảnh phương tiện được lưu trữ bảo mật trên Firebase Storage.",
        },
      },
      {
        title: {
          en: "Cashless VNPay Payment & Subscription Plans",
          vi: "Thanh Toán Không Tiền Mặt VNPay & Gói Cước Thuê Bao",
        },
        description: {
          en: "Full integration with VNPay payment URLs, SHA256 checksum verification, and instant callback handling for both pay-per-swap and monthly passes.",
          vi: "Tích hợp toàn diện cổng thanh toán VNPay, xác thực mã băm SHA256 và webhook cập nhật hóa đơn tự động cho cả vé lẻ và gói cước tháng.",
        },
      },
      {
        title: {
          en: "Multi-Role Station & Staff Management Portal",
          vi: "Cổng Quản Trị Hệ Thống & Phân Quyền Đa Vai Trò",
        },
        description: {
          en: "Comprehensive Admin and Staff interfaces for battery transfers, technician assignment, dispute ticket resolution, and station ratings.",
          vi: "Giao diện quản trị viên và nhân viên toàn diện hỗ trợ điều phối pin liên trạm, phân ca trực, xử lý ticket khiếu nại và đánh giá dịch vụ.",
        },
      },
    ],
    technicalHighlights: [
      {
        en: "Built with ASP.NET Core Web API on .NET 8 with clean Controller-Service-Repository separation.",
        vi: "Xây dựng trên nền ASP.NET Core Web API (.NET 8) với cấu trúc Controller-Service-Repository rõ ràng.",
      },
      {
        en: "Entity Framework Core 9 integration with SQL Server, OData 9 querying, and AutoMapper DTO transformations.",
        vi: "Sử dụng Entity Framework Core 9 kết nối SQL Server, hỗ trợ truy vấn nâng cao OData 9 và chuyển đổi AutoMapper DTO.",
      },
      {
        en: "React 19 Single Page Application with Material-UI (MUI v7), Redux Toolkit state slice architecture, and Vite 7.",
        vi: "Giao diện React 19 SPA hoàn chỉnh sử dụng Material-UI (MUI v7), kiến trúc Redux Toolkit và công cụ đóng gói Vite 7.",
      },
      {
        en: "Interactive Leaflet & React-Leaflet GIS integration with custom station pins and dynamic radius searching.",
        vi: "Tích hợp bản đồ địa lý tương tác Leaflet & React-Leaflet với biểu tượng trạm tùy biến và tính năng tìm kiếm theo bán kính.",
      },
      {
        en: "End-to-end security with JWT Bearer tokens, BCrypt password hashing, and role-based authorization (Admin, Staff, Driver).",
        vi: "Bảo mật toàn diện với xác thực JWT Bearer, mã hóa mật khẩu BCrypt và chính sách phân quyền theo vai trò (Admin, Staff, Driver).",
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Preventing double-booking and race conditions when multiple drivers attempt to reserve the same charged battery during peak hours.",
          vi: "Ngăn chặn xung đột đặt trùng pin (race condition) khi nhiều tài xế cùng thao tác giữ chỗ pin tại một trạm trong giờ cao điểm.",
        },
        resolution: {
          en: "Implemented an atomic reservation state machine with a 30-minute expiration window and SQL transaction locks on battery availability status.",
          vi: "Thiết kế máy trạng thái đặt lịch nguyên tử với thời hạn giữ chỗ 30 phút và khóa giao dịch CSDL SQL Server trên trạng thái sẵn sàng của pin.",
        },
      },
      {
        challenge: {
          en: "Ensuring fault-tolerant payment reconciliation when network drops occur between VNPay callback and client redirect.",
          vi: "Đảm bảo đối soát thanh toán an toàn, không thất thoát đơn hàng khi gặp sự cố ngắt kết nối mạng giữa VNPay callback và client redirect.",
        },
        resolution: {
          en: "Configured an idempotent VNPay IPN (Instant Payment Notification) server webhook with secure SHA256 checksum verification and retry logic.",
          vi: "Thiết lập webhook máy chủ VNPay IPN với tính chất idempotent (bất biến), xác thực chữ ký số SHA256 và cơ chế tự động đồng bộ trạng thái hóa đơn.",
        },
      },
    ],
    learnings: [
      {
        en: "Mastered enterprise 3-tier .NET 8 architecture, repository patterns, and DTO projection workflows.",
        vi: "Làm chủ kiến trúc 3 tầng doanh nghiệp trên .NET 8, mô hình Repository và quy trình ánh xạ DTO an toàn.",
      },
      {
        en: "Deepened expertise in Leaflet GIS mapping, Redux Toolkit state slices, and third-party payment gateway integration.",
        vi: "Nâng cao kỹ năng tích hợp bản đồ số Leaflet GIS, quản lý trạng thái tập trung với Redux Toolkit và cổng thanh toán số.",
      },
    ],
    techStack: [
      {
        category: { en: "Backend & Systems", vi: "Backend & Hệ Thống" },
        items: [".NET 8", "ASP.NET Core Web API", "Entity Framework Core 9", "SQL Server", "OData 9", "JWT Bearer", "BCrypt"],
      },
      {
        category: { en: "Frontend & UI", vi: "Frontend & UI" },
        items: ["React 19", "Material-UI (MUI v7)", "Redux Toolkit", "React Router v7", "Leaflet / React-Leaflet", "Vite 7", "Axios"],
      },
      {
        category: { en: "Integrations & Storage", vi: "Tích Hợp & Lưu Trữ" },
        items: ["VNPay Gateway", "Firebase Storage", "SMTP Email OTP", "AutoMapper"],
      },
    ],
    myRole: {
      en: "Full-Stack Software Engineer — Developed core .NET 8 Web API endpoints, designed SQL Server relational schema, integrated VNPay checkout, and built the React 19 + Leaflet driver & staff interfaces.",
      vi: "Kỹ sư phần mềm Full-Stack — Phát triển các API cốt lõi trên .NET 8, thiết kế cơ sở dữ liệu SQL Server, tích hợp thanh toán VNPay và xây dựng giao diện tài xế/nhân viên với React 19 & Leaflet.",
    },
    links: {
      github: "https://github.com/TranHoDuyAnh/EvBatterySwapStationManagementSystem",
    },
  },
  {
    id: "moonbean-coffee",
    name: "Moonbean Coffee",
    slug: "moonbean-coffee",
    featured: true,
    featuredRank: 7,
    image: "/projects/Moonbean.png",
    screenshots: [
      {
        url: "/projects/Moonbean.png",
        role: "default",
        title: {
          en: "Moonbean Coffee Editorial Storefront & Menu",
          vi: "Giao Diện Moonbean Coffee & Thực Đơn Editorial",
        },
        description: {
          en: "Editorial F&B showcase featuring dynamic category filtering, interactive table reservations, and containerized PostgreSQL database.",
          vi: "Trải nghiệm F&B mang phong cách Editorial với lọc danh mục realtime, đặt bàn trực tuyến và cơ sở dữ liệu PostgreSQL trong Docker.",
        },
      },
    ],
    badge: {
      en: "Editorial F&B Platform",
      vi: "Nền Tảng F&B Editorial",
    },
    category: {
      en: "Full-Stack Web & Reservation System",
      vi: "Full-Stack Web & Hệ Thống Đặt Bàn",
    },
    shortDescription: {
      en: "Specialty coffee shop platform featuring real-time menu filtering, instant table reservations, and an administrative CMS operating 100% offline via Docker.",
      vi: "Nền tảng thương hiệu cà phê specialty với lọc thực đơn thời gian thực, đặt bàn thông minh và cổng quản trị CMS vận hành 100% local qua Docker.",
    },
    overview: {
      en: "Moonbean Coffee is a production-quality F&B demo platform engineered for Shi Studio under the motto 'Good coffee. Slow moments.' It brings an editorial digital dining experience with real-time menu search across five categories, online reservation handling with instant confirmation codes, and a full-featured admin dashboard backed by PostgreSQL 16 and Prisma ORM 5.",
      vi: "Moonbean Coffee là nền tảng F&B chất lượng cao được thiết kế và phát triển cho Shi Studio với tinh thần 'Good coffee. Slow moments.' Hệ thống mang đến trải nghiệm số thanh lịch với tính năng lọc thực đơn thời gian thực trên 5 danh mục, đặt bàn trực tuyến cấp mã xác nhận tức thì, và cổng quản trị CMS toàn diện trên nền tảng PostgreSQL 16 và Prisma ORM 5.",
    },
    problem: {
      en: "Artisanal specialty coffee shops often rely on third-party social pages or slow generic CMS builders that cannot offer smooth editorial typography, instant category browsing, or a dedicated table reservation pipeline with guest capacity and operational status tracking.",
      vi: "Các quán cà phê specialty thường phụ thuộc vào fanpage hoặc các CMS dựng sẵn nặng nề, không thể hiện được tính thẩm mỹ thương hiệu, thiếu khả năng duyệt thực đơn siêu tốc và không có luồng đặt bàn tùy biến với số lượng khách và quản trị bàn tập trung.",
    },
    solution: {
      en: "Architected a high-performance Next.js 15 App Router solution with Server Actions for zero-overhead booking mutations, client-side category filtering, and a secure admin CMS secured via HTTP-only JWT cookies to handle booking confirmations and menu availability in real time.",
      vi: "Xây dựng giải pháp Next.js 15 App Router hiệu năng cao kết hợp Server Actions để xử lý đặt bàn trực tiếp vào PostgreSQL, lọc thực đơn tức thì phía client, và cổng Admin CMS bảo mật bằng HTTP-only JWT cookie cho phép duyệt lịch đặt bàn và quản lý thực đơn tức thì.",
    },
    architecture: {
      overview: {
        en: "Full-stack Next.js 15 monolithic architecture with Server Actions, Prisma ORM 5 data access layer, and PostgreSQL 16 containerized with Docker Compose for seamless 100% local offline execution.",
        vi: "Kiến trúc Next.js 15 full-stack với Server Actions, tầng truy xuất dữ liệu Prisma ORM 5 và PostgreSQL 16 container hóa bằng Docker Compose đảm bảo chạy 100% offline mượt mà.",
      },
      diagram: `
+------------------------------------------------------------------------+
|                      CLIENT / BROWSER RUNTIME                          |
|  Next.js 15 App Router | Editorial Typography | Realtime Filter UI     |
+------------------------------------------------------------------------+
                                |
             +------------------+------------------+
             |                                     |
   [Client Actions / Form]              [Admin Management / JWT]
             |                                     |
             v                                     v
+------------------------------------------------------------------------+
|                       SERVER & API LAYER                               |
|  Next.js Server Actions | Jose JWT Auth | Bcrypt Password Security     |
+------------------------------------------------------------------------+
                                |
                                v
+------------------------------------------------------------------------+
|                       PRISMA ORM 5 LAYER                               |
|  Type-Safe Repositories: Category, MenuItem, Booking, ContactMessage   |
+------------------------------------------------------------------------+
                                |
                                v
+------------------------------------------------------------------------+
|                     DOCKERIZED POSTGRESQL 16                           |
|  Healthcheck | Automated Schema Migration | Production Seed Data       |
+------------------------------------------------------------------------+
`,
      highlights: [
        {
          en: "Next.js 15 App Router with Server Actions handling reservations directly into PostgreSQL with atomic status management.",
          vi: "Next.js 15 App Router với Server Actions xử lý đặt bàn trực tiếp vào PostgreSQL với quản lý trạng thái đơn bàn.",
        },
        {
          en: "Secure Admin CMS with bcrypt password hashing and HTTP-Only JWT cookies via Jose library.",
          vi: "Cổng Admin CMS bảo mật với băm mật khẩu bcrypt và JWT cookie HTTP-Only qua thư viện Jose.",
        },
        {
          en: "Zero cloud dependencies: completely containerized via Docker Compose with automated healthcheck and database seeding.",
          vi: "Không phụ thuộc cloud: container hóa toàn diện với Docker Compose kèm healthcheck tự động và seed dữ liệu chuẩn.",
        },
      ],
    },
    keyFeatures: [
      {
        title: {
          en: "Real-Time Menu Explorer",
          vi: "Khám Phá Thực Đơn Real-Time",
        },
        description: {
          en: "Instant client-side categorization (Coffee, Non-Coffee, Tea, Bakery, Dessert) with keyword search, bestseller tags, and dynamic single-item pages.",
          vi: "Bộ lọc danh mục tức thì (Coffee, Non-Coffee, Tea, Bakery, Dessert) kết hợp tìm kiếm từ khóa, huy hiệu Bestseller và trang chi tiết món động.",
        },
      },
      {
        title: {
          en: "Smart Online Table Reservation",
          vi: "Đặt Bàn Trực Tuyến Thông Minh",
        },
        description: {
          en: "Interactive booking form with date/time pickers, guest count validation, special requests, and instant booking ID generation.",
          vi: "Form đặt bàn tương tác chọn ngày giờ, kiểm tra số lượng khách, ghi chú yêu cầu riêng và cấp mã số đặt bàn tức thì.",
        },
      },
      {
        title: {
          en: "Administrative Control Center",
          vi: "Bảng Điều Khiển Quản Trị Viên",
        },
        description: {
          en: "Admin dashboard featuring booking status transitions (Pending, Confirmed, Completed, Cancelled), menu item CRUD with price and availability toggles, and contact inquiry tracking.",
          vi: "Dashboard quản trị hỗ trợ chuyển đổi trạng thái bàn (Chờ duyệt, Đã xác nhận, Hoàn tất, Hủy), CRUD thực đơn kèm bật/tắt Bestseller và quản lý hòm thư.",
        },
      },
    ],
    technicalHighlights: [
      {
        en: "Prisma ORM 5 relational schema modeling Categories, MenuItems, Bookings, and ContactMessages with automated cascade behaviors.",
        vi: "Schema quan hệ Prisma ORM 5 mô hình hóa Danh mục, Món ăn, Lịch đặt bàn và Tin nhắn liên hệ với hành vi cascade tự động.",
      },
      {
        en: "Sub-second cold-start performance through optimized Server Components and local static assets in Docker Compose.",
        vi: "Thời gian phản hồi tức thì nhờ tối ưu hóa Server Components và toàn bộ static assets cục bộ trong Docker Compose.",
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Eliminating reliance on external cloud storage or SaaS databases for offline client demonstrations.",
          vi: "Loại bỏ hoàn toàn sự phụ thuộc vào cloud storage hoặc database SaaS để demo offline cho khách hàng.",
        },
        resolution: {
          en: "Constructed a Docker Compose multi-service architecture coordinating PostgreSQL 16 with healthcheck triggers and automatic database migration / seed scripts.",
          vi: "Thiết kế kiến trúc đa dịch vụ trên Docker Compose điều phối PostgreSQL 16 với healthcheck và script tự động migration/seed dữ liệu.",
        },
      },
    ],
    learnings: [
      {
        en: "Deepened expertise in Next.js Server Actions for full-stack data mutation patterns without boilerplate API route handlers.",
        vi: "Nâng cao kỹ năng khai thác Server Actions trong Next.js để mutation dữ liệu trực tiếp mà không cần viết boilerplate API routes.",
      },
    ],
    techStack: [
      {
        category: { en: "Frontend & Design", vi: "Frontend & Thiết Kế" },
        items: ["Next.js 15 (App Router)", "React 18", "Tailwind CSS", "Lucide React", "Framer Motion"],
      },
      {
        category: { en: "Backend & Database", vi: "Backend & Cơ Sở Dữ Liệu" },
        items: ["Next.js Server Actions", "PostgreSQL 16", "Prisma ORM 5", "Jose (JWT)", "Bcryptjs"],
      },
      {
        category: { en: "DevOps & Infrastructure", vi: "DevOps & Hạ Tầng" },
        items: ["Docker", "Docker Compose", "Multi-stage Builds", "TypeScript Strict"],
      },
    ],
    myRole: {
      en: "Full-Stack Web Developer & UI Designer — Built the editorial storefront, created the Next.js Server Actions booking engine, architected the Prisma database schema, and containerized the system with Docker Compose.",
      vi: "Kỹ sư Full-Stack & UI Designer — Xây dựng giao diện phong cách editorial, phát triển engine đặt bàn bằng Server Actions, thiết kế schema Prisma và đóng gói hệ thống bằng Docker Compose.",
    },
    links: {
      github: "https://github.com/TranHoDuyAnh/Moonbean-Coffee",
    },
  },
  {
    id: "dental-clinic-tam-anh",
    name: "Nha Khoa Tâm Anh",
    slug: "dental-clinic-tam-anh",
    featured: true,
    featuredRank: 8,
    image: "/projects/TamAnh.png",
    screenshots: [
      {
        url: "/projects/TamAnh.png",
        role: "default",
        title: {
          en: "Tâm Anh Dental Clinic Healthcare Portal",
          vi: "Cổng Thông Tin Phòng Khám Nha Khoa Tâm Anh",
        },
        description: {
          en: "Medical-grade healthcare platform featuring 2-way clinical appointment scheduling, doctor specialty profiles, and comprehensive admin CMS.",
          vi: "Nền tảng y tế chuẩn mực với quy trình đặt lịch 2 chiều, hồ sơ bác sĩ chuyên khoa và hệ thống quản trị lâm sàng.",
        },
      },
    ],
    badge: {
      en: "Healthcare UX & Clinical CMS",
      vi: "Healthcare UX & CMS Lâm Sàng",
    },
    category: {
      en: "Full-Stack Healthcare System",
      vi: "Hệ Thống Y Tế & Quản Lý Khám Chữa Bệnh",
    },
    shortDescription: {
      en: "Production-quality healthcare clinic platform featuring 2-way appointment scheduling, doctor matching, medical disclaimers, and comprehensive admin CMS.",
      vi: "Nền tảng phòng khám nha khoa chuẩn mực y tế với đặt lịch 2 chiều, phân bổ bác sĩ chuyên khoa, bảo mật dữ liệu và cổng quản trị CMS toàn diện.",
    },
    overview: {
      en: "Nha Khoa Tâm Anh is a medical-grade healthcare digital platform developed for Shi Studio to demonstrate modern Healthcare UX/UI and robust full-stack engineering. It adheres strictly to medical digital guidelines with transparent service pricing, specialized doctor rosters with clinical backgrounds, and an interactive 2-way booking workflow.",
      vi: "Nha Khoa Tâm Anh là nền tảng chuyển đổi số y tế chuẩn mực được phát triển cho Shi Studio nhằm trình diễn năng lực thiết kế UX/UI Healthcare và kỹ thuật lập trình full-stack cao cấp. Dự án tuân thủ nghiêm ngặt quy tắc minh bạch y tế với bảng giá niêm yết, hồ sơ bác sĩ chuyên khoa và quy trình đặt khám 2 chiều thông minh.",
    },
    problem: {
      en: "Patients seeking dental care require high levels of trust, detailed procedural steps, and transparent pricing. Traditional clinic websites lack interactive doctor scheduling, allow double-booking, and do not provide doctors with real-time appointment dashboards.",
      vi: "Bệnh nhân nha khoa đòi hỏi mức độ tin cậy cao, quy trình điều trị rõ ràng và chi phí minh bạch. Các website phòng khám truyền thống thiếu tính năng đối soát lịch bác sĩ, dễ bị trùng lịch và không có dashboard cập nhật trạng thái bệnh nhân thời gian thực.",
    },
    solution: {
      en: "Engineered a reliable Next.js 15.1.7 and React 19 web application backed by Prisma ORM 6.4.1 and PostgreSQL 16. Implemented a 2-way booking engine (select treatment -> match specialized doctor, or select doctor -> choose corresponding service), protected inputs with Zod validation, and created an Admin CMS with Web Crypto API HMAC-SHA256 session authentication.",
      vi: "Phát triển ứng dụng Next.js 15.1.7 và React 19 tin cậy kết nối Prisma ORM 6.4.1 trên PostgreSQL 16. Triển khai luồng đặt lịch 2 chiều thông minh (chọn dịch vụ -> gợi ý bác sĩ hoặc chọn bác sĩ -> chọn dịch vụ chuyên môn), bảo vệ dữ liệu bằng Zod và cổng quản trị Admin bảo mật bằng HMAC-SHA256 phiên đăng nhập.",
    },
    architecture: {
      overview: {
        en: "Server-driven Next.js 15 architecture utilizing React 19 Server Components, Zod schema validation across client and server boundaries, and PostgreSQL 16 Alpine with Prisma ORM 6.",
        vi: "Kiến trúc Server-driven trên Next.js 15 tận dụng React 19 Server Components, xác thực Zod hai đầu client-server và cơ sở dữ liệu PostgreSQL 16 Alpine qua Prisma ORM 6.",
      },
      diagram: `
+------------------------------------------------------------------------+
|                     HEALTHCARE CLIENT INTERFACE                        |
|  Next.js 15.1.7 | React 19 | Tailwind CSS | Medical Compliance Guard   |
+------------------------------------------------------------------------+
                                |
             +------------------+------------------+
             |                                     |
   [2-Way Booking Engine]                [Admin Clinical CMS]
   Service <-> Doctor Matching            HMAC-SHA256 Web Crypto Session
             |                                     |
             v                                     v
+------------------------------------------------------------------------+
|                   SERVER ACTIONS & ZOD VALIDATION                      |
|  Appointment State Machine | Doctor Schedule Conflict Resolution       |
+------------------------------------------------------------------------+
                                |
                                v
+------------------------------------------------------------------------+
|                         PRISMA ORM 6.4.1                               |
|  Relational Entities: Service, Doctor, Booking, ContactLead, FAQ       |
+------------------------------------------------------------------------+
                                |
                                v
+------------------------------------------------------------------------+
|                     DOCKERIZED POSTGRESQL 16                           |
|  Multi-stage Containerization | Resilient Data Volumes                 |
+------------------------------------------------------------------------+
`,
      highlights: [
        {
          en: "Strict medical compliance: required medical disclaimers on pricing, service procedures, and prescription advice.",
          vi: "Tuân thủ nghiêm ngặt quy tắc y tế: disclaimer y khoa bắt buộc trên bảng giá, quy trình thủ thuật và khuyến cáo.",
        },
        {
          en: "Two-way clinical appointment scheduling matching patient treatments to qualified dental specialists.",
          vi: "Quy trình đặt lịch 2 chiều thông minh liên kết chính xác dịch vụ nha khoa với bác sĩ chuyên khoa phụ trách.",
        },
        {
          en: "Native session authentication using Web Crypto API HMAC-SHA256 with HTTP-only cookies and bcryptjs password hashing.",
          vi: "Phiên đăng nhập Native với Web Crypto API HMAC-SHA256, cookie HTTP-only và băm mật khẩu bằng bcryptjs.",
        },
      ],
    },
    keyFeatures: [
      {
        title: {
          en: "2-Way Intelligent Booking Flow",
          vi: "Quy Trình Đặt Khám 2 Chiều Thông Minh",
        },
        description: {
          en: "Allows patients to book by procedure or by preferred doctor, with past-date blocking and dynamic consultation slot selection.",
          vi: "Cho phép bệnh nhân đặt lịch theo dịch vụ điều trị hoặc theo bác sĩ phụ trách, tự động chặn ngày quá khứ và chọn slot giờ khám linh hoạt.",
        },
      },
      {
        title: {
          en: "Specialist Doctor Profiles",
          vi: "Hồ Sơ Bác Sĩ Chuyên Khoa",
        },
        description: {
          en: "Detailed profiles highlighting clinical experience, university credentials, specialties (implant, orthodontics, cosmetic), and weekly schedules.",
          vi: "Hồ sơ chuyên môn chi tiết thể hiện kinh nghiệm lâm sàng, quá trình đào tạo, chuyên khoa (implant, chỉnh nha, thẩm mỹ) và lịch khám cố định.",
        },
      },
      {
        title: {
          en: "Clinical Admin Dashboard",
          vi: "Trung Tâm Quản Trị Phòng Khám",
        },
        description: {
          en: "Full operations CMS managing appointment statuses (PENDING, CONFIRMED, COMPLETED, CANCELLED), patient leads, service catalogs, and doctor availability.",
          vi: "CMS vận hành quản lý vòng đời lịch khám (Chờ duyệt, Đã xác nhận, Hoàn tất, Đã hủy), tin nhắn tư vấn, danh mục dịch vụ và trạng thái nhận lịch bác sĩ.",
        },
      },
    ],
    technicalHighlights: [
      {
        en: "Strict Zod validation schemas enforcing sanitized phone numbers, valid emails, and boundary constraints on all patient submissions.",
        vi: "Hệ thống schema Zod kiểm tra chặt chẽ số điện thoại, định dạng email và ràng buộc dữ liệu đầu vào của bệnh nhân.",
      },
      {
        en: "Prisma 6.4.1 schema with cascading relationships and foreign key constraints between Services, Doctors, and Bookings.",
        vi: "Schema Prisma 6.4.1 với quan hệ khóa ngoại và ràng buộc chặt chẽ giữa Dịch vụ, Bác sĩ và Lịch hẹn khám.",
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Structuring clinical appointment states to prevent doctor scheduling conflicts without external calendaring APIs.",
          vi: "Thiết kế máy trạng thái lịch hẹn lâm sàng tránh xung đột lịch bác sĩ mà không cần phụ thuộc vào API lịch bên ngoài.",
        },
        resolution: {
          en: "Implemented an appointment state-machine in PostgreSQL via Server Actions that locks time slots and updates booking status atomically.",
          vi: "Xây dựng máy trạng thái lịch hẹn trên PostgreSQL qua Server Actions giúp khóa slot giờ khám và cập nhật trạng thái nguyên tử.",
        },
      },
    ],
    learnings: [
      {
        en: "Gained practical experience designing healthcare-grade UX with clean blue medical color palettes, accessibility, and legal disclaimers.",
        vi: "Tích lũy kinh nghiệm thiết kế UX chuyên ngành y tế với bảng màu tin cậy, tính tiện dụng cao và các khuyến cáo pháp lý y khoa.",
      },
    ],
    techStack: [
      {
        category: { en: "Frontend & Styling", vi: "Frontend & Giao Diện" },
        items: ["Next.js 15.1.7", "React 19", "Tailwind CSS", "Lucide React", "TypeScript Strict"],
      },
      {
        category: { en: "Backend & Logic", vi: "Backend & Logic Nghiệp Vụ" },
        items: ["Next.js Server Actions", "Zod 3.24.2", "Web Crypto API (HMAC-SHA256)", "Bcryptjs"],
      },
      {
        category: { en: "Database & DevOps", vi: "Cơ Sở Dữ Liệu & DevOps" },
        items: ["PostgreSQL 16 Alpine", "Prisma ORM 6.4.1", "Docker", "Docker Compose"],
      },
    ],
    myRole: {
      en: "Full-Stack Healthcare Engineer & UX Architect — Designed the medical layout, developed the 2-way clinical appointment engine, implemented Zod validation and native HMAC session security, and containerized the deployment.",
      vi: "Kỹ sư Full-Stack & Kiến trúc sư UX Y tế — Thiết kế giao diện y tế chuẩn mực, phát triển engine đặt khám 2 chiều, tích hợp Zod validation và phiên bảo mật HMAC-SHA256, đóng gói triển khai trên Docker.",
    },
    links: {
      github: "https://github.com/TranHoDuyAnh/DentalClinic-TamAnh",
    },
  },
  {
    id: "lumea-spa",
    name: "Luméa Spa",
    slug: "lumea-spa",
    featured: true,
    featuredRank: 9,
    image: "/projects/Lumea.png",
    screenshots: [
      {
        url: "/projects/Lumea.png",
        role: "default",
        title: {
          en: "Luméa Luxury Spa & Wellness Experience",
          vi: "Trải Nghiệm Spa & Trị Liệu Luméa Cao Cấp",
        },
        description: {
          en: "Luxury wellness platform featuring treatment catalog, online session booking, and administrative dashboard powered by Next.js 15 and Framer Motion.",
          vi: "Nền tảng trị liệu sức khỏe & làm đẹp cao cấp với danh mục dịch vụ chi tiết, đặt lịch chăm sóc trực tuyến và bảng điều khiển quản trị trên Next.js 15 và Framer Motion.",
        },
      },
    ],
    badge: {
      en: "Luxury Wellness & Spa System",
      vi: "Hệ Thống Trị Liệu & Spa Cao Cấp",
    },
    category: {
      en: "Full-Stack Wellness & Booking",
      vi: "Trị Liệu Sức Khỏe & Đặt Lịch Chăm Sóc",
    },
    shortDescription: {
      en: "Editorial luxury spa & wellness platform featuring categorized treatment protocols, guest capacity scheduling, and comprehensive administrative oversight.",
      vi: "Nền tảng spa & wellness sang trọng với danh mục phác đồ trị liệu chuẩn mực, đặt lịch trực tuyến theo số lượng khách và cổng quản trị chuyên nghiệp.",
    },
    overview: {
      en: "Luméa Spa is a premium wellness and beauty care web platform designed for Shi Studio under the brand vision 'A softer way to feel yourself.' It delivers a serene editorial aesthetic with fluid Framer Motion animations, comprehensive treatment breakdowns including benefits and post-care routines, interactive appointment booking with guest capacity options, and a robust admin dashboard.",
      vi: "Luméa Spa là nền tảng web trị liệu và chăm sóc sắc đẹp cao cấp được xây dựng cho Shi Studio với thông điệp 'A softer way to feel yourself.' Hệ thống kết hợp ngôn ngữ thiết kế Editorial mềm mại, hiệu ứng Framer Motion mượt mà, thông tin liệu trình chi tiết (lợi ích, quy trình, chỉ định sau điều trị), luồng đặt lịch thông minh và cổng quản trị chuyên sâu.",
    },
    problem: {
      en: "Luxury spa patrons require clarity regarding treatment durations, therapeutic ingredients, and protocol steps before making an appointment. Off-the-shelf booking tools often feel mechanical and disrupt the serene brand experience.",
      vi: "Khách hàng spa cao cấp luôn muốn tìm hiểu kỹ lưỡng về thời lượng, nguyên liệu và các bước trong phác đồ trị liệu trước khi đặt lịch. Các công cụ đặt lịch phổ thông thường thô ráp và làm giảm đi cảm xúc sang trọng của thương hiệu.",
    },
    solution: {
      en: "Engineered a Next.js 15 and React 19 full-stack application featuring fluid page transitions with Framer Motion, an interactive treatment catalog with real-time filtering, structured array data fields in PostgreSQL via Prisma 6, and a secured JWT admin panel for managing bookings, staff, and wellness therapies.",
      vi: "Xây dựng ứng dụng Next.js 15 & React 19 với chuyển động êm ái bằng Framer Motion, catalog trị liệu phân loại trực quan, trường dữ liệu mảng có cấu trúc trong PostgreSQL qua Prisma 6, và hệ thống Admin bảo mật bằng JWT quản lý đặt chỗ, chuyên viên và liệu trình.",
    },
    architecture: {
      overview: {
        en: "Modern Next.js 15 App Router architecture with Server Actions, Prisma ORM 6.1 data layer, Jose JWT authentication, and Docker Compose deployment.",
        vi: "Kiến trúc Next.js 15 App Router hiện đại với Server Actions, tầng dữ liệu Prisma ORM 6.1, xác thực Jose JWT và đóng gói Docker Compose.",
      },
      diagram: `
+------------------------------------------------------------------------+
|                     WELLNESS CLIENT INTERFACE                          |
|  Next.js 15.1.3 | React 19 | Framer Motion | Editorial Luxury Styling  |
+------------------------------------------------------------------------+
                                |
             +------------------+------------------+
             |                                     |
   [Treatment Explorer]                  [Session Booking Flow]
   Benefits / Steps / Aftercare           Guests / Date / Time Validation
             |                                     |
             v                                     v
+------------------------------------------------------------------------+
|                   SERVER ACTIONS & ZOD ENGINE                          |
|  Atomic Booking Insertion | Treatment CRUD | JWT Jose Authentication   |
+------------------------------------------------------------------------+
                                |
                                v
+------------------------------------------------------------------------+
|                         PRISMA ORM 6.1.0                               |
|  Models: Treatment (Arrays for benefits/process), Booking, Message     |
+------------------------------------------------------------------------+
                                |
                                v
+------------------------------------------------------------------------+
|                     DOCKERIZED POSTGRESQL 16                           |
|  Containerized Storage | Automated Healthcheck & Seeding               |
+------------------------------------------------------------------------+
`,
      highlights: [
        {
          en: "Editorial aesthetic elevated by Framer Motion micro-interactions and high-resolution wellness assets.",
          vi: "Phong cách Editorial sang trọng được nâng tầm nhờ hiệu ứng chuyển động Framer Motion và tài nguyên hình ảnh chất lượng cao.",
        },
        {
          en: "Structured array storage in PostgreSQL via Prisma 6 for treatment benefits, procedural steps, and aftercare guidance.",
          vi: "Lưu trữ mảng có cấu trúc trong PostgreSQL qua Prisma 6 cho các mục lợi ích, quy trình thực hiện và lưu ý sau trị liệu.",
        },
        {
          en: "Comprehensive Admin Management with JWT session handling, booking status pipeline, and treatment catalog CRUD.",
          vi: "Bảng điều khiển quản trị toàn diện với phiên JWT, quy trình xử lý đơn đặt lịch và CRUD danh mục trị liệu.",
        },
      ],
    },
    keyFeatures: [
      {
        title: {
          en: "Therapy & Treatment Catalog",
          vi: "Catalog Phác Đồ Trị Liệu",
        },
        description: {
          en: "Categorized treatments (Facial, Body Massage, Hydrotherapy, Signature Packages) detailing exact durations, pricing, suitability, and step-by-step procedures.",
          vi: "Danh mục liệu trình (Chăm sóc da mặt, Massage toàn thân, Thủy liệu pháp, Gói Signature) hiển thị rõ thời lượng, chi phí, chỉ định và các bước thực hiện.",
        },
      },
      {
        title: {
          en: "Seamless Session Booking",
          vi: "Đặt Lịch Chăm Sóc Trực Tuyến",
        },
        description: {
          en: "Intuitive appointment scheduling with guest capacity selector, preferred treatment linkage, date/time pickers, and health note submissions.",
          vi: "Quy trình đặt lịch trực quan chọn số lượng khách, liên kết liệu trình mong muốn, chọn ngày giờ và ghi chú tình trạng sức khỏe.",
        },
      },
      {
        title: {
          en: "Administrative Operations Suite",
          vi: "Hệ Thống Vận Hành Quản Trị",
        },
        description: {
          en: "Admin dashboard featuring booking status management (PENDING, CONFIRMED, COMPLETED, CANCELLED), treatment editor, team member rosters, and customer messages.",
          vi: "Trang quản trị theo dõi trạng thái đơn đặt lịch (Chờ duyệt, Đã xác nhận, Hoàn tất, Hủy), chỉnh sửa liệu trình, danh sách chuyên viên và tin nhắn khách hàng.",
        },
      },
    ],
    technicalHighlights: [
      {
        en: "Utilized native PostgreSQL String arrays in Prisma 6 for high-speed retrieval of multi-step treatment procedures.",
        vi: "Tận dụng kiểu dữ liệu String array gốc của PostgreSQL trong Prisma 6 để truy xuất siêu tốc các bước quy trình trị liệu.",
      },
      {
        en: "Zod-validated Server Actions delivering rapid validation feedback and protecting the booking pipeline from invalid timestamps.",
        vi: "Server Actions được xác thực bằng Zod phản hồi lỗi tức thì và bảo vệ luồng đặt lịch khỏi các mốc thời gian không hợp lệ.",
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Balancing high visual elegance and fluid animations with optimal Core Web Vitals and zero render lag.",
          vi: "Cân bằng giữa tính thẩm mỹ cao cấp, hiệu ứng chuyển động mượt mà với chỉ số Core Web Vitals tối ưu.",
        },
        resolution: {
          en: "Implemented lazy-loaded Framer Motion viewport triggers combined with Next.js 15 React Server Components.",
          vi: "Triển khai hiệu ứng Framer Motion theo cơ chế kích hoạt viewport kết hợp với React Server Components của Next.js 15.",
        },
      },
    ],
    learnings: [
      {
        en: "Mastered PostgreSQL array schema modeling with Prisma 6 and polished editorial frontend design principles.",
        vi: "Nắm vững kỹ thuật mô hình hóa dữ liệu mảng trên PostgreSQL với Prisma 6 và nguyên lý thiết kế giao diện Editorial.",
      },
    ],
    techStack: [
      {
        category: { en: "Frontend & Motion", vi: "Frontend & Chuyển Động" },
        items: ["Next.js 15.1.3", "React 19", "Framer Motion", "Tailwind CSS", "Lucide React"],
      },
      {
        category: { en: "Backend & Auth", vi: "Backend & Xác Thực" },
        items: ["Next.js Server Actions", "Jose (JWT)", "Bcryptjs", "Zod 3.24.0"],
      },
      {
        category: { en: "Database & DevOps", vi: "Cơ Sở Dữ Liệu & DevOps" },
        items: ["PostgreSQL 16", "Prisma ORM 6.1.0", "Docker", "Docker Compose"],
      },
    ],
    myRole: {
      en: "Full-Stack Developer & UI/UX Designer — Built the editorial luxury interface, implemented Framer Motion animations, architected PostgreSQL array schemas with Prisma 6, and developed the booking & admin systems.",
      vi: "Kỹ sư Full-Stack & UI/UX Designer — Xây dựng giao diện phong cách Editorial cao cấp, triển khai hiệu ứng Framer Motion, thiết kế schema dữ liệu mảng Prisma 6 trên PostgreSQL và phát triển hệ thống đặt lịch cùng cổng Admin.",
    },
    links: {
      github: "https://github.com/TranHoDuyAnh/Lumea-Spa",
    },
  },
];
