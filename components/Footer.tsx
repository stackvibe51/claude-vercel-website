import Link from "next/link";
import Image from "next/image";
import CalendlyButton from "@/components/CalendlyButton";

const offerings = [
  { label: "Agentic AI Transformation", href: "/offerings/agentic-ai-transformation" },
  { label: "Sovereign AI",              href: "/offerings/sovereign-ai" },
  { label: "AI Agent Studio",           href: "/offerings/ai-agent-studio" },
  { label: "AI-Native Engineering",     href: "/offerings/ai-native-engineering" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070F1E]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Image src="/logo/logo-light.png" alt="StackVibeAI" width={200} height={117} className="h-12 w-auto mb-4" />
          <p className="text-sm text-slate-400 leading-relaxed">
            Agentic AI for the Enterprise.<br />We don&apos;t just advise. We deliver.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Offerings */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Offerings</h4>
          <ul className="space-y-2.5">
            {offerings.map((o) => (
              <li key={o.href}>
                <Link href={o.href} className="text-sm text-slate-400 hover:text-[#8B5CF6] transition-colors">{o.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Company</h4>
          <ul className="space-y-2.5">
            {[["Insights", "/blog"], ["Contact", "/contact"], ["Book a Discovery Call", "/contact#book"]].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-sm text-slate-400 hover:text-[#8B5CF6] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Get in Touch</h4>
          <p className="text-sm text-slate-400 mb-2">hello@stackvibeai.com</p>
          <p className="text-sm text-slate-400">UK · India · USA</p>
          <CalendlyButton className="mt-5 px-4 py-2.5 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-sm font-semibold text-[#0A162A] transition-colors cursor-pointer">
            Book a Discovery Call →
          </CalendlyButton>
        </div>
      </div>

      <div className="border-t border-white/[0.04] max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} StackVibeAI. All rights reserved.</p>
        <p className="text-xs text-slate-500">Agentic AI for the Enterprise</p>
      </div>
    </footer>
  );
}
