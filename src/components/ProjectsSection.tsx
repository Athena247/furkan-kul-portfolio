"use client";

import { PROJECTS, Project } from "@/data/portfolioData";
import { 
  ExternalLink, 
  Layers, 
  Activity, 
  ChevronRight,
  Zap
} from "lucide-react";
import { useState } from "react";
import { GithubIcon } from "./Icons";

export function ProjectsSection({ limit }: { limit?: number }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-200/80 dark:border-cyan-800/60">
            <Layers className="w-3.5 h-3.5" />
            <span>Endüstri Standardı Mühendislik Projeleri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Öne Çıkan Sistem ve Mimari Çalışmaları
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Yüksek ölçeklenebilirlik, mikroservis haberleşmesi ve yapay zeka entegrasyonu sağlayan teknik derinliği yüksek uygulamalar.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
            >
              <div className="space-y-6">
                
                {/* Header & Tags */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-800/60">
                      High Performance Architecture
                    </span>
                    <Activity className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 bg-slate-100/70 dark:bg-slate-900/70 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800/60 text-center font-mono">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="space-y-0.5">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {m.value}
                      </div>
                      <div className="text-[9px] text-slate-500 dark:text-slate-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-2 border-t border-slate-200/60 dark:border-slate-800/60 pt-4">
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider block">
                    Mimari Detaylar:
                  </span>
                  <ul className="space-y-1.5">
                    {project.architectureDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Links */}
              <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between mt-6">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Spesifikasyonları Gör</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                      title="GitHub Reposu"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 text-blue-600 dark:text-cyan-400 transition-colors"
                      title="Canlı Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Detailed Specifications */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl max-w-2xl w-full border border-slate-700 space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-cyan-400 mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-3 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 text-xs font-mono"
                >
                  Kapat [ESC]
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>{selectedProject.description}</p>

                <div className="space-y-2 bg-slate-900/90 p-4 rounded-xl text-slate-200 font-mono text-xs">
                  <p className="text-cyan-400 font-bold">// Mimari Mühendislik Bileşenleri</p>
                  {selectedProject.architectureDetails.map((item, i) => (
                    <p key={i} className="pl-3 border-l border-cyan-500/50">
                      • {item}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 text-center pt-2">
                  {selectedProject.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                      <div className="text-base font-bold text-blue-600 dark:text-cyan-400 font-mono">{m.value}</div>
                      <div className="text-[10px] text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono"
                >
                  Pencereyi Kapat
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
