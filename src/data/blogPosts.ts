// Import markdown files as text content
import buildingClaudeContent from "./posts/building-claude.md" with { type: "text" };
import helloWorldContent from "./posts/hello-world.md" with { type: "text" };
import buildingDrawnitureContent from "./posts/building-drawniture.md" with { type: "text" };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-claude",
    title: "Building a Website with Claude",
    date: "2026-02-02",
    excerpt: "Reflections on building with claude",
    content: buildingClaudeContent,
  },
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2026-02-01",
    excerpt:
      "Welcome to my blog! This is where I'll share thoughts on software, design, and life in NYC.",
    content: helloWorldContent,
  },
  {
    slug: "building-drawniture",
    title: "Building Drawniture",
    date: "2026-01-15",
    excerpt:
      "How I built a website where you can draw furniture and find similar pieces.",
    content: buildingDrawnitureContent,
  },
];
