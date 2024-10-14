// components/HeroSection.jsx
"use client";
import Image from 'next/image';
import styles from '@/styles/HeroSection.module.css';
import avatar from '@/images/avatar.webp';
import Cloud from '@/components/Cloud'; // 使用你現有的雲朵組件
import { usePathname } from 'next/navigation';

const HeroSection = () => {
  const pathname = usePathname();

  let heightClass = '';

  if (pathname === '/blog') {
    heightClass = 'heroHeight50';
  } else if (pathname === '/blog/about') {
    heightClass = 'heroHeight10';
  } else if (pathname.startsWith('/blog/')) {
    heightClass = 'heroHeight30';
  } else {
    heightClass = 'heroHeightDefault';
  }
  return (
    <div className={`${styles.heroContainer} ${styles[heightClass]}`}>
      <Cloud />
      <Image
        src={avatar}
        alt="Virtual Character"
        width={250} 
        height={250}
        className={styles.virtualCharacter}
      />
    </div>
  );
};

export default HeroSection;
