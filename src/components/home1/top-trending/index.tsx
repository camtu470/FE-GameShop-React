"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GiFireDash } from "react-icons/gi";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaEthereum, FaLongArrowAltRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { trendingNFTs } from "@/data/nft";

const TopTrending = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const router = useRouter();

  // Cập nhật visibleCount theo kích thước màn hình
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1); // Mobile
      else if (width < 1024) setVisibleCount(2); // Tablets
      else setVisibleCount(4); // Desktop
    };

    updateVisibleCount(); // chạy lần đầu
    window.addEventListener("resize", updateVisibleCount); // lắng nghe resize
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

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
    <div className="px-4 sm:px-6 lg:px-10 flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-geistMono uppercase">
            Top Trending
          </h1>
          <GiFireDash className="text-white text-4xl sm:text-5xl" />
        </div>
        <div className="flex gap-2 items-center text-3xl sm:text-4xl">
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
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 transition-all duration-300 ease-in-out">
        {visibleNFTs.map((nft) => (
          <div
            key={`${nft.id}-${nft.handle}`}
            className="p-4 flex flex-col gap-4 shadow rounded-xl bg-[#182029] text-white cursor-pointer hover:scale-[1.02] transition-transform"
            onClick={() => router.push(`/pages/shop/products/${nft.id}`)}
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
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-sm">Last Bid</p>
                <div className="flex gap-1 items-center">
                  <FaEthereum className="text-yellow-300 text-base" />
                  <p className="font-bold">
                    {nft.lastBid} <span className="text-yellow-300">ETH</span>
                  </p>
                </div>
              </div>
              <button className="flex gap-2 items-center p-2 px-4 bg-yellow-300 rounded-md text-black font-bold hover:brightness-110 transition text-sm">
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
