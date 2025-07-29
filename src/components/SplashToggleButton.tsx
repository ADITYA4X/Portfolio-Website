"use client";
import { useSplash } from "@/providers/splash-provider";

export default function SplashToggleButton() {
  const { isSplashEnabled, toggleSplash } = useSplash();

  return (
    <button
      onClick={toggleSplash}
      className="flex items-center gap-2 px-4 py-2 mt-[-2px] mr-3 rounded-full bg-gradient-to-r dark:from-yellow-300/20 dark:to-orange-400/10 from-yellow-300/100 to-orange-400/10 dark:text-white/90 text-stone-800 text-sm font-medium backdrop-blur dark:hover:from-yellow-300/40 dark:hover:to-orange-400/30 hover:from-yellow-300/40 hover:to-orange-300/100 transition-all"
    >
      {isSplashEnabled ? "✨" : "💠"}
    </button>
  );
}
