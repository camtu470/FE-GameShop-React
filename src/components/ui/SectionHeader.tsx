// components/SectionHeader.tsx
type SectionHeaderProps = {
  subtitle: string;
  title: string;
};

const SectionHeader = ({ subtitle, title }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm uppercase font-bold text-[#45f882] text-center tracking-[.25em]">
        {subtitle}
      </p>
      <h1 className="text-2xl lg:text-4xl uppercase font-extrabold text-center">{title}</h1>
      <div className="w-2/12 mx-auto mt-4 h-2 bg-[#45f882] clip-diagonal"></div>
    </div>
  );
};

export default SectionHeader;
