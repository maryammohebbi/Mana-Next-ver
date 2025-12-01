import React from "react";
import { posts } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

function Blog() {
  return (
    <div className="p-5 max-w-sm md:max-w-lg lg:max-w-2xl bg-tertiary mx-auto min-h-screen rounded-lg shadow-2xl">
      <h3 className="font-bold mb-10 text-2xl text-secondary">بلاگ</h3>
      <div className="flex flex-col gap-y-7">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="border border-secondary p-2 rounded-xl shadow-xl 
                       flex flex-col gap-y-3 md:flex-row md:gap-x-4 items-center"
          >
            <Image
              src={post.thumbnail}
              width={400}
              height={400}
              alt={post.title}
              className="h-[150px] w-[200px] md:h-[100px] md:w-[150px] rounded-2xl "
            />
            <div>
              <h3 className="font-bold text-lg text-secondary">{post.title}</h3>
              <p className="text-secondary text-sm mb-2">{post.briefText}</p>
              <span className="flex justify-end text-xs text-secondary">
                خواندن...
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
