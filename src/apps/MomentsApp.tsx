import { motion } from "motion/react";
import { ChevronRight, Sparkles } from "lucide-react";

import AppWindow from "../components/AppWindow";

interface MomentsAppProps {
  onBack: () => void;
  onContinue: () => void;
}

interface Moment {
  id: number;
  date: string;
  title: string;
  text: string;
}

const moments: Moment[] = [
  {
    id: 1,
    date: "SOMEWHERE ALONG THE WAY",
    title: "We started talking.",
    text: "And somehow, a random person on the internet slowly became someone I genuinely cared about.",
  },
  {
    id: 2,
    date: "A LITTLE LATER",
    title: "The conversations got longer.",
    text: "One conversation became another, and suddenly there was always something else to talk about.",
  },
  {
    id: 3,
    date: "SOME GOOD DAYS",
    title: "We made some pretty good memories.",
    text: "Even if they happened through a screen, they were still real moments.",
  },
  {
    id: 4,
    date: "AND THEN",
    title: "Here we are.",
    text: "Another year, another birthday, and somehow I'm still here making an entire website for you.",
  },
];

export default function MomentsApp({
  onBack,
  onContinue,
}: MomentsAppProps) {
  return (
    <AppWindow
      title="Moments"
      onBack={onBack}
    >
      <div className="moments-app">
        <motion.div
          className="moments-intro"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <div className="moments-icon">
            <Sparkles size={20} />
          </div>

          <span>
            A LITTLE TIMELINE
          </span>

          <h1>
            Somehow,
            <br />
            we're here.
          </h1>

          <p>
            A few moments from this
            weird little internet
            friendship.
          </p>
        </motion.div>

        <div className="moments-timeline">
          <div className="moments-line" />

          {moments.map((moment) => (
            <motion.div
              key={moment.id}
              className="moment"
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 0.5,
                delay: 0.05,
              }}
            >
              <div className="moment-node">
                <span />
              </div>

              <div className="moment-content">
                <span className="moment-date">
                  {moment.date}
                </span>

                <h2>
                  {moment.title}
                </h2>

                <p>
                  {moment.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="moments-ending"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="moments-ending-line" />

          <Sparkles
            size={18}
          />

          <h2>
            And somehow,
            <br />
            here we are.
          </h2>

          <p>
            I guess some friendships
            don't really need a place
            to exist.
          </p>

          <button
            className="moments-continue glass"
            onClick={onContinue}
          >
            There's something
            I want to tell you

            <ChevronRight
              size={16}
            />
          </button>
        </motion.div>
      </div>
    </AppWindow>
  );
}