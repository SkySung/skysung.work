import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 設定 `pageExtensions` 以包含 markdown 和 MDX 檔案
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // (選用) 在下方新增任何其他 Next.js 設定
};

const withMDX = createMDX({
  // (選用) 在此新增 markdown 外掛
});

// 將 MDX 設定與 Next.js 設定合併
export default withMDX(nextConfig);