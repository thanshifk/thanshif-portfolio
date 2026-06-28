import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({
  children,
  className = "",
}: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        bg-white
        text-slate-900

        dark:bg-slate-900/80
        dark:text-white

        backdrop-blur-xl
        rounded-3xl

        border
        border-slate-200
        dark:border-slate-800

        hover:border-blue-500
        hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]

        shadow-xl

        transition-all
        duration-300

        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}