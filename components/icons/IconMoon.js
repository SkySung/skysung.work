"use client";

import { motion } from "framer-motion";

const moonVariants = {
  rest: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
  hover: {
    rotate: [0, 15, -11, 8, -6, 0],  // Keyframes for rotating back and forth
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  tap: {
    rotate: 30,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

function IconMoon(props) {
  return (
    <motion.svg
      variants={moonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
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
      <motion.path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </motion.svg>
  );
}

export default IconMoon;
