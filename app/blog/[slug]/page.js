// app/blog/[slug]/page.js
import { getPostBySlug } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="dark:prose-invert prose-lg max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <div className="">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}