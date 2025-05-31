import SectionHeader from "@/components/ui/SectionHeader";

const Tournament = () => {
  return (
    <div className="flex flex-col gap-6 font-sans py-10">
      <SectionHeader
        subtitle="LATEST RESULTS FOR"
        title="EXPERIENCE JUST FOR"
      />
      <div className="p-10 bg-purple-300 text-center">giải đấu ở đây</div>
    </div>
  );
};

export default Tournament;
