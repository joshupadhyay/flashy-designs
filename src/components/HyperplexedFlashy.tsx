import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// thank you https://www.youtube.com/watch?v=dhfQnmGXSwU&list=PLD9xos4mnoHSIDnJjGmhRrxRmHGS8nF91&index=2
// the most calming effect I've ever seen
export function HyperPlexed() {
  const navigate = useNavigate();

  // sequential phases for smooth transitions
  const possiblePhases = useMemo(() => {
    const possiblePhases = [
      { roundness: "1", config: "4" }, // start with simple dots
      { roundness: "2", config: "4" }, // make dots rounder
      { roundness: "1", config: "3" }, // transition to scattered
      { roundness: "2", config: "3" }, // rounder scattered
      { roundness: "1", config: "2" }, // compact stack
      { roundness: "2", config: "2" }, // rounder stack
      { roundness: "1", config: "1" }, // truck formation
      { roundness: "2", config: "1" }, // rounder truck
      { roundness: "3", config: "1" }, // special roundness truck
      { roundness: "3", config: "2" }, // special roundness stack
      { roundness: "3", config: "3" }, // special roundness scattered
      { roundness: "3", config: "4" }, // special roundness dots
    ];
    return possiblePhases;
  }, []);

  // State management
  const [config, setConfig] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [hoveredShape, setHoveredShape] = useState<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setConfig((prevConfig) => {
        // cycle through phases sequentially for smooth transitions
        const nextConfig = (prevConfig + 1) % possiblePhases.length;
        return nextConfig;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [possiblePhases.length, isPaused]);

  // Hover handlers
  const handleShapeHover = (shapeIndex: number) => {
    setHoveredShape(shapeIndex);
    setIsPaused(true);
  };

  const handleShapeLeave = () => {
    setHoveredShape(null);
    // Small delay before resuming animation for better UX
    setTimeout(() => setIsPaused(false), 300);
  };

  // Click handler for navigation
  const handleShapeClick = () => {
    navigate('/about');
  };

  return (
    <div
      id="wrapper"
      data-roundness={possiblePhases[config]?.roundness}
      data-configuration={possiblePhases[config]?.config}
    >
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className={`shape shape-${index}`}
          onMouseEnter={() => handleShapeHover(index - 1)}
          onMouseLeave={handleShapeLeave}
          onClick={handleShapeClick}
          data-hovered={hoveredShape === index - 1}
        />
      ))}
    </div>
  );
}
