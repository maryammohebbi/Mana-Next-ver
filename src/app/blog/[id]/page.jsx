import { posts } from "@/data/data";

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
    return <div className="p-5 text-red-600">پست یافت نشد — ID: {id}</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">{post.title}</h1>
      <p>{post.text}</p>
    </div>
  );
}
