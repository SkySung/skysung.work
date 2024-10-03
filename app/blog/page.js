// blog/page.js
import React from 'react';
import Articles from '@/components/Articles';
import styles from '@/styles/Blog.module.css';

export default function Page() {
  return (
    <div className={styles.articlesContainer}>
      <Articles />
    </div>
  );
}
