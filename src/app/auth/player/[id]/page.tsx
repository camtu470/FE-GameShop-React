
import { players } from "@/data/player";
import { div } from "motion/react-client";
import { notFound } from "next/navigation";
import {
  SiRiotgames,
  SiNintendogamecube,
  SiRedcandlegames,
} from "react-icons/si";
import { GiTrophyCup } from "react-icons/gi";
import { IoDiamondSharp } from "react-icons/io5";
import NameArea from "@/components/layout/name";
import Team from "@/components/layout/team";
import Footer from "@/components/home1/footer";

interface PlayerDetailProps {
  params: {
    id: string;
  };
}

export default function PlayerDetail({ params }: PlayerDetailProps) {
  const player = players.find((p) => p.id === parseInt(params.id));

  if (!player) return notFound();

  return (
    <div className="flex flex-col gap-4 font-sans">
      <NameArea title={`Player #${player.id}`} />
      <div className="flex flex-col text-center gap-6">
        <div className="px-16 flex items-center">
          <div className="w-1/2">
            <div className="w-7/12 mx-auto relative">
              <img
                src={player.image}
                alt={player.name}
                className="relative w-9/12 z-20 mx-auto rounded-full object-cover shadow-md border-[8px] border-[#45f882]"
              />
              <div className="z-10 h-[120px] w-full absolute bottom-[-40px] left-[0px] bg-[#45f882] rotate-[35deg] origin-top-right"></div>
              <div className="z-10 h-[120px] w-full absolute bottom-[-40px] right-[0px] bg-[#45f882] rotate-[-35deg] origin-top-left"></div>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-2">
            <h1 className="text-7xl font-extrabold text-yellow-300">
              {player.name}
            </h1>
            <p className="text-xl font-bold text-white">
              {player.role} - {player.team}
            </p>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto flex flex-col gap-6 mt-10 bg-[#182029] rounded-lg shadow text-white">
        <div className="flex flex-col gap-4">
          <div className="bg-[#1f2935] p-6">
            <h2 className="text-xl font-extrabold text-[#45f882] uppercase">
              Giới thiệu
            </h2>
          </div>
          <div className="flex flex-col gap-2 px-10 text-sm">
            <p className="">{player.introduction}</p>
            <p className="">{player.bio}</p>
          </div>
        </div>
        {/* Tiểu sử */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#1f2935] p-6">
            <h2 className="text-xl font-extrabold text-[#45f882] uppercase">
              Tiểu sử
            </h2>
          </div>
          <div className="flex flex-col gap-10 uppercase px-10 py-6">
            <div className="flex gap-10">
              <div className="w-1/2 flex gap-2 items-center">
                <SiNintendogamecube className="text-6xl" />
                <div className="flex flex-col gap-1">
                  <p className="text-[#45f882] text-xs font-bold">Member</p>{" "}
                  <p className="font-bold text-xl">{player.team}</p>
                </div>
              </div>
              <div className="w-1/2 flex gap-2 items-center">
                <GiTrophyCup className="text-6xl" />
                <div className="flex flex-col gap-1">
                  <p className="text-[#45f882] text-xs font-bold">WIN TIME</p>{" "}
                  <p className="font-bold text-xl">{player.wins}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <IoDiamondSharp className="text-6xl " />
              <div className="flex flex-col gap-2">
                <p className="text-[#45f882] text-xs font-bold">COMPETITION</p>
                <div className="flex flex-wrap gap-4">
                  {player.awards.map((genre, i) => (
                    <span
                      key={i}
                      className="shadow text-sm font-bold rounded bg-[#2a3542] hover:bg-[#45f882] hover:text-black cut-corner-br px-4 py-2 cursor-pointer"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Thế mạnh */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#1f2935] p-6">
            <h2 className="text-xl font-extrabold text-[#45f882] uppercase">
              Thế mạnh
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 px-10 py-2">
            {player.strengths.map((genre, i) => (
              <span
                key={i}
                className="shadow uppercase text-sm font-bold rounded bg-[#2a3542] hover:bg-[#45f882] hover:text-black cut-corner-br px-4 py-2 cursor-pointer"
              >
                {genre}
              </span>
            ))}
          </div>
          <p className="px-10 text-sm">{player.strengthDescriptions}</p>
        </div>
        {/* Thể loại game */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#1f2935] p-6">
            <h2 className="text-xl font-extrabold text-[#45f882] uppercase">
              Thể loại game
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 px-10 py-2">
            {player.gameGenres.map((genre, i) => (
              <span
                key={i}
                className="shadow uppercase text-sm font-bold rounded bg-[#2a3542] hover:bg-[#45f882] hover:text-black cut-corner-br px-4 py-2 cursor-pointer"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Ảnh cuộc thi */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#1f2935] p-6">
            <h2 className="text-xl font-extrabold text-[#45f882] uppercase">
              Cuộc thi
            </h2>
          </div>
          <div className="flex flex-col gap-10 px-10 py-6">
            {player.competitionImages.map((img, i) => (
              <div key={i} className=" flex flex-col gap-4">
                <img
                  src={img.image}
                  alt={`Competition ${i + 1}`}
                  className="w-full rounded-lg object-cover"
                />
                <div className="text-center italic font-bold">
                  {img.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Team />
      <Footer />
    </div>
  );
}
