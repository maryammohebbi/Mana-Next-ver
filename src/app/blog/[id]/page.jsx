import { posts } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function Post({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return <p className="p-5 text-secondary">پست یافت نشد </p>;
  }

  return (
    <div className="mx-auto p-5">
      <div className="max-w-sm md:max-w-xl lg:max-w-3xl bg-tertiary p-5 shadow-lg">
        <div className="mb-8">
          <div className="flex gap-x-1">
            <Link href={`/blog`} className="text-xl font-bold  text-secondary">
              بلاگ /{" "}
            </Link>
            <h1 className="text-xl font-bold text-secondary">{post.title}</h1>
          </div>
          <span className="text-xs text-gray-400">نویسنده: {post.author}</span>
        </div>
        <div>
          {/* <Image src={post.image} /> */}
          <p className="text-secondary text-sm text-justify">{post.text}</p>
        </div>
      </div>
    </div>
  );
}
