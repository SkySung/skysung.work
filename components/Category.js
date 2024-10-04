// components/Category.js
import React from "react";
import Link from "next/link";
import styles from "@/styles/Category.module.css";
import { getAllTags } from "@/lib/posts";

export default async function Category() {
  const categories = getAllTags();

  return (
    <div className={styles.category}>
      <h2>Category</h2>
      <div className={styles.categoryList}>
        <Link href="/blog" className={`${styles.categoryItem}`}>
          all
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${encodeURIComponent(category)}`}
            className={styles.categoryItem}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
