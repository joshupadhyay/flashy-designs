interface TooltipProps {
  text: string;
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[var(--ink-black)] text-[var(--bg-cream)] text-sm font-body rounded-md whitespace-nowrap animate-tooltip-in z-20 pointer-events-none">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--ink-black)]" />
    </div>
  );
}
