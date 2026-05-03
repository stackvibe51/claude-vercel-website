import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = { title: "Sovereign AI" };

const deliverables = [
  "On-prem / on-tenant agentic AI platform deployment",
  "Domain-Aware Language Models (DALMs) trained on your data",
  "Private LLM inference — zero data sent to third-party LLMs",
  "Pre-built AI agent catalogue for your industry workflows",
  "Unified governance hub with evaluation & audit controls",
  "Compliance-ready architecture documentation",
];

const industries = ["Financial Services", "Healthcare", "Legal", "Insurance", "Government", "Pharmaceuticals"];

export default function SovereignAIPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">Offering 02</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-5">Sovereign <span style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-4">Domain-aware AI workflows deployed entirely on-prem or on-tenant.</p>
          <p className="text-lg text-blue-300 font-semibold mb-8">Your data never leaves your walls.</p>
          <Link href="/contact#book" className="inline-block px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all hover:scale-105">Book a Discovery Call →</Link>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="glass rounded-2xl p-8 border border-red-500/20 mb-12">
            <h3 className="text-lg font-bold text-red-400 mb-3">The Problem With Generic AI</h3>
            <p className="text-slate-300 leading-relaxed">
              Every enterprise AI tool today has the same problem — your data goes to their servers. For companies in regulated industries,
              that&apos;s a compliance risk you cannot take. Generic LLMs also hallucinate 30–40% on domain-specific queries,
              making them unfit for production in your environment.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: "🔒", title: "Zero Data Exposure",    desc: "The control plane, models, and all data stay inside your infrastructure. Always." },
                { icon: "🎯", title: "Domain Accuracy",       desc: "Models trained on your enterprise data deliver accuracy generic LLMs cannot match." },
                { icon: "📋", title: "Compliance Ready",      desc: "FCA, HIPAA, GDPR — architecture approved by legal and risk teams." },
              ].map((f) => (
                <div key={f.title} className="glass rounded-2xl p-6 text-center border border-blue-500/20">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="glass rounded-2xl p-8 border border-blue-500/20 h-full">
                <h3 className="text-xl font-bold mb-6 text-blue-400">What We Deliver</h3>
                <ul className="space-y-3">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="text-blue-400 mt-0.5">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold mb-4">Industries We Serve</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {industries.map((i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-blue-500/10 text-sm text-blue-300 border border-blue-500/20">{i}</span>
                  ))}
                </div>
                <div className="glass rounded-xl p-4 border border-blue-500/20">
                  <p className="text-sm text-blue-300 font-semibold mb-1">Impact Achieved</p>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>✓ 15+ AI agents deployed on-tenant</li>
                    <li>✓ Zero data leaving the enterprise</li>
                    <li>✓ 60–70% lower TCO vs generic LLMs</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center glass rounded-3xl p-10 border border-blue-500/20">
            <h2 className="text-2xl font-bold mb-3">Ready to deploy AI that stays in your environment?</h2>
            <p className="text-slate-400 mb-7 text-sm">Let us walk you through what a sovereign deployment looks like inside your specific infrastructure.</p>
            <Link href="/contact#book" className="inline-block px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all">Book a Discovery Call →</Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
