import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  float?: boolean;
}

export const GlassCard = ({ children, className, hover = false, float = false }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={cn(
        "glass rounded-2xl p-6 shadow-soft",
        float && "animate-float",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
