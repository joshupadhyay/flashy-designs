import { NiceLink } from "./LinkButton";
import { HyperPlexed } from "./HyperplexedFlashy";
import { Button } from "@/components/ui/button";

export function MainPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8 z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 items-center">
          Hey, I'm Josh.
        </h1>
        <p className="text-white text-2xl py-4">
          Backend / cloud developer at 3M, living in NYC. <br></br>{" "}
        </p>
        <NiceLink
          link="https://www.linkedin.com/in/joshupadhyay/"
          buttonText="LinkedIn"
        />
        <NiceLink link="https://github.com/joshupadhyay" buttonText="Github" />
        <NiceLink link="mailto:joshupad@gmail.com" buttonText="Email Me" />
      </div>
      <div className="flex items-center justify-center">
        <HyperPlexed />
      </div>
      <p className="text-white">
        Enjoy the shapes. I think they're meditative.
      </p>
    </div>
  );
}
