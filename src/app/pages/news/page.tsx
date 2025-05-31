"use client";

import { IoArrowRedoSharp } from "react-icons/io5";
import { FaRegUser, FaRegComments } from "react-icons/fa";
import { HiCalendarDateRange } from "react-icons/hi2";

import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { posts } from "@/data/posts"; // Dữ liệu bài viết import từ file chung
import NameArea from "@/components/layout/name";
import Footer from "@/components/home1/footer";
import SidebarNews from "@/components/layout/pages/news/sidebar";

export default function NewsPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const postsPerPage = 2;

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <main className="flex flex-col gap-2">
      <NameArea title="BLOG" />

      <div className="flex gap-10 p-10">
        {/* Blog posts */}
        <div className="w-9/12 flex flex-col gap-10">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-2 bg-[#182029] rounded cut-corner-br cursor-pointer"
              onClick={() => router.push(`/pages/news/${post.id}`)}
            >
              <img
                src={post.image}
                alt=""
                className="rounded-t h-80 object-cover"
              />
              <div className="flex flex-col gap-4 px-8 py-4">
                <div className="flex gap-6 items-center text-sm font-bold text-[#888889] uppercase">
                  <div className="flex gap-2 items-center">
                    <FaRegUser className="text-[#45f882]" />
                    <p>{post.author}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <HiCalendarDateRange className="text-[#45f882]" />
                    <p>{post.date}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaRegComments className="text-[#45f882]" />
                    <p>{post.comments} Comments</p>
                  </div>
                </div>
                <h1 className="font-bold text-4xl text-white uppercase">
                  {post.title}
                </h1>
                <p className="text-base text-[#adb0bc]">{post.describe}</p>
                <div className="w-fit flex items-center gap-2 shadow rounded-lg border border-[#2e3235] hover:bg-[#131a22] p-2 cursor-pointer">
                  <p>Read more</p>
                  <IoArrowRedoSharp className="text-[#45f882]" />
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 bg-[#182029] border border-[#2e3235] rounded hover:bg-[#131a22]"
              disabled={currentPage === 1}
            >
              <MdKeyboardDoubleArrowLeft />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded border ${
                  currentPage === i + 1
                    ? "bg-[#45f882] text-black font-bold"
                    : "bg-[#182029] text-white hover:bg-[#131a22]"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-[#182029] border border-[#2e3235] rounded hover:bg-[#131a22]"
              disabled={currentPage === totalPages}
            >
              <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>

        <div className="w-3/12 ">
          <SidebarNews />
        </div>
      </div>

      <Footer />
    </main>
  );
}
