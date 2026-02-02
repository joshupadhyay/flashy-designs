import { SpriteBase } from "./SpriteBase";
import megaphone from "src/assets/megaphone.svg";

interface MegaphoneSpriteProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export function MegaphoneSprite({ href, className = "", style }: MegaphoneSpriteProps) {
  return (
    <SpriteBase href={href} external tooltip="Twitter" className={className} style={style}>
      <img
        src={megaphone}
        alt="Megaphone person"
        style={{
          height: 110,
          width: "auto",
        }}
      />
    </SpriteBase>
  );
}
