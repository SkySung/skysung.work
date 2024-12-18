"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/NavigationBar.module.css';
import IconRss from '@/components/icons/IconRss';
import IconSearch from '@/components/icons/IconSearch';
import ThemeToggle from '@/components/icons/ThemeToggle';
import IconMenu from '@/components/icons/IconMenu';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Sky Sung</Link>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
        <ul className={styles.navList}>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/tic-tac-toe">TicTacToe</Link></li>
          <li><Link href="/newsletter">Newsletter</Link></li>
          <li><Link href="/blog/about">About</Link></li>
        </ul>
      </nav>
      <div className={styles.icons}>
        <button className={styles.iconButton}><IconSearch /></button>
        <button className={styles.iconButton}><ThemeToggle /></button>
        <button className={styles.iconButton}><IconRss /></button>
        <button
          className={`${styles.iconButton} ${styles.menuButton}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IconMenu isMenuOpen={isMenuOpen} />
        </button>
      </div>
    </header>
  );
};

export default NavigationBar;
