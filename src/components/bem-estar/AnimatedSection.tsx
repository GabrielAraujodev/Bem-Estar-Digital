import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AnimatedSection = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};