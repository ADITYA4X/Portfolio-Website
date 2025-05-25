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
import { to } from "./../../.next/static/chunks/main-app";

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
        course: "Algorithms on Strings and Algorithmic Toolbox",
        platform: "Coursera",
      },
      {
        course: "The Complete JavaScript Course 2024: From Zero to Expert!",
        platform: "Udemy",
      },
      {
        course: "The Ultimate React Course 2024: React, Next.js, Redux & More",
        platform: "Udemy",
      },
      {
        course: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
        platform: "Udemy",
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
    link: "https://github.com/ADITYA4X/Portfolio-Website",
  },
  {
    title: "the-medium-blog",
    emoji: "📑",
    link: "https://github.com/ADITYA4X/MERN-PROJECT",
  },
  {
    title: "The Natours",
    emoji: "🌍",
    link: "https://github.com/ADITYA4X/the-natours-project",
  },
  {
    title: "Fast-React-Pizza-Co",
    emoji: "🍕",
    link: "https://example.com/project2",
  },

  {
    title: "Omnifood",
    emoji: "🍽️",
    link: "https://omnifood-adityak.netlify.app/",
  },
  {
    title: "Forkify",
    emoji: "🍽️",
    link: "https://forkify-adityakunghadkar.netlify.app/",
  },
  {
    title: "Drag-Drop",
    emoji: "📌",
    link: "https://github.com/ADITYA4X/Drag-Drop",
  },
  {
    title: "worldwise",
    emoji: "🌍",
    link: "https://github.com/ADITYA4X/React-Projects/tree/master/worldwise",
  },
];

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const getData = (arr: { title: string; data: any[] }[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  const activeData = getData(qualificationData, activeTab);

  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Explore the heart of my work—what I’m passionate about, and the vision that fuels me."
      />
      <div>
        <Card>
          {/* Tab Triggers */}
          <div className="flex justify-start">
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

          <div className="flex flex-col gap-y-4 mt-8">
            {activeTab === "Education"
              ? activeData?.data.map((item, index) => {
                  const { degree, institution } = item;
                  return (
                    <div className="flex gap-x-8 group" key={index}>
                      <div className="h-[84px] w-[1px] bg-border relative ml-2">
                        <div className="w-[11px] h-[11px] rounded-full bg-orange-600 absolute -left-[5px] md:group-hover:translate-y-[64px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-md mb-2">
                          {degree},
                        </div>
                        <div className="text-sm font-normal mb-4">
                          {institution}
                        </div>
                      </div>
                    </div>
                  );
                })
              : activeData?.data.map((item, index) => {
                  const { course, platform } = item;
                  return (
                    <div className="flex gap-x-8 group" key={index}>
                      <div className="h-[84px] w-[1px] bg-border relative ml-2">
                        <div className="w-[11px] h-[11px] rounded-full bg-orange-600 absolute -left-[5px] md:group-hover:translate-y-[64px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-md mb-2">
                          {course},
                        </div>
                        <div className="text-sm font-medium mb-4">
                          {platform}
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>

            <p>
              Explore the technologies and tools I use to craft the beautiful
              application
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title} className="">
                <TechIcon component={item.iconType} />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>Other Projects</h3>
            <p>
              I have worked on various projects, including a few that are not
              listed in the Projects section. Here are some of them:
            </p>
          </div>
          <div>
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="text-lg">{project.emoji}</span>
                <span>{project.title}</span>
              </a>
            ))}
          </div>
        </Card>

        <Card>
          <Image src={mapImage} alt="map" />
          <Image src={smileMemoji} alt="Smile Memoji" className="" />
        </Card>
      </div>
    </div>
  );
};
