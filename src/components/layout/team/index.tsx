"use client";

import { useRouter } from "next/navigation";
import { players } from "@/data/player"; // Đường dẫn đúng tùy cấu trúc thư mục
import SectionHeader from "@/components/ui/SectionHeader";

const Team = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/auth/player/${id}`);
  };

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader subtitle="OUR TEAM MEMBER" title="ACTIVE TEAM MEMBERS" />

      {/* Member Cards */}
      <div className="flex gap-6 w-11/12 mx-auto">
        {players.slice(0, 4).map((member) => (
          <div
            key={member.id}
            onClick={() => handleClick(member.id)}
            className="cursor-pointer w-1/4 flex flex-col bg-[#1c242f] rounded-lg hover:-translate-y-2 transition-transform duration-500 group"
          >
            <div className="relative h-[300px] overflow-hidden">
              {/* Visual effects */}
              <div className="absolute opacity-[0.5] group-hover:opacity-[1] transition-all duration-300 ease-in-out border-t pt-1 border-[#45f882] origin-top-right rotate-[30deg] left-[-40px] top-[120px]">
                <div className="bg-[#45f882] p-8 w-[200px]"></div>
              </div>

              <div className="absolute opacity-[0.5] group-hover:opacity-[1] transition-all duration-300 ease-in-out border-t pt-1 border-green-600 origin-top-left rotate-[-30deg] right-[-40px] top-[120px]">
                <div className="bg-[#45f882] p-8 w-[200px]"></div>
              </div>

              <div className="absolute w-9/12 top-[40px] left-[40px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="border-4 border-white object-center rounded-full w-[200px] h-[200px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 px-10 pb-6 text-center">
              <h1 className="uppercase text-2xl text-white">{member.name}</h1>
              <p className="capitalize font-bold text-[#45f882]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
