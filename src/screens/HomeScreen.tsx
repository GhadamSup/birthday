import { Heart } from "lucide-react";
import { motion } from "motion/react";

interface HomeScreenProps {
  onOpenApp: () => void;
}

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

      <div className="home-app-placeholder">
        <motion.button
          className="placeholder-app glass"
          whileTap={{ scale: 0.88 }}
          onClick={onOpenApp}
        >
          ✦
        </motion.button>

        <span>
          Little App
        </span>
      </div>
    </motion.section>
  );
}