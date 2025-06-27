import { notFound } from "next/navigation";
import { Blogs } from "@/data/index";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () => {
  const allBlogs = Blogs.flatMap((cat) => cat.blogs);
  return allBlogs.map((blog) => ({ slug: blog.slug }));
};

const BlogArticlePage = async ({ params }: { params: { slug: string } }) => {
  const allBlogs = Blogs.flatMap((cat) => cat.blogs);
  const blog = allBlogs.find((item) => item.slug === params.slug);

  if (!blog) notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-white">
      {/* Article Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 font-montserrat tracking-wide text-center">
          {blog.title}
        </h1>
        <div className="w-full h-[300px] md:h-[450px] relative mb-10">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-contain rounded-xl shadow-lg"
          />
        </div>
        <p className="text-sm text-gray-400">{blog.date}</p>
        <div className="mt-2 flex gap-2 flex-wrap">
          {blog.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-cyan-800 text-white px-3 py-1 rounded-full uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article Content */}
      <article
        className="prose prose-invert max-w-5xl mx-auto prose-h1:text-4xl prose-h2:text-2xl prose-p:leading-relaxed prose-p:text-gray-300 prose-h2:mt-10 prose-h2:mb-4 prose-p:mb-6 font-montserrat"
        dangerouslySetInnerHTML={{
          __html: blog.content || "<p>Coming soon...</p>",
        }}
      />

      {/* Back to Blog */}
      <div className="mt-12">
        <Link
          href="/blog"
          className="text-green-300 hover:underline font-medium"
        >
          ← Back to all blogs
        </Link>
      </div>
    </main>
  );
};

export default BlogArticlePage;
