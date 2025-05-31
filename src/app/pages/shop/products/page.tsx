
"use client";

import { useState } from "react";
import { trendingNFTs } from "@/data/nft";
import { useRouter } from "next/navigation";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";


export default function AllProductsPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(trendingNFTs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNFTs = trendingNFTs.slice(indexOfFirstItem, indexOfLastItem);

  const handleCardClick = (id: string) => {
    router.push(`/shop/products/${id}`);
  };

  return (
    <div className="p-6 bg-[#121212] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">NFT Marketplace</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentNFTs.map((trendingNFTs) => (
          <div
            key={trendingNFTs.id}
            onClick={() => handleCardClick(trendingNFTs.id)}
            className="cursor-pointer p-4 flex flex-col gap-4 shadow rounded-xl bg-[#182029] hover:bg-[#1f2b3a] transition duration-300"
          >
            <img
              src={trendingNFTs.image}
              alt="nft"
              className="rounded-xl h-[200px] object-cover"
            />
            <div className="flex items-center gap-3">
              <img
                src={trendingNFTs.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{trendingNFTs.name}</p>
                <p className="text-sm text-gray-400">{trendingNFTs.username}</p>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              Last Bid: {trendingNFTs.lastBid} ETH
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="p-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
        >
          <IoIosArrowDropleft />
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="p-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
        >
          <IoIosArrowDropright />
        </button>
      </div>
    </div>
  );
}
