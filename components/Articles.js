// app/blog/page.js
import Link from "next/link";
import { use } from "react";
import { getAllPosts } from "@/lib/posts";

async function getPosts() {
  return getAllPosts();
}

export default function BlogIndex() {
  const posts = use(getPosts());

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-xl font-semibold mb-2 hover:underline">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.description}</p>
              <p className="text-gray-600">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
