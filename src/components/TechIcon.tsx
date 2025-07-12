export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <defs>
          <linearGradient
            id="tech-icon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#f97316" // orange-500
            />
            <stop
              offset="100%"
              stopColor="#ca8a04" // yellow-600
            />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
