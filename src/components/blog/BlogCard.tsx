import { Link } from "react-router-dom";
import type { BlogPost } from "../../data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block p-6 bg-[var(--bg-cream-dark)] rounded-lg border-2 border-[var(--ink-black)] hover:bg-[var(--accent-coral)] hover:bg-opacity-10 transition-colors duration-200 group"
    >
      <p className="font-body text-sm text-[var(--ink-soft)] mb-2">{post.date}</p>
      <h2 className="font-body font-semibold text-2xl md:text-3xl text-[var(--ink-black)] mb-2 group-hover:text-[var(--accent-terracotta)] transition-colors tracking-tight">
        {post.title}
      </h2>
      <p className="font-body text-[var(--ink-soft)]">{post.excerpt}</p>
    </Link>
  );
}
