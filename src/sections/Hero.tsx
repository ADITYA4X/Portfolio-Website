import devImage from "@/assets/images/soft-dev.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import CircleIcon from "@/assets/icons/circle.png";
import { HeroOrbit } from "@/components/HeroOrbit";
import { ArrowDown } from "lucide-react";
import { Socials } from "@/components/Socials";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-orange-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-orange-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-orange-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-orange-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 dark:text-orange-800 text-amber-500" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 dark:text-orange-700 text-amber-400" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-orange-300/20"></div>
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-orange-300/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-orange-300/20"></div>
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-20 dark:text-orange-700 text-amber-400" />
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
            <div className="bg-orange-600 size-2 rounded-full relative">
              <div className="bg-orange-600 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm dark:text-white/70 text-stone-600 dark:font-medium font-semibold">
              Web Developer
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide text-stone-800 dark:text-white">
            Hello, My name is <span className=" pl-2 ">ADITYA</span>{" "}
          </h1>
          <p className="mt-4 text-center text-stone-600 dark:text-white/60 md:text-lg">
            &quot;Grounded in electrons, thriving in algorithms - I transformed
            my path from power to programming&quot;
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="#contact"
            className="relative z-0 group inline-flex items-center gap-2 dark:bg-white/10 bg-white border dark:border-white/15 border-stone-300 rounded-full pl-9 pr-2 hover:pr-8 h-10 dark:hover:bg-white/20 hover:bg-stone-200 transition dark:text-white text-stone-800 hover:border-stone-600 duration-300"
          >
            <span className="font-semibold">Contact me</span>
            <span className="w-4 h-4 pb-6 transition duration-100 transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
              👨‍💻
            </span>
          </a>

          <a
            href="/Resume.pdf"
            download
            className="relative z-10 group inline-flex items-center gap-2 dark:bg-white bg-stone-800 border border-black/15 dark:text-stone-900 text-white rounded-full pl-5 hover:pr-5 h-10 dark:hover:bg-white/60 duration-500 transition font-semibold"
          >
            <span>Download CV</span>
            <ArrowDown className="w-4 h-4 transition duration-300 transform opacity-0 group-hover:opacity-100 group-hover:translate-y-1" />
          </a>
        </div>

        <div className="mt-12 flex justify-center items-center gap-4 ">
          <Socials />
        </div>
      </div>
    </div>
  );
};
