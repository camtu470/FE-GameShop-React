import SectionHeader from "@/components/ui/SectionHeader";
import React from "react";

interface Team {
  name: string;
  game: string;
  logo: string;
}

interface Match {
  id: number;
  team1: Team;
  team2: Team;
  time: string;
  datetime: string;
}

const matches: Match[] = [
  {
    id: 1,
    team1: {
      name: "Sky Hunter",
      game: "Dota 1",
      logo: "https://themedox.com/mykd/wp-content/uploads/2023/10/team_vs01.png",
    },
    team2: {
      name: "The Tadium",
      game: "Dota 2",
      logo: "https://themedox.com/mykd/wp-content/uploads/2023/10/team_vs01.png",
    },
    time: "08:30",
    datetime: "October 7, 2023, 8:30 pm",
  },
  {
    id: 2,
    team1: {
      name: "Night Wolves",
      game: "Valorant",
      logo: "https://themedox.com/mykd/wp-content/uploads/2023/10/team_vs02.png",
    },
    team2: {
      name: "Phantom Core",
      game: "Valorant",
      logo: "https://themedox.com/mykd/wp-content/uploads/2023/10/team_vs03.png",
    },
    time: "10:00",
    datetime: "October 8, 2023, 10:00 am",
  },
  {
    id: 3,
    team1: {
      name: "Iron Blades",
      game: "CS:GO",
      logo: "https://themedox.com/mykd/wp-content/uploads/2023/10/team_vs04.png",
    },
    team2: {
      name: "Silent Strike",
      game: "CS:GO",
      logo: "https://themedox.com/mykd/wp-content/uploads/2023/10/team_vs05.png",
    },
    time: "14:15",
    datetime: "October 9, 2023, 2:15 pm",
  },
];

const MatchCard = ({ match }: { match: Match }) => (
  <div className="relative group">
    {/* Fake border */}
    <div className="absolute inset-0 w-11/12  lg:w-10/12 mx-auto clip-arrow bg-[#45f882] scale-[1.02] z-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

    {/* Main content */}
    <div className="relative w-11/12 lg:w-10/12 mx-auto bg-[#1f212c] clip-arrow p-2 lg:p-4 z-10">
      <div className="w-10/12 mx-auto flex items-center">
        {/* Team 1 */}
        <div className="w-2/12">
          <div className="w-14 h-14 lg:w-24 lg:h-24 flex justify-center border-[4px] border-[#3a3e4c] rounded-2xl p-2 shadow">
            <img
              src={match.team1.logo}
              alt={match.team1.name}
              className="w-full"
            />
          </div>
        </div>

        {/* Middle Info */}
        <div className="w-8/12 flex items-center">
          <div className="w-4/12 text-right flex flex-col">
            <p className="text-xs lg:text-sm font-medium text-[#45f882]">
              {match.team1.game}
            </p>
            <p className="uppercase font-extrabold text-xs lg:text-xl">
              {match.team1.name}
            </p>
          </div>
          <div className="w-4/12 flex justify-center mx-2">
            <p className="text-sm lg:text-4xl font-extrabold border-[2px] lg:border-[5px] border-[#383c4e] rounded-3xl p-2 lg:p-6">
              {match.time}
            </p>
          </div>
          <div className="w-4/12 text-left flex flex-col">
            <p className="text-xs lg:text-sm font-medium text-[#45f882]">
              {match.team2.game}
            </p>
            <p className="uppercase font-extrabold text-xs lg:text-xl">
              {match.team2.name}
            </p>
          </div>
        </div>

        {/* Team 2 */}
        <div className="w-2/12">
          <div className="w-14 h-14 lg:w-24 lg:h-24 flex justify-center ml-auto border-[4px] border-[#3a3e4c] rounded-2xl p-2 shadow">
            <img
              src={match.team2.logo}
              alt={match.team2.name}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Bottom info */}
    <div className="absolute bottom-[-33px] left-[150px] lg:bottom-[-36px] lg:left-[460px] py-2 w-1/2 lg:w-3/12 bg-[#1f212c] group-hover:bg-[#45f882] clip-diagonal transition-all z-20">
      <p className="uppercase text-xs lg:text-sm font-bold text-gray-400 group-hover:text-black text-center">
        {match.datetime}
      </p>
    </div>
  </div>
);

const MatchList = () => {
  return (
    <div className="flex flex-col gap-6 font-sans py-10">
      <SectionHeader subtitle=" MATCHES list" title="upcoming MATCHES" />

      <div className="flex flex-col pb-10 gap-16 lg:gap-20 lg:py-10">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
