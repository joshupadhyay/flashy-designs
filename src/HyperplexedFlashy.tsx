import { useState } from "react";

export function HyperPlexed() {
  const possibleConfigs = ["1", "2", "3", "4"];

  const [configuration, setConfiguration] = useState<string>(
    possibleConfigs[0]!
  );

  function getRandomInt() {
    return Math.floor(Math.random() * possibleConfigs.length - 1);
    // get a random configuration from the list
  }

  setInterval(() => {
    const idx = getRandomInt();

    // len -1 of list, enforce
    setConfiguration(possibleConfigs[idx]!);
  }, 3000);

  return (
    <div id="wrapper" data-roundness="1" data-configuration={configuration}>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div id="wrapper"></div>
    </div>
  );
}
