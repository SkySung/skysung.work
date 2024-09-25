// components/NavigationBar.js

import Link from 'next/link';
import styles from '../styles/NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <button className={styles.toggleButton}>🌙</button> {/* 暗黑模式切換按鈕 */}
      </div>
      <nav className={styles.navigation}>
        <h3>分類</h3>
        <ul>
          <li><Link href="/blog/category/tech">技術</Link></li>
          <li><Link href="/blog/category/life">生活</Link></li>
          <li><Link href="/blog/category/travel">旅行</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavigationBar;
