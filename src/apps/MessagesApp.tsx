import { useEffect, useState } from "react";
import { Heart, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import AppWindow from "../components/AppWindow";

interface MessagesAppProps {
    onBack: () => void;
    onContinue: () => void;
}

interface Message {
    id: number;
    text: string;
    fromMe?: boolean;
}

const messages: Message[] = [
    {
        id: 1,
        text: "Hey :)",
    },
    {
        id: 2,
        text: "You know what?",
    },
    {
        id: 3,
        text: "I could've just sent you a birthday message...",
    },
    {
        id: 4,
        text: "But where's the fun in that?",
    },
    {
        id: 5,
        text: "So I made you something instead.",
    },
];

export default function MessagesApp({
    onBack,
    onContinue,
}: MessagesAppProps) {
    const [visibleMessages, setVisibleMessages] =
        useState<Message[]>([]);

    useEffect(() => {
        const timers = messages.map((message, index) =>
            window.setTimeout(() => {
                setVisibleMessages((current) => [
                    ...current,
                    message,
                ]);
            }, 650 + index * 900),
        );

        return () => {
            timers.forEach(window.clearTimeout);
        };
    }, []);

    return (
        <AppWindow
            title="Messages"
            onBack={onBack}
        >
            <div className="messages-app">
                <div className="messages-profile">
                    <div className="messages-avatar">
                        <Heart
                            size={22}
                            fill="currentColor"
                        />
                    </div>

                    <strong>Someone special</strong>

                    <span>
                        your little conversation
                    </span>
                </div>

                <div className="message-list">
                    <AnimatePresence initial={false}>
                        {visibleMessages.map((message) => (
                            <motion.div
                                key={message.id}
                                className={`message-row ${message.fromMe
                                        ? "message-from-me"
                                        : "message-from-her"
                                    }`}
                                initial={{
                                    opacity: 0,
                                    y: 18,
                                    scale: 0.92,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 0.35,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                <div className="message-bubble">
                                    {message.text}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {visibleMessages.length ===
                        messages.length && (
                            <motion.button
                                className="message-continue glass"
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.5,
                                }}
                                onClick={onContinue}
                            >
                                There's still more
                                <span>→</span>
                            </motion.button>
                        )}
                </div>

                <div className="fake-message-input glass">
                    <span>
                        Type a message...
                    </span>

                    <button aria-label="Send">
                        <Send size={16} />
                    </button>
                </div>
            </div>
        </AppWindow>
    );
}