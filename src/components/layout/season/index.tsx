// import React from "react";
// import { Timeline } from "@/components/ui/timeline";
// import { div } from "motion/react-client";
// import { GoDotFill } from "react-icons/go";
// const Season = () => {
//   const data = [
//     {
//       title: "2024",
//       content: (
//         <div>
//           <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="https://assets.aceternity.com/templates/startup-1.webp"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//             <img
//               src="https://assets.aceternity.com/templates/startup-2.webp"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//             <img
//               src="https://assets.aceternity.com/templates/startup-3.webp"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//             <img
//               src="https://assets.aceternity.com/templates/startup-4.webp"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Early 2023",
//       content: (
//         <div>
//           <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//             I usually run out of copy, but when I see content this big, I try to
//             integrate lorem ipsum.
//           </p>
//           <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//             Lorem ipsum is for people who are too lazy to write copy. But we are
//             not. Here are some more example of beautiful designs I built.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="https://assets.aceternity.com/pro/hero-sections.png"
//               alt="hero template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//             <img
//               src="https://assets.aceternity.com/features-section.png"
//               alt="feature template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//             <img
//               src="https://assets.aceternity.com/pro/bento-grids.png"
//               alt="bento template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//             <img
//               src="https://assets.aceternity.com/cards.png"
//               alt="cards template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Changelog",
//       content: (
//         <div>
//           <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//             Deployed 5 new components on Aceternity today
//           </p>
//           <div className="mb-8">
//             <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//               ✅ Card grid component
//             </div>
//             <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//               ✅ Startup template Aceternity
//             </div>
//             <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//               ✅ Random file upload lol
//             </div>
//             <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//               ✅ Himesh Reshammiya Music CD
//             </div>
//             <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//               ✅ Salman Bhai Fan Club registrations open
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="https://assets.aceternity.com/pro/hero-sections.png"
//               alt="hero template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//             <img
//               src="https://assets.aceternity.com/features-section.png"
//               alt="feature template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//             <img
//               src="https://assets.aceternity.com/pro/bento-grids.png"
//               alt="bento template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//             <img
//               src="https://assets.aceternity.com/cards.png"
//               alt="cards template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//             />
//           </div>
//         </div>
//       ),
//     },
//   ];
//   return (
//     <div className="relative w-full overflow-clip">
//       <Timeline data={data} />
//     </div>

//   );
// };

// export default Season;

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
    <div className="w-10/12 mx-auto flex gap-10">
      {/* Left Section */}
      <div className="w-6/12 flex flex-col gap-6">
        <h1 className="uppercase font-extrabold text-6xl font-sans">
          a look into roadmaps seasons
        </h1>
        <p className="text-[#ADB0BC]">
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
          className="animate-float"
        />
      </div>

      {/* Timeline line */}
      <div className="relative mx-6">
        <div className="w-[8px] h-full bg-gradient-to-b from-[#45f882] to-transparent"></div>
        <MdPlayArrow className="absolute top-[90px] left-[-12px] text-[#45f882] text-6xl" />
      </div>

      {/* Right Section: Render from data */}
      <div className="w-6/12 flex flex-col gap-6">
        {seasonData.map((season, seasonIndex) => (
          <div
            key={seasonIndex}
            className="p-6 flex flex-col gap-4 bg-[#1b242e] rounded-lg"
          >
            <h1 className="font-extrabold font-sans text-xl">{season.title}</h1>
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
