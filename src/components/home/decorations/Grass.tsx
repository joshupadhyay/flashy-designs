interface GrassProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Grass({ className = "", style }: GrassProps) {
  return (
    <div className={className} style={style}>
      <svg
        width="30"
        height="25"
        viewBox="0 0 30 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 25 Q6 15 8 10"
          stroke="var(--accent-sage)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M12 25 Q13 12 15 5"
          stroke="var(--accent-sage)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 25 Q21 18 25 12"
          stroke="var(--accent-sage)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
