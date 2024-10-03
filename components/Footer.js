// components/Footer.js
import React from 'react';
import styles from '@/styles/Footer.module.css'; // 自定義樣式

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Skysung Blog. All rights reserved.</p>
    </footer>
  );
}
