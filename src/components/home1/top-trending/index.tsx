"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GiFireDash } from "react-icons/gi";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaEthereum, FaLongArrowAltRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { NFT, trendingNFTs } from "@/data/nft";

const TopTrending = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const router = useRouter();

  const handleNext = () => {
    if (startIndex + visibleCount < trendingNFTs.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleNFTs = trendingNFTs.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="px-10 flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className="text-5xl font-extrabold font-geistMono">
            TOP TRENDING
          </h1>
          <GiFireDash className="text-white text-5xl" />
        </div>
        <div className="flex gap-2 items-center text-4xl">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="disabled:opacity-30"
            aria-label="Previous"
          >
            <IoIosArrowDropleft />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= trendingNFTs.length}
            className="disabled:opacity-30"
            aria-label="Next"
          >
            <IoIosArrowDropright />
          </button>
        </div>
      </div>

      {/* NFT Cards */}
      <div className="flex gap-4 transition-all duration-300 ease-in-out">
        {visibleNFTs.map((nft) => (
          <div
            key={`${nft.id}-${nft.handle}`}
            className="w-1/4 p-4 flex flex-col gap-4 shadow rounded-xl bg-[#182029] text-white cursor-pointer hover:scale-[1.02] transition-transform"
            onClick={() => router.push(`/shop/products/${nft.id}`)}
          >
            {/* Avatar & Info */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <img
                  src={nft.avatar}
                  alt={`Avatar of ${nft.username}`}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-bold text-sm">{nft.username}</p>
                  <p className="text-xs text-gray-500">{nft.handle}</p>
                </div>
              </div>
              <CiHeart className="text-2xl text-gray-300" />
            </div>

            {/* NFT Image */}
            <img
              src={nft.image}
              alt={`NFT by ${nft.username}`}
              className="rounded-xl h-[200px] object-cover"
            />

            <div className="w-9/12 h-[1px] mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

            {/* Bid Section */}
            <div className="w-10/12 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-sm">Last Bid</p>
                <div className="flex gap-1 items-center">
                  <FaEthereum className="text-yellow-300 text-base" />
                  <p className="font-bold">
                    {nft.lastBid} <span className="text-yellow-300">ETH</span>
                  </p>
                </div>
              </div>
              <button className="flex gap-2 items-center p-2 px-4 bg-yellow-300 rounded-md text-black font-bold hover:brightness-110 transition">
                Bid <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrending;
