import { useState, useEffect } from "react";

export function JoshClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div
      className="fixed top-6 left-6 md:top-8 md:left-8 z-10 animate-fade-in-down"
      style={{
        animationDelay: "0.3s",
        animationFillMode: "forwards",
        opacity: 0,
      }}
    >
      <div className="text-[var(--ink-soft)] text-xs tracking-widest uppercase font-body mb-1">
        Josh Time
      </div>
      <div
        className="text-[var(--ink-black)] text-2xl md:text-3xl tracking-wider"
        style={{
          fontFamily: "'Share Tech Mono', 'Courier New', monospace",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {formatTime(time)}
      </div>
    </div>
  );
}
