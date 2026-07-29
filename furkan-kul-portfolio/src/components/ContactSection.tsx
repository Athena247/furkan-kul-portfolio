"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Phone, 
  Copy, 
  Check, 
  Send, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  MessageSquare
} from "lucide-react";
import { InstagramIcon } from "./Icons";

export function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>İletişim & Proje İş Birlikleri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            İletişime Geçin
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Sistem mimarisi, yapay zeka projeleri veya teknik danışmanlık konuları için doğrudan ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Phone & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Contact Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center border border-blue-500/20">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-cyan-300">
                  Doğrudan İletişim Hatı
                </span>
              </div>

              <div>
                <h3 className="text-sm font-mono font-semibold text-slate-600 dark:text-slate-400">Telefon Numarası</h3>
                <p className="text-2xl font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                  {PERSONAL_INFO.phoneFormatted}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs font-mono flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Hemen Ara</span>
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-xs font-mono flex items-center gap-2 border border-slate-300/60 dark:border-slate-700/60 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Kopyalandı!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Kopyala</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Instagram Contact Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center border border-pink-500/20">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300">
                  Resmi Sosyal Medya
                </span>
              </div>

              <div>
                <h3 className="text-sm font-mono font-semibold text-slate-600 dark:text-slate-400">Instagram Profili</h3>
                <p className="text-xl font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                  {PERSONAL_INFO.instagramHandle}
                </p>
              </div>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-medium text-xs font-mono flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram'da Takip Et / Profil</span>
              </a>
            </div>

            {/* Location & Institution Badge */}
            <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-800/80 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>Konum: {PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Unvan: Software Engineer & System Architect</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Mesaj Gönderin
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
              // Mesajınız doğrudan Furkan Kul iletişim kanalına aktarılır.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 space-y-2 text-center animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base">Mesajınız Alındı!</h4>
                <p className="text-xs leading-relaxed">
                  Teşekkürler. Gönderdiğiniz mesaj incelenecek ve en kısa sürede dönüş yapılacaktır.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300">Ad Soyad</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Örn: Ahmet Yılmaz"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300">E-Posta Adresi</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ahmet@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300">Konu</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Örn: Sistem Mimarisi & Danışmanlık"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300">Mesajınız</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Projeniz veya sorunuz hakkında detay verin..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Mesajı İlet</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
