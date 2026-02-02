import { SpriteBase } from "./SpriteBase";
import Gremlin from "src/assets/gremlin.svg";

interface GremlinSpriteProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export function GremlinSprite({ href, className = "", style }: GremlinSpriteProps) {
  return (
    <SpriteBase href={href} external tooltip="GitHub" className={className} style={style}>
      <img
        src={Gremlin}
        alt="Gremlin (GitHub)"
        style={{
          height: 80,
          width: "auto",
        }}
      />
    </SpriteBase>
  );
}
