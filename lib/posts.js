import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';


const postsDirectory = path.join(process.cwd(), 'posts');

function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

// 輔助函數：對 slug 進行解碼和清理
function sanitizeSlug(slug) {
  // 解碼 URL 編碼的 slug
  const decodedSlug = decodeURIComponent(slug);
  
  // 移除不必要的空白字符
  const cleanedSlug = decodedSlug.trim();
  
  // 返回清理後的 slug
  return cleanedSlug;
}

export function getAllPosts() {
  try {
    ensurePostsDirectory();
    
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter(fileName => /\.(md|mdx)$/.test(fileName))
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.(md|mdx)$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
            // 提取 frontmatter 和內容
          const { data, content } = matter(fileContents);

            // 將 Markdown 轉換為 HTML
          const htmlContent = marked(content);

          return {
            slug,
            ...data,
            content: htmlContent,
          };
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error);
          return null;
        }
      })
      .filter(Boolean);

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [];
  }
}

export function getPostBySlug(slug) {
  try {
    ensurePostsDirectory();
    
    // 清理和解碼 slug
    const cleanSlug = sanitizeSlug(slug);
    
    // 在控制台輸出用於調試
    console.log('Original slug:', slug);
    console.log('Cleaned slug:', cleanSlug);
    console.log('Posts directory:', postsDirectory);

    // 檢查文件存在性的輔助函數
    const findPostFile = (cleanSlug) => {
      // 獲取目錄中的所有文件
      const files = fs.readdirSync(postsDirectory);
      
      // 找到匹配的文件（不區分大小寫）
      const matchingFile = files.find(file => {
        const fileNameWithoutExt = file.replace(/\.(md|mdx)$/, '');
        return fileNameWithoutExt.toLowerCase() === cleanSlug.toLowerCase();
      });

      if (matchingFile) {
        return path.join(postsDirectory, matchingFile);
      }
      return null;
    };

    const fullPath = findPostFile(cleanSlug);
    if (!fullPath) {
      // 添加更多診斷信息到錯誤消息中
      const files = fs.readdirSync(postsDirectory);
      const availableFiles = files.join(', ');
      throw new Error(
        `Post not found: ${cleanSlug}\nAvailable files: ${availableFiles}\nPosts directory: ${postsDirectory}`
      );
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: cleanSlug,
      content,
      ...data,
    };
  } catch (error) {
    console.error(`Error in getPostBySlug for ${slug}:`, error);
    throw error;
  }
}

export async function getStaticProps({ params }) {
  try {
    const post = getPostBySlug(params.slug);
    return {
      props: { post }
    };
  } catch (error) {
    return {
      notFound: true // 這會顯示 404 頁面
    };
  }
}

export function getAllTags() {
  try {
    const allPosts = getAllPosts();
    const tags = allPosts.flatMap(post => post.tags || []);
    return Array.from(new Set(tags));
  } catch (error) {
    console.error('Error in getAllTags:', error);
    return [];
  }
}