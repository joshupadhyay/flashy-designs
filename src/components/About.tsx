import Markdown from "react-markdown";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[rgb(10,10,10)] text-white flex flex-col items-center justify-center p-8 leading-relaxed">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl mb-4 bg-gradient-to-r from-[rgba(255,192,186,1)] to-[rgba(255,177,38,1)] bg-clip-text text-transparent">
          About
        </h1>
        <p className="text-white">For the longer version... </p>
        <br />

        <div className="text-left max-w-none prose prose-invert prose-lg">
          <Markdown
            components={{
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold mt-8 mb-4 text-white">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-med mb-6 opacity-90 leading-relaxed">
                  {children}
                </p>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgba(255,177,38,1)] hover:text-[rgba(255,192,186,1)] transition-colors duration-200 underline"
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="text-white font-semibold">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="text-[rgba(255,192,186,1)]">{children}</em>
              ),
            }}
          >
            {markdwn}
          </Markdown>
        </div>

        <button
          onClick={handleHomeClick}
          className="inline-block px-6 py-3 bg-white/10 text-white rounded-lg transition-colors duration-300 hover:bg-white/20 font-medium mt-8"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

const markdwn = `

I grew up in Bangkok, Thailand and now call NYC my home. I enjoy software and working from home, but I find myself missing an office and a charged work environment. 

I'm drawn to software as a tool of enormous leverage, and as a way to realize insane ideas. I got my start making a celebrity lookalike website, testing my friends in college against a 
trained CNN to tell them if they looked more like Brad Pitt or Elon Musk. 

### Outside of Work

I'm an avid ceramicist (Brooklyn boy! I know.) I've made bowls, mugs, and even a lamp. I recently finished a watercoloring class, and next I want to try woodworking. 
It's a dream of mine to build a sofa. I have a lot of admiration for Herman Miller & Knoll. When I "make it", my home will reflect that. 


### Software Projects

### September Project

I'm building [_Drawniture_](https://drawniture.vercel.app/), **a website where you can draw your ideal furniture piece and it'll return similarities to you** (WIP). 
There's a box for specifying style, and some colors. This was my first serious experimentation with Claude Code, too. 

### October Project

I wonder how people rank "website attractiveness". I bet there's a metric for it. How long people spend looking at a website, like digital advertising. I want to build a tool to feel websites and get an attractive score back out.`;
