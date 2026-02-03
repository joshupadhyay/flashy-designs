interface LamppostProps {
  className?: string;
  style?: React.CSSProperties;
  isOn?: boolean;
}

export function Lamppost({ className = "", style, isOn = false }: LamppostProps) {
  return (
    <div className={className} style={style}>
      <svg
        width="30"
        height="100"
        viewBox="0 0 30 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Pole */}
        <path
          d="M15 100 L15 35"
          stroke="var(--ink-black)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Lamp arm */}
        <path
          d="M15 35 Q15 30 20 28"
          stroke="var(--ink-black)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Lamp housing top */}
        <path
          d="M12 28 Q20 22 28 28"
          stroke="var(--ink-black)"
          strokeWidth="2"
          fill="var(--ink-black)"
        />

        {/* Lamp glass/bulb */}
        <path
          d="M13 28 L15 38 L25 38 L27 28"
          stroke="var(--ink-black)"
          strokeWidth="2"
          fill={isOn ? "var(--sun-yellow)" : "var(--bg-cream)"}
          className={isOn ? "animate-lamp-glow" : ""}
        />

        {/* Light glow effect when on */}
        {isOn && (
          <ellipse
            cx="20"
            cy="45"
            rx="15"
            ry="20"
            fill="var(--sun-yellow)"
            opacity="0.2"
            className="animate-lamp-glow"
          />
        )}

        {/* Pole base */}
        <ellipse
          cx="15"
          cy="100"
          rx="8"
          ry="3"
          fill="var(--ink-black)"
        />
      </svg>
    </div>
  );
}
