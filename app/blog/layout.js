// app/blog/layout.js
import "@/app/globals.css";
import { Roboto } from "next/font/google";
import NavigationBar from "@/components/NavigationBar"; // 導入 NavigationBar
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import Category from "@/components/Category";
import PopularContent from "@/components/PopularContent";
import Footer from "@/components/Footer"; // 確認你有一個 Footer 組件
import styles from "@/styles/Blog.module.css";  // 新增樣式檔案

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Skysung Blog",
  description: "Skysung 的個人部落格",
};

export default function RootLayout({ children }) {
  return (
    <>
      <NavigationBar />  {/* 把 NavigationBar 放在最頂部 */}
      <HeroSection />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {children}
        </div>
        <aside className={styles.sidebar}>
          <SearchBar />
          <Category />
          <PopularContent />
        </aside>
      </div>
      <Footer /> {/* 把 Footer 放在最底部 */}
    </>
  );
}
