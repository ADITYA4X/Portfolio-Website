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
      <h2 className="font-serif text-3xl text-stone-800 dark:text-white md:text-5xl  text-center mt-6">
        {title}
      </h2>
      <p className="text-center text-stone-500 dark:text-white/70 md:text-lg lg:text-xl  mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
