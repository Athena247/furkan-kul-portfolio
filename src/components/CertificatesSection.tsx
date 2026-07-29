import { CERTIFICATES } from "@/data/portfolioData";
import { Award, ShieldCheck, ExternalLink, Globe, CheckCircle2, Terminal, Lock, Star } from "lucide-react";

export function CertificatesSection() {
  return (
    <section className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200/80 dark:border-amber-800/60">
            <Award className="w-3.5 h-3.5" />
            <span>Prestijli Başarılar & Küresel Sertifikalar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Uluslararası Yetkinlik Tescilleri ve Ödüller
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            NASA küresel hackathonu, Trabzon Üniversitesi şampiyonluğu ve küresel çatı kuruluşlardan alınmış sertifikasyonlar.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:border-amber-500/40 dark:hover:border-amber-400/40 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.badgeColor}`} />

              <div className="space-y-5">
                
                {/* Badge Header */}
                <div className="flex items-start justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Doğrulanmış</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-800"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Credential ID Footer */}
              {cert.credentialId && (
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-5">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                    ID: {cert.credentialId}
                  </span>
                  <span className="text-[10px] text-amber-500 font-semibold">Tescilli Lisans</span>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
