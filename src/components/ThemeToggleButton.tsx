"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-2  border-2 border-white rounded-3xl"
    >
      <span className="text-base">{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
};

export default ThemeToggleButton;
