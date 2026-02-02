import { SpriteBase } from "./SpriteBase";
import idea from "src/assets/idea.svg";

interface IdeaSpriteProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export function IdeaSprite({ href, className = "", style }: IdeaSpriteProps) {
  return (
    <SpriteBase href={href} tooltip="Blog" className={className} style={style}>
      <img
        src={idea}
        alt="Idea lightbulb"
        style={{
          height: 120,
          width: "auto",
          marginBottom: -8,
        }}
      />
    </SpriteBase>
  );
}
