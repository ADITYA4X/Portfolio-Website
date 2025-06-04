"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import ExpressIcon from "@/assets/icons/expressjs.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import TailwindIcon from "@/assets/icons/tailwind-css.svg";
import Github from "@/assets/icons/github.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import Image from "next/image";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        degree: "M.Tech. in Power Electronics and Power Systems (PEPS)",
        institution:
          "Shri Ramdeobaba College of Engineering & Management, Nagpur",
      },
      {
        degree: "B.E. in Electrical Engineering (EE)",
        institution: "G. H. Raisoni College of Engineering, Nagpur",
      },
    ],
  },
  {
    title: "Certification",
    data: [
      {
        course: "Algorithms on Strings",
        platform: "University of California SanDiego - Coursera(2023)",
      },
      {
        course: "Algorithmic Toolbox",
        platform: "University of California SanDiego-Coursera(2023)",
      },
      {
        course: "The Complete JavaScript Course 2024: From Zero to Expert!",
        platform: "Jonas Schmedtmann - Udemy",
      },
      {
        course: "The Ultimate React Course 2024: React, Next.js, Redux & More",
        platform: "Jonas Schmedtmann - Udemy",
      },
      {
        course: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
        platform: "Jonas Schmedtmann - Udemy",
      },
      {
        course: "0-100 Full Stack Web Development (Advanced Backend+DevOps)",
        platform: "Cohort - Harkirat Singh",
      },
    ],
  },
];

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextIcon,
  },

  {
    title: "Express.js",
    iconType: ExpressIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "GitHub",
    iconType: Github,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
];

const projects = [
  {
    title: "Portfolio-Website",
    emoji: "👨‍💻",
    left: "5%",
    top: "5%",
    link: "https://github.com/ADITYA4X/Portfolio-Website",
  },
  {
    title: "the-medium-blog",
    emoji: "📑",
    left: "40%",
    top: "5%",
    link: "https://github.com/ADITYA4X/MERN-PROJECT",
  },
  {
    title: "The Natours",
    emoji: "🌍",
    left: "10%",
    top: "35%",
    link: "https://github.com/ADITYA4X/the-natours-project",
  },
  {
    title: "Fast-React-Pizza-Co",
    emoji: "🍕",
    left: "35%",
    top: "40%",
    link: "https://example.com/project2",
  },

  {
    title: "Omnifood",
    emoji: "🍽️",
    left: "70%",
    top: "45%",
    link: "https://omnifood-adityak.netlify.app/",
  },
  {
    title: "Forkify",
    emoji: "🍽️",
    left: "5%",
    top: "65%",
    link: "https://forkify-adityakunghadkar.netlify.app/",
  },
  {
    title: "Drag-Drop",
    emoji: "📌",
    left: "35%",
    top: "70%",
    link: "https://github.com/ADITYA4X/Drag-Drop",
  },
  {
    title: "worldwise",
    emoji: "🌍",
    left: "65%",
    top: "75%",
    link: "https://github.com/ADITYA4X/React-Projects/tree/master/worldwise",
  },
];

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("Certification");

  const getData = (arr: { title: string; data: any[] }[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  const activeData = getData(qualificationData, activeTab);

  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Explore the heart of my work—what I’m passionate about, and the vision that fuels me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="md:h-[320px] h-[420px]">
            <CardHeader
              title="Academic & Professional Highlights"
              description=" "
            />
            <div className="flex flex-col mt-6">
              {/* Tab Triggers */}
              <div className="flex justify-center items-center ">
                <div className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                  {["Education", "Certification"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 nav-item ${
                        activeTab === tab
                          ? "bg-white text-zinc-900 hover:bg-white/80"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}

              <div className="flex flex-col gap-y-2 mt-4 overflow-auto max-h-[200px] pb-4">
                {activeTab === "Education"
                  ? activeData?.data.map((item, index) => {
                      const { degree, institution } = item;
                      return (
                        <div className="flex gap-x-6 group" key={index}>
                          <div className="h-[64px] w-[1px] bg-border relative ml-2 mt-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-orange-600 absolute -left-[5px] md:group-hover:translate-y-[34px] group-hover:translate-y-[64px] transition-all duration-500"></div>
                          </div>
                          <div>
                            <div className="font-semibold text-md mb-2 text-white/80">
                              {degree},
                            </div>
                            <div className="text-sm font-normal mb-4 text-white/60">
                              {institution}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : activeData?.data.map((item, index) => {
                      const { course, platform } = item;
                      return (
                        <div className="flex gap-x-6 group" key={index}>
                          <div className="h-[54px] w-[1px] bg-border relative ml-2 mt-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-orange-600 absolute -left-[5px] md:group-hover:translate-y-[44px] group-hover:translate-y-[54px] transition-all duration-500"></div>
                          </div>
                          <div>
                            <div
                              className="font-semibold text-md mb-2 text-white/80
                "
                            >
                              {course},
                            </div>
                            <div className="text-sm font-medium mb-4 text-white/60">
                              {platform}
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </Card>

          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft the beautiful
              application"
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>

          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Other Projects"
              description="Here are some of the projects I have worked on that are not listed in the Projects section."
              className="px-6 py-6"
            />

            <div className="relative flex-1">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-yellow-400/70 to-orange-600/70 text-white rounded-full py-1.5 absolute"
                  style={{
                    left: project.left,
                    top: project.top,
                  }}
                >
                  <span>{project.emoji}</span>
                  <span className="font-medium text-stone-950">
                    {project.title}
                  </span>
                </a>
              ))}
            </div>
          </Card>

          <Card className="h-[320px] p-0 relative">
            <Image
              src={mapImage}
              alt="map"
              className="h-full w-full object-cover "
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-yellow-400/70 to-orange-600/70 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-900/30">
              <Image src={smileMemoji} alt="Smile Memoji" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
