import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "../Tooltip";

interface SpriteBaseProps {
  href: string;
  external?: boolean;
  tooltip: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function SpriteBase({
  href,
  external = false,
  tooltip,
  children,
  className = "",
  style,
}: SpriteBaseProps) {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      navigate(href);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  // Check if absolute positioning is requested via className
  const hasAbsolute = className.includes("absolute");
  const positionClass = hasAbsolute ? "" : "relative";

  return (
    <div
      className={`${positionClass} cursor-pointer transition-transform ${isHovering ? "animate-wobble" : ""} ${className}`}
      onClick={handleClick}
      onMouseEnter={() => {
        setShowTooltip(true);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
        setIsHovering(false);
      }}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={tooltip}
      style={style}
    >
      {showTooltip && <Tooltip text={tooltip} />}
      {children}
    </div>
  );
}
