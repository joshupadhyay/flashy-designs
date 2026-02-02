import { SpriteBase } from "./SpriteBase";

interface WalkingPersonProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export function WalkingPerson({ href, className = "", style }: WalkingPersonProps) {
  return (
    <SpriteBase href={href} external tooltip="GitHub" className={className} style={style}>
      <svg
        width="70"
        height="100"
        viewBox="0 0 70 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <circle
          cx="35"
          cy="18"
          r="11"
          stroke="var(--ink-black)"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Glasses */}
        <circle cx="31" cy="17" r="4" stroke="var(--ink-black)" strokeWidth="1.5" fill="none" />
        <circle cx="39" cy="17" r="4" stroke="var(--ink-black)" strokeWidth="1.5" fill="none" />
        <line x1="35" y1="17" x2="35" y2="17" stroke="var(--ink-black)" strokeWidth="1.5" />
        <path d="M27 17 L24 15" stroke="var(--ink-black)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M43 17 L46 15" stroke="var(--ink-black)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Hair - messy */}
        <path
          d="M28 10 Q32 6 35 8 Q38 5 42 10"
          stroke="var(--ink-black)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Body - slight lean forward for walking */}
        <path
          d="M35 29 L38 58"
          stroke="var(--ink-black)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Left arm - swinging back */}
        <path
          d="M36 35 L28 48 L25 52"
          stroke="var(--ink-black)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right arm - swinging forward, carrying laptop bag */}
        <path
          d="M37 35 L48 45 L52 42"
          stroke="var(--ink-black)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Laptop bag */}
        <rect
          x="48"
          y="38"
          width="12"
          height="16"
          rx="2"
          stroke="var(--ink-black)"
          strokeWidth="2"
          fill="none"
        />
        <line x1="51" y1="42" x2="57" y2="42" stroke="var(--ink-black)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Left leg - back */}
        <path
          d="M38 58 L28 92 L24 98"
          stroke="var(--ink-black)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right leg - forward stride */}
        <path
          d="M38 58 L50 88 L54 98"
          stroke="var(--ink-black)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </SpriteBase>
  );
}
