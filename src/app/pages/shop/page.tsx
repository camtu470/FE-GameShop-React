"use client";


import {
  IoMdArrowDropright,
  IoMdSearch,
  IoMdArrowDropdown,
} from "react-icons/io";
import { FaStar, FaEthereum } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

import NameArea from "@/components/layout/name";
import Footer from "@/components/home1/footer";

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const mockNFTs = Array.from({ length: 36 }).map((_, i) => ({
    id: i,
    name: `NFT #${i + 1}`,
    username: "@Jon Max",
    avatar:
      "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar02.png",
    image: "https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img04.jpg",
    lastBid: (0.005 + i * 0.001).toFixed(3),
  }));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNFTs = mockNFTs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mockNFTs.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [price, setPrice] = useState(0.5);
  const relatedProducts = [
    {
      id: 1,
      name: "Product A",
      price: "$59.00",
      rating: 5,
      image:
        "https://themedox.com/mykd/wp-content/uploads/2023/10/shop_details02-350x350.jpg",
    },
    {
      id: 2,
      name: "Product B",
      price: "$49.00",
      rating: 4,
      image:
        "https://themedox.com/mykd/wp-content/uploads/2023/10/shop_details02-350x350.jpg",
    },
    {
      id: 3,
      name: "Product C",
      price: "$39.00",
      rating: 3,
      image:
        "https://themedox.com/mykd/wp-content/uploads/2023/10/shop_details02-350x350.jpg",
    },
  ];

  const categories = [
    { id: 1, name: "Clothing", count: 12 },
    { id: 2, name: "Digital Art", count: 8 },
    { id: 3, name: "Collectibles", count: 15 },
  ];

  return (
    <div className="">
      <NameArea title="SHOP" />

      <div className="flex gap-6 p-8">
        {/* SIDEBAR */}
        <div className="w-3/12 flex flex-col gap-8">
          {/* SEARCH */}
          <div className="flex flex-col gap-2 border border-[#333333] rounded-lg">
            <div className="flex items-center p-2">
              <IoMdArrowDropright className="text-4xl text-[#45f882]" />
              <p className="text-base font-bold font-sans">SEARCH</p>
            </div>
            <div className="w-full p-2 flex items-center bg-[#171d24] rounded-b-lg border border-[#26292c]">
              <input
                type="text"
                placeholder="Search product ..."
                className="p-2 w-10/12 bg-transparent text-[#adb0bc] outline-none"
              />
              <IoMdSearch className="w-2/12 text-2xl text-[#adb0bc]" />
            </div>
          </div>

          {/* FILTER PRICE */}
          <div className="flex flex-col gap-2 border border-[#333333] rounded-lg">
            <div className="flex items-center p-2">
              <IoMdArrowDropright className="text-4xl text-[#45f882]" />
              <p className="text-base font-bold font-sans uppercase">
                Filter by price
              </p>
            </div>
            <div className="w-full px-4 py-3 flex flex-col bg-[#171d24] rounded-b-lg border border-[#26292c]">
              <input
                type="range"
                min={0}
                max={1}
                step={0.0001}
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                className="w-full accent-[#45f882]"
              />
              <p className="text-sm text-[#adb0bc] mt-2 text-center">
                Max price:{" "}
                <span className="font-bold text-white">
                  {price.toFixed(4)} ETH
                </span>
              </p>
            </div>
          </div>

          {/* RELATED PRODUCTS */}
          <div className="flex flex-col gap-2 border border-[#333333] rounded-lg">
            <div className="flex items-center p-2">
              <IoMdArrowDropright className="text-4xl text-[#45f882]" />
              <p className="text-base font-bold font-sans uppercase">
                Related products
              </p>
            </div>
            <div className="flex flex-col gap-2 bg-[#171d24]  rounded-b-lg border border-[#26292c]">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2 items-center hover:bg-[#232c36] p-2"
                >
                  <div className="w-3/12 border border-[#26292c] rounded">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="w-9/12 flex flex-col gap-1">
                    <div className="flex gap-1 items-center text-yellow-400 text-xs">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-sm font-bold font-sans">{item.name}</p>
                    <p className="text-xs font-bold font-sans text-[#7A7A7A]">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="flex flex-col gap-2 border border-[#333333] rounded-lg">
            <div className="flex items-center p-2">
              <IoMdArrowDropright className="text-4xl text-[#45f882]" />
              <p className="text-base font-bold font-sans uppercase">
                Categories
              </p>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-[#171d24] uppercase font-bold font-sans text-sm text-[#adb0bc]  rounded-b-lg border border-[#26292c]">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex justify-between items-center hover:text-[#707177]"
                >
                  <p>{cat.name}</p>
                  <p>({cat.count})</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="w-9/12 flex flex-col gap-4">
          <div className="w-full flex items-center justify-between">
            <p className="text-[#adb0bc] text-sm">
              Showing {indexOfFirstItem + 1}–
              {Math.min(indexOfLastItem, mockNFTs.length)} of {mockNFTs.length}{" "}
              results
            </p>
            <div className="relative inline-block w-48">
              <select
                className="
          bg-black
          p-2
          text-[#adb0bc]
          border border-[#333333]
          rounded-lg
          outline-none
          appearance-none
          w-full
          pr-10
          cursor-pointer
        "
              >
                <option value="default">Default sorting</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>

              <IoMdArrowDropdown
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#adb0bc] text-xl"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentNFTs.map((nft) => (
              <div
                key={nft.id}
                className="p-4 flex flex-col gap-4 shadow rounded-xl bg-[#182029] text-white cut-corner-br"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <img
                      src={nft.avatar}
                      alt="avatar"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-bold text-sm">{nft.name}</h1>
                      <p className="text-xs font-normal text-gray-500">
                        {nft.username}
                      </p>
                    </div>
                  </div>
                  <CiHeart className="text-2xl text-gray-300" />
                </div>
                <img
                  src={nft.image}
                  alt="nft"
                  className="rounded-xl h-[200px] object-cover"
                />
                <div className="w-9/12 h-[1px] mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                <div className="w-10/12 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-sm">Last Bid</p>
                    <div className="flex gap-1 items-center">
                      <FaEthereum className="text-yellow-300 text-base" />
                      <p className="font-bold">
                        {nft.lastBid}
                        <span className="text-yellow-300"> ETH</span>
                      </p>
                    </div>
                  </div>
                  <button className="btn flex gap-2 items-center p-2 px-4 bg-yellow-300 rounded-md text-black font-bold">
                    Bid <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-yellow-300 text-black"
                    : "bg-[#171d24] text-white border border-[#333]"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
