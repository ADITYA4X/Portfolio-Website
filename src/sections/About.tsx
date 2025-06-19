"use client";

import { useRef, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import ExpressIcon from "@/assets/icons/expressjs.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import TailwindIcon from "@/assets/icons/tailwind-css.svg";
import Github from "@/assets/icons/github.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import mapImage from "@/assets/images/map.png";
import Image from "next/image";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";

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

  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Explore the heart of my work—what I’m passionate about, and the vision that fuels me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-7 md:gap-6 lg:grid-cols-7">
            <Card className="md:h-[380px] h-[420px] md:col-span-4 lg:col-span-4">
              <CardHeader
                title="Academic & Professional Highlights"
                description=""
              />
              <div className="flex flex-col md:mt-0">
                {/* Tab Triggers */}
                <div className="flex justify-center items-center -mt-4 ">
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

                <div className="flex flex-col gap-y-2 mt-6 overflow-y-auto md:max-h-[240px] max-h-[195px] pb-4 pl-1">
                  {activeTab === "Education"
                    ? activeData?.data.map((item, index) => {
                        const { degree, institution } = item;
                        return (
                          <div className="flex gap-x-6 group " key={index}>
                            <div className="h-[64px] w-[1px] bg-border relative ml-2 mt-2 mb-2">
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
                          <div className="flex gap-x-6 group mb-5" key={index}>
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

            <Card className="md:h-[380px] h-[420px] md:col-span-3 lg:col-span-3 ">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft the beautiful
              application"
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-3"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:20s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-3"
                itemsWrapperClassName=" animate-move-left [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-6 md:gap-6 lg:grid-cols-7">
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-3">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover "
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-900/10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/70 to-orange-600/70 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/70 to-orange-600/70 -z-10 "></div>
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Card>

            <Card className="h-[320px] p-0 flex flex-col md:col-span-4 lg:col-span-4">
              <CardHeader
                title="Other Projects"
                description="Here are some of the projects I have worked on that are not listed in the Projects section."
                className="px-6 py-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {projects.map((project) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    rel="noopener noreferrer"
                    key={project.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-yellow-400/70 to-orange-600/70 text-white rounded-full py-1.5 absolute"
                    style={{
                      left: project.left,
                      top: project.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                    dragElastic={0.2}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                    whileDrag={{ scale: 1.1, rotate: 5 }}
                  >
                    <span>{project.emoji}</span>
                    <span className="font-medium text-stone-950">
                      {project.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
