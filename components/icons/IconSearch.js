"use client";

import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

const searchVariants = {
  rest: {
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: [1, 0.8, 1.1], // 縮小再放大
    x: [0, 6, -6, 6, 0], // X 軸小範圍跳躍
    y: [0, -3, 1, -3, 0], // Y 軸模擬彈跳
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1], // 定義動畫節奏
    },
  },
  finish: {
    scale: [0.8, 1.2, 1],
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

function IconSearch(props) {
  const controls = useAnimation(); // 用來控制動畫的狀態
  const [isHovering, setIsHovering] = useState(false); // 控制 hover 狀態
  const [isFinished, setIsFinished] = useState(false); // 控制 tap 狀態

  const handleTap = () => {
    setIsFinished(true); // 點擊後進入 tap 完成狀態
    controls.start('finish'); // 觸發 finish 動畫
    setIsHovering(false); // 停止 hover
  };

  const handleHoverStart = () => {
    if (!isFinished) { // 只有在 tap 未完成時觸發 hover 動畫
      setIsHovering(true);
      controls.start('hover');
    }
  };

  const handleHoverEnd = () => {
    if (!isFinished) {
      setIsHovering(false);
      controls.start('rest');
    }
  };

  return (
    <motion.svg
      variants={searchVariants}
      initial="rest"
      animate={controls} // 使用 controls 來控制動畫
      onHoverStart={handleHoverStart} // 開始 hover 動畫
      onHoverEnd={handleHoverEnd}     // 結束 hover 動畫
      onTap={handleTap}               // 點擊後觸發 tap 動畫並結束 hover
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <motion.path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z" />
      <motion.path d="M21 21l-4.35-4.35" />
    </motion.svg>
  );
}

export default IconSearch;
