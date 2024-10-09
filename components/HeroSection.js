// components/HeroSection.jsx
import Image from 'next/image';
import styles from '@/styles/HeroSection.module.css';
import avatar from '@/images/avatar.webp';
import Cloud from '@/components/Cloud'; // 使用你現有的雲朵組件

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
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
