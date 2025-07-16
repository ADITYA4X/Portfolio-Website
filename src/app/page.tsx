"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoaderFive } from "@/components/ui/loader";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-zinc-900"
          >
            <LoaderFive
              text={`"Code like the product matters... Build like the  outcomes doesn’t control you..."`}
            />
          </motion.div>
        )}
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
