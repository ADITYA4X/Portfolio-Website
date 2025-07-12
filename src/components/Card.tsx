import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type CardProps = ComponentPropsWithoutRef<"div">;

export const Card = ({ className, children, ...other }: CardProps) => {
  return (
    <div
      className={twMerge(
        "dark:bg-stone-900 bg-white rounded-3xl relative z-0 overflow-hidden border-stone-200 dark:border-white/20",
        "after:content-[''] after:absolute after:inset-0 after:z-10 after:pointer-events-none after:rounded-3xl",
        "after:outline-2 after:transition-all",
        "after:outline-stone-200 dark:after:outline-white/20",
        "after:border after:border-stone-400 dark:after:border-white/20",
        "after:shadow-lg after:shadow-stone-200/10 dark:after:shadow-white/10",
        "hover:after:outline-stone-300 dark:hover:after:outline-white/30",
        "hover:after:border-stone-900 dark:hover:after:border-white/30",
        "hover:after:shadow-stone-300/20 dark:hover:after:shadow-white/20",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      {children}
    </div>
  );
};
