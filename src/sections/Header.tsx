"use client";

import { useEffect, useState } from "react";

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
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
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
    </div>
  );
};
