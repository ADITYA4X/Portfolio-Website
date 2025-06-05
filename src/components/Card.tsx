import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{ className?: string }>;

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={twMerge(
        "bg-stone-900 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-10 after:pointer-events-none after:rounded-3xl after:outline-2 after:outline-white/20 after:outline",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      {children}
    </div>
  );
};
