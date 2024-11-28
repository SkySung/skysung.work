// __tests__/lib/posts.test.js
import fs from "fs";
import path from "path";
import { getAllPosts, getPostBySlug, getAllTags } from "../../lib/posts";

// Mock fs and path modules
jest.mock("fs");
jest.mock("path");

describe("Posts Handler", () => {
  // 測試用的模擬數據
  const mockPosts = {
    "test-post.md": `---
title: Test Post
date: '2024-01-01'
tags: ['test', 'mock']
---
Test content here`,
    "growth-mindset.md": `---
title: Growth Mindset 如何養成？
date: '2024-01-02'
tags: ['mindset', 'growth']
---
成長思維內容`
  };

  // 在每個測試前設置模擬
  beforeEach(() => {
    // 清除所有模擬
    jest.clearAllMocks();

    // 模擬 path.join 的行為
    path.join.mockImplementation((...args) => args.join("/"));

    // 模擬 process.cwd()
    process.cwd = jest.fn().mockReturnValue("/fake/path");

    // 模擬文件系統操作
    fs.existsSync.mockImplementation((path) => true);
    fs.readdirSync.mockImplementation(() => Object.keys(mockPosts));
    fs.readFileSync.mockImplementation((path) => {
      const fileName = path.split("/").pop();
      return mockPosts[fileName] || "";
    });
  });

  describe("getPostBySlug", () => {
    test("successfully retrieves a post with URL encoded slug", () => {
      const encodedSlug = encodeURIComponent("Growth-mindset");
      const post = getPostBySlug(encodedSlug);

      expect(post).toBeDefined();
      expect(post.title).toBe("Growth Mindset 如何養成？");
      expect(post.content).toBeDefined();
    });

    test("throws error for non-existent post", () => {
      fs.existsSync.mockImplementationOnce(() => false);

      expect(() => {
        getPostBySlug("non-existent-post");
      }).toThrow("Post not found");
    });
  });

  describe("getAllPosts", () => {
    test("returns sorted posts list", () => {
      const posts = getAllPosts();

      expect(posts).toHaveLength(2);

      expect(posts[0].date).toBe("2024-01-02"); // 最新的文章在前
      expect(posts[1].date).toBe("2024-01-01");
    });

    test("handles empty posts directory", () => {
      fs.readdirSync.mockImplementationOnce(() => []);
      const posts = getAllPosts();

      expect(posts).toHaveLength(0);
    });

    test("filters out non-markdown files", () => {
      fs.readdirSync.mockImplementationOnce(() => [
        "test-post.md",
        "another-post.mdx",
        "not-a-post.txt",
      ]);

      const posts = getAllPosts();
      expect(posts).toHaveLength(2);
    });
  });

  describe("getAllTags", () => {
    test("returns unique tags from all posts", () => {
      const tags = getAllTags();

      expect(tags).toContain("test");
      expect(tags).toContain("mock");
      expect(tags).toContain("mindset");
      expect(tags).toContain("growth");
      expect(new Set(tags).size).toBe(tags.length); // 確保沒有重複
    });

    test("handles posts without tags", () => {
      const mockPostsWithoutTags = {
        "no-tags.md": `---
title: No Tags Post
date: '2024-01-01'
---
Content`,
      };

      fs.readdirSync.mockImplementationOnce(() =>
        Object.keys(mockPostsWithoutTags)
      );
      fs.readFileSync.mockImplementationOnce(
        () => mockPostsWithoutTags["no-tags.md"]
      );

      const tags = getAllTags();
      expect(tags).toHaveLength(0);
    });
  });

  describe("Error Handling", () => {
    test("handles file system errors gracefully", () => {
      fs.readdirSync.mockImplementationOnce(() => {
        throw new Error("File system error");
      });

      const posts = getAllPosts();
      expect(posts).toHaveLength(0);
    });
  });
});
