// components/CategoryClient.js
"use client";
import React, { useState } from "react";
import styles from "@/styles/Category.module.css";

export default function CategoryClient({ categories, onSelectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className={styles.category}>
      <h2>Category</h2>
      <div className={styles.categoryList}>
        <button
          onClick={() => handleCategoryClick(null)}
          className={`${styles.categoryItem} ${selectedCategory === null ? styles.active : ""}`}
        >
          all
        </button>
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
