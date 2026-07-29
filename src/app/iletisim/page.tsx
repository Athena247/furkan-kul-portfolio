import { ContactSection } from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Furkan Kul - Yazılım Mühendisi & Sistem Mimarı",
  description: "Furkan Kul ile doğrudan telefon (05412109802) veya Instagram (@furkan_kul_361) üzerinden iletişime geçin.",
};

export default function IletisimPage() {
  return (
    <div className="pt-8 pb-16">
      <ContactSection />
    </div>
  );
}
