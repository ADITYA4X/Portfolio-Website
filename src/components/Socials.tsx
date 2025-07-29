import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import Link from "next/link";

const icons = [
  {
    Icon: RiGithubFill,
    href: "https://github.com/ADITYA4X",
  },
  {
    Icon: RiLinkedinFill,
    href: "https://www.linkedin.com/in/aditya-k-68323a105/",
  },
  {
    Icon: FaXTwitter,
    href: "https://x.com/adi_tya_4u",
  },
  {
    Icon: SiLeetcode,
    href: "https://leetcode.com/u/Aditya_K_04/",
  },
  {
    Icon: SiGeeksforgeeks,
    href: "https://www.geeksforgeeks.org/user/aditya4u/",
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
