import { Card } from "./Card";
import { CardHeader } from "./CardHeader";
import { useState } from "react";

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

export const Certification = () => {
  const [activeTab, setActiveTab] = useState("Certification");

  const getData = (arr: { title: string; data: any[] }[], title: string) => {
    return arr.find((item) => item.title === title);
  };

  const activeData = getData(qualificationData, activeTab);

  return (
    <Card className="md:h-[380px] h-[420px] md:col-span-4 lg:col-span-4 ">
      <CardHeader title="Academic & Professional Highlights" description="" />
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

        
          <div className="flex flex-col gap-y-2 mt-6 overflow-y-auto md:max-h-[240px] max-h-auto md:pb-4 pl-1 ">
            {activeTab === "Education"
              ? activeData?.data.map((item, index) => {
                  const { degree, institution } = item;
                  return (
                    <div className="flex gap-x-6" key={index}>
                      <div className="h-[64px] w-[1px] bg-border relative ml-2 mt-2 mb-2">
                        <div className="w-[11px] h-[11px] rounded-full bg-orange-600 absolute -left-[5px] "></div>
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
                        <div className="w-[11px] h-[11px] rounded-full bg-orange-600 absolute -left-[5px] "></div>
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
  );
};
