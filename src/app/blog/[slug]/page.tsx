import { BLOG_POSTS, PERSONAL_INFO } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Copy, Check } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Makale Bulunamadı | Furkan Kul" };
  }

  return {
    title: `${post.title} | Furkan Kul Blog`,
    description: post.summary,
  };
}

// Custom parser to cleanly separate code blocks and text without broken characters or stray backticks
function renderMarkdownBlocks(content: string) {
  // Regex to match code blocks ```lang ... ```
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const processTextBlock = (text: string, keyPrefix: string) => {
    const blocks = text.split(/\n\n+/);
    return blocks.map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={`${keyPrefix}-h2-${idx}`} className="text-2xl font-bold text-slate-900 dark:text-white pt-4 pb-2 border-b border-slate-200/60 dark:border-slate-800/60 font-mono tracking-tight">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={`${keyPrefix}-h3-${idx}`} className="text-xl font-semibold text-slate-900 dark:text-white pt-3 font-mono">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }

      // Check for list items
      if (trimmed.includes("\n1. ") || trimmed.startsWith("1. ")) {
        const lines = trimmed.split("\n");
        return (
          <ol key={`${keyPrefix}-ol-${idx}`} className="space-y-2 pl-4 list-decimal text-slate-600 dark:text-slate-300 text-sm font-mono">
            {lines.map((line, lIdx) => (
              <li key={lIdx}>{line.replace(/^\d+\.\s*/, "")}</li>
            ))}
          </ol>
        );
      }

      return (
        <p key={`${keyPrefix}-p-${idx}`} className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {trimmed}
        </p>
      );
    });
  };

  let blockCount = 0;
  while ((match = codeBlockRegex.exec(content)) !== null) {
    // Process text before code block
    if (match.index > lastIndex) {
      const textBefore = content.substring(lastIndex, match.index);
      elements.push(...processTextBlock(textBefore, `text-${blockCount}`));
    }

    const language = match[1] || "code";
    // Clean any stray backticks or backslashes inside code
    const rawCode = match[2].trim().replace(/\\`/g, "`");

    elements.push(
      <div key={`code-${blockCount}`} className="my-6 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 p-5 font-mono text-xs text-slate-200 shadow-xl space-y-3">
        <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
          <span className="text-cyan-400 font-bold uppercase tracking-wider">{language}</span>
          <span className="text-slate-500 font-mono text-[10px]">Snippet</span>
        </div>
        <pre className="overflow-x-auto whitespace-pre leading-relaxed text-slate-100 font-mono">
          <code>{rawCode}</code>
        </pre>
      </div>
    );

    lastIndex = codeBlockRegex.lastIndex;
    blockCount++;
  }

  // Process remaining text after last code block
  if (lastIndex < content.length) {
    const textAfter = content.substring(lastIndex);
    elements.push(...processTextBlock(textAfter, `text-end`));
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-6 pb-16 md:pt-10 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tüm Blog Yazılarına Dön</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-6 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-800/50"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200 font-semibold">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                  FK
                </div>
                <span>{PERSONAL_INFO.name}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                <span>{post.publishedAt}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan-500" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Article Content Render */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
          {renderMarkdownBlocks(post.content)}
        </div>

        {/* Author Bio Box */}
        <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shrink-0">
            FK
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              Yazar: {PERSONAL_INFO.name}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Dağıtık mikroservisler, yapay zeka ajanları ve düşük seviyeli sistem mimarileri araştırmacısı.
            </p>
          </div>
        </div>

      </div>
    </article>
  );
}
