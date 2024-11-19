// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    // 修改这里，包含 .md 和 .mdx 文件
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      // 修改这里，去除 .md 或 .mdx 扩展名
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  // 首先尝试读取 .mdx 文件
  let fullPath = path.join(postsDirectory, `${slug}.mdx`);
  // 如果不存在，则尝试读取 .md 文件
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.md`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data,
  };
}

export function getAllTags() {
  const allPosts = getAllPosts();
  const tags = allPosts.flatMap(post => post.tags || []);
  return Array.from(new Set(tags));
}
