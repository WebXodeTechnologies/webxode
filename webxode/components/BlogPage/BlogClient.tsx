"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Blog = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  tags: string[];
};

const categories = [
  "All",
  "Tech",
  "Code",
  "Business",
  "AI",
  "SEO",
  "Digital Marketing",
  "Others",
];

const BlogClient = ({ blogs }: { blogs: Blog[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  if (!blogs || !Array.isArray(blogs)) {
    return (
      <div className="text-center text-red-500">
        Error loading blogs. Please check your data source.
      </div>
    );
  }

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) =>
          blog.tags?.some(
            (tag) =>
              tag.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
          )
        );

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      {/* Hero Section */}
      <div className="flex flex-col justify-between items-center text-center py-20">
        <h1 className="text-4xl font-semibold uppercase font-montserrat tracking-wider mb-4 text-white">
          Welcome to Webxode Blog Page
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Stay ahead with Webxode. Explore expert blogs on web development, SEO
          strategies, business automation, coding best practices, and digital
          marketing — designed to accelerate your online success.
        </p>
      </div>

      {/* Category Filter */}
      <div className="relative flex flex-wrap justify-center gap-6 mb-14 border-b border-[#1f1f1f]">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative pb-3 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                isActive ? "text-cyan-400" : "text-gray-500 hover:text-white"
              }`}
            >
              {category}

              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-cyan-400"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredBlogs.length === 0 ? (
          <p className="text-center text-gray-500 col-span-2">
            No blogs found for this category.
          </p>
        ) : (
          filteredBlogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <div className="group flex flex-col justify-between bg-[#1a1a1a] hover:bg-[#222] shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 border border-gray-800 h-[500px]">
                {/* Image */}
                <div className="relative w-full h-[640px] overflow-hidden">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2 text-white group-hover:text-cyan-400">
                      {blog.title}
                    </h2>
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                  <p className="mt-4 text-gray-500 text-xs">{blog.date}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogClient;
