import {
  Gift,
  Image,
  MessageCircle,
  Music,
  NotebookPen,
  Sparkles,
  Search,
} from "lucide-react";
import { motion } from "motion/react";

import Dock from "../components/Dock";
import AppIcon from "../components/AppIcon";

import ClockWidget from "../components/widgets/ClockWidget";
import PhotoWidget from "../components/widgets/PhotoWidget";

interface HomeScreenProps {
  onOpenApp: (appId: string) => void;
}

const row1Apps = [
  {
    id: "messages",
    name: "Messages",
    icon: MessageCircle,
    gradient:
      "linear-gradient(145deg, #69e59b, #209b67)",
    badge: 1,
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
];

const row2Apps = [
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
      <div className="home-grid">
        <div className="home-grid-clock">
          <ClockWidget />
        </div>

        {row1Apps.map((app, index) => (
          <motion.div
            key={app.id}
            className="home-grid-app"
            style={{
              gridRow: `${index < 2 ? 1 : 2}`,
              gridColumn: `${3 + (index % 2)}`,
            }}
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
              badge={app.badge}
              onClick={() => onOpenApp(app.id)}
            />
          </motion.div>
        ))}

        {row2Apps.map((app, index) => (
          <motion.div
            key={app.id}
            className="home-grid-app"
            style={{
              gridRow: "3",
              gridColumn: `${1 + index}`,
            }}
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
              delay: 0.28 + index * 0.05,
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

        <div className="home-grid-photo">
          <PhotoWidget onOpenApp={onOpenApp} />
        </div>
      </div>

      <div className="page-dots">
        <span className="page-dot active" />
        <span className="page-dot" />
      </div>

      <button
        className="search-pill glass"
        aria-label="Search"
      >
        <Search size={14} />
        <span>Search</span>
      </button>

      <Dock onOpenApp={onOpenApp} />
    </motion.section>
  );
}