// app/about/page.jsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc'; // 使用正確的導入路徑
import { serialize } from 'next-mdx-remote/serialize';

// 確保使用默認導出
export default async function AboutPage() {
    // 使用不同的變量名稱，避免與 path 模塊衝突
    const mdxFilePath = path.join(process.cwd(), 'app', 'about', 'about.mdx');
    
    // 檢查文件是否存在
    if (!fs.existsSync(mdxFilePath)) {
        return <div>About page not found.</div>;
    }
    
    // 讀取文件內容
    const fileContents = fs.readFileSync(mdxFilePath, 'utf8');
    
    // 使用 gray-matter 解析前置資料和內容
    const { data, content } = matter(fileContents);
    
    // 編譯 MDX 內容
    const mdxSource = await serialize(content);
    
    return (
        <div>
            <h1>{data.title}</h1>
            <p>Last updated: {data['last-update']}</p>
            {/* 使用 MDXRemote 渲染 MDX 內容 */}
            <MDXRemote source={mdxSource} />
        </div>
    );
}
