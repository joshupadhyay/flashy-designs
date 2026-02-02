import RotatingCube from "../acsii";
import { toggleTHeme } from "../ThemeToggle";
import { DoodleSun } from "./DoodleSun";
import { GroundScene } from "./GroundScene";
import { JoshClock } from "./JoshClock";
import { ThemeProvider } from "next-themes";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-cream)] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Clock in top left */}
      <JoshClock />

      {/* Sun in top right */}
      <button onClick={toggleTHeme}>
        <DoodleSun className="fixed top-6 right-6 md:top-8 md:right-8 z-10" />
      </button>

      {/* Hero content */}
      <div className="text-center mb-8 z-10">
        <h1
          className="font-handwritten text-5xl md:text-7xl lg:text-8xl text-[var(--ink-black)] mb-4 animate-fade-in-down"
          style={{
            animationDelay: "0.1s",
            animationFillMode: "forwards",
            opacity: 0,
          }}
        >
          Hey, I'm Josh!
        </h1>
        <p
          className="font-body text-lg md:text-xl text-[var(--ink-soft)] max-w-md mx-auto animate-fade-in-down"
          style={{
            animationDelay: "0.2s",
            animationFillMode: "forwards",
            opacity: 0,
          }}
        >
          Backend, Cloud developer
        </p>
      </div>

      {/* Ground scene with interactive sprites */}
      <GroundScene />

      {/* Subtle footer text */}
      <p
        className="font-body text-sm text-[var(--ink-soft)] mt-8 opacity-60 animate-fade-in-down"
        style={{
          animationDelay: "1s",
          animationFillMode: "forwards",
          opacity: 0,
        }}
      >
        Click on the characters to explore
      </p>
    </div>
  );
}

function ThemeSwitch() {}
