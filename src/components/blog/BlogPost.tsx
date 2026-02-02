import { useParams, Link, Navigate } from "react-router-dom";
import Markdown from "react-markdown";
import { blogPosts } from "../../data/blogPosts";
import { DoodleSun } from "../home/DoodleSun";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-[var(--bg-cream)] px-4 py-12">
      {/* Sun decoration */}
      <DoodleSun className="fixed top-6 right-6 md:top-8 md:right-8 z-10" />

      <article className="max-w-2xl mx-auto">
        {/* Navigation */}
        <Link
          to="/blog"
          className="font-body text-[var(--ink-soft)] hover:text-[var(--ink-black)] transition-colors inline-flex items-center gap-2 mb-8"
        >
          ← Back to blog
        </Link>

        {/* Post header */}
        <header className="mb-8">
          <p className="font-body text-sm text-[var(--ink-soft)] mb-2">{post.date}</p>
          <h1 className="font-body font-semibold text-4xl md:text-5xl text-[var(--ink-black)] tracking-tight">
            {post.title}
          </h1>
        </header>

        {/* Post content */}
        <div className="prose prose-lg max-w-none">
          <Markdown
            components={{
              h1: ({ children }) => (
                <h1 className="font-body font-semibold text-3xl md:text-4xl text-[var(--ink-black)] mt-8 mb-4 tracking-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="font-body font-semibold text-2xl md:text-3xl text-[var(--ink-black)] mt-8 mb-4 tracking-tight">
                  {children}
                </h2>
              ),
              p: ({ children }) => (
                <p className="font-body text-[var(--ink-black)] mb-4 leading-relaxed">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="font-body text-[var(--ink-black)] mb-4 ml-6 list-disc space-y-2">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="font-body text-[var(--ink-black)]">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-body font-semibold text-[var(--ink-black)]">
                  {children}
                </strong>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-[var(--accent-terracotta)] hover:text-[var(--accent-coral)] underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              pre: ({ children }) => (
                <pre className="bg-[var(--ink-black)] text-[var(--bg-cream)] p-4 rounded-lg overflow-x-auto mb-4 text-sm">
                  {children}
                </pre>
              ),
              code: ({ children, className }) => {
                // Check if it's inline code (no language class) or a code block
                const isInline = !className;
                return isInline ? (
                  <code className="bg-[var(--ink-soft)]/20 text-[var(--ink-black)] px-1.5 py-0.5 rounded text-sm font-mono">
                    {children}
                  </code>
                ) : (
                  <code className="font-mono whitespace-pre-wrap break-words">
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </Markdown>
        </div>
      </article>
    </div>
  );
}
