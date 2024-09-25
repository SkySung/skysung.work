// app/page.js

import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { getAllPosts } from '../lib/posts';
import NavigationBar from '../components/NavigationBar';

export default async function Home() {
  const posts = getAllPosts();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>歡迎來到 Skysung 的部落格</h1>
          <p className={styles.description}>
            探索最新的文章，了解更多有關我的分享。
          </p>
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
        <NavigationBar />
      </div>
    </div>
  );
}
