import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
