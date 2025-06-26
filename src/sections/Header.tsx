"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = ["home", "projects", "about", "contact"];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

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
      <Link href="/" className="mt-[-2px] pl-3 ">
        <h1 className="hidden md:block text-3xl md:text-3xl font-medium text-white/80 hover:text-white transition leading-none ">
          ADITYA{" "}
          <span className="text-orange-600 text-4xl leading-none  transition">
            .
          </span>
        </h1>
      </Link>

      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-item ${
              activeSection === section
                ? "bg-white text-zinc-900 hover:bg-white/70 hover:text-zinc-900"
                : ""
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
      <button className="flex items-center gap-2 px-4 py-1.5 mt-[-2px] mr-5 rounded-full bg-gradient-to-r from-yellow-400/10 to-orange-400/5 text-white/90 text-sm font-medium backdrop-blur hover:from-yellow-400/30 hover:to-orange-400/20 transition-all">
        <span className="text-base">☀️</span>
        <span className="hidden md:block">Light</span>
      </button>
    </div>
  );
};
