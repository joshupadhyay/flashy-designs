interface DoodleSunProps {
  className?: string;
}

export function DoodleSun({ className = "" }: DoodleSunProps) {
  return (
    <div className={`animate-sun-rotate ${className}`}>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Decorative sun"
      >
        {/* Sun face circle */}
        <circle
          cx="30"
          cy="30"
          r="14"
          fill="var(--sun-yellow)"
          stroke="var(--ink-black)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Left eye */}
        <circle cx="25" cy="28" r="2" fill="var(--ink-black)" />
        {/* Right eye */}
        <circle cx="35" cy="28" r="2" fill="var(--ink-black)" />
        {/* Smile */}
        <path
          d="M25 34 Q30 38 35 34"
          stroke="var(--ink-black)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Rays - hand-drawn style with slight irregularity */}
        <path d="M30 12 Q31 8 30 4" stroke="var(--ink-black)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M30 48 Q29 52 30 56" stroke="var(--ink-black)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M12 30 Q8 29 4 30" stroke="var(--ink-black)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M48 30 Q52 31 56 30" stroke="var(--ink-black)" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Diagonal rays */}
        <path d="M18 18 Q14 15 12 12" stroke="var(--ink-black)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M42 18 Q46 14 48 12" stroke="var(--ink-black)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M18 42 Q14 46 12 48" stroke="var(--ink-black)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M42 42 Q45 45 48 48" stroke="var(--ink-black)" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}
