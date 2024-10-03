"use client";
// components/Category.js
import React, { useState } from "react";
import styles from "@/styles/Category.module.css";

const categories = [
  "JavaScript",
  "SoftSkill",
  "React",
  "Books",
  "Podcast",
  "Random",
  "BlockChain",
];

export default function Category({ onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className={styles.category}>
      <h2>Category</h2>
      <div className={styles.categoryList}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`${styles.categoryItem} ${
              selectedCategory === category ? styles.active : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
