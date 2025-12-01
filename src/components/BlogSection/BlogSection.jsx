import Title from "@/ui/Title";
import React from "react";
import PostCard from "./PostCard";
import { posts } from "@/data/data";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";

function BlogSection() {
  return (
    <div id="blog" className="mb-20 scroll-mt-28">
      <Title title="بلاگ" />
      <div
        className="flex flex-col lg:flex-row gap-4 items-center justify-center bg-tertiary 
                      w-full h-auto rounded-md p-3"
      >
        {posts.slice(-2).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <Link
          href={`/blog`}
          className="text-secondary text-xs w-20 flex gap-x-0.5 items-center 
                    bg-quaternary p-1 rounded-lg hover:shadow-lg transition-all duration-500"
        >
          دیدن همه
          <BiLeftArrow />
        </Link>
      </div>
    </div>
  );
}

export default BlogSection;
