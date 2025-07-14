import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("@/components/GitHubCalenderClient"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div>
      <Header />

      <section id="home" className="">
        <HeroSection />
      </section>

      <section id="projects" className="min-h-screen">
        <ProjectsSection />
      </section>

      <section>
        <TapeSection />
      </section>

      <section id="about" className="">
        <AboutSection />
      </section>

      <section id="github" className="px-4 py-12 md:py-20 flex justify-center">
        <div className="w-full max-w-6xl">
          <GitHubCalendar />
        </div>
      </section>

      <section id="contact" className="py-12 pb-24 scroll-mt-24">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}
