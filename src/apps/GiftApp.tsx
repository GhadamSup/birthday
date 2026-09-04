import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

interface GiftAppProps {
    onBack: () => void;
}

export default function GiftApp({
    onBack,
}: GiftAppProps) {
    const [opened, setOpened] =
        useState(false);

    return (
        <div className="gift-app">
            <AnimatePresence mode="wait">
                {!opened ? (
                    <motion.div
                        key="closed"
                        className="gift-screen"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 1.05,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                    >

                        <div className="gift-intro">
                            <motion.div
                                animate={{
                                    y: [0, -7, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Sparkles
                                    size={18}
                                />
                            </motion.div>

                            <span>
                                ONE LAST THING
                            </span>

                            <h1>
                                I got you
                                <br />
                                something.
                            </h1>

                            <p>
                                Okay... technically,
                                it's not wrapped.
                                But you get the idea.
                            </p>
                        </div>

                        <motion.button
                            className="gift-box"
                            aria-label="Open gift"
                            onClick={() =>
                                setOpened(true)
                            }
                            whileTap={{
                                scale: 0.94,
                            }}
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 3.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="gift-glow" />

                            <div className="gift-lid">
                                <div className="gift-ribbon-horizontal" />
                                <div className="gift-bow">
                                    <span />
                                    <span />
                                </div>
                            </div>

                            <div className="gift-body">
                                <div className="gift-ribbon-vertical" />
                                <div className="gift-ribbon-horizontal" />
                            </div>

                            <span className="gift-tap">
                                TAP TO OPEN
                            </span>
                        </motion.button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="opened"
                        className="gift-reveal"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >
                        <div className="gift-particles">
                            {Array.from({
                                length: 18,
                            }).map((_, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        x: 0,
                                        y: 0,
                                        scale: 0,
                                    }}
                                    animate={{
                                        opacity: [
                                            0,
                                            1,
                                            0,
                                        ],
                                        x:
                                            (Math.random() -
                                                0.5) *
                                            280,
                                        y:
                                            (Math.random() -
                                                0.5) *
                                            400,
                                        scale: [
                                            0,
                                            1,
                                            0.4,
                                        ],
                                    }}
                                    transition={{
                                        duration:
                                            1.8 +
                                            Math.random(),
                                        delay:
                                            Math.random() *
                                            0.4,
                                        ease: "easeOut",
                                    }}
                                />
                            ))}
                        </div>

                        <motion.div
                            className="gift-reveal-content"
                            initial={{
                                opacity: 0,
                                y: 30,
                                scale: 0.95,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                delay: 0.45,
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                        >
                            <motion.div
                                className="gift-reveal-icon"
                                animate={{
                                    rotate: [
                                        0,
                                        -8,
                                        8,
                                        -4,
                                        4,
                                        0,
                                    ],
                                }}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.8,
                                }}
                            >
                                🎁
                            </motion.div>

                            <span>
                                HAPPY BIRTHDAY
                            </span>

                            <h1>
                                This one's
                                <br />
                                for you.
                            </h1>

                            <p>
                                I hope this little corner
                                of the internet made you
                                smile.
                            </p>

                            <p>
                                You deserve a really,
                                really good year.
                            </p>

                            <div className="gift-final">
                                <span>
                                    Happy Birthday ❤️
                                </span>
                            </div>

                            <button
                                className="gift-close"
                                onClick={onBack}
                            >
                                Back to the beginning
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}