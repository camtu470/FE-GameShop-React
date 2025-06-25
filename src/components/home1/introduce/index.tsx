"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Introduce = () => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows.`;

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-[#10181F] p-6">
      {/* LEFT */}
      <div className="relative w-full lg:w-5/12">
        <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest leading-[1.2] mt-6">
          WE ARE{" "}
          <span className="font-extrabold text-[#45f882]">developer</span> ern
          nft gam<span className="font-extrabold">ing</span>
        </h1>
        <h1 className="absolute top-0 left-0 text-[80px] md:text-[150px] lg:text-[200px] text-[#3636363d] font-extrabold -z-10">
          ONLINE
        </h1>

        {/* Spinning circle + text */}
        <div className="absolute z-20 bottom-8 right-0 w-[100px] md:w-[150px] h-[100px] md:h-[150px] animate-spin-slow rounded-full border-2 border-dashed border-yellow-500">
          <svg
            className="absolute top-1/2 left-1/2 w-8 h-8 md:w-12 md:h-12 -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="32 4 39.09 24.26 60 24.26 42.45 38.74 49.55 59 32 44.52 14.45 59 21.55 38.74 4 24.26 24.91 24.26"
              fill="#FFD700"
              stroke="#FFC700"
              strokeWidth="2"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
            className="absolute top-0 left-0 w-full h-full"
          >
            <defs>
              <path
                id="textPath"
                d="M 75,75 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
            </defs>
            <text
              fill="white"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              <textPath href="#textPath" startOffset="50%">
                SUPER NFT GAMING SITS • SUPER NFT GAMING SITS • SUPER NFT GAMING
                SITS •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative w-full lg:w-7/12 flex flex-col sm:flex-row gap-4 z-20">
        <img
          src="https://themedox.com/mykd/wp-content/uploads/2023/10/mask_img01.jpg"
          alt="img1"
          className="rounded w-full sm:w-1/2 object-cover"
        />
        <div className="relative w-full sm:w-1/2">
          <img
            src="https://themedox.com/mykd/wp-content/uploads/2023/10/mask_img02.jpg"
            alt="img2"
            className="rounded w-full object-cover"
          />
          {/* Bouncing SVG */}
          <div className="absolute top-0 right-0 text-[#45f882] bg-[#10181F] p-2 sm:p-4 px-6 sm:px-10">
            <div className="animate-bounceX">
              <svg
                width="109"
                height="35"
                viewBox="0 0 109 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {[
                  "M9 0H0V7H9V0Z",
                  "M24 0H15V7H24V0Z",
                  "M38 0H29V7H38V0Z",
                  "M53 0H44V7H53V0Z",
                  "M67 0H58V7H67V0Z",
                  "M80 0H71V7H80V0Z",
                  "M9 14H0V21H9V14Z",
                  "M24 14H15V21H24V14Z",
                  "M38 14H29V21H38V14Z",
                  "M53 14H44V21H53V14Z",
                  "M67 14H58V21H67V14Z",
                  "M80 14H71V21H80V14Z",
                  "M95 14H86V21H95V14Z",
                  "M109 14H100V21H109V14Z",
                  "M9 28H0V35H9V28Z",
                  "M24 28H15V35H24V28Z",
                  "M38 28H29V35H38V28Z",
                  "M53 28H44V35H53V28Z",
                  "M67 28H58V35H67V28Z",
                  "M80 28H71V35H80V28Z",
                  "M95 28H86V35H95V28Z",
                  "M109 28H100V35H109V28Z",
                ].map((d, idx) => (
                  <path key={idx} d={d} fill="currentColor" />
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Text Box */}
        <div className="absolute h-fit bottom-0 right-0 w-full sm:w-10/12 bg-[#10181F] p-4 rounded">
          <TextGenerateEffect
            words={words}
            className="text-[#ADB0D2] font-sans text-sm md:text-base font-medium px-2 md:px-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
