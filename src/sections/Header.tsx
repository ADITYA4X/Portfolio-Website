"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const sections = ["home", "projects", "about", "contact"];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 160;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      let current = sections[0];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (scrollY >= top && scrollY < bottom) {
            current = id;
            break;
          }
        }
      }

      if (window.innerHeight + window.scrollY >= documentHeight - 2) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex justify-between items-center fixed top-5 w-full z-20">
      <Link href="/" className="mt-[-2px] pl-3 ">
        <h1 className="hidden md:block text-3xl md:text-3xl font-medium dark:text-white/80 dark:hover:text-white text-zinc-800 transition leading-none ">
          ADITYA{" "}
          <span className="text-orange-600 text-4xl leading-none  transition">
            .
          </span>
        </h1>
      </Link>

      <nav className="flex gap-1 p-0.5 border dark:border-white/15 border-zinc-400 rounded-full dark:bg-white/10 bg-zinc-100/90 backdrop-blur">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-item ${
              activeSection === section
                ? "bg-stone-800 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-200/100 hover:text-stone-600 "
                : "text-zinc-700 dark:text-white hover:text-stone-600 hover:bg-zinc-200/100 dark:hover:bg-white/10"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-1.5 mt-[-2px] mr-5 rounded-full bg-gradient-to-r dark:from-yellow-300/20 dark:to-orange-400/10 from-yellow-300/100 to-orange-400/10 dark:text-white/90 text-stone-800 text-sm font-medium backdrop-blur dark:hover:from-yellow-300/40 dark:hover:to-orange-400/30 hover:from-yellow-300/40 hover:to-orange-300/100 transition-all"
      >
        <span className="text-base">{isDark ? "🌙" : "☀️"}</span>
        <span className="hidden md:block">{isDark ? "Dark" : "Light"}</span>
      </button>
    </div>
  );
};
