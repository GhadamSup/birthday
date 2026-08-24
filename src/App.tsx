import { useState } from "react";
import { AnimatePresence } from "motion/react";

import AppShell from "./components/AppShell";
import StatusBar from "./components/StatusBar";
import HomeIndicator from "./components/HomeIndicator";

import LockScreen from "./screens/LockScreen";
import HomeScreen from "./screens/HomeScreen";

import MessagesApp from "./apps/MessagesApp";
import GalleryApp from "./apps/GalleryApp";
import MusicApp from "./apps/MusicApp";
import MomentsApp from "./apps/MomentsApp";
import LetterApp from "./apps/LetterApp";
import GiftApp from "./apps/GiftApp";

type Screen =
  | {
    type: "lock";
  }
  | {
    type: "home";
  }
  | {
    type: "app";
    appId: string;
  };

export default function App() {
  const [screen, setScreen] = useState<Screen>({
    type: "lock",
  });

  const goHome = () => {
    setScreen({
      type: "home",
    });
  };

  const openApp = (appId: string) => {
    setScreen({
      type: "app",
      appId,
    });
  };

  return (
    <AppShell>
      <StatusBar />

      <AnimatePresence mode="wait">
        {screen.type === "lock" && (
          <LockScreen
            key="lock"
            onUnlock={() => {
              setScreen({
                type: "home",
              });
            }}
          />
        )}

        {screen.type === "home" && (
          <HomeScreen
            key="home"
            onOpenApp={openApp}
          />
        )}

        {screen.type === "app" &&
          screen.appId === "messages" && (
            <MessagesApp
              key="messages"
              onBack={goHome}
              onContinue={() => {
                openApp("photos");
              }}
            />
          )}

        {screen.type === "app" &&
          screen.appId === "photos" && (
            <GalleryApp
              key="gallery"
              onBack={goHome}
            />
          )}


        {screen.type === "app" &&
          screen.appId === "music" && (
            <MusicApp
              key="music"
              onBack={goHome}
              onContinue={() => {
                openApp("moments");
              }}
            />
          )}

        {screen.type === "app" &&
          (screen.appId === "moments" ||
            screen.appId === "memories") && (
            <MomentsApp
              key="moments"
              onBack={goHome}
              onContinue={() => {
                openApp("letter");
              }}
            />
          )}

        {screen.type === "app" &&
          (screen.appId === "letter" ||
            screen.appId === "notes") && (
            <LetterApp
              key="letter"
              onBack={goHome}
              onContinue={() => {
                openApp("gift");
              }}
            />
          )}

        {screen.type === "app" &&
          screen.appId === "gift" && (
            <GiftApp
              key="gift"
              onBack={goHome}
            />
          )}
      </AnimatePresence>

      <HomeIndicator />
    </AppShell>
  );
}