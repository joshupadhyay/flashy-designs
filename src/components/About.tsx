import Markdown from "react-markdown";

export function About() {
  const handleHomeClick = () => {
    window.location.href = "/";
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
                <h3 className="text-2xl font-bold mt-8 mb-4 text-white">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-lg mb-6 opacity-90 leading-relaxed">{children}</p>
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

const markdwn = `I've lived in NYC for 3 years, and grew up in Bangkok, Thailand. Working remote was fun, but I find myself missing an office, a charged work environment. I'm looking for roles largely in person, or hybrid with talented people that push me to grow.

### Outside of Work

I'm an avid ceramicist (Brooklyn boy! I know.) I've made bowls, mugs, and even a lamp. I recently finished a watercoloring class, and next I want to try woodworking. It's a dream of mine to build a sofa.

### Software Projects

I graduated as a math major with an casual interest in software engineering. After 4 years of working-for-work, I'm trying to pique my interest again.

### September Project

I'm building [_Drawniture_](https://drawniture.vercel.app/), **a website where you can draw your ideal furniture piece and it'll return similarities to you** (WIP). There's a box for specifying style, and some colors. This is also my first serious exploration of Claude Code (damn, it's good).

### October Project

I wonder how people rank "website attractiveness". I bet there's a metric for it. How long people spend looking at a website, like digital advertising. I want to build a tool to feel websites and get an attractive score back out.`;
