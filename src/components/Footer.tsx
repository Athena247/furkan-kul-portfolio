import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Cpu, Phone, ArrowUpRight, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-950/60 text-blue-400 border border-blue-800/50">
                <ShieldCheck className="w-3.5 h-3.5" /> Software Engineer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
                System Architect
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimda-ve-projeler" className="hover:text-cyan-400 transition-colors">
                  Hakkımda & Projeler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                  Teknik Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-cyan-400 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              İletişim & Sosyal Medya
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all group border border-slate-700/50"
              >
                <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs">{PERSONAL_INFO.phoneFormatted}</span>
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all group border border-slate-700/50"
              >
                <div className="flex items-center gap-2.5">
                  <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs">{PERSONAL_INFO.instagramHandle}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Tüm Hakları Saklıdır.</p>
          <p className="flex items-center gap-1">
            Next.js & Tailwind CSS ile geliştirildi.
          </p>
        </div>
      </div>
    </footer>
  );
}
