"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Terminal, Menu, X, Phone, ArrowUpRight, Cpu } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimda-ve-projeler", label: "Hakkımda & Projeler" },
    { href: "/blog", label: "Blog" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-nav border-b border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <Cpu className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 -mt-1 flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              System Architect
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-200/70 dark:bg-slate-900/70 p-1.5 rounded-2xl border border-slate-300 dark:border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-cyan-400 shadow-md font-bold"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/60 dark:hover:bg-slate-800/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Call CTA + Theme Toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-blue-950/40 hover:text-blue-700 dark:hover:text-cyan-400 border border-slate-300 dark:border-slate-700/60 transition-all shadow-xs group"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>{PERSONAL_INFO.phoneFormatted}</span>
            <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Mobil Menüyü Aç/Kapat"
            className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/80 dark:border-slate-700/60"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-mono font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800"
            >
              <Phone className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Ara: {PERSONAL_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
