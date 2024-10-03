"use client";

import { delay, motion } from "framer-motion";
import { useState } from "react";

const dotVariants = {
  rest: {
    opacity: 1,
  },
  hover: {
    scale: [1, 1.2, 1, 1.2],
    opacity: [0.6, 1, 0.6, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.15,
    },
  },
};

const rssVariants = {
  rest: {
    opacity: 1,
  },
  hover: {
    scale: [1, 1.1, 1, 1.1],
    opacity: [0.1, 1, 0.1, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const rssVariantDelay = {
  rest: {
    opacity: 1,
  },
  hover: {
    scale: [1, 1.1, 1, 1.1],
    opacity: [0.1, 1, 0.1, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.15,
    },
  },
};


function IconRss(props) {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      whileTap={{ scale: 0.8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >

      {/* 左下角的點，保持不變 */}
      <motion.path
        d="M6 19 A1 1 0 0 1 5 20 A1 1 0 0 1 4 19 A1 1 0 0 1 6 19 z"
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        variants={dotVariants}
      />

      {/* 小弧形 */}
      <motion.path
        d="M4 11a9 9 0 019 9"
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        variants={rssVariants}
      />

      {/* 大弧形 */}
      <motion.path
        d="M4 4a16 16 0 0116 16"
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        variants={rssVariantDelay}
      />
    </motion.svg>
  );
}

export default IconRss;
