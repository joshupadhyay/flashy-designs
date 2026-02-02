interface TreeProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Tree({ className = "", style }: TreeProps) {
  return (
    <div className={className} style={style}>
      <svg
        width="50"
        height="120"
        viewBox="0 0 50 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Trunk - slightly curved */}
        <path
          d="M25 120 L25 70 Q24 60 26 55"
          stroke="var(--accent-terracotta)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Foliage blobs */}
        <ellipse
          cx="25"
          cy="40"
          rx="20"
          ry="25"
          fill="var(--accent-sage)"
          stroke="var(--ink-black)"
          strokeWidth="2"
        />
        <ellipse
          cx="15"
          cy="50"
          rx="12"
          ry="15"
          fill="var(--accent-sage)"
          stroke="var(--ink-black)"
          strokeWidth="2"
        />
        <ellipse
          cx="35"
          cy="48"
          rx="10"
          ry="12"
          fill="var(--accent-sage)"
          stroke="var(--ink-black)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
