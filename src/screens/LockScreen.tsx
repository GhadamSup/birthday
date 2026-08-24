import { Heart, LockKeyhole } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({
  onUnlock,
}: LockScreenProps) {
  const dragY = useMotionValue(0);

  const fade = useTransform(
    dragY,
    [-160, -40, 0],
    [0, 0.7, 1]
  );

  const scale = useTransform(
    dragY,
    [-160, 0],
    [0.92, 1]
  );

  return (
    <motion.section
      className="lock-screen"
      initial={{
        opacity: 0,
        scale: 1.03,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(12px)",
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="lock-content"
        style={{ opacity: fade }}
      >
        <div className="lock-date">
          Monday, August 24
        </div>

        <motion.div
          className="lock-clock"
          style={{ scale }}
        >
          9:41
        </motion.div>

        <div className="notification glass">
          <div className="notification-icon">
            <Heart
              size={17}
              fill="currentColor"
            />
          </div>

          <div className="notification-content">
            <div className="notification-header">
              <span>Something special</span>
              <span>now</span>
            </div>

            <strong>
              A tiny surprise is waiting.
            </strong>

            <p>
              Swipe up to open it.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="unlock-area"
        drag="y"
        dragConstraints={{
          top: -170,
          bottom: 0,
        }}
        dragElastic={0.12}
        style={{ y: dragY }}
        onDragEnd={(_, info) => {
          if (
            info.offset.y < -80 ||
            info.velocity.y < -500
          ) {
            onUnlock();
          }
        }}
      >
        <div className="unlock-arrow">
          ↑
        </div>

        <span>
          swipe up to open
        </span>

        <LockKeyhole size={14} />
      </motion.div>
    </motion.section>
  );
}