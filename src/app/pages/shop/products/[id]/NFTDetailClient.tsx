"use client";

import Footer from "@/components/home1/footer";
import NameArea from "@/components/layout/name";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { NFT } from "@/data/nft";
import TopTrending from "@/components/home1/top-trending";

type Props = {
  nft: NFT;
};

export default function NFTDetailClient({ nft }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(nft.images[0]);
  const [activeTab, setActiveTab] = useState<
    "description" | "info" | "reviews"
  >("description");

  return (
    <div className="flex flex-col gap-2">
      <NameArea title={`${nft.name}`} />

      <div className="px-4 sm:px-6 lg:px-10 py-10 flex flex-col gap-10">
        {/* Responsive Product View */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Images Section */}
          <div className="lg:w-7/12 w-full flex flex-col-reverse sm:flex-row gap-6">
            {/* Thumbnails */}
            <div className="w-full sm:w-3/12 flex sm:flex-col gap-4 sm:gap-6">
              {nft.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`h-24 sm:h-32 w-24 sm:w-auto p-2 rounded-md cursor-pointer ${
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
            <div className="w-full sm:w-9/12 h-[250px] sm:h-[450px] bg-gray-800 p-2 rounded-md">
              <img
                src={selectedImage}
                alt={nft.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:w-5/12 w-full flex flex-col gap-4 p-4 py-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-yellow-300 text-xl font-bold">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
              <p className="text-sm">(0 out of 5)</p>
            </div>

            <p className="uppercase text-3xl sm:text-4xl font-extrabold">
              {nft.name}
            </p>

            <p className="text-2xl font-extrabold text-green-400">
              $ {nft.lastBid}
            </p>

            <p className="text-sm text-gray-400">{nft.shortdescription}</p>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 items-center py-2">
              <div className="flex items-center">
                <button
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-800 text-white text-xl rounded-l hover:bg-gray-600"
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-14 h-10 sm:h-12 text-center bg-gray-900 text-white border-x border-gray-600"
                />
                <button
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-800 text-white text-xl rounded-r hover:bg-gray-600"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              <button className="bg-green-600 text-white hover:bg-yellow-400 hover:text-black text-xs font-bold h-10 sm:h-12 px-6 rounded-md">
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

        {/* Tabs Section */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            {["description", "info", "reviews"].map((tab) => (
              <button
                key={tab}
                className={`p-4  sm:px-10 rounded text-sm font-bold ${
                  activeTab === tab
                    ? "bg-slate-800"
                    : "bg-transparent hover:bg-slate-800"
                }`}
                onClick={() =>
                  setActiveTab(tab as "description" | "info" | "reviews")
                }
              >
                {tab === "info"
                  ? "ADDITIONAL INFORMATION"
                  : tab.toUpperCase() + (tab === "reviews" ? " (0)" : "")}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "description" && (
            <div className="p-6 bg-[#000000] rounded">
              <p className="text-sm text-gray-300">{nft.description}</p>
            </div>
          )}
          {activeTab === "info" && (
            <div className="overflow-x-auto bg-[#000000]">
              <table className="min-w-full text-sm text-left text-gray-300 border border-gray-700">
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
            <div className="flex flex-col gap-4 bg-black p-6 rounded">
              <p className="font-bold text-2xl">REVIEWS</p>
              <p className="text-sm text-gray-300">There are no reviews yet.</p>
              <p className="text-sm text-gray-400">
                Be the first to review “{nft.name}”
              </p>

              <form className="flex flex-col gap-4 text-sm">
                <div className="flex flex-col gap-1">
                  <label className="font-bold">
                    Name <span className="text-green-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="border rounded-md p-2 bg-transparent border-gray-800 outline-none px-4"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-bold">
                    Email <span className="text-green-600">*</span>
                  </label>
                  <input
                    type="email"
                    className="border rounded-md p-2 bg-transparent border-gray-800 outline-none px-4"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-bold">
                    Your Rating <span className="text-green-600">*</span>
                  </label>
                  <div className="flex gap-1 items-center text-xl text-yellow-500 font-bold">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-bold">
                    Your Review <span className="text-green-600">*</span>
                  </label>
                  <textarea className="border rounded-md p-2 bg-transparent border-gray-800 outline-none px-4" />
                </div>
                <button className="w-5/12 sm:w-2/12 p-4 font-bold text-sm bg-green-500 rounded text-white hover:bg-green-600">
                  SUBMIT REVIEW
                </button>
              </form>
            </div>
          )}
        </div>

        <TopTrending />
      </div>

      <Footer />
    </div>
  );
}
