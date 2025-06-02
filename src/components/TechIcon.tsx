export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop
            offset="0%"
            stopColor="rgb(234 88 12 / var(--tw-text-opacity))"
          />
          <stop
            offset="100%"
            stopColor="rgb(202 138 4 / var(--tw-text-opacity))"
          />
        </linearGradient>
      </svg>
    </>
  );
};
