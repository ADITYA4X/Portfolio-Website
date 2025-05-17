import devImage from "@/assets/images/soft-dev.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import CircleIcon from "@/assets/icons/circle.png";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={770} rotation={-72}>
          <StarIcon className="size-20 text-orange-700" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-orange-800" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-orange-700" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-15}>
          <SparkleIcon className="size-8 text-orange-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-orange-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-orange-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-10 text-orange-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-orange-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-orange-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-orange-300/20"></div>
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center ">
          <Image
            src={devImage}
            className="size-[150px]"
            alt="Software Developer"
          />
          <div className="px-4 py-1.5 inline-flex items-center gap-4 mt-2">
            <div className="text-sm text-orange-700 font-medium">
              Web Developer
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide">
            Hello, My name is <span className=" pl-2 ">ADITYA</span>{" "}
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            &quot;Grounded in electrons, thriving in algorithms - I transformed
            my path from power to programming&quot;
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-8 h-10 hover:bg-white/20 transition">
            <span className="font-semibold">Contact me 👨‍💻</span>
          </button>
          <button className="inline-flex items-center gap-2 bg-white border border-black/15 text-stone-900 rounded-full px-4 h-10 hover:bg-white/60 transition">
            <span className="font-semibold">Download CV ⬇️</span>
          </button>
        </div>
      </div>
    </div>
  );
};
