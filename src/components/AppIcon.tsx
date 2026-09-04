import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface AppIconProps {
  name: string;
  icon: LucideIcon;
  gradient: string;
  badge?: number;
  onClick: () => void;
}

export default function AppIcon({
  name,
  icon: Icon,
  gradient,
  badge,
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

      {badge && badge > 0 && (
        <span className="app-badge">
          {badge}
        </span>
      )}

      <span>{name}</span>
    </motion.button>
  );
}