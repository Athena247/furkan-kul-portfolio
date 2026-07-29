import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { BlogCard } from "@/components/BlogCard";
import { BLOG_POSTS } from "@/data/portfolioData";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function HomePage() {
  const latestPosts = BLOG_POSTS.slice(0, 2);

  return (
    <div className="space-y-4">
      {/* Hero Section */}
      <HeroSection />

      {/* About & Core Vision */}
      <AboutSection />

      {/* Featured Projects */}
      <ProjectsSection limit={3} />

      {/* Prestigious Certificates & Honors */}
      <CertificatesSection />

      {/* Blog Preview Section */}
      <section className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-cyan-400 border border-indigo-200/80 dark:border-indigo-800/60">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Teknik Makaleler & Araştırma</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Son Blog Yazıları
              </h2>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
            >
              <span>Tüm Makaleleri Görüntüle</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
