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
    <div className="flex flex-col gap-2">
      <SectionHeader subtitle=" KNOW ABOUT US" title=" TOP RATED STREAMS" />
      <div className="mx-auto flex gap-6 my-6">
        <div className="relative border-[3px] px-6 border-[#45f882] hover:bg-[#45f882] hover:text-black cursor-pointer">
          <div className="border-x-[3px] px-2 border-[#45f882]">
            <button className="p-2 font-bold font-sans">BUY HERO</button>
          </div>
          <CgArrowsExchangeAltV className="absolute top-[3px] left-[-6px] text-4xl text-[#45f882]" />
          <CgArrowsExchangeV className="absolute top-[3px] right-[-6px] text-4xl text-[#45f882]" />
        </div>
        <div className="relative border-[3px] px-6 border-[#FFBE18] hover:bg-[#FFBE18] hover:text-black cursor-pointer">
          <div className="border-x-[3px] px-2 border-[#FFBE18]">
            <button className="p-2 font-bold font-sans">BUY NFTS</button>
          </div>
          <CgArrowsExchangeAltV className="absolute top-[3px] left-[-6px] text-4xl text-[#FFBE18]" />
          <CgArrowsExchangeV className="absolute top-[3px] right-[-6px] text-4xl text-[#FFBE18]" />
        </div>
      </div>
      <div className="w-11/12 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#45f882] to-transparent"></div>
      {/* Avatar Tabs */}
      <div className="w-8/12 mx-auto my-4">
        <div className="w-10/12 mx-auto flex gap-8">
          {fakeData.map((data, index) => (
            <div
              key={index}
              className={`w-20 h-20 rounded-full border-2 border-double cursor-pointer transition-colors duration-300 ease-in-out ${
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
      <div className="w-11/12 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#45f882] to-transparent"></div>
      {/* Selected Content */}
      <div className="flex gap-6 items-center px-6 mt-10">
        <div className="w-5/12">
          <img src={selectedData.mainImage} alt="" className="rounded" />
        </div>
        <div className="w-7/12 flex flex-col gap-4">
          <div className="w-full flex items-center gap-4">
            <div className="w-7/12 flex flex-col gap-2">
              <h1 className="uppercase text-3xl font-bold font-sans">
                {selectedData.title}
              </h1>
              <h1 className="uppercase font-bold text-[#ffbe18] text-xl font-geistSans">
                Rate {selectedData.rate}
              </h1>
              <p
                className="text-md mt-2"
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
            <div className="w-5/12 flex flex-col gap-4">
              {selectedData.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg flex gap-2 items-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #1f2935 0%, transparent 100%, #10181f 100%)",
                  }}
                >
                  <img src={feature.icon} alt="" className="w-10 h-10" />
                  <h1 className="capitalize">{feature.title}</h1>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Boxes */}
          <div className="w-full flex gap-2 mt-12">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="w-4/12 p-6 rounded-lg flex gap-2 items-center transition-all duration-300 cursor-pointer"
                style={{
                  backgroundImage:
                    hoveredIndex === index
                      ? "linear-gradient(180deg, #1f2935 0%, transparent 100%, #10181f 100%)"
                      : "linear-gradient(360deg, #1f2935 0%, transparent 100%, #10181f 100%)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h1 className="uppercase font-bold">{box.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRate;
