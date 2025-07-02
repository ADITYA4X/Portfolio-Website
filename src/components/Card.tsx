import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type CardProps = ComponentPropsWithoutRef<"div">;

export const Card = ({ className, children, ...other }: CardProps) => {
  return (
    <div
      className={twMerge(
        "relative z-0 rounded-3xl overflow-hidden group",
        className
      )}
      {...other}
    >
      {/* Glow border animation */}
      <div className="absolute inset-0 z-0 rounded-3xl pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:bg-[conic-gradient(at_top_left,_#dd9701,#df6902,_#f63a01)] before:animate-glow before:blur-xl before:opacity-40" />

      {/* Grainy texture overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />

      {/* Main content with border and hover effect */}
      <div className="relative z-10 bg-stone-900 rounded-3xl border border-white/10 p-4 transition-all duration-300 group-hover:border-white/40 group-hover:shadow-white/20">
        {children}
      </div>
    </div>
  );
};
