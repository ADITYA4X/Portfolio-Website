"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const LoaderFive = ({ text }: { text: string }) => {
  const [loopKey, setLoopKey] = useState(0);
  const chars = text.split("");

  useEffect(() => {
    const lastCharDelay = (chars.length - 1) * 0.05 * 1000;
    const charDuration = 500;
    const bufferDelay = 1000;

    const totalDuration = lastCharDelay + charDuration + bufferDelay;

    const interval = setInterval(() => {
      setLoopKey((prev) => prev + 1);
    }, totalDuration);

    return () => clearInterval(interval);
  }, [chars.length]);

  return (
    <div
      key={loopKey}
      className="font-sans font-semibold text-center px-4 max-w-sm sm:max-w-md md:max-w-xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-black dark:text-white"
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{
            scale: [1, 1.1, 1],
            textShadow: [
              "0 0 0 var(--shadow-color)",
              "0 0 1px var(--shadow-color)",
              "0 0 0 var(--shadow-color)",
            ],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};
