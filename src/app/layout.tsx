import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Furkan Kul | Software Engineer & Distributed Systems Architect",
    description: "Furkan Kul kişisel yazılım mühendisliği portfolyosu ve teknik blogu. Mikroservis mimarileri, yapay zeka entegrasyonları, NASA Space Apps derecesi ve hackathon birincilikleri.",
    keywords: ["Furkan Kul", "Yazılım Mühendisi", "System Architect", "Next.js", "Mikroservis", "Yapay Zeka", "NASA Space Apps"],
    authors: [{ name: "Furkan Kul" }],
    openGraph: {
        title: "Furkan Kul | Yazılım Mühendisi & Sistem Mimarı",
        description: "Furkan Kul kişisel portfolyosu ve teknik blogu.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="tr"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
        >
            <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-300">
                <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
                    <Navbar />
                    <main className="flex-1 pt-4 sm:pt-6">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}