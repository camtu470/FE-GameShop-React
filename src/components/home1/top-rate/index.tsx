import SectionHeader from "@/components/ui/SectionHeader";
import { useState } from "react";
import { CgArrowsExchangeAltV, CgArrowsExchangeV } from "react-icons/cg";

const fakeData = [
  {
    image:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/about_img01.jpg",
    mainImage:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/about_img05.jpg",
    title: "The dogami",
    rate: "65%",
    description:
      "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper.",
    features: [
      {
        title: "Chicchi Dragon Ball",
        icon: "https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon01.png",
      },
      {
        title: "Space Babe Night",
        icon: "https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon02.png",
      },
      {
        title: "Dragon Ball",
        icon: "https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon03.png",
      },
    ],
  },
  {
    image:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab01.png",
    mainImage:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/about_img03.jpg",
    title: "NFT Galaxy",
    rate: "78%",
    description:
      "This is NFT Galaxy project, with ultra features and amazing metaverse tools.",
    features: [
      {
        title: "Super Rare NFT",
        icon: "https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon01.png",
      },
      {
        title: "Staking Pool",
        icon: "https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon02.png",
      },
      {
        title: "Governance Token",
        icon: "https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon03.png",
      },
    ],
  },
  {
    image:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab01.png",
    mainImage:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/about_img04.jpg",
    title: "Support Hero",
    rate: "50%",
    description:
      "Support Hero is a blockchain-based character used to defend and heal in real-time battles.",
    features: [
      {
        title: "Healing Shield",
        icon: "https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon01.png",
      },
      {
        title: "Defense Up",
        icon: "https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon02.png",
      },
      {
        title: "Ultimate Aura",
        icon: "https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon03.png",
      },
    ],
  },
];

const TopRate = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedData = fakeData[selectedIndex];

  const boxes = [
    { title: "Dragon ball" },
    { title: "NFT MARKET" },
    { title: "Support" },
  ];

  return (
    <div className="flex flex-col gap-4 px-4 md:px-10">
      <SectionHeader subtitle=" KNOW ABOUT US" title=" TOP RATED STREAMS" />

      {/* Buttons */}
      <div className="mx-auto flex flex-wrap justify-center gap-4 my-6">
        {/* BUY HERO */}
        <div className="relative border-[3px] px-6 border-[#45f882] hover:bg-[#45f882] hover:text-black cursor-pointer">
          <div className="border-x-[3px] px-2 border-[#45f882]">
            <button className="p-2 font-bold font-sans">BUY HERO</button>
          </div>
          <CgArrowsExchangeAltV className="absolute top-[3px] left-[-6px] text-4xl text-[#45f882]" />
          <CgArrowsExchangeV className="absolute top-[3px] right-[-6px] text-4xl text-[#45f882]" />
        </div>

        {/* BUY NFTS */}
        <div className="relative border-[3px] px-6 border-[#FFBE18] hover:bg-[#FFBE18] hover:text-black cursor-pointer">
          <div className="border-x-[3px] px-2 border-[#FFBE18]">
            <button className="p-2 font-bold font-sans">BUY NFTS</button>
          </div>
          <CgArrowsExchangeAltV className="absolute top-[3px] left-[-6px] text-4xl text-[#FFBE18]" />
          <CgArrowsExchangeV className="absolute top-[3px] right-[-6px] text-4xl text-[#FFBE18]" />
        </div>
      </div>

      <div className="w-full h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#45f882] to-transparent" />

      {/* Avatar Tabs */}
      <div className="mx-auto my-4 w-full flex justify-center">
        <div className="flex gap-6 flex-wrap justify-center">
          {fakeData.map((data, index) => (
            <div
              key={index}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-double cursor-pointer transition-colors duration-300 ease-in-out ${
                selectedIndex === index
                  ? "border-[#FFBE18]"
                  : "border-[#45f882] hover:border-[#FFBE18]"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={data.image}
                alt=""
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#45f882] to-transparent" />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 items-center px-2 md:px-6 mt-10">
        {/* Left image */}
        <div className="w-full lg:w-5/12">
          <img
            src={selectedData.mainImage}
            alt=""
            className="rounded w-full object-cover"
          />
        </div>

        {/* Right text */}
        <div className="w-full lg:w-7/12 flex flex-col gap-4">
          <div className="w-full flex flex-col md:flex-row gap-6">
            {/* Text content */}
            <div className="w-full md:w-7/12 flex flex-col gap-2">
              <h1 className="uppercase text-2xl md:text-3xl font-bold font-sans">
                {selectedData.title}
              </h1>
              <h1 className="uppercase font-bold text-[#ffbe18] text-lg md:text-xl font-geistSans">
                Rate {selectedData.rate}
              </h1>
              <p
                className="text-md mt-2 text-gray-300"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {selectedData.description}
              </p>
            </div>

            {/* Feature list */}
            <div className="w-full md:w-5/12 flex flex-col gap-4">
              {selectedData.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg flex gap-2 items-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #1f2935 0%, transparent 100%, #10181f 100%)",
                  }}
                >
                  <img
                    src={feature.icon}
                    alt=""
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                  <h1 className="capitalize text-sm md:text-base">
                    {feature.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Boxes */}
          <div className="w-full flex sm:flex-row gap-4 md:mt-8">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="w-full sm:w-1/3 p-4 rounded-lg flex justify-center items-center transition-all duration-300 cursor-pointer text-center"
                style={{
                  backgroundImage:
                    hoveredIndex === index
                      ? "linear-gradient(180deg, #1f2935 0%, transparent 100%, #10181f 100%)"
                      : "linear-gradient(360deg, #1f2935 0%, transparent 100%, #10181f 100%)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h1 className="uppercase font-bold text-xs md:text-sm">
                  {box.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRate;
