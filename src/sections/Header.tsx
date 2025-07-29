"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import SplashToggleButton from "@/components/SplashToggleButton";
import ThemeToggleButton from "@/components/ThemeToggleButton";

const sections = ["home", "projects", "about", "contact"];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <div className="flex justify-between items-center fixed top-5 w-full z-20">
      <Link href="/" className="mt-[-2px] pl-3">
        <h1 className="block md:hidden text-3xl font-medium dark:text-white/80 text-zinc-800 leading-none transition">
          A
          <span className="text-orange-600 text-4xl leading-none transition">
            .
          </span>
        </h1>

        <h1 className="hidden md:block text-3xl md:text-3xl font-medium dark:text-white/80 dark:hover:text-white text-zinc-800 transition leading-none">
          ADITYA
          <span className="text-orange-600 text-4xl leading-none transition">
            .
          </span>
        </h1>
      </Link>

      <nav className="flex gap-1 md:mr-6 ml-6 md:ml-0 p-0.5 border dark:border-white/15 border-zinc-400 rounded-full dark:bg-white/10 bg-zinc-100/90 backdrop-blur">
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
      {mounted && (
        <div className="flex items-center gap-1">
          <ThemeToggleButton />
          <SplashToggleButton />
        </div>
      )}
    </div>
  );
};
