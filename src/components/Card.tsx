import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type CardProps = ComponentPropsWithoutRef<"div">;

export const Card = ({ className, children, ...other }: CardProps) => {
  return (
    <div
      className={twMerge(
        "bg-stone-900 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-10 after:pointer-events-none after:rounded-3xl after:outline-2 after:outline-white/20 after:outline border after:border-white/20 after:shadow-lg after:shadow-white/10 after:transition-all hover:after:outline-white/30 hover:after:border-white/30 hover:after:shadow-white/20",
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
