import React from "react";
import { Calendar, CircleUser, MessageCircle, BookOpen } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "There Are Many Variations Passage Have Suffered Available.",
    description:
      "There are many variations of passages but the majority have suffered alteration in some form are going passage by injected humour.",
    image: "/blog1.jpg",
    author: "Alicia Davis",
    date: "June 18, 2024",
    comments: "03 Comments",
  },
  {
    id: 2,
    title: "There Are Many Variations Passage Have Suffered Available.",
    description:
      "There are many variations of passages but the majority have suffered alteration in some form are going passage by injected humour.",
    image: "/blog2.jpg",
    author: "Alicia Davis",
    date: "June 18, 2024",
    comments: "03 Comments",
  },
  {
    id: 3,
    title: "There Are Many Variations Passage Have Suffered Available.",
    description:
      "There are many variations of passages but the majority have suffered alteration in some form are going passage by injected humour.",
    image: "/blog3.jpg",
    author: "Alicia Davis",
    date: "June 18, 2024",
    comments: "03 Comments",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:w-[70%]">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-32 mx-auto border-black border-b-2 gap-2">
            <BookOpen className="text-sky-600" size={20} />
            <span className="text-sky-600 font-medium tracking-widest uppercase">
              Our Blog
            </span>
          </div>
          <h2 className="text-3xl pt-2 font-bold text-gray-900">
            Latest News & <span className="text-sky-600">Blog</span>
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              {/* Image with Date Badge */}
              <div className="relative">
                <Image
                  src={post.image}
                  alt="Blog Post"
                  width={400}
                  height={250}
                  className="w-full  h-[200px] pt-4 px-4  object-cover rounded-3xl"
                />
                <div className="absolute bottom-2 right-6 bg-black text-white text-xs px-3 py-1 rounded-md flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-5">
                {/* Author & Comments */}
                <div className="flex items-center border-b-2 border-gray-100 pb-3 text-gray-500 text-sm mb-2 space-x-4">
                  <div className="flex items-center gap-1">
                    <CircleUser size={14} />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>

                {/* Read More Button */}
                <button className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors duration-200 inline-flex items-center group">
                  READ MORE{" "}
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
