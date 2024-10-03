// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background text-header-text transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Blog</h1>
      <p className="text-xl mb-8">A minimalist blog about my thoughts and experiences.</p>
      <Link href="/blog" className="px-4 py-2 border border-header-text text-header-text hover:bg-header-text hover:text-background transition-colors">
        Read Blog Posts
      </Link>
    </div>
  );
}
