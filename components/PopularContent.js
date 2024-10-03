"use client";
import React, { useState } from "react";
import styles from "@/styles/PopularContent.module.css";
import IconArrowRight from "@/components/icons/IconArrowRight";

const popularPosts = [
  "First Blog Post",
  "Second Blog Post",
  "Third Blog Post",
  "Forth Blog Post",
  "Fifth Blog Post",
];

export default function PopularContent() {
  return (
    <div className={styles.popularContent}>
      <h2>Popular Content</h2>
      <ul className={styles.postList}>
        {popularPosts.map((post, index) => (
          <li
            key={index}
            className={styles.postItem}
          >
            <IconArrowRight className={styles.icon} />
            <span>{post}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
