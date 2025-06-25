import React from "react";
import { MdPlayArrow } from "react-icons/md";

const Season = () => {
  const seasonData = [
    {
      title: "SEASON 1",
      items: [
        { text: "Battle Practice Mode", completed: true },
        { text: "Android Mobile", completed: true },
        { text: "iOS Open Beta", completed: true },
        { text: "Land Creation & Building", completed: true },
      ],
    },
    {
      title: "SEASON 2",
      items: [
        { text: "Land Creation & Building", completed: true },
        { text: "Android Apps Development", completed: true },
        { text: "iOS Open Beta Test", completed: false },
        { text: "Land Creation & Building", completed: false },
      ],
    },
    {
      title: "SEASON 3",
      items: [
        { text: "Switch to 3D gameplay", completed: false },
        { text: "Android Mobile", completed: false },
        { text: "iOS Open Beta", completed: false },
        { text: "Building Creation", completed: false },
      ],
    },
  ];

  return (
    <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-10">
      {/* Left Section */}
      <div className="w-full lg:w-6/12 flex flex-col gap-6">
        <h1 className="uppercase font-extrabold text-3xl lg:text-6xl font-sans">
          a look into roadmaps seasons
        </h1>
        <p className="text-[#ADB0BC] text-sm lg:text-base">
          With Season 1 Ending with our play and Duis elementum sollicitudin is
          yaugue euismods Nulla ulla Player-focused updates games from Mobile
          App and Enjoy
        </p>
        <div className="py-2 mt-2 clip-arrow w-1/2 bg-white group transition-colors duration-300">
          <button className="w-full p-2 clip-arrow font-sans bg-[#45f882] text-black font-extrabold text-sm transition-colors duration-300 group-hover:bg-white">
            Road map
          </button>
        </div>
        <img
          src="https://themedox.com/mykd/wp-content/uploads/2023/10/roadmap.png"
          alt="roadmap"
          className="animate-float w-full max-w-sm"
        />
      </div>

      {/* Timeline line for large screens */}
      <div className="hidden lg:flex relative mx-6">
        <div className="w-[8px] h-full bg-gradient-to-b from-[#45f882] to-transparent"></div>
        <MdPlayArrow className="absolute top-[90px] left-[-12px] text-[#45f882] text-6xl" />
      </div>

      {/* Right Section: Timeline items */}
      <div className="w-full lg:w-6/12 flex flex-col gap-6">
        {seasonData.map((season, seasonIndex) => (
          <div
            key={seasonIndex}
            className="p-6 flex flex-col gap-4 bg-[#1b242e] rounded-lg"
          >
            <h1 className="font-extrabold font-sans text-lg lg:text-xl">
              {season.title}
            </h1>
            <ul className="flex flex-col gap-2">
              {season.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      item.completed
                        ? "bg-[#45f882] border-[#1b242e]"
                        : "bg-[#10161c] border-[#262e38]"
                    }`}
                  ></div>
                  <p className="text-sm font-sans capitalize">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Season;
