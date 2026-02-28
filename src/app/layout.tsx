import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CRTOverlay } from "@/components/layout/CRTOverlay";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { ThemeToggle } from "@/components/ui/ThemeToggle";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Building Digital Systems That Feel Alive | Portfolio",
  description: "Senior Web Developer & UI/UX Futurist. Specialized in Web Apps, SaaS, Mobile Apps, and AI Systems.",
  keywords: ["Web Developer", "SaaS Builder", "AI Integration", "Cyberpunk Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased cyber-grid bg-cyber-black text-neon-green min-h-screen relative selection:bg-neon-green/30 selection:text-white`}
      >
        <CRTOverlay />
        <CommandPalette />
        <ThemeToggle />
        <main className="relative z-10">
          {children}
        </main>
      </body>

    </html>
  );
}
