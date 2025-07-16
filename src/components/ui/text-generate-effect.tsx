"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  initialDelay = 0,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  initialDelay?: number;
}) => {
  const [scope, animate] = useAnimate();

  const isInView = useInView(scope, {
    once: true,
    margin: "-20% 0px",
  });

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration,
          delay: stagger(0.2, { startDelay: initialDelay }),
        }
      );
    }
  }, [isInView, animate, duration, initialDelay, filter]);

  return (
    <motion.div
      ref={scope}
      className={cn(
        "flex flex-wrap justify-center break-words text-pretty leading-snug tracking-wide",
        className
      )}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};
