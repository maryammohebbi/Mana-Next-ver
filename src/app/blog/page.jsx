import React from "react";
import { posts } from "@/data/data";
import Link from "next/link";

function Blog() {
  return (
    <div className="p-5 max-w-sm md:max-w-lg lg:max-w-2xl bg-tertiary mx-auto h-screen">
      <h3 className="font-bold mb-10 text-2xl text-secondary">بلاگ</h3>
      <div className="flex flex-col gap-y-7">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="border border-secondary p-2 rounded-sm shadow-xl"
          >
            <h3 className="font-bold text-lg text-secondary">{post.title}</h3>
            <p className="text-secondary text-sm mb-2">{post.briefText}</p>
            <span className="flex justify-end text-xs text-secondary">
              خواندن...
            </span>
          </Link>
        ))}
      </div>
      {/*       
      <div className="flex flex-col space-y-5 items-center bg-tertiary ">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div> */}
    </div>
  );
}

export default Blog;
