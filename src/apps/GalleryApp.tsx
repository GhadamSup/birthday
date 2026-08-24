import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import AppWindow from "../components/AppWindow";

interface GalleryAppProps {
  onBack: () => void;
}

interface GalleryItem {
  id: number;
  image: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/gallery/cake.jpg",
    caption: "This one's yours. 🎂",
  },
  {
    id: 2,
    image: "/gallery/balloons.jpg",
    caption: "A little celebration. 🎈",
  },
  {
    id: 3,
    image: "/gallery/gift.jpg",
    caption: "Something for you. 🎁",
  },
  {
    id: 4,
    image: "/gallery/sparkles.jpg",
    caption: "Because one can never have too many sparkles. ✨",
  },
  {
    id: 5,
    image: "/gallery/flowers.jpg",
    caption: "Just because they're pretty. 🌸",
  },
  {
    id: 6,
    image: "/gallery/cute.jpg",
    caption: "Okay, this one is just cute.",
  },
];

export default function GalleryApp({
  onBack,
}: GalleryAppProps) {
  const [selectedItem, setSelectedItem] =
    useState<GalleryItem | null>(null);

  return (
    <AppWindow
      title="Gallery"
      onBack={onBack}
    >
      <div className="gallery-app">
        <div className="gallery-intro">
          <span className="gallery-kicker">
            MADE FOR YOU
          </span>

          <h1>
            Birthday
            <br />
            Gallery
          </h1>

          <p>
            A tiny collection of things
            that felt like they belonged
            here.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map(
            (item, index) => (
              <motion.button
                key={item.id}
                className={`gallery-card gallery-card-${index + 1}`}
                onClick={() =>
                  setSelectedItem(item)
                }
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                />
              </motion.button>
            ),
          )}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="gallery-viewer"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setSelectedItem(null)
              }
            >
              <motion.div
                className="gallery-viewer-content"
                initial={{
                  opacity: 0,
                  scale: 0.88,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  y: 10,
                }}
                transition={{
                  duration: 0.35,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}
                onClick={(event) =>
                  event.stopPropagation()
                }
              >
                <button
                  className="gallery-close glass"
                  onClick={() =>
                    setSelectedItem(null)
                  }
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <img
                  src={selectedItem.image}
                  alt={selectedItem.caption}
                />

                <p>
                  {selectedItem.caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppWindow>
  );
}