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
      <head>
        {/*
          GitHub Pages serves static files only — it can't send custom HTTP
          response headers, so CSP/referrer-policy are set via <meta> here
          instead. That means header-only protections (X-Frame-Options,
          Permissions-Policy, HSTS) aren't achievable this way; if that
          matters, put Cloudflare (free tier) in front of the domain, since
          it can inject real response headers and a WAF at the edge.
          'unsafe-inline' on script/style is required because this is a
          static export with no server to mint a per-request nonce — Next's
          own hydration scripts and styled-jsx/Tailwind runtime rely on
          inline tags. Acceptable here because the site takes no user input
          anywhere (no forms, no query-param rendering), so there's no
          injection point for that laxer rule to actually exploit.
        */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="min-h-full flex flex-col bg-[#030014] text-slate-100">
        <CyberBackground />
        {children}
      </body>
    </html>
  );
}
