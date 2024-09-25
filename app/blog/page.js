// app/blog/page.js

import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';
import styles from '../../styles/Blog.module.css';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export default async function Blog() {
  const posts = getAllPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skysung 的部落格</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <Link href={`/blog/${post.slug}`} className={styles.postLink}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}