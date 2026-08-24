import {
  Gift,
  Image,
  MessageCircle,
  Music,
} from "lucide-react";
import { motion } from "motion/react";

import AppIcon from "./AppIcon";

interface DockProps {
  onOpenApp: (appId: string) => void;
}

const dockApps = [
  {
    id: "messages",
    name: "Messages",
    icon: MessageCircle,
    gradient:
      "linear-gradient(145deg, #69e59b, #209b67)",
  },
  {
    id: "photos",
    name: "Photos",
    icon: Image,
    gradient:
      "linear-gradient(145deg, #ff9a9e, #a66cff)",
  },
  {
    id: "music",
    name: "Music",
    icon: Music,
    gradient:
      "linear-gradient(145deg, #ff6f91, #6d4aff)",
  },
  {
    id: "gift",
    name: "Gift",
    icon: Gift,
    gradient:
      "linear-gradient(145deg, #ff8fab, #e33d74)",
  },
];

export default function Dock({
  onOpenApp,
}: DockProps) {
  return (
    <motion.div
      className="dock glass"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.35,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {dockApps.map((app) => (
        <AppIcon
          key={app.id}
          name=""
          icon={app.icon}
          gradient={app.gradient}
          onClick={() => onOpenApp(app.id)}
        />
      ))}
    </motion.div>
  );
}