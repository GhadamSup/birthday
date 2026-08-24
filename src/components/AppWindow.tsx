import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AppWindowProps {
  title: string;
  children: ReactNode;
  onBack: () => void;
}

export default function AppWindow({
  title,
  children,
  onBack,
}: AppWindowProps) {
  return (
    <motion.section
      className="app-window"
      initial={{
        opacity: 0,
        scale: 0.88,
        y: 30,
        borderRadius: 60,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        borderRadius: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.92,
        y: 20,
        borderRadius: 40,
      }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <header className="app-window-header">
        <button
          className="app-back-button glass"
          onClick={onBack}
          aria-label="Go back"
        >
          <ArrowLeft size={18} />
        </button>

        <h2>{title}</h2>

        <div className="app-header-spacer" />
      </header>

      <div className="app-window-content">
        {children}
      </div>
    </motion.section>
  );
}