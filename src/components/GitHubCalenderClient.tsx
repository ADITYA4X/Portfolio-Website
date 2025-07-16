"use client";

import ActivityCalendar from "react-activity-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Tooltip as MuiTooltip } from "@mui/material";
import { TextGenerateEffect } from "./ui/text-generate-effect";

interface Activity {
  date: string;
  count: number;
  level: number;
}

const GitHubCalendarClient = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<Activity[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch(
          "https://github-contributions-api.deno.dev/ADITYA4X.json"
        );
        const json = await res.json();

        const flat = json.contributions.flat();

        const contributions = flat.map((c: any) => ({
          date: c.date,
          count: c.contributionCount,
          level: mapLevel(c.contributionLevel),
        }));

        setData(contributions);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
      }
    };

    fetchContributions();
  }, []);

  const mapLevel = (level: string): number => {
    switch (level) {
      case "NONE":
        return 0;
      case "FIRST_QUARTILE":
        return 1;
      case "SECOND_QUARTILE":
        return 2;
      case "THIRD_QUARTILE":
        return 3;
      case "FOURTH_QUARTILE":
        return 4;
      default:
        return 0;
    }
  };

  const isDark = resolvedTheme === "dark";

  if (!mounted || data.length === 0) {
    return (
      <div className="my-8 text-center text-zinc-500 dark:text-zinc-300">
        Loading GitHub Contributions...
      </div>
    );
  }

  return (
    <div className="my-8">
      <TextGenerateEffect
        words="GitHub 2025 Contributions"
        className="font-serif text-3xl md:text-5xl text-center text-stone-800 dark:text-white mt-6"
        duration={0.5}
        initialDelay={0}
      />

      <TextGenerateEffect
        words="A glimpse into my daily coding journey — personal projects in motion."
        className="text-center text-stone-500 dark:text-white/70 md:text-lg lg:text-xl mt-4 text-[16px] max-w-md mx-auto"
        duration={0.5}
        initialDelay={1.2}
      />

      <div
        className={`rounded-xl p-6 mt-12 transition-all duration-300 ${
          isDark ? "bg-zinc-900" : "bg-white shadow"
        }`}
      >
        <ActivityCalendar
          data={data}
          renderBlock={(block, activity) => (
            <MuiTooltip
              title={`${activity.count} activities on ${activity.date}`}
            >
              {block}
            </MuiTooltip>
          )}
          renderColorLegend={(block, level) => (
            <MuiTooltip title={`Level: ${level}`}>{block}</MuiTooltip>
          )}
          blockSize={15}
          blockMargin={5}
          fontSize={14}
          theme={{
            light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
          colorScheme={isDark ? "dark" : "light"}
          labels={{
            totalCount: "{{count}} contributions in the last year",
            legend: { less: "Less", more: "More" },
            months: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          }}
          hideColorLegend={false}
          showWeekdayLabels={true}
        />
      </div>
    </div>
  );
};

export default GitHubCalendarClient;
