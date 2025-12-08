"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import MediumLandingPage from "@/assets/images/Medium.png";
import OmnifoodLandingPage from "@/assets/images/Omnifood.png";
import ForkifyLandingPage from "@/assets/images/forkify.png";
import NatoursLandingPage from "@/assets/images/Natours.png";
import FastPizzaLandingPage from "@/assets/images/FastPizza.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const currentlyBuilding = [
  {
    title: "Helix AI",
    status: "Actively Building",
    description: "AI-powered genomic data analysis tool using EVO-2",
    progress: 90,
    tech: [
      "Next.js",
      "React.js",
      "FastAPI",
      "Tailwind",
      "EVO2",
      "TypeScript",
      "Modal",
    ],
    completion: "August 2025",
  },
];

const categories = ["All Projects", "Full Stack", "Front-End", "Back-End"];

const completedProjects = [
  {
    title: "Medium-Blog-Clone",
    category: "Full Stack",
    year: "2024",
    subtitle: "Blog Platform",
    description:
      "A medium type online publishing platform for written content such as articles and blogs",
    tech: [
      "React",
      "Tailwind",
      "Typescript",
      "Cloudflare workers",
      "Zod",
      "Prisma",
      "Postgres",
    ],
    github: "#",
    demo: "#",
    completed: "Dec 2024",
    weblink: "https://the-medium-blog.netlify.app/signin",
    codelink: "https://github.com/ADITYA4X/MERN-PROJECTS/tree/main/medium-blog",
    image: MediumLandingPage,
  },
  {
    title: "The-Natours",
    category: "Back-End",
    year: "2024",
    subtitle: "Tour Booking App",
    description: "An awesome tour booking site built on top of NodeJS.",
    tech: [
      "NodeJS",
      "Express",
      "Mongoose",
      "MongoDB Atlas",
      "Pub",
      "Postman",
      "JWT",
      "Mapbox",
    ],
    github: "#",
    demo: "#",
    completed: "Sep 2024",
    weblink: "",
    codelink: "https://github.com/ADITYA4X/the-natours-project",
    image: NatoursLandingPage,
  },
  {
    title: "Forkify Recipe App",
    category: "Front-End",
    year: "2024",
    subtitle: "Recipe Search  App",
    description:
      "Forkify is a recipe search and saving app, It uses advanced JavaScript concepts like asynchronous programming, ES6 modules, and object-oriented programming.",
    tech: ["HTML", "Sass", "Javascript", "API"],
    github: "#",
    demo: "#",
    completed: "Jun 2024",
    weblink: "https://forkify-mw.vercel.app/",
    codelink: "https://github.com/ADITYA4X/Forkify-Recipe-App",
    image: ForkifyLandingPage,
  },
  {
    title: "Fast React Pizza",
    category: "Front-End",
    year: "2024",
    subtitle: "Pizza App",
    description:
      "Users can order one or more pizzas from a menu.User can add multiple pizzas in the cart and order them. Also, they can search the ordered pizza to know the status.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    github: "#",
    demo: "#",
    completed: "Aug 2024",
    weblink: "",
    codelink: "https://github.com/ADITYA4X/Fast-React-Pizza-Co",
    image: FastPizzaLandingPage,
  },
  {
    title: "Omnifood",
    category: "Front-End",
    year: "2023",
    subtitle: "Food App",
    description: "An awesome tour booking site built on top of NodeJS.",
    tech: ["HTML", "CSS", "Javascript", "Parcel", "NPM"],
    github: "#",
    demo: "#",
    completed: "Oct 2023",
    weblink: "https://omnifood-adityak.netlify.app/",
    codelink: "",
    image: OmnifoodLandingPage,
  },
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? completedProjects
      : completedProjects.filter((proj) => proj.category === activeCategory);

  return (
    <div className="container mx-auto px-4 pb-20 space-y-24">
      <div className="text-center ">
        <div></div>
        <SectionHeader eyebrow="" title="" description="" />
        <SectionHeader
          eyebrow="Code & Craft Gallery"
          title="Personal Projects"
          description="Innovative digital experiences crafted with clean code, thoughtful
          design, and modern engineering standards."
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-center pb-6">
          What I&#39;m Building Now
        </h2>
        {currentlyBuilding.map((proj, idx) => (
          <div key={idx} className="relative">
            <GlowingEffect className="rounded-3xl" />
            <BackgroundGradient>
              <div
                key={idx}
                className="bg-white dark:bg-stone-900  rounded-3xl p-6 shadow-sm space-y-4"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-3xl">{proj.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                    {proj.status}
                  </span>
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  {proj.description}
                </p>
                <div className="w-full bg-stone-200 dark:bg-stone-700 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-stone-400 h-1"
                    style={{ width: `${proj.progress}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-stone-400 dark:text-stone-400">
                  {proj.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Expected completion: {proj.completion}
                </p>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <div className="space-y-1">
          <h2 className="text-3xl font-semibold text-center">
            Things I’ve Built
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full border text-sm transition ${
                activeCategory === cat
                  ? "bg-stone-900 text-white dark:bg-white dark:text-black"
                  : "border-stone-300 dark:border-white/10 hover:bg-stone-100 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.map((project, index) => (
          <Card
            key={project.title + index}
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={
              { top: `calc(80px + ${index * 40}px)` } as React.CSSProperties
            }
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="text-center md:text-left">
                  <div className="dark:bg-gradient-to-r bg-gradient-to-r dark:from-yellow-300 from-amber-500 dark:to-red-600 to-orange-600 inline-flex gap-2 dark:font-bold font-extrabold uppercase tracking-widest text-transparent bg-clip-text justify-center md:justify-start">
                    <span>{project.subtitle}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5 text-stone-800 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <hr className="border-t-2 dark:border-white/5 border-stone-200 mt-2 md:mt-3" />

                <div className="flex flex-wrap gap-2 text-sm text-stone-500 dark:text-stone-400">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.description}
                </div>

                <div className="flex flex-row items-center justify-center md:justify-start mt-8 gap-4">
                  {project.weblink && (
                    <a href={project.weblink} target="_blank">
                      <button className="inline-flex items-center gap-2 text-xs md:text-base dark:bg-white/10 bg-white border border-stone-300 hover:border-stone-700 hover:bg-stone-100 dark:border-white/15 rounded-full px-6 h-10 dark:hover:bg-white/20 transition">
                        <span>Website</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  )}
                  {project.codelink && (
                    <a href={project.codelink} target="_blank">
                      <button className="inline-flex items-center gap-2 text-white dark:bg-white/10 bg-stone-900 border-black/15 border dark:border-white/15 rounded-full px-6 h-10 dark:hover:bg-white/20 hover:bg-stone-800 hover:border-white transition text-xs md:text-base">
                        <span>GitHub</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  )}
                </div>
              </div>

              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-3xl border-t-2 border-l-2 border-r-2 border-stone-600"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
