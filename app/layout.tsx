import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, EMAIL } from "@/components/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pure Linemark | AI-Powered Trading Platform in Australia",
    template: "%s | Pure Linemark",
  },
  description:
    "Pure Linemark is Australia's AI-powered trading platform. Our engine trades global markets 24/7 on your behalf, join 28,000+ Australian traders and start with just $250.",
  keywords: [
    "Pure Linemark",
    "AI trading platform Australia",
    "automated trading Australia",
    "crypto trading Australia",
    "AI trading engine",
    "passive income Australia",
    "Bitcoin trading",
    "online trading platform",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pure Linemark | AI-Powered Trading Platform in Australia",
    description:
      "Australia's AI-powered trading platform. The engine trades global markets 24/7 on your behalf, start with just $250.",
    url: SITE_URL,
    siteName: "Pure Linemark",
    locale: "en_AU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pure Linemark",
  url: SITE_URL,
  email: EMAIL,
  description:
    "AI-powered trading platform for Australian investors. Automated trading across global markets.",
  areaServed: "AU",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-slate-700 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
