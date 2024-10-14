"use client";

import { motion } from "framer-motion";

function IconMenu({ isMenuOpen, ...props }) {
  // 定义动画变体
  const topVariants = {
    closed: { d: "M3 6h18" },
    open: { d: "M4 4L20 20" },
  };

  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { d: "M3 18h18" },
    open: { d: "M4 20L20 4" },
  };

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
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      <motion.path
        variants={topVariants}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        d="M3 12h18"
        variants={middleVariants}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        variants={bottomVariants}
        transition={{ duration: 0.3 }}
      />
    </motion.svg>
  );
}

export default IconMenu;
