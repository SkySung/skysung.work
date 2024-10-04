// app/category/[tag]/page.js
import React from "react";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import styles from "@/styles/Articles.module.css";

export async function generateStaticParams() {
  const tags = getAllPosts().flatMap((post) => post.tags || []);
  const uniqueTags = Array.from(new Set(tags));
  return uniqueTags.map((tag) => ({ tag }));
}

export default async function TagPage({ params }) {
  const { tag } = params;
  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter((post) => post.tags?.includes(tag));

  return (
    <div className={styles.articles}>
      <h1>分類: {tag}</h1>
      {filteredPosts.length === 0 ? (
        <p>沒有找到相關文章。</p>
      ) : (
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.slug} className={styles.articleItem}>
              <Link href={`/blog/${post.slug}`}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
