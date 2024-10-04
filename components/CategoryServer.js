// components/CategoryServer.js
import React from "react";
import CategoryClient from "./CategoryClient";
import { getAllTags } from "@/lib/posts";

export default async function CategoryServer({ onSelectCategory }) {
  const categories = getAllTags();

  return <CategoryClient categories={categories} onSelectCategory={onSelectCategory} />;
}
