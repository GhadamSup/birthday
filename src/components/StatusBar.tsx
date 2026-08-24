import { BatteryFull, Wifi } from "lucide-react";

export default function StatusBar() {
  return (
    <header className="status-bar">
      <span className="status-time">9:41</span>

      <div className="dynamic-island" />

      <div className="status-icons">
        <Wifi size={14} strokeWidth={2.3} />
        <BatteryFull size={18} strokeWidth={2.3} />
      </div>
    </header>
  );
}