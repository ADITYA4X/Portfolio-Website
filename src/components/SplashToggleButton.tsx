"use client";
import { useSplash } from "@/providers/splash-provider";

export default function SplashToggleButton() {
  const { isSplashEnabled, toggleSplash } = useSplash();

  return (
    <button
      onClick={toggleSplash}
      className="flex items-center px-2 border-2 rounded-full border-white"
    >
      {isSplashEnabled ? "🪶" : "✨"}
    </button>
  );
}
