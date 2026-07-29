import { CORE_SKILLS, PERSONAL_INFO } from "@/data/portfolioData";
import { Cpu, Server, Shield, Brain, Sparkles, GraduationCap, CheckCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 border border-indigo-200/80 dark:border-indigo-800/60">
            <Brain className="w-3.5 h-3.5" />
            <span>Mühendislik Vizyonu & Akademik Temel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Profesyonel Yaklaşım ve Yetkinlikler
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            İleri düzey fen bilimleri ve matematik formasyonumu, modern ölçeklenebilir yazılım mimarileri ve yapay zeka disipliniyle birleştiriyorum.
          </p>
        </div>

        {/* 2-Column Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Vision Narrative Card */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-6 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 dark:bg-cyan-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Sistem Mimarisi ve Yazılım Geliştirme Yaklaşımı
            </h3>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                Yazılım geliştirmeyi sadece kod yazmak değil; yüksek erişilebilirlik (high availability), sürdürülebilirlik ve matematiksel optimizasyon odaklı bir mühendislik sanatı olarak ele alıyorum.
              </p>
              <p>
                Özellikle <strong className="text-slate-900 dark:text-white">mikroservis mimarileri</strong>, <strong className="text-slate-900 dark:text-white">dağıtık sistem haberleşmesi</strong> ve <strong className="text-slate-900 dark:text-white">LLM (Büyük Dil Modeli) entegrasyonları</strong> konularında derinleşerek karmaşık endüstriyel problemleri endüstri standardı pattern'lar (RAG, Event-Driven Architecture, CQRS) ile çözüyorum.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <GraduationCap className="w-4 h-4 text-blue-500" />
              <span>{PERSONAL_INFO.school} — İleri Düzey Matematik ve Fen Analitiği</span>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-cyan-400">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Dağıtık & Mikroservis Sistemler</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Redis Pub/Sub, Kubernetes ve Docker altyapısıyla yatayda ölçeklenebilir, yüksek throughput'lu servis haberleşmesi.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Yapay Zeka & LLM Entegrasyonları</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    LangChain, FastAPI ve Python RAG mimarileriyle otonom kod analizi ve veriye dayalı yapay zeka ajanları.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Sistem Güvenliği & Kernel Standartları</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Linux çekirdek işleyişi, OWASP Top 10 web güvenliği ve endüstri standardı API entegrasyon disiplini.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Skills Matrix */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-mono text-center sm:text-left">
            // Teknik Beceriler ve Ekosistem
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SKILLS.map((group) => (
              <div
                key={group.category}
                className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-4 hover:shadow-lg transition-all"
              >
                <h4 className="text-sm font-mono font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
                  {group.category}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
