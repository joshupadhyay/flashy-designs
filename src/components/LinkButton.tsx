import { Button } from "@/components/ui/button";

export interface IInfo {
  buttonText: string;
  link: string;
}

export function NiceLink(props: IInfo) {
  return (
    <a href={props.link} className="text-blue-400 text-xl underline px-4">
      {props.buttonText}
    </a>
  );
}
