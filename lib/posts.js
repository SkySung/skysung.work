// lib/posts.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// 獲取所有文章的數據
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
      id: data.id,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      slug: data.slug,
    };
  });

  // 按日期排序（最新的在前）
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 根據 slug 獲取單篇文章
export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    id: data.id,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    slug: data.slug,
    content: contentHtml,
  };
}
