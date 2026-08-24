import { AnimatePresence } from "motion/react";
import { useState } from "react";

import AppShell from "./components/AppShell";
import StatusBar from "./components/StatusBar";
import HomeIndicator from "./components/HomeIndicator";

import LockScreen from "./screens/LockScreen";
import HomeScreen from "./screens/HomeScreen";

type Screen = "lock" | "home";

export default function App() {
  const [screen, setScreen] =
    useState<Screen>("lock");

  return (
    <AppShell>
      <StatusBar />

      <AnimatePresence mode="wait">
        {screen === "lock" ? (
          <LockScreen
            key="lock"
            onUnlock={() => setScreen("home")}
          />
        ) : (
          <HomeScreen
            key="home"
            onOpenApp={() => {
              console.log("App clicked");
            }}
          />
        )}
      </AnimatePresence>

      <HomeIndicator />
    </AppShell>
  );
}