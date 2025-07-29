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
        "after:border after:border-yellow-400 dark:after:border-orange-400",
        "after:shadow-[0_0_12px_2px] after:shadow-yellow-400/60 dark:after:shadow-orange-400/50",
        "hover:after:border-red-500 dark:hover:after:border-orange-300",
        "hover:after:shadow-[0_0_20px_4px] hover:after:shadow-red-500/70 dark:hover:after:shadow-orange-300/60",
        "after:transition-all after:duration-300",
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
