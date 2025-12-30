"use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface InViewMotionProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function InViewWrapper({
  children,
  className,
  delay = 0,
  ...motionProps
}: InViewMotionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({ children, className, delay = 0 }: InViewMotionProps) {
  return (
    <InViewWrapper
      className={className}
      delay={delay}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </InViewWrapper>
  );
}

export function SlideInLeft({ children, className, delay = 0 }: InViewMotionProps) {
  return (
    <InViewWrapper
      className={className}
      delay={delay}
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </InViewWrapper>
  );
}

export function SlideInRight({ children, className, delay = 0 }: InViewMotionProps) {
  return (
    <InViewWrapper
      className={className}
      delay={delay}
      variants={{
        hidden: { opacity: 0, x: 10 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </InViewWrapper>
  );
}

export function FadeIn({ children, className, delay = 0 }: InViewMotionProps) {
  return (
    <InViewWrapper
      className={className}
      delay={delay}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      {children}
    </InViewWrapper>
  );
}
