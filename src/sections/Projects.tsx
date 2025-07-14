"use client";

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useState } from "react";

const portfolioProjects = [
  {
    year: "2024",
    title: "The Wild Oasis",
    subtitle: "Hotel App",
    variants: [
      {
        name: "Management",
        description: [
          "Management App",
          "Next.js, React, Supabase, NextAuth, Tailwind",
          "Real-time data operations",
        ],
        weblink: "https://the-wild-oasis-two-rust.vercel.app/",
        codelink: "https://github.com/ADITYA4X/The-Wild-Oasis",
        image: darkSaasLandingPage,
      },
      {
        name: "Booking",
        description: [
          "Booking App",
          "Next.js, React, Supabase, NextAuth, Tailwind",
          "Real-time data operations",
        ],
        weblink: "https://the-wild-oasis-website-ochre-five.vercel.app/",
        codelink: "https://github.com/ADITYA4X/the-wild-oasis-website",
        image: lightSaasLandingPage,
      },
    ],
  },
  {
    year: "2025",
    title: "Fuzzie Automation Builder ",
    subtitle: "Workflow App",
    results: [
      {
        title: "Workflows-Slack, Notion, & Discord",
      },
      { title: "Next, Clerk , Upload Care, ShadCn, Neon Tech, Tailwind" },
      { title: "A responsive and modern UI " },
    ],
    weblink: "https://youtu.be/7hi5zwO75yc",
    codelink: "https://github.com/ADITYA4X/Fuzzie-saas-auto-builder",
    image: lightSaasLandingPage,
  },
  {
    year: "2025",
    title: "Art X",
    subtitle: "Art Fair Platform",
    results: [
      { title: "A multi-vendor art fair platform " },
      { title: "React, Redux, Node, Express, MongoDB, Tailwind" },
      { title: "Easy navigation between vendors" },
    ],
    weblink: "https://youtu.be/Z7I5uSRHMHg",
    codelink: "the-wild-oasis-two-rust.vercel.app",
    image: aiStartupLandingPage,
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVariant = project.variants
    ? project.variants[activeIndex]
    : project;

  return (
    <Card
      key={project.title + index}
      className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
      style={{ top: `calc(64px + ${index * 40}px)` }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:pb-16">
          <div className="dark:bg-gradient-to-r bg-gradient-to-r dark:from-yellow-300 from-amber-500 dark:to-red-600 to-orange-600 inline-flex gap-2 dark:font-bold font-extrabold uppercase tracking-widest text-transparent bg-clip-text">
            <span>{project.subtitle}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5 text-stone-800 dark:text-white">
            {project.title}
            {project.variants && ` : ${activeVariant.name} App`}
          </h3>

          {project.variants && (
            <div className="mt-3">
              <button
                onClick={() => setActiveIndex((prev) => (prev === 0 ? 1 : 0))}
                className="mb-3 px-4 py-1 text-sm bg-stone-200 dark:bg-white/10 rounded-full transition hover:bg-stone-300 dark:hover:bg-white/20"
              >
                Switch to {project.variants[activeIndex === 0 ? 1 : 0].name}
              </button>
            </div>
          )}

          <hr className="border-t-2 dark:border-white/5 border-stone-200 mt-2 md:mt-3" />
          <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {(activeVariant.description || activeVariant.results).map(
              (point: string | { title: string }, idx: number) => (
                <li
                  key={typeof point === "string" ? point : point.title}
                  className="flex items-center gap-2 text-sm md:text-base dark:text-white/60 text-stone-700"
                >
                  <CheckCircleIcon className="size-5 md:size-6" />
                  <span>{typeof point === "string" ? point : point.title}</span>
                </li>
              )
            )}
          </ul>

          <div className="flex flex-row items-center mt-8 gap-4">
            <a href={activeVariant.weblink} target="_blank">
              <button className="inline-flex items-center gap-2 text-xs md:text-base dark:bg-white/10 bg-white border border-stone-300 hover:border-stone-700 hover:bg-stone-100 dark:border-white/15 rounded-full px-6 h-10 dark:hover:bg-white/20 transition">
                <span>Website</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
            <a href={activeVariant.codelink} target="_blank">
              <button className="inline-flex items-center gap-2 text-white dark:bg-white/10 bg-stone-900 border-black/15 border dark:border-white/15 rounded-full px-6 h-10 dark:hover:bg-white/20 hover:bg-stone-800 hover:border-white transition text-xs md:text-base">
                <span>GitHub</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
          </div>
        </div>

        <div className="relative">
          <Image
            src={activeVariant.image}
            alt={activeVariant.name}
            className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
          />
        </div>
      </div>
    </Card>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Built with Curiosity"
          title="Portfolio Highlights"
          description="Discover the projects that helped me learn, grow, and build real-world functionality with modern tools."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
