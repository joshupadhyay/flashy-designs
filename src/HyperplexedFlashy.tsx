import { useEffect, useMemo, useState } from "react";

export function HyperPlexed() {
  // avoid re-init of static array
  const possiblePhases = useMemo(() => {
    const possiblePhases = [
      { roundness: "1", config: "1" },
      { roundness: "1", config: "1" },
      { roundness: "1", config: "2" },
      { roundness: "1", config: "3" },
      { roundness: "1", config: "4" },
      { roundness: "2", config: "1" },
      { roundness: "2", config: "2" },
      { roundness: "2", config: "3" },
      { roundness: "2", config: "4" },
      { roundness: "3", config: "1" },
      { roundness: "3", config: "1" },
      { roundness: "3", config: "2" },
      { roundness: "3", config: "3" },
      { roundness: "3", config: "4" },
    ];
    return possiblePhases;
  }, []);

  // configuration is a number, the index of the list of possible configurations
  const [config, setConfig] = useState<number>(0);

  function getRandomInt() {
    return Math.floor(Math.random() * (possiblePhases.length - 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      var rand = getRandomInt();
      // enforced within list
      // console.log("rand here", rand);
      // console.log("config", config);

      if (rand === config) {
        // if rand = 0, we get -1 (last config!)
        rand -= 1;
      }
      setConfig(rand);
    }, 3000);

    return () => clearInterval(interval);
  }, [config]);

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
