import { useEffect, useMemo, useState } from "react";

export function HyperPlexed() {
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

  // configuration is a number, the index of the list of possible configurations
  const [config, setConfig] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setConfig((prevConfig) => {
        // cycle through phases sequentially for smooth transitions
        const nextConfig = (prevConfig + 1) % possiblePhases.length;
        return nextConfig;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [possiblePhases.length]);

  return (
    <div
      id="wrapper"
      data-roundness={possiblePhases[config]?.roundness}
      data-configuration={possiblePhases[config]?.config}
    >
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
  );
}
