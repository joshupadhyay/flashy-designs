import { NewspaperSprite } from "./sprites/NewspaperSprite";
import { MegaphoneSprite } from "./sprites/MegaphoneSprite";
import { LaptopManSprite } from "./sprites/LaptopManSprite";
import { BriefcaseSprite } from "./sprites/BriefcaseSprite";
import { GremlinSprite } from "./sprites/GremlinSprite";
import { IdeaSprite } from "./sprites/IdeaSprite";
import { Tree } from "./decorations/Tree";
import { Grass } from "./decorations/Grass";
import { Flower } from "./decorations/Flower";

export function GroundScene() {
  return (
    <div className="relative w-full max-w-4xl h-[200px] mt-8 overflow-visible">
      {/* Ground line */}
      <div className="absolute bottom-[10px] left-0 right-0 h-[3px] bg-[var(--ink-black)] rounded-full" />
      {/* Decorative tree on the left */}
      <Tree
        className="absolute bottom-[10px]"
        style={{ left: "2%", animationDelay: "0.3s" }}
      />
      {/* Grass tufts scattered */}
      <Grass
        className="absolute bottom-[10px] animate-pop-in opacity-0"
        style={{
          left: "15%",
          animationDelay: "0.5s",
          animationFillMode: "forwards",
        }}
      />
      <Grass
        className="absolute bottom-[10px] animate-pop-in opacity-0"
        style={{
          left: "55%",
          animationDelay: "0.6s",
          animationFillMode: "forwards",
        }}
      />
      <Grass
        className="absolute bottom-[10px] animate-pop-in opacity-0"
        style={{
          left: "85%",
          animationDelay: "0.7s",
          animationFillMode: "forwards",
        }}
      />
      {/* Flowers */}
      <Flower
        className="absolute bottom-[10px] animate-pop-in opacity-0"
        style={{
          left: "12%",
          animationDelay: "0.55s",
          animationFillMode: "forwards",
        }}
        color="coral"
      />
      <Flower
        className="absolute bottom-[10px] animate-pop-in opacity-0"
        style={{
          left: "72%",
          animationDelay: "0.65s",
          animationFillMode: "forwards",
        }}
        color="mustard"
      />
      {/* Interactive sprites */}
      {/* Newspaper - Resume */}
      <NewspaperSprite
        href="#"
        className="absolute animate-pop-in opacity-0"
        style={{
          left: "18%",
          bottom: "10px",
          animationDelay: "0.4s",
          animationFillMode: "forwards",
        }}
      />
      {/* Laptop Man - About Me */}
      <LaptopManSprite
        href="/about"
        className="absolute animate-pop-in opacity-0"
        style={{
          left: "32%",
          bottom: "10px",
          animationDelay: "0.5s",
          animationFillMode: "forwards",
        }}
      />
      {/* Megaphone - Twitter */}
      <MegaphoneSprite
        href="https://twitter.com"
        className="absolute animate-pop-in opacity-0"
        style={{
          left: "46%",
          bottom: "10px",
          animationDelay: "0.6s",
          animationFillMode: "forwards",
        }}
      />
      {/* Idea - Blog */}
      <IdeaSprite
        href="/blog"
        className="absolute animate-pop-in opacity-0"
        style={{
          left: "60%",
          bottom: "10px",
          animationDelay: "0.68s",
          animationFillMode: "forwards",
        }}
      />
      {/* Gremlin - GitHub */}
      <GremlinSprite
        href="https://github.com/joshupadhyay"
        className="absolute animate-pop-in opacity-0"
        style={{
          left: "74%",
          bottom: "10px",
          animationDelay: "0.75s",
          animationFillMode: "forwards",
        }}
      />
      {/* Briefcase - LinkedIn */}
      <BriefcaseSprite
        href="https://www.linkedin.com/in/joshupadhyay/"
        className="absolute animate-pop-in opacity-0"
        style={{
          left: "88%",
          bottom: "10px",
          animationDelay: "0.8s",
          animationFillMode: "forwards",
        }}
      />
    </div>
  );
}
