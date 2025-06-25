import { IoArrowRedoSharp } from "react-icons/io5";
import { SiGradleplaypublisher } from "react-icons/si";

const Introduce = () => {
  return (
    <div className="w-11/12 xl:w-10/12 mx-auto flex flex-col-reverse lg:flex-row gap-10 py-10 lg:py-20">
      {/* LEFT - TEXT SECTION */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="uppercase text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-white leading-tight">
          The Journey of The NFT Sites
        </h1>
        <div className="w-2/12 my-2 h-2 bg-[#45f882] clip-diagonal"></div>
        <p className="text-sm sm:text-base tracking-wide text-[#ADB0D2] leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          itaque doloremque explicabo odio dolore quisquam in minima, magni
          voluptates optio nobis autem sit asperiores cupiditate maiores cum!
          Architecto, deleniti.
        </p>

        {/* STATS */}
        <div className="flex  gap-2 lg:gap-20 my-4">
          {[
            { label: "Member", value: "40k" },
            { label: "NFTS", value: "12k" },
            { label: "Artist", value: "30k" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col text-center gap-1 w-1/3 sm:w-auto"
            >
              <p className="font-extrabold text-3xl sm:text-5xl">
                {item.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#ADB0D2]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-6 sm:gap-20">
          <div className="w-fit flex items-center gap-2 shadow rounded-lg border border-[#4c5155] hover:bg-[#232d37] px-4 py-2 cursor-pointer">
            <p className="font-bold text-sm sm:text-base">Read more</p>
            <IoArrowRedoSharp className="text-[#45f882]" />
          </div>
          <div className="flex items-center gap-2">
            <SiGradleplaypublisher className="text-2xl sm:text-4xl text-[#45f882]" />
            <p className="capitalize font-bold text-sm">How to work</p>
          </div>
        </div>
      </div>

      {/* RIGHT - IMAGE SECTION */}
      <div className="w-10/12 mx-auto lg:w-5/12">
        <div className="bg-[#45f882] pr-2 py-8 lg:pr-4 lg:pt-10">
          <div className="relative h-[280px] sm:h-[360px] lg:h-[480px] bg-[#2c3237] rounded rotate-[3deg] lg:rotate-[5deg] origin-top-right">
            <img
              src="https://themedox.com/mykd/wp-content/uploads/2023/10/fun_fact.png"
              alt="nft visual"
              className="absolute top-[-60px] sm:top-[-80px] right-[20px] sm:right-[60px] w-9/12 lg:w-10/12 mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
