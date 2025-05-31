"use client";

import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
const SidebarNews = () => {
  const [search, setSearch] = useState("");
  const categories = [
    { name: "E-Sports", count: 9 },
    { name: "NFT Gaming", count: 5 },
    { name: "Reviews", count: 3 },
  ];

  const recentPosts = [
    {
      title: "NFT Games Android no Investment",
      date: "October 24, 2023",
      image:
        "https://themedox.com/mykd/wp-content/uploads/2023/10/blog_post03.jpg",
    },
    {
      title: "Top Blockchain Games in 2025",
      date: "October 20, 2023",
      image:
        "https://themedox.com/mykd/wp-content/uploads/2023/10/blog_post02.jpg",
    },
    {
      title: "How to Earn Crypto in Gaming",
      date: "October 15, 2023",
      image:
        "https://themedox.com/mykd/wp-content/uploads/2023/10/blog_post01.jpg",
    },
  ];

  const tags = ["e-sports", "game", "fantasy", "crypto", "tournament"];
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full p-2 flex items-center bg-[#171d24] rounded-lg border border-[#26292c]">
        <input
          type="text"
          placeholder="Search post..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-10/12 bg-transparent text-[#adb0bc] outline-none"
        />
        <IoMdSearch className="w-2/12 text-2xl text-[#adb0bc]" />
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-4">
        <p className="uppercase font-bold text-xl">Categories</p>
        <div className="flex flex-col gap-3">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex justify-between font-bold uppercase text-[#707177] hover:font-extrabold cursor-pointer"
            >
              <p>{cat.name}</p>
              <p>({cat.count})</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="flex flex-col gap-4">
        <p className="uppercase font-bold text-xl">Recent Posts</p>
        <div className="flex flex-col gap-6">
          {recentPosts.map((post, i) => (
            <div key={i} className="flex gap-3 items-center">
              <img
                src={post.image}
                alt=""
                className="w-5/12 object-cover rounded"
              />
              <div className="w-7/12 flex flex-col gap-2">
                <h1 className="font-bold text-base hover:text-[#45f882] cursor-pointer">
                  {post.title}
                </h1>
                <p className="text-sm text-[#adb0bc]">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tag Cloud */}
      <div className="flex flex-col gap-4">
        <p className="uppercase font-bold text-xl">Tag Cloud</p>
        <div className="flex flex-wrap gap-4 uppercase text-[#adb0bc] font-bold">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="shadow rounded bg-[#182029] hover:bg-[#45f882] hover:text-black cut-corner-br px-6 py-2 cursor-pointer"
            >
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarNews;
