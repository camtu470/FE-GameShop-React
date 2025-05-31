// app/others/news/[id]/page.tsx
import { notFound } from "next/navigation";
import { posts, Section } from "@/data/posts";

import { FaRegUser, FaRegComments } from "react-icons/fa";
import { HiCalendarDateRange } from "react-icons/hi2";
import NameArea from "@/components/layout/name";
import Footer from "@/components/home1/footer";
import SidebarNews from "@/components/layout/pages/news/sidebar";
import CommentNew from "@/components/layout/pages/news/comment";

type Props = { params: { id: string } };

export default function NewsDetail({ params }: Props) {
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) return notFound();

  return (
    <div className="flex flex-col gap-6">
      <NameArea title={`Post #${post.id}`} />
      <div className="flex gap-10 p-10">
        <div className="w-9/12 flex flex-col gap-2">
          <img
            src={post.image}
            alt={post.title}
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
          </div>

          {/* Render sections */}
          <div className="px-8">
            {post.sections.map((section, idx) => {
              switch (section.type) {
                case "introduce":
                  return (
                    <p key={idx} className="mb-6 italic text-gray-300">
                      {section.content}
                    </p>
                  );
                case "text":
                  return (
                    <div key={idx} className="mb-10">
                      {section.title && (
                        <h2 className="text-2xl font-semibold mb-2 text-white">
                          {section.title}
                        </h2>
                      )}
                      <p className="text-gray-300">{section.content}</p>
                    </div>
                  );
                case "image":
                  return (
                    <img
                      key={idx}
                      src={section.src}
                      alt={section.alt || ""}
                      className="mb-10 rounded max-h-96 object-cover w-full"
                    />
                  );
                case "text-image":
                  return (
                    <div
                      key={idx}
                      className="mb-10 flex flex-col md:flex-row gap-6 items-center"
                    >
                      <div className="md:w-1/2">
                        {section.title && (
                          <h2 className="text-2xl font-semibold mb-2 text-white">
                            {section.title}
                          </h2>
                        )}
                        <p className="text-gray-300">{section.content}</p>
                      </div>
                      {section.image && (
                        <img
                          src={section.image.src}
                          alt={section.image.alt || ""}
                          className="md:w-1/2 rounded max-h-96 object-cover"
                        />
                      )}
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </div>
        </div>
        <div className="w-3/12">
          <SidebarNews />
        </div>
      </div>
      <CommentNew />
      <Footer />
    </div>
  );
}
