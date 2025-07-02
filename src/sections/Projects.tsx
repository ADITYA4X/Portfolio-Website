import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    year: "2024",
    title: "The Wild Oasis ",
    subtitle: "Hotel App   ",
    results: [
      { title: "Management & Booking App" },
      { title: "Next, React, Supabase, NextAuth, Tailwind" },
      { title: "Real-time data operations" },
    ],
    weblink: "the-wild-oasis-two-rust.vercel.app",
    codelink: "https://github.com/ADITYA4X/The-Wild-Oasis",
    image: darkSaasLandingPage,
  },
  {
    year: "2025",
    title: "Fuzzie SaaS Auto Builder ",
    subtitle: "SaaS App",
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

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 pb-16 lg:py-24">
      <div className="container ">
        <SectionHeader
          eyebrow="Built with Curiosity"
          title="Portfolio Highlights"
          description="Discover the projects that helped me learn, grow, and build real-world
          functionality with modern tools."
        />

        <div className="flex flex-col mt-10 md:mt-20  gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-[1px] py-[1px] pb-0 md:py-[1px] md:px-[1px] lg:py-[1px] lg:px-[1px] sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-yellow-300 to-orange-600 inline-flex gap-2 font-bold uppercase tracking-widest text-transparent bg-clip-text">
                    <span>{project.subtitle}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex items-center gap-2 text-sm md:text-base text-white/60 "
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-row items-center mt-8 gap-4">
                    <a href={project.weblink}>
                      <button className="inline-flex items-center gap-2 text-xs md:text-base bg-white/10 border border-white/15 rounded-full px-6 h-10 hover:bg-white/20 transition ">
                        <span>Website</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    <a href={project.weblink}>
                      <button className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-6 h-10 hover:bg-white/20 transition text-xs md:text-base  ">
                        <span>Github</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
