import Link from "next/link";
import { BlogPost } from "@/data/portfolioData";
import { Clock, Calendar, ArrowRight, Tag } from "lucide-react";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:border-indigo-500/40 dark:hover:border-cyan-400/40 hover:shadow-lg transition-all duration-300 group">
      <div className="space-y-4">
        
        {/* Meta Info */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-500" />
            <span>{post.publishedAt}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-500" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Summary */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {post.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-300 dark:border-blue-800/40"
            >
              #{tag}
            </span>
          ))}
        </div>

      </div>

      {/* Action */}
      <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 mt-6 flex items-center justify-between">
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
        >
          <span>Makaleyi Oku</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
