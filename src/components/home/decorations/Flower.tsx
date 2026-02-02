interface FlowerProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "coral" | "mustard";
}

export function Flower({ className = "", style, color = "coral" }: FlowerProps) {
  const fillColor = color === "coral" ? "var(--accent-coral)" : "var(--accent-mustard)";

  return (
    <div className={className} style={style}>
      <svg
        width="20"
        height="35"
        viewBox="0 0 20 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Stem */}
        <path
          d="M10 35 Q9 25 10 18"
          stroke="var(--accent-sage)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Petals */}
        <circle cx="10" cy="8" r="4" fill={fillColor} stroke="var(--ink-black)" strokeWidth="1.5" />
        <circle cx="5" cy="12" r="4" fill={fillColor} stroke="var(--ink-black)" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="4" fill={fillColor} stroke="var(--ink-black)" strokeWidth="1.5" />
        <circle cx="6" cy="6" r="4" fill={fillColor} stroke="var(--ink-black)" strokeWidth="1.5" />
        <circle cx="14" cy="6" r="4" fill={fillColor} stroke="var(--ink-black)" strokeWidth="1.5" />
        {/* Center */}
        <circle cx="10" cy="9" r="3" fill="var(--accent-mustard)" stroke="var(--ink-black)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
