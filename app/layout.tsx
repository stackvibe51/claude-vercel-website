import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: { default: "StackVibeAI — Agentic AI for the Enterprise", template: "%s | StackVibeAI" },
  description: "StackVibeAI is an AI consulting and delivery company. We build, deploy, and own AI outcomes for mid-market enterprises.",
  metadataBase: new URL("https://stackvibeai.com"),
  openGraph: {
    title: "StackVibeAI — Agentic AI for the Enterprise",
    description: "We don't just advise. We design, build, deploy, and own AI outcomes alongside you.",
    url: "https://stackvibeai.com",
    siteName: "StackVibeAI",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "StackVibeAI", description: "Agentic AI for the Enterprise" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A162A] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
