"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";

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
      </div>
    </div>
  );
};
