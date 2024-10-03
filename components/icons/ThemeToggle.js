// components/ThemeToggle.jsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";  // 引入 next-themes
import IconSun from './IconSun';  // 引入 IconSun
import IconMoon from './IconMoon';  // 引入 IconMoon

function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();  // 获取主题相关的信息
  const [mounted, setMounted] = useState(false);  // 確保客戶端渲染

  useEffect(() => {
    setMounted(true);  // 使組件在客戶端渲染後才運行
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleToggle = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');  // 切換主題
  };

  return (
    <div onClick={handleToggle} className="cursor-pointer">
      {mounted ? (
        currentTheme === 'dark' ? <IconSun /> : <IconMoon />
      ) : (
        <IconMoon />  // 預設渲染月亮圖標
      )}
    </div>
  );
}

export default ThemeToggle;
