import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";

import AppWindow from "../components/AppWindow";

interface LetterAppProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function LetterApp({
  onBack,
  onContinue,
}: LetterAppProps) {
  return (
    <AppWindow
      title="Letter"
      onBack={onBack}
    >
      <div className="letter-app">
        <motion.div
          className="letter-header"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="letter-icon">
            <Heart
              size={19}
              fill="currentColor"
            />
          </div>

          <span>A LITTLE SOMETHING</span>

          <h1>
            A letter
            <br />
            for you.
          </h1>

          <p>
            No fancy animations for this
            part. Just some words.
          </p>
        </motion.div>

        <motion.article
          className="letter-paper glass"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
        >
          <div className="letter-decoration">
            <Sparkles size={15} />
          </div>

          <p className="letter-greeting">
            Hey you,
          </p>

          <p>
            So... you probably weren't
            expecting an entire fake
            iPhone to appear on the
            internet for your birthday.
          </p>

          <p>
            I could have just sent you a
            normal birthday message, but
            that felt a little too easy.
          </p>

          <p>
            We've never had the usual
            kind of friendship. No
            pictures together, no
            spontaneous trips, no sitting
            somewhere for hours talking
            about absolutely nothing.
          </p>

          <p>
            And yet, somehow, you've still
            become someone who's part of
            my everyday life.
          </p>

          <p>
            It's kind of funny how the
            internet works sometimes.
            Someone can be miles away,
            behind a screen, and still
            manage to make an ordinary day
            a little better.
          </p>

          <p>
            I don't know exactly where life
            is going to take either of us,
            but I'm genuinely glad that at
            some point our paths crossed.
          </p>

          <p>
            So today, I just wanted to say
            thank you.
          </p>

          <p>
            Thank you for the conversations,
            the random moments, the jokes,
            the chaos, and all the little
            things that probably seemed
            insignificant at the time.
          </p>

          <p>
            I hope this next year of your
            life gives you a ridiculous
            number of reasons to smile.
          </p>

          <p>
            I hope you get to do the things
            you've been wanting to do.
          </p>

          <p>
            And I hope today reminds you
            that there are people out there
            who are genuinely happy that
            you exist.
          </p>

          <p className="letter-final">
            Happy birthday.
            <br />
            Seriously. ❤️
          </p>

          <div className="letter-signature">
            <span>
              — Mohammadreza
            </span>

            <Heart
              size={14}
              fill="currentColor"
            />
          </div>
        </motion.article>

        <motion.div
          className="letter-ending"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p>
            ...but we're not quite done yet.
          </p>

          <button
            className="letter-continue glass"
            onClick={onContinue}
          >
            There's one last thing
            <span>→</span>
          </button>
        </motion.div>
      </div>
    </AppWindow>
  );
}