import { BilingualText } from "@/lib/i18n";

export interface WorkExperience {
  company: string;
  role: BilingualText;
  period: string;
  type: BilingualText;
  responsibilities: BilingualText[];
  techStack?: string[];
}

export interface EducationInfo {
  institution: string;
  major: BilingualText;
  period: string;
  grade: BilingualText;
  coursework: string[];
}

export interface ProfileData {
  name: string;
  nativeName: string;
  avatar: string;
  dob: string;
  title: BilingualText;
  location: BilingualText;
  email: string;
  phone: string;
  github: string;
  headline: BilingualText;
  about: BilingualText;
  detailedBio: BilingualText;
  spokenLanguages: {
    language: BilingualText;
    level: BilingualText;
  }[];
  education: EducationInfo;
  experience: WorkExperience[];
  stats: {
    label: BilingualText;
    value: string;
    sublabel: BilingualText;
  }[];
  availability: BilingualText;
}

export const profile: ProfileData = {
  name: "Duy Anh Tran Ho",
  nativeName: "Trần Hồ Duy Anh",
  avatar: "/Duyanh.png",
  dob: "10/06/2003",
  title: {
    en: "Software Engineer · Front-End & Mobile Specialist",
    vi: "Kỹ sư Phần Mềm · Chuyên Sâu Front-End & Mobile",
  },
  location: {
    en: "Go Vap District, Ho Chi Minh City, Vietnam",
    vi: "Quận Gò Vấp, TP. Hồ Chí Minh, Việt Nam",
  },
  email: "tranhoduyanh03@gmail.com",
  phone: "0906526493",
  github: "https://github.com/TranHoDuyAnh",
  headline: {
    en: "Detail-oriented Software Engineer crafting pixel-perfect web & mobile solutions.",
    vi: "Kỹ sư Phần mềm chú trọng chi tiết, xây dựng ứng dụng web & di động chuẩn từng pixel.",
  },
  about: {
    en: "Detail-oriented Software Engineer with hands-on experience in Front-End and Mobile development. Proficient in the React ecosystem (React.js, Next.js) and cross-platform mobile development (Flutter), providing a strong foundation for rapid adaptation to React Native. Experienced in API integration, agile workflows, and UI/UX optimization.",
    vi: "Kỹ sư Phần mềm (Cử nhân Kỹ thuật Phần mềm Đại học FPT) tỉ mỉ, có kinh nghiệm thực chiến trong phát triển Front-End và Ứng dụng Di động. Thành thạo hệ sinh thái React (React.js, Next.js) và lập trình di động đa nền tảng (Flutter), tạo nền tảng vững chắc để chuyển giao nhanh chóng sang React Native. Có kinh nghiệm tích hợp API, quy trình làm việc Agile và tối ưu hóa UI/UX.",
  },
  detailedBio: {
    en: "Detail-oriented Software Engineer with hands-on experience in Front-End and Mobile development. Proficient in the React ecosystem (React.js, Next.js) and cross-platform mobile development (Flutter), providing a strong foundation for rapid adaptation to React Native. Experienced in API integration, agile workflows, and UI/UX optimization. Passionate about building high-quality, pixel-perfect applications and eager to leverage technical skills and customer-focused mindset to deliver impactful client projects.",
    vi: "Kỹ sư Phần mềm (Cử nhân Kỹ thuật Phần mềm Đại học FPT) tỉ mỉ, có kinh nghiệm thực chiến trong phát triển Front-End và Ứng dụng Di động. Thành thạo hệ sinh thái React (React.js, Next.js) và lập trình di động đa nền tảng (Flutter), tạo nền tảng vững chắc để thích ứng nhanh với React Native. Dày dặn kinh nghiệm tích hợp API, quy trình làm việc Agile và tối ưu hóa trải nghiệm UI/UX. Luôn đam mê tạo ra các sản phẩm chất lượng cao, chuẩn từng pixel và tận tâm ứng dụng tư duy lấy khách hàng làm trọng tâm để mang lại giá trị thiết thực.",
  },
  spokenLanguages: [
    {
      language: { en: "English", vi: "Tiếng Anh" },
      level: { en: "IELTS 5.0 (Working proficiency)", vi: "IELTS 5.0 (Làm việc chuyên nghiệp)" },
    },
    {
      language: { en: "Vietnamese", vi: "Tiếng Việt" },
      level: { en: "Native", vi: "Bản xứ" },
    },
  ],
  education: {
    institution: "FPT University (Đại học FPT)",
    major: {
      en: "Software Engineering",
      vi: "Kỹ Thuật Phần Mềm",
    },
    period: "2022 - 2026 (Graduated)",
    grade: {
      en: "Good · Graduated",
      vi: "Khá · Đã tốt nghiệp",
    },
    coursework: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms (DSA)",
      "Mobile App Development (Flutter / Android)",
      "Web Design & Client-Server Architecture",
    ],
  },
  experience: [
    {
      company: "Wonder English Center",
      role: {
        en: "IT Systems & Automation Engineer / IT Executive",
        vi: "Kỹ Sư Hệ Thống & Tự Động Hóa IT / Chuyên Viên IT",
      },
      period: "03/2025 - 02/2026",
      type: {
        en: "Full-Time",
        vi: "Toàn thời gian",
      },
      responsibilities: [
        {
          en: "Developed and maintained internal dashboards for monitoring business and operational data.",
          vi: "Phát triển và bảo trì dashboard nội bộ để giám sát số liệu kinh doanh và vận hành.",
        },
        {
          en: "Managed and maintained company websites and digital platforms.",
          vi: "Quản trị và vận hành các website cùng các nền tảng kỹ thuật số của trung tâm.",
        },
        {
          en: "Designed and managed Google Forms and data collection workflows.",
          vi: "Thiết kế và quản lý các luồng thu thập dữ liệu tự động qua Google Forms.",
        },
        {
          en: "Built automated workflows for collecting, processing, and managing customer leads.",
          vi: "Xây dựng luồng tự động hóa tiếp nhận, xử lý và phân loại lead khách hàng.",
        },
        {
          en: "Developed internal systems and tools to support daily business operations.",
          vi: "Phát triển các công cụ và hệ thống phần mềm nội bộ hỗ trợ hoạt động kinh doanh hàng ngày.",
        },
        {
          en: "Automated repetitive business processes to reduce manual work and improve operational efficiency.",
          vi: "Tự động hóa các quy trình lặp đi lặp lại nhằm giảm thiểu thao tác thủ công và nâng cao hiệu suất.",
        },
        {
          en: "Provided technical support and troubleshooting for internal users and systems.",
          vi: "Hỗ trợ kỹ thuật, khắc phục sự cố phần mềm và hệ thống cho nhân sự nội bộ.",
        },
      ],
      techStack: ["Automation Tools", "Dashboard Analytics", "Web Platforms", "System Operations"],
    },
    {
      company: "FPT Software",
      role: {
        en: "Intern Front-End Developer",
        vi: "Thực Tập Sinh Front-End Developer",
      },
      period: "01/2024 - 06/2024",
      type: {
        en: "Internship",
        vi: "Thực tập sinh",
      },
      responsibilities: [
        {
          en: "Developed and maintained responsive web interfaces using HTML, CSS, JavaScript and modern frontend practices.",
          vi: "Phát triển và bảo trì giao diện web responsive bằng HTML, CSS, JavaScript và chuẩn frontend hiện đại.",
        },
        {
          en: "Collaborated with developers and team members to implement UI features based on project requirements and design specifications.",
          vi: "Phối hợp cùng lập trình viên và team hiện thực hóa các tính năng UI bám sát tài liệu đặc tả thiết kế.",
        },
        {
          en: "Integrated frontend components with REST APIs to display and manage dynamic data.",
          vi: "Tích hợp các component giao diện với REST APIs để hiển thị và quản lý dữ liệu động.",
        },
        {
          en: "Implemented reusable UI components and improved consistency across application screens.",
          vi: "Xây dựng thư viện component tái sử dụng, gia tăng tính đồng bộ trên toàn bộ màn hình ứng dụng.",
        },
        {
          en: "Fixed UI bugs, optimized page layouts, and improved cross-browser compatibility.",
          vi: "Khắc phục lỗi giao diện, tối ưu hóa bố cục trang và cải thiện khả năng tương thích đa trình duyệt.",
        },
        {
          en: "Participated in Git-based development workflows, including branching, code review, and version control.",
          vi: "Tuân thủ quy trình Git chuyên nghiệp: phân nhánh branch, code review và kiểm soát phiên bản.",
        },
        {
          en: "Worked in an Agile/Scrum environment and participated in daily stand-ups, task planning, and team discussions.",
          vi: "Làm việc theo mô hình Agile/Scrum, tham gia họp daily stand-up, lập kế hoạch task và thảo luận kỹ thuật.",
        },
      ],
      techStack: ["HTML5/CSS3", "JavaScript (ES6+)", "REST APIs", "Git/GitLab", "Agile/Scrum"],
    },
    {
      company: "Lien's Mini Hotel",
      role: {
        en: "Web Developer & Digital Operations",
        vi: "Lập Trình Viên Web & Vận Hành Số",
      },
      period: "01/2022 - Present",
      type: {
        en: "Freelance / Operations",
        vi: "Freelance & Vận hành",
      },
      responsibilities: [
        {
          en: "Designed and developed the hotel's website to showcase rooms, services, amenities, and contact information.",
          vi: "Thiết kế và lập trình website khách sạn giới thiệu hạng phòng, dịch vụ, tiện ích và thông tin liên hệ.",
        },
        {
          en: "Planned website structure, user experience, and digital features based on customer needs and business operations.",
          vi: "Lên cấu trúc website, tối ưu trải nghiệm người dùng (UX) và tính năng số theo nhu cầu thực tế.",
        },
        {
          en: "Managed and maintained the hotel's website and online content.",
          vi: "Quản trị, cập nhật nội dung và duy trì sự ổn định của website khách sạn.",
        },
        {
          en: "Managed the hotel's Facebook Page, including content planning, updates, and customer communication.",
          vi: "Quản trị Fanpage Facebook: lập kế hoạch nội dung, cập nhật bài đăng và tương tác hỗ trợ khách hàng.",
        },
        {
          en: "Managed the property's presence and information across Booking.com and other online booking platforms.",
          vi: "Quản lý kênh bán phòng trên Booking.com và các nền tảng OTA trực tuyến.",
        },
        {
          en: "Optimized online information and customer touchpoints to improve visibility and direct booking opportunities.",
          vi: "Tối ưu hóa điểm chạm khách hàng trực tuyến nhằm tăng tỷ lệ đặt phòng trực tiếp.",
        },
        {
          en: "Proposed and implemented digital ideas to improve the hotel's online presence and day-to-day operations.",
          vi: "Đề xuất và triển khai các giải pháp số nhằm gia tăng hiện diện thương hiệu và tinh gọn vận hành.",
        },
        {
          en: "Supported the integration of technology into hotel operations and customer communication.",
          vi: "Hỗ trợ tích hợp công nghệ vào quy trình vận hành và giao tiếp với khách lưu trú.",
        },
      ],
      techStack: ["Web Design", "Digital Marketing", "Booking Engine Integration", "Customer Touchpoints"],
    },
  ],
  availability: {
    en: "Available for Software Engineering roles & High-Impact Projects",
    vi: "Sẵn sàng cho các cơ hội Software Engineering & Dự án công nghệ",
  },
  stats: [
    {
      value: "6",
      label: {
        en: "Production Architectures",
        vi: "Kiến trúc hoàn chỉnh",
      },
      sublabel: {
        en: ".NET 8/9, NestJS, Next.js, React 19, Supabase, Flutter",
        vi: ".NET 8/9, NestJS, Next.js, React 19, Supabase, Flutter",
      },
    },
    {
      value: "100%",
      label: {
        en: "Strict Type Safety",
        vi: "Type-Safety tuyệt đối",
      },
      sublabel: {
        en: "TypeScript & C# Domain Models",
        vi: "TypeScript & C# Domain Models",
      },
    },
    {
      value: "2+",
      label: {
        en: "AI Engines Integrated",
        vi: "Mô hình AI tích hợp",
      },
      sublabel: {
        en: "Gemini 1.5 Flash & GPT-4o-mini",
        vi: "Gemini 1.5 Flash & GPT-4o-mini",
      },
    },
    {
      value: "4+",
      label: {
        en: "Database Systems",
        vi: "Hệ thống cơ sở dữ liệu",
      },
      sublabel: {
        en: "SQL Server, PostgreSQL, Neon, Supabase",
        vi: "SQL Server, PostgreSQL, Neon, Supabase",
      },
    },
  ],
};
