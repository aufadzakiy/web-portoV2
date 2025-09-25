import { Variants, easeOut } from "framer-motion";

// Varian Animasi untuk Framer Motion
export const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { 
    opacity: 0, 
    y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: easeOut,
    },
  },
});

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
