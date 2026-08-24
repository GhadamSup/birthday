import {
  Gift,
  Image,
  MessageCircle,
  Music,
  NotebookPen,
  Sparkles,
  Heart,
} from "lucide-react";
import { motion } from "motion/react";

import Dock from "../components/Dock";

import AppIcon from "../components/AppIcon";

interface HomeScreenProps {
  onOpenApp: (appId: string) => void;
}

const apps = [
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
    id: "notes",
    name: "Notes",
    icon: NotebookPen,
    gradient:
      "linear-gradient(145deg, #ffe082, #e6a62c)",
  },
  {
    id: "memories",
    name: "Memories",
    icon: Sparkles,
    gradient:
      "linear-gradient(145deg, #80d8ff, #536dfe)",
  },
  {
    id: "gift",
    name: "Gift",
    icon: Gift,
    gradient:
      "linear-gradient(145deg, #ff8fab, #e33d74)",
  },
];

export default function HomeScreen({
  onOpenApp,
}: HomeScreenProps) {
  return (
    <motion.section
      className="home-screen"
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <header className="home-header">
        <div>
          <span className="eyebrow">
            Monday
          </span>

          <h1>
            A little world
            <br />
            for you.
          </h1>
        </div>

        <div className="profile-button glass">
          <Heart
            size={18}
            fill="currentColor"
          />
        </div>
      </header>

      <div className="app-grid">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.08 + index * 0.05,
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <AppIcon
              name={app.name}
              icon={app.icon}
              gradient={app.gradient}
              onClick={() => onOpenApp(app.id)}
            />
          </motion.div>
        ))}
      </div>
      <Dock onOpenApp={onOpenApp} />
    </motion.section>
  );
}