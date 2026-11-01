import { motion } from "framer-motion";

// Reusable wrapper that animates its children when they enter the viewport.
// Props:
//   direction: "up" | "down" | "left" | "right" (default: "up")
//   delay: number (seconds) – optional extra delay before animation starts
//   children: ReactNode – the content to animate

const AnimatedSection = ({ direction = "up", delay = 0, children }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
