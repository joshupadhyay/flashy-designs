import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import { BlogCard } from "./BlogCard";
import { DoodleSun } from "../home/DoodleSun";

export function BlogList() {
  return (
    <div className="min-h-screen bg-[var(--bg-cream)] px-4 py-12">
      {/* Sun decoration */}
      <DoodleSun className="fixed top-6 right-6 md:top-8 md:right-8 z-10" />

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="font-body text-[var(--ink-soft)] hover:text-[var(--ink-black)] transition-colors inline-flex items-center gap-2 mb-6"
          >
            ← Back home
          </Link>
          <h1 className="font-body font-semibold text-5xl md:text-6xl text-[var(--ink-black)] mb-4 tracking-tight">
            Blog
          </h1>
          <p className="font-body text-lg text-[var(--ink-soft)]">
            Thoughts on software, design, and life.
          </p>
        </div>

        {/* Blog posts */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
