// client
"use client";

import Footer from "@/components/home1/footer";
import NameArea from "@/components/layout/name";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaEthereum, FaLongArrowAltRight, FaRegHeart } from "react-icons/fa";
import { GiFireDash } from "react-icons/gi";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { NFT, trendingNFTs } from "@/data/nft";

type Props = {
  nft: NFT;
};

export default function NFTDetailClient({ nft }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(nft.images[0]);
  const [startIndex, setStartIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "description" | "info" | "reviews"
  >("description");
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
    <div className="flex flex-col gap-2">
      <NameArea title={`${nft.name}`} />

      <div className="p-10 flex flex-col gap-10">
        <div className="flex gap-6">
          <div className="w-7/12 flex items-center gap-6">
            {/* Thumbnail Gallery */}
            <div className="w-3/12 flex flex-col gap-6">
              {nft.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`h-30  p-2 rounded-md cursor-pointer ${
                    selectedImage === img
                      ? "ring-2 ring-gray-500"
                      : "bg-gray-800"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="w-9/12 h-[450px] bg-gray-800 p-2 rounded-md">
              <img
                src={selectedImage}
                alt={nft.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="w-5/12 flex flex-col gap-4 p-4 py-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-yellow-300 text-xl font-bold">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
              <p>( 0 out of 5 )</p>
            </div>
            <p className="uppercase text-4xl font-extrabold">{nft.name}</p>
            <p className="text-2xl font-extrabold text-green-400">
              $ {nft.lastBid}
            </p>
            <p className="text-sm text-gray-400">{nft.shortdescription}</p>
            <div className="flex gap-4 items-center py-2">
              {" "}
              <div className="flex items-center">
                {/* Nút Giảm */}
                <button
                  className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white text-2xl rounded-l  hover:bg-gray-600"
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  −
                </button>

                {/* Hiển thị số lượng */}
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-16 h-12 text-center pl-4 bg-gray-900 text-white border-x border-gray-600 "
                />

                {/* Nút Tăng */}
                <button
                  className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white text-2xl rounded-r  hover:bg-gray-600"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button className="bg-green-600 text-white hover:bg-yellow-400 hover:text-black text-xs font-bold h-12 px-6 rounded-md">
                ADD TO CART
              </button>
            </div>
            <div className="flex gap-2 items-center pb-6 text-white hover:text-yellow-500 border-b border-gray-800">
              <FaRegHeart />
              <p className="uppercase font-bold text-sm">Add to Wishlist</p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-gray-300">
                <strong className="text-white">SKU:</strong> {nft.sku}
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Category:</strong> {nft.category}
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Tags :</strong>{" "}
                {nft.tags.join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {/* Tab Buttons */}
          <div className="flex gap-2">
            <button
              className={`p-4 px-10 rounded text-sm font-bold ${
                activeTab === "description"
                  ? "bg-slate-800"
                  : "bg-transparent hover:bg-slate-800"
              }`}
              onClick={() => setActiveTab("description")}
            >
              DESCRIPTION
            </button>
            <button
              className={`p-4 px-10 rounded text-sm font-bold ${
                activeTab === "info"
                  ? "bg-slate-800"
                  : "bg-transparent hover:bg-slate-800"
              }`}
              onClick={() => setActiveTab("info")}
            >
              ADDITIONAL INFORMATION
            </button>
            <button
              className={`p-4 px-10 rounded text-sm font-bold ${
                activeTab === "reviews"
                  ? "bg-slate-800"
                  : "bg-transparent hover:bg-slate-800"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              REVIEWS(0)
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "description" && (
            <div className="p-6 bg-[#000000] rounded">
              <p className="text-sm text-gray-300">{nft.description}</p>
            </div>
          )}

          {activeTab === "info" && (
            <div className="overflow-x-auto bg-[#000000]">
              <table className="min-w-full text-sm text-left text-gray-300 border border-gray-700 ">
                <tbody className="divide-y divide-gray-700">
                  {nft.specs.map((spec, idx) => (
                    <tr key={idx} className="border-b border-gray-700">
                      <th className="py-3 px-4 font-semibold w-1/3">
                        {spec.label}
                      </th>
                      <td className="py-3 px-4 italic">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="flex flex-col gap-2 bg-black p-6 rounded">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-2xl">REVIEWS</p>
                <div>
                  <p className="text-sm text-gray-300">
                    There are no reviews yet.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-400">
                  Be the first to review “{nft.name}”
                </p>

                <form action="" className="flex flex-col gap-4 p-4 text-sm">
                  <div className="flex flex-col gap-2">
                    {" "}
                    <label className="font-bold text-md ">
                      Name <span className="text-green-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="border rounded-md p-2 bg-transparent border-gray-800 outline-none px-4"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    {" "}
                    <label className="font-medium text-md ">
                      Email <span className="text-green-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="border rounded-md p-2 bg-transparent border-gray-800 outline-none px-4"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    {" "}
                    <label className="font-bold text-md">
                      Your rating <span className="text-green-600">*</span>
                    </label>
                    <div className="flex gap-1 items-center text-xl text-yellow-500 font-bold">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {" "}
                    <label className="font-bold text-md ">
                      Your review <span className="text-green-600">*</span>
                    </label>
                    <textarea className="border rounded-md p-2 bg-transparent border-gray-800 outline-none px-4"></textarea>
                  </div>

                  <button className="w-2/12 p-4 font-bold text-sm bg-green-500 rounded">
                    SUBMIT REVIEW
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className=" flex flex-col gap-6 py-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <h1 className="text-4xl font-extrabold font-geistMono uppercase">
                Related products
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
                <div className="w-10/12 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-sm">Last Bid</p>
                    <div className="flex gap-1 items-center">
                      <FaEthereum className="text-yellow-300 text-base" />
                      <p className="font-bold">
                        {nft.lastBid}{" "}
                        <span className="text-yellow-300">ETH</span>
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
      </div>
      <Footer />
    </div>
  );
}
