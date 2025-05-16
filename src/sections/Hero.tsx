import devImage from "@/assets/images/soft-dev.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5 "
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>

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
            &quot;Grounded in electrons, thriving in algorithms &mdash; I
            transformed my path from power to programming&quot;
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
