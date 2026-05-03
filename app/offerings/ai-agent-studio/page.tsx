import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = { title: "AI Agent Studio" };

const useCases = ["Invoice processing & approval", "Lead qualification & outreach", "Contract review & summarisation", "Customer onboarding automation", "Support ticket triage & resolution", "HR document processing", "Procurement approvals", "Compliance monitoring"];
const sprints = [
  { week: "Week 1–2",  act: "Use case scoping & data audit" },
  { week: "Week 2–3",  act: "Architecture design & agent prototyping" },
  { week: "Week 3–5",  act: "Build, integrate & test on real data" },
  { week: "Week 5–7",  act: "UAT & iteration with your team" },
  { week: "Week 7–8",  act: "Production deployment & handoff" },
];

export default function AIAgentStudioPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-5">Offering 03</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-5">AI Agent <span style={{ background: "linear-gradient(135deg,#8B5CF6,#EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Studio</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">From use case to production-ready agent in weeks — not quarters. Fixed price. Fixed scope. Measurable outcome.</p>
          <Link href="/contact#book" className="inline-block px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-all hover:scale-105">Book a Discovery Call →</Link>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pick One Problem. We&apos;ll Build the Agent.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">You don&apos;t need to boil the ocean. Pick the single process costing you the most time or money, and we&apos;ll have a production-ready AI agent running in 4–8 weeks.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection>
              <div className="glass rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-xl font-bold mb-5 text-purple-400">Example Use Cases</h3>
                <div className="space-y-2">
                  {useCases.map((uc) => (
                    <div key={uc} className="flex items-center gap-2 text-sm text-slate-300 py-2 border-b border-white/[0.05] last:border-0">
                      <span className="text-purple-400">→</span> {uc}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-5">Sprint Timeline</h3>
                <div className="space-y-4">
                  {sprints.map((s, i) => (
                    <div key={s.week} className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-16 text-xs font-bold text-purple-400 bg-purple-500/10 rounded px-2 py-1 text-center">{s.week}</span>
                      <span className="text-sm text-slate-300">{s.act}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 glass rounded-xl p-4 border border-purple-500/20">
                  <p className="text-xs text-purple-300 font-semibold">Commercial Model</p>
                  <p className="text-sm text-slate-400 mt-1">Fixed-price sprint · 4–8 weeks · Natural path to Offering 01</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center glass rounded-3xl p-10 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-3">What&apos;s the one process you&apos;d automate tomorrow?</h2>
            <p className="text-slate-400 mb-7 text-sm">Let&apos;s scope it in 30 minutes. If the numbers stack up, we&apos;ll build it.</p>
            <Link href="/contact#book" className="inline-block px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-all">Book a Discovery Call →</Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
