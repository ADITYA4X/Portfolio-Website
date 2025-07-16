import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center md:items-start text-center md:text-left p-6 md:py-8 md:px-10",
        className
      )}
    >
      <div className="inline-flex items-center gap-2">
        {/* <StarIcon className="size-9 text-orange-600" /> */}
        <h3 className="font-serif text-2xl lg:text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w dark:text-white/60 text-stone-600 mt-2">
        {description}
      </p>
    </div>
  );
};
