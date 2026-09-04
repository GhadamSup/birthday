import { BatteryFull, Wifi } from "lucide-react";

export default function StatusBar() {
  return (
    <header className="status-bar">
      <span className="status-time">9:41</span>

      <div className="dynamic-island" />

      <div className="status-icons">
        <div className="signal-bars" aria-label="Signal strength">
          <span className="signal-bar" style={{ height: 4 }} />
          <span className="signal-bar" style={{ height: 7 }} />
          <span className="signal-bar" style={{ height: 10 }} />
          <span className="signal-bar" style={{ height: 13 }} />
        </div>
        <Wifi size={14} strokeWidth={2.3} />
        <BatteryFull size={18} strokeWidth={2.3} />
      </div>
    </header>
  );
}