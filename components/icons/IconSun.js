"use client";

import { motion } from "framer-motion";

const sunVariants = {
  rest: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
  hover: {
    rotate: [0, 15, -11, 8, -6, 0], // Keyframes for rotating back and forth
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

function IconSun(props) {
  return (
    <motion.svg
      variants={sunVariants}
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
      <motion.path d="M17 12 A5 5 0 0 1 12 17 A5 5 0 0 1 7 12 A5 5 0 0 1 17 12 z" />
      <motion.path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </motion.svg>
  );
}

export default IconSun;
