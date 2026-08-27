import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import CyberBackground from "@/components/CyberBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Substitute for Edwardian Script ITC, which is a paid Monotype font and can't be
// bundled here. Drop a licensed .woff2 into src/app/fonts and switch this to
// next/font/local if you own the license — the --font-crafted variable is the hook.
const craftedScript = Great_Vibes({
  variable: "--font-crafted",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Arora — FPV · AI/ML · Security",
  description:
    "Aryan Arora — autonomous FPV systems, AI/ML, and offensive security. Silent in the network, autonomous in the air.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${craftedScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030014] text-slate-100">
        <CyberBackground />
        {children}
      </body>
    </html>
  );
}
