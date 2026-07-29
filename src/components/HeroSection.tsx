"use client";

import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Award, 
  Layers, 
  Sparkles,
  Phone,
  CheckCircle2,
  Code2
} from "lucide-react";
import { useState } from "react";
import { InstagramIcon } from "./Icons";

export function HeroSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow background ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-400 border border-blue-200/80 dark:border-blue-800/60 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                Software Engineer & System Architect
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/50">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                NASA & Şampiyonluk Dereceli Mimarlık
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Merhaba, Ben{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-mono font-semibold text-slate-700 dark:text-slate-300">
                {PERSONAL_INFO.role}
              </h2>
            </div>

            {/* Bio Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Modern web teknolojileri, mikroservis mimarileri, dağıtık sistemler ve yapay zeka entegrasyonları üzerine endüstri standardında çözümler geliştiriyorum. Yüksek ölçeklenebilirlik, düşük gecikme ve sıfır hata toleransı odaklı yazılım disiplinini benimsiyorum.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/hakkimda-ve-projeler"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Projeleri & Sertifikaları İncele</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300/60 dark:border-slate-700/60 transition-all"
              >
                <Phone className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>İletişime Geç</span>
              </Link>
            </div>

            {/* Direct Quick Contact Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80">
              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                title="Telefon numarasını kopyala"
              >
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>{PERSONAL_INFO.phoneFormatted}</span>
                {copiedPhone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <span className="text-[10px] text-slate-500 dark:text-slate-500">(Kopyala)</span>
                )}
              </button>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                <span>{PERSONAL_INFO.instagramHandle}</span>
              </a>
            </div>

          </div>

          {/* Right Column - Interactive Terminal Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-panel p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl shadow-blue-500/10">
              
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-blue-500" />
                  <span>furkan-kul-architect.sys</span>
                </div>
              </div>

              {/* Terminal Code Snippet */}
              <div className="py-4 font-mono text-xs space-y-3 text-slate-800 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span>systemctl status furkan-kul-profile</span>
                </div>

                <div className="pl-4 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400 border-l-2 border-slate-300 dark:border-slate-800">
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold">● ACTIVE (RUNNING) - System Architecture & AI Engine</p>
                  <p><span className="text-slate-500 dark:text-slate-400">Specialization:</span> Distributed Systems & AI Architectures</p>
                  <p><span className="text-slate-500 dark:text-slate-400">Core Domain:</span> Distributed Microservices, RAG LLMs, Go & Node.js</p>
                  <p><span className="text-slate-500 dark:text-slate-400">Global Rank:</span> NASA Space Apps & Trabzon Üni Hackathon Champion</p>
                  <p><span className="text-slate-500 dark:text-slate-400">Credentials:</span> Linux Foundation LFS101x, Postman Expert, OWASP Top 10</p>
                </div>

                <div className="pt-2 flex items-center justify-between bg-slate-100/70 dark:bg-slate-900/70 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-indigo-500" />
                    <span className="text-[11px] font-semibold">Aktif Mimari İstatistikleri</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-cyan-300">
                    %99.99 Target Uptime
                  </span>
                </div>
              </div>

              {/* Metric Highlights Grid */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800/60">
                  <div className="text-lg font-bold text-blue-600 dark:text-cyan-400 font-mono">3+</div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-500">Major Enterprise Projesi</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800/60">
                  <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400 font-mono">5+</div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-500">Uluslararası Derece & Rozet</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800/60">
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono">1.lik</div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-500">Hackathon Şampiyonu</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
