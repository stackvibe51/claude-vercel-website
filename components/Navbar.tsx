"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CalendlyButton from "@/components/CalendlyButton";

const offerings = [
  { label: "Agentic AI Transformation", href: "/offerings/agentic-ai-transformation", color: "text-teal-400" },
  { label: "Sovereign AI",              href: "/offerings/sovereign-ai",              color: "text-blue-400" },
  { label: "AI Agent Studio",           href: "/offerings/ai-agent-studio",           color: "text-purple-400" },
  { label: "AI-Native Engineering",     href: "/offerings/ai-native-engineering",     color: "text-amber-400" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [offeringsOpen, setOfferingsOpen] = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0A162A]/90 backdrop-blur-lg border-b border-white/[0.06]" : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo/logo-light.png" alt="StackVibeAI" width={320} height={187} className="h-20 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Offerings dropdown */}
          <div className="relative" onMouseEnter={() => setOfferingsOpen(true)} onMouseLeave={() => setOfferingsOpen(false)}>
            <button className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors">
              Offerings
              <svg className={`w-4 h-4 transition-transform ${offeringsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <AnimatePresence>
              {offeringsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 glass rounded-xl overflow-hidden py-2 shadow-2xl"
                >
                  {offerings.map((o) => (
                    <Link key={o.href} href={o.href} className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                      <span className={`font-medium ${o.color}`}>→</span> {o.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/blog"    className="text-sm text-slate-300 hover:text-white transition-colors">Insights</Link>
          <Link href="/contact" className="text-sm text-slate-300 hover:text-white transition-colors">Contact</Link>
          <CalendlyButton className="px-4 py-2 rounded-lg bg-[#00BC9E] hover:bg-[#00956f] text-sm font-semibold text-[#0A162A] transition-colors cursor-pointer">
            Book a Call
          </CalendlyButton>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-slate-300" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#12244A] border-t border-white/[0.06]"
          >
            <div className="px-6 py-4 space-y-3">
              <p className="text-xs text-slate-500 uppercase tracking-widest">Offerings</p>
              {offerings.map((o) => (
                <Link key={o.href} href={o.href} onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 hover:text-white py-1">{o.label}</Link>
              ))}
              <hr className="border-white/10" />
              <Link href="/blog"    onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 py-1">Insights</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-sm text-slate-300 py-1">Contact</Link>
              <CalendlyButton className="mt-2 px-4 py-2 rounded-lg bg-[#00BC9E] text-sm font-semibold text-[#0A162A] cursor-pointer">Book a Call</CalendlyButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
