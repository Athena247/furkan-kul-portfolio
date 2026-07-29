"use client";

import { useState } from "react";
import { BLOG_POSTS } from "@/data/portfolioData";
import { BlogCard } from "@/components/BlogCard";
import { Search, BookOpen, Filter } from "lucide-react";

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(BLOG_POSTS.flatMap((post) => post.tags))
  );

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="pt-6 pb-16 md:pt-10 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-400 border border-blue-200/80 dark:border-blue-800/60">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Teknik Yazılar & Sistem Araştırmaları</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mühendislik Blogu
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Dağıtık sistemler, mikroservis mimarileri, LLM entegrasyonları ve düşük seviyeli sistem kodlaması üzerine yazılmış derinlemesine teknik makaleler.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-4 max-w-4xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Makalelerde ara... (ör: Microservice, LangChain, Redis, Go)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Etiketler:
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                selectedTag === null
                  ? "bg-blue-600 text-white font-semibold"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
              }`}
            >
              Tümü
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                  selectedTag === tag
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-panel rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500">
            Aramanızla eşleşen teknik makale bulunamadı.
          </div>
        )}

      </div>
    </div>
  );
}
