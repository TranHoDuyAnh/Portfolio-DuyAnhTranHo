import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Experience } from "@/components/sections/experience";
import { TechMatrix } from "@/components/sections/tech-matrix";
import { EngineeringPhilosophy } from "@/components/sections/engineering-philosophy";
import { GithubShowcase } from "@/components/sections/github-showcase";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProjects />
        <Experience />
        <TechMatrix />
        <EngineeringPhilosophy />
        <GithubShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
