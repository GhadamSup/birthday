import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <main className="app-shell">
      <div className="liquid-background" aria-hidden="true">
        <div className="liquid-orb orb-purple" />
        <div className="liquid-orb orb-blue" />
        <div className="liquid-orb orb-pink" />
        <div className="liquid-orb orb-gold" />

        <div className="background-noise" />
      </div>

      <div className="phone-interface">
        {children}
      </div>
    </main>
  );
}