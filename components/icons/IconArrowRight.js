"use client";

import { motion } from "framer-motion";

const arrowVariants = {
  rest: {
    x2: 18,
    points: "12 5 19 12 12 19",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 16,
    },
  },
  hover: {
    x2: 23,
    points: "17 6 24 12 17 18",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  tap: {
    x2: 26,
    points: "19 6 26 12 19 18",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

function IconArrowRight({ size = 20 }) {
  return (
    <motion.svg
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      width={size / 16 + 'rem'}
      height={size / 16 + 'rem'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 動畫化箭頭的軸 */}
      <motion.line
        x1="5"
        y1="12"
        y2="12"
        variants={arrowVariants}
      />
      {/* 動畫化箭頭的尖端 */}
      <motion.polyline
        variants={arrowVariants}
      />
    </motion.svg>
  );
}

export default IconArrowRight;
