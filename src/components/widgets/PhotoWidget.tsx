import { useState } from "react";

import { ChevronRight } from "lucide-react";

interface PhotoWidgetProps {
  onOpenApp: (appId: string) => void;
}

const photos = [
  {
    src: `${import.meta.env.BASE_URL}gallery/cake.jpg`,
    caption: "Your day",
  },
  {
    src: `${import.meta.env.BASE_URL}gallery/sparkles.jpg`,
    caption: "A little magic",
  },
  {
    src: `${import.meta.env.BASE_URL}gallery/flowers.jpg`,
    caption: "Pretty things",
  },
];

export default function PhotoWidget({
  onOpenApp,
}: PhotoWidgetProps) {
  const [index] = useState(
    () => Math.floor(Math.random() * photos.length),
  );

  const photo = photos[index];

  return (
    <button
      className="widget widget-photo"
      onClick={() => onOpenApp("photos")}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        className="widget-photo-img"
      />

      <div className="widget-photo-overlay">
        <span className="widget-photo-label">
          Photos
        </span>

        <span className="widget-photo-caption">
          {photo.caption}
          <ChevronRight size={12} />
        </span>
      </div>
    </button>
  );
}
