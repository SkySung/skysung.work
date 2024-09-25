// components/Layout.js

import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>Skysung Blog</a>
        </Link>
        <nav>
          <Link href="/blog">
            <a className={styles.navLink}>博客</a>
          </Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Skysung. 版權所有。</p>
      </footer>
    </div>
  );
};

export default Layout;
