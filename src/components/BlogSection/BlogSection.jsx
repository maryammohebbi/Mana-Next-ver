import Title from "@/ui/Title";
import React from "react";

function BlogSection() {
  return (
    <div id="blog" className="mb-20 scroll-mt-28">
      <Title title="بلاگ" />
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center"></div>
    </div>
  );
}

export default BlogSection;
