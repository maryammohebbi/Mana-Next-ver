import Image from "next/image";
import Link from "next/link";
import React from "react";

function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="w-[99%] lg:w-[49%] h-[90%] border border-secondary rounded-lg flex flex-col lg:flex-row"
    >
      {/* <div className="w-[99%] lg:w-[49%] h-[90%] border border-secondary rounded-lg flex flex-col lg:flex-row"> */}
      <Image
        src={post.thumbnail}
        width={500}
        height={400}
        alt={post.title}
        className="object-cover w-full h-[200px] lg:w-[250px] lg:h-full rounded-lg"
      />
      <div className="w-full h-auto lg:flex-1 p-4 space-y-3">
        <h4 className="font-bold text-lg text-secondary">{post.title}</h4>
        <p className="text-xs text-secondary">{post.subTitle}</p>
        <p className="text-sm text-secondary">{post.briefText}</p>
      </div>
      {/* </div> */}
    </Link>
  );
}

export default PostCard;
