import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface AppIconProps {
  name: string;
  icon: LucideIcon;
  gradient: string;
  onClick: () => void;
}

export default function AppIcon({
  name,
  icon: Icon,
  gradient,
  onClick,
}: AppIconProps) {
  return (
    <motion.button
      className="app-icon-wrapper"
      whileTap={{ scale: 0.86 }}
      onClick={onClick}
    >
      <div
        className="app-icon"
        style={{
          background: gradient,
        }}
      >
        <Icon size={26} strokeWidth={2.1} />
      </div>

      <span>{name}</span>
    </motion.button>
  );
}