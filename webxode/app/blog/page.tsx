import React from 'react';
import BlogClient from '@/components/BlogPage/BlogClient';
import { Blogs as CategorizedBlogs } from '@/data/index';

export const metadata = {
  title: "Blog | Webxode - Tech Insights & Development Tips",
  description: "Explore the latest updates, tutorials, and insights from Webxode.",
};

const BlogPage = () => {
  const flatBlogs = CategorizedBlogs.flatMap((category) => category.blogs);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <BlogClient blogs={flatBlogs} />
    </section>
  );
};

export default BlogPage;
