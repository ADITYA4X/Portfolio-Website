import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const LeetCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="none"
    stroke="currentColor"
    strokeWidth="40"
    className="w-[1.2em] h-[1.2em]"
  >
    <path
      d="M189.5 148.3L263.1 74.7C287.6 50.2 324.3 47.5 351 72.2C375.5 94.9 378.7 133.1 357.2 158.2L197.3 318.1C175.8 339.6 140.6 339.6 119.1 318.1C97.6 296.6 97.6 261.4 119.1 239.9L275.6 83.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M322 321L375.1 374.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const icons = [
  {
    Icon: RiGithubFill,
    href: "https://github.com",
  },
  {
    Icon: RiLinkedinFill,
    href: "https://linkedin.com",
  },
  {
    Icon: FaXTwitter,
    href: "https://Twitter.com",
  },
  {
    Icon: LeetCodeIcon,
    href: "https://leetcode.com",
  },
  {
    Icon: RiInstagramFill,
    href: "https://instagram.com",
  },
];

export const Socials = () => {
  return (
    <div className="flex z-30">
      {icons.map(({ Icon, href }, index) => (
        <Link href={href} key={index} passHref legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-orange-600 hover:scale-110 transform transition-all duration-200 mx-2"
          >
            <Icon />
          </a>
        </Link>
      ))}
    </div>
  );
};
