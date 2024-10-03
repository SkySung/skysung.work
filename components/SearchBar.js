// components/SearchBar.js
"use client";
import React, { useState } from "react";
import styles from "@/styles/SearchBar.module.css";
import IconSearch from "@/components/icons/IconSearch";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        <IconSearch />
      </button>
    </div>
  );
}
