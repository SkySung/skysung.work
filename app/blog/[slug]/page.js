// app/blog/[slug]/page.js

import { getPostBySlug, getAllPosts } from '../../../lib/posts';
import styles from '../../../styles/Post.module.css';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: `${post.title} | Skysung Blog`,
    description: post.excerpt,
  };
}

export default async function Post({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <article
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></article>
      <div className={styles.back}>
        <Link href="/blog">
          <a>← 返回博客首頁</a>
        </Link>
      </div>
    </div>
  );
}
