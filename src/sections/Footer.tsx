import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-k-68323a105/",
  },
  {
    title: "GeetHub",
    href: "https://github.com/ADITYA4X",
  },
  {
    title: "LeetCode",
    href: "https://leetcode.com/u/Aditya_K_04/",
  },
  {
    title: "Twitter",
    href: "https://x.com/adi_tya_4u",
  },
];

export const Footer = () => {
  return (
    <footer className="relative  overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-orange-400/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8 z-10">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()} Aditya K. All rights reserved.{" "}
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 group transition-all duration-300 transform hover:scale-110 text-white/70 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4 transition-transform duration-700 ease-in-out" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
