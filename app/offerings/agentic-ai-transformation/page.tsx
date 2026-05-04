import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = { title: "Agentic AI Transformation" };

const deliverables = [
  "AI agents that read/write across your existing tools",
  "Workflow orchestration: CRM, ERP, support & ops connected",
  "Human-in-the-loop controls and full audit trails",
  "Multi-agent architecture (LLM + tool-use + memory)",
  "Integration: Salesforce, SAP, ServiceNow, HubSpot, Jira",
  "Ongoing iteration as your AI maturity grows",
];

export default function AgenticAIPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,188,158,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-5">Offering 01</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-5">Agentic AI <span className="gradient-text">Transformation</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">Make your existing stack intelligent — without ripping and replacing anything.</p>
          <Link href="/contact#book" className="inline-block px-8 py-3.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-sm transition-all hover:scale-105 glow-purple">
            Book a Discovery Call →
          </Link>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-5">Your stack is already powerful.<br />It just isn&apos;t connected.</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              Most mid-market enterprises have spent years building their SaaS stack — Salesforce, SAP, ServiceNow.
              The problem is these tools don&apos;t talk to each other intelligently. Your people are the integration layer.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              We change that. StackVibeAI builds an AI orchestration layer on top of your existing platforms —
              AI agents that read, write, and act across your entire stack to automate the workflows
              your team currently handles manually.
            </p>
            <div className="glass rounded-xl p-4 border border-purple-500/20">
              <p className="text-sm text-purple-300 font-semibold">Commercial Model</p>
              <p className="text-sm text-slate-400 mt-1">Scoped project engagement → monthly retainer for iteration & expansion</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/crm-dashboard.png" alt="AI agents inside CRM" width={800} height={600} className="w-full h-auto" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact banner */}
      <AnimatedSection>
        <section className="py-12 px-6 bg-[#070F1E]/60 border-y border-white/[0.06]">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ v: "+30%", l: "Lead Activation" }, { v: "−40%", l: "SDR Manual Effort" }, { v: "+22%", l: "Meetings Generated" }, { v: "90d", l: "Avg. Payback" }].map((s) => (
              <div key={s.v}>
                <div className="text-3xl font-black text-purple-400 mb-1">{s.v}</div>
                <div className="text-sm text-slate-400">{s.l}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Deliverables + platforms */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 border border-purple-500/20 h-full">
              <h3 className="text-xl font-bold mb-6 text-purple-400">What We Deliver</h3>
              <ul className="space-y-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-purple-400 mt-0.5">✓</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Platforms We Integrate</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Salesforce", "SAP", "ServiceNow", "HubSpot", "Jira", "Microsoft 365", "Slack", "Zendesk"].map((p) => (
                  <span key={p} className="px-3 py-1 rounded-lg bg-white/5 text-sm text-slate-300 border border-white/10">{p}</span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-4">Who It&apos;s For</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Mid-market enterprises with established SaaS stacks that want AI automation without replacing existing tools.
                If your team spends significant time on manual data entry, process coordination, or cross-system hand-offs — this is for you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center glass rounded-3xl p-10 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-3">Ready to make your stack intelligent?</h2>
            <p className="text-slate-400 mb-7 text-sm">Start with a free 30-minute discovery call. We&apos;ll map your highest-value automation opportunity.</p>
            <Link href="/contact#book" className="inline-block px-7 py-3 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-sm transition-all">Book a Discovery Call →</Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
