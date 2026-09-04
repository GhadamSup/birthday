import { useEffect, useState } from "react";

export default function ClockWidget() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date()),
      1000,
    );

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();

  const hourAngle = (hours % 12) * 30 + mins * 0.5;
  const minuteAngle = mins * 6 + secs * 0.1;
  const secondAngle = secs * 6;

  return (
    <div className="widget widget-clock">
      <div className="widget-clock-face">
        <svg viewBox="0 0 200 200">
          {/* White face */}
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="white"
          />

          {/* Tick marks */}
          {[...Array(60)].map((_, i) => {
            const angle = ((i * 6 - 90) * Math.PI) / 180;
            const isHour = i % 5 === 0;
            const outerR = 86;
            const innerR = isHour ? 74 : 80;
            const x1 = 100 + outerR * Math.cos(angle);
            const y1 = 100 + outerR * Math.sin(angle);
            const x2 = 100 + innerR * Math.cos(angle);
            const y2 = 100 + innerR * Math.sin(angle);

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={
                  isHour
                    ? "#1c1c1e"
                    : "#c7c7cc"
                }
                strokeWidth={
                  isHour ? 3 : 1.4
                }
                strokeLinecap="round"
              />
            );
          })}

          {/* Hour hand */}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="48"
            stroke="#1c1c1e"
            strokeWidth="6"
            strokeLinecap="round"
            transform={`rotate(${hourAngle} 100 100)`}
          />

          {/* Minute hand */}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="26"
            stroke="#1c1c1e"
            strokeWidth="4"
            strokeLinecap="round"
            transform={`rotate(${minuteAngle} 100 100)`}
          />

          {/* Second hand */}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="22"
            stroke="#ff3b30"
            strokeWidth="1.8"
            strokeLinecap="round"
            transform={`rotate(${secondAngle} 100 100)`}
          />

          {/* Second hand counterweight */}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="112"
            stroke="#ff3b30"
            strokeWidth="3.5"
            strokeLinecap="round"
            transform={`rotate(${secondAngle} 100 100)`}
          />

          {/* Center dot */}
          <circle
            cx="100"
            cy="100"
            r="5"
            fill="#ff3b30"
          />
        </svg>
      </div>
    </div>
  );
}
