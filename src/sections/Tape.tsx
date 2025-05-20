import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Dream ",
  "Think ",
  "Build ",
  "Debug ",
  "Test ",
  "Refactor ",
  "Optimize ",
  "Integrate ",
  "Deploy ",
  "Launch ",
  "Scale ",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className=" -mx-1 ">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]  uppercase font-semibold text-xl">
          <div className="flex flex-none">
            {words.map((word) => (
              <div key={word} className="inline-flex items-center ">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-600  text-center bg-clip-text text-transparent px-8 ">
                  {word}
                </span>
                <StarIcon className="size-3 text-white/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
