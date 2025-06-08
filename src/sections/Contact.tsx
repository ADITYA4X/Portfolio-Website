import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-stone-950 py-8 px-10 rounded-3xl text-center">
          <h2 className="font-serif text-2xl">
            Let’s connect and create something meaningful.
          </h2>
          <p className="text-sm mt-2">
            I’m open to exciting opportunities, creative collaborations, or even
            a thoughtful tech conversation. Don’t hesitate to get in touch!
          </p>
          <button className="text-white bg-stone-900 inline-flex items-center px-6 h-12">
            <span>Conatct Me</span>
            <ArrowUpRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
