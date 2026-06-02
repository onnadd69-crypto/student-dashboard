"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function MotionCourseCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.15,
        rotate: 2,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-green-500 bg-zinc-900 p-5"
    >
      {children}
    </motion.article>
  );
}