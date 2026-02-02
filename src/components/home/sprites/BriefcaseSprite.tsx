import { SpriteBase } from "./SpriteBase";
import briefcase from "src/assets/briefcase.svg";

interface BriefcaseSpriteProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export function BriefcaseSprite({ href, className = "", style }: BriefcaseSpriteProps) {
  return (
    <SpriteBase href={href} external tooltip="LinkedIn" className={className} style={style}>
      <img
        src={briefcase}
        alt="Briefcase"
        style={{
          height: 120,
          width: "auto",
          marginBottom: -8,
        }}
      />
    </SpriteBase>
  );
}
