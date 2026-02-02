import { SpriteBase } from "./SpriteBase";
import manLaptop from "src/assets/manlaptop.svg";

interface LaptopManSpriteProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export function LaptopManSprite({ href, className = "", style }: LaptopManSpriteProps) {
  return (
    <SpriteBase href={href} external tooltip="About Me" className={className} style={style}>
      <img
        src={manLaptop}
        alt="Man with laptop"
        style={{
          height: 110,
          width: "auto",
          marginBottom: -5,
        }}
      />
    </SpriteBase>
  );
}
