import { useEffect, useRef, useState } from "react";
import {
    ChevronLeft,
    Heart,
    Pause,
    Play,
    SkipBack,
    SkipForward,
} from "lucide-react";
import { motion } from "motion/react";

import AppWindow from "../components/AppWindow";

interface MusicAppProps {
    onBack: () => void;
    onContinue: () => void;
}

export default function MusicApp({
    onBack,
    onContinue,
}: MusicAppProps) {
    const audioRef = useRef<HTMLAudioElement | null>(
        null,
    );

    const [isPlaying, setIsPlaying] =
        useState(false);

    const [progress, setProgress] =
        useState(0);

    const [duration, setDuration] =
        useState(0);

    const [liked, setLiked] =
        useState(false);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        const handleTimeUpdate = () => {
            setProgress(audio.currentTime);
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
        };

        audio.addEventListener(
            "loadedmetadata",
            handleLoadedMetadata,
        );

        audio.addEventListener(
            "timeupdate",
            handleTimeUpdate,
        );

        audio.addEventListener(
            "ended",
            handleEnded,
        );

        return () => {
            audio.removeEventListener(
                "loadedmetadata",
                handleLoadedMetadata,
            );

            audio.removeEventListener(
                "timeupdate",
                handleTimeUpdate,
            );

            audio.removeEventListener(
                "ended",
                handleEnded,
            );
        };
    }, []);

    const togglePlay = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (audio.paused) {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch {
                setIsPlaying(false);
            }
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    const seek = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const audio = audioRef.current;

        if (!audio) return;

        const time = Number(event.target.value);

        audio.currentTime = time;
        setProgress(time);
    };

    const formatTime = (time: number) => {
        if (!Number.isFinite(time)) {
            return "0:00";
        }

        const minutes = Math.floor(time / 60);

        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");

        return `${minutes}:${seconds}`;
    };

    return (
        <AppWindow
            title="Music"
            onBack={onBack}
        >
            <div className="music-app">
                <audio
                    ref={audioRef}
                    src="/music/birthday-song.mp3"
                    preload="metadata"
                />

                <motion.div
                    className={`music-art ${isPlaying
                            ? "music-art-playing"
                            : ""
                        }`}
                    initial={{
                        opacity: 0,
                        scale: 0.88,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                >
                    <img
                        src="/music/cover.jpg"
                        alt="Album cover"
                    />

                    <div className="music-art-glow" />
                </motion.div>

                <div className="music-info">
                    <div>
                        <h1>
                            A song for you
                        </h1>

                        <p>
                            Birthday soundtrack
                        </p>
                    </div>

                    <button
                        className={`music-like ${liked
                                ? "music-liked"
                                : ""
                            }`}
                        onClick={() =>
                            setLiked((value) => !value)
                        }
                        aria-label="Like song"
                    >
                        <Heart
                            size={21}
                            fill={
                                liked
                                    ? "currentColor"
                                    : "none"
                            }
                        />
                    </button>
                </div>

                <div className="music-progress">
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={progress}
                        onChange={seek}
                        disabled={!duration}
                        aria-label="Song progress"
                    />

                    <div className="music-times">
                        <span>
                            {formatTime(progress)}
                        </span>

                        <span>
                            {formatTime(duration)}
                        </span>
                    </div>
                </div>

                <div className="music-controls">
                    <button
                        aria-label="Previous"
                        disabled
                    >
                        <SkipBack size={21} />
                    </button>

                    <button
                        className="music-play-button"
                        onClick={togglePlay}
                        aria-label={
                            isPlaying
                                ? "Pause"
                                : "Play"
                        }
                    >
                        {isPlaying ? (
                            <Pause
                                size={24}
                                fill="currentColor"
                            />
                        ) : (
                            <Play
                                size={24}
                                fill="currentColor"
                            />
                        )}
                    </button>

                    <button
                        aria-label="Next"
                        disabled
                    >
                        <SkipForward size={21} />
                    </button>
                </div>

                <br></br>
                <br></br>

                <motion.button
                    className="music-next glass"
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.6,
                    }}
                    onClick={onContinue}
                >
                    Continue the story
                    <ChevronLeft
                        size={16}
                        style={{
                            transform:
                                "rotate(180deg)",
                        }}
                    />
                </motion.button>
            </div>
        </AppWindow>
    );
}