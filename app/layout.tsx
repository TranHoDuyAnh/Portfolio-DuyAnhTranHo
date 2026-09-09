import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duyanhtranho.dev"),
  title: {
    default: "Trần Hồ Duy Anh — Software Engineer",
    template: "%s | Trần Hồ Duy Anh",
  },
  description:
    "Personal portfolio of Trần Hồ Duy Anh (Duy Anh Tran Ho). Software Engineer with expertise in full-stack web applications, .NET 9 Clean Architecture, NestJS modular services, and real-world GenAI integration.",
  keywords: [
    "Trần Hồ Duy Anh",
    "Duy Anh Tran Ho",
    "Software Engineer",
    "Full-Stack Engineer",
    ".NET 9",
    "Clean Architecture",
    "CQRS",
    "NestJS",
    "Next.js 15",
    "React 19",
    "TypeScript",
    "PostgreSQL",
    "Generative AI",
    "CreatorOS",
    "Pulse",
    "AdaptiveLMS",
  ],
  authors: [{ name: "Trần Hồ Duy Anh", url: "https://github.com/TranHoDuyAnh" }],
  creator: "Trần Hồ Duy Anh",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "vi_VN",
    url: "https://duyanhtranho.dev",
    title: "Trần Hồ Duy Anh — Software Engineer",
    description:
      "Software Engineer specializing in scalable full-stack architectures, .NET 9 CQRS backends, and AI-native web platforms.",
    siteName: "Trần Hồ Duy Anh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trần Hồ Duy Anh — Software Engineer",
    description:
      "Software Engineer specializing in scalable full-stack architectures, .NET 9 CQRS backends, and AI-native web platforms.",
    creator: "@TranHoDuyAnh",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
