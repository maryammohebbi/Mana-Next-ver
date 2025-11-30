import Title from "@/ui/Title";
import React from "react";
import PostCard from "./PostCard";

function BlogSection() {
  return (
    <div id="blog" className="mb-20 scroll-mt-28">
      <Title title="بلاگ" />
      <div
        className="flex flex-col lg:flex-row gap-4 items-center justify-center bg-tertiary 
                      w-full h-auto lg:h-[250px] rounded-md p-3"
      >
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default BlogSection;
