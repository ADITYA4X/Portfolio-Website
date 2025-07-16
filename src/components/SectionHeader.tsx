import { TextGenerateEffect } from "./ui/text-generate-effect";
export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center ">
        <p className="uppercase dark:font-semibold font-bold tracking-widest bg-gradient-to-r dark:from-yellow-300 from-amber-500 dark:to-orange-600 to-red-600  text-center bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>

      <TextGenerateEffect
        words={title}
        className="font-serif text-3xl md:text-5xl text-center text-stone-800 dark:text-white mt-6"
        duration={0.5}
        initialDelay={0}
      />

      <TextGenerateEffect
        words={description}
        className="text-center text-stone-500 dark:text-white/70 md:text-lg lg:text-xl mt-4 text-[16px] max-w-md mx-auto"
        duration={0.5}
        initialDelay={1.2}
      />
    </>
  );
};
