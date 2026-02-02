import { SpriteBase } from "./SpriteBase";
import newspaper from "src/assets/newspaper.svg";

interface NewspaperSpriteProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export function NewspaperSprite({ href, className = "", style }: NewspaperSpriteProps) {
  return (
    <SpriteBase href={href} tooltip="Resume" className={className} style={style}>
      <div style={{ backgroundColor: "var(--bg-cream)", display: "inline-block" }}>
        <img
          src={newspaper}
          alt="Newspaper man"
          style={{
            height: 110,
            width: "auto",
            display: "block",
            marginBottom: -22,
          }}
        />
      </div>
    </SpriteBase>
  );
}
