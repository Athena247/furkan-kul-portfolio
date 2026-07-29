import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda, Projeler & Sertifikalar | Furkan Kul",
  description: "Furkan Kul'un sistem mimarisi yaklaşımı, mikroservis projeleri, NASA derecesi, Trabzon Üni 1.liği ve uluslararası sertifikaları.",
};

export default function HakkimdaVeProjelerPage() {
  return (
    <div className="pt-8 pb-16 space-y-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Hakkımda, Projeler & Sertifikalar
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto font-mono">
          // Sistem Mimarisi, Dağıtık Yapılar, Uluslararası Sertifikasyonlar ve Başarılar
        </p>
      </div>

      {/* Full About Section */}
      <AboutSection />

      {/* Full Projects Section */}
      <ProjectsSection />

      {/* Full Certificates & Awards Section */}
      <CertificatesSection />
    </div>
  );
}
