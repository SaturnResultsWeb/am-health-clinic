"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface NoisePatternCardProps {
  children: React.ReactNode;
  className?: string;
  patternClassName?: string;
  overlayClassName?: string;
}

// Adapted from 21st.dev "Card with Noise Pattern" (Ali-Hussein-dev),
// recoloured to A&M's ground/surface palette and switched to motion/react.
export function NoisePatternCard({
  children,
  className,
  patternClassName,
  overlayClassName,
}: NoisePatternCardProps) {
  return (
    <motion.div
      className={cn(
        "w-full overflow-hidden rounded-[14px] border border-line-dark bg-surface",
        className,
      )}
      initial={{ opacity: 0, y: -12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={cn(
          "size-full bg-noise bg-repeat bg-[length:500px_500px]",
          patternClassName,
        )}
      >
        <div className={cn("bg-ground/30", overlayClassName)}>{children}</div>
      </div>
    </motion.div>
  );
}

export function NoisePatternCardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 text-left md:p-10", className)} {...props} />;
}
