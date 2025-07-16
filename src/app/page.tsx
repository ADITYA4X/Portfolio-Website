"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";

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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header />

          <section id="home">
            <HeroSection />
          </section>

          <section id="projects" className="min-h-screen">
            <ProjectsSection />
          </section>

          <section>
            <TapeSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section
            id="github"
            className="px-4 py-12 md:py-20 flex justify-center"
          >
            <div className="w-full max-w-6xl">
              <GitHubCalendar />
            </div>
          </section>

          <section id="contact" className="py-12 pb-24 scroll-mt-24">
            <ContactSection />
          </section>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
