import { SpriteBase } from "./SpriteBase";

interface SuitManProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export function SuitMan({ href, className = "", style }: SuitManProps) {
  return (
    <SpriteBase href={href} external tooltip="LinkedIn" className={className} style={style}>
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
        {/* Eyes - professional */}
        <circle cx="32" cy="17" r="1.5" fill="var(--ink-black)" />
        <circle cx="38" cy="17" r="1.5" fill="var(--ink-black)" />
        {/* Small professional smile */}
        <path
          d="M32 22 Q35 24 38 22"
          stroke="var(--ink-black)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Neat hair */}
        <path
          d="M26 14 Q28 9 35 10 Q42 9 44 14"
          stroke="var(--ink-black)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Neck */}
        <line x1="35" y1="29" x2="35" y2="34" stroke="var(--ink-black)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Suit jacket - V shape */}
        <path
          d="M22 36 L35 50 L48 36"
          stroke="var(--ink-black)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Jacket sides */}
        <path
          d="M22 36 L20 60 L35 62 L50 60 L48 36"
          stroke="var(--ink-black)"
          strokeWidth="2"
          fill="none"
        />
        {/* Tie */}
        <path
          d="M35 34 L33 40 L35 55 L37 40 L35 34"
          stroke="var(--ink-black)"
          strokeWidth="1.5"
          fill="var(--accent-mustard)"
          fillOpacity="0.5"
        />
        {/* Left arm - at side */}
        <path
          d="M22 38 L15 55 L12 62"
          stroke="var(--ink-black)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right arm - holding briefcase */}
        <path
          d="M48 38 L55 55 L58 62"
          stroke="var(--ink-black)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Briefcase */}
        <rect
          x="52"
          y="60"
          width="14"
          height="10"
          rx="1"
          stroke="var(--ink-black)"
          strokeWidth="2"
          fill="none"
        />
        <line x1="59" y1="60" x2="59" y2="58" stroke="var(--ink-black)" strokeWidth="2" strokeLinecap="round" />
        {/* Legs - standing straight */}
        <path
          d="M28 62 L26 91 L24 98"
          stroke="var(--ink-black)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M42 62 L44 91 L46 98"
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
