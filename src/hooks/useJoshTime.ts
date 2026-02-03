import { useState, useEffect } from "react";

export function useJoshTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const isNight = hours >= 18 || hours < 6;

  const formatTime = (date: Date) => {
    const h = date.getHours().toString().padStart(2, "0");
    const m = date.getMinutes().toString().padStart(2, "0");
    const s = date.getSeconds().toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return {
    time,
    hours,
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
    isNight,
    formatted: formatTime(time),
  };
}
