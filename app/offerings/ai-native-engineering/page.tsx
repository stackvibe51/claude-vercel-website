import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = { title: "AI-Native Engineering" };

const deliverables = [
  "Senior AI engineers + optional CTO-as-a-Service",
  "Full-stack AI product build: architecture → production",
  "AI-first engineering practices embedded in your team",
  "4× delivery throughput via Delegate & Own methodology",
  "Correctness engineering — quality built in from day one",
  "Complete customised AI SDLC from requirements to delivery",
  "Knowledge transfer → your team becomes self-sufficient",
];

export default function AINativeEngineeringPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(245,158,11,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-5">Offering 04</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-5">AI-Native <span style={{ background: "linear-gradient(135deg,#F59E0B,#EF4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Engineering</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-4">Senior AI engineers who ship production-ready products.</p>
          <p className="text-lg text-amber-300 font-semibold mb-8">Not staff augmentation. Force multipliers.</p>
          <Link href="/contact#book" className="inline-block px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0A162A] font-bold text-sm transition-all hover:scale-105">Book a Discovery Call →</Link>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { n: "4×",   l: "Delivery throughput",    d: "Same team, 4x the output. Our AI SDLC achieves a step-change in how fast products ship." },
                { n: "~0",   l: "Rework cycles",           d: "Correctness engineering means quality is built in — not tested in after the fact." },
                { n: "100%", l: "Knowledge transfer",      d: "Your team learns as we work. When we leave, the capability stays with you." },
              ].map((s) => (
                <div key={s.n} className="glass rounded-2xl p-6 text-center border border-amber-500/20">
                  <div className="text-4xl font-black text-amber-400 mb-2">{s.n}</div>
                  <div className="font-semibold mb-2">{s.l}</div>
                  <p className="text-sm text-slate-400">{s.d}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="glass rounded-2xl p-8 border border-amber-500/20 h-full">
                <h3 className="text-xl font-bold mb-6 text-amber-400">What We Deliver</h3>
                <ul className="space-y-3">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="text-amber-400 mt-0.5">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass rounded-2xl p-8 h-full space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Who It&apos;s For</h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {[
                      "Non-technical founders who need AI tech leadership + delivery",
                      "Product teams with AI backlog but no AI engineering expertise in-house",
                      "Companies wanting 4× throughput with AI-native engineering practices",
                      "Teams that tried to hire AI engineers but couldn't at the right speed or cost",
                    ].map((i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">→</span>{i}</li>
                    ))}
                  </ul>
                </div>
                <div className="glass rounded-xl p-4 border border-amber-500/20">
                  <p className="text-sm text-amber-300 font-semibold mb-1">Commercial Model</p>
                  <p className="text-sm text-slate-400">Monthly retainer (3–6 month minimum) or milestone-based project</p>
                </div>
                <div className="glass rounded-xl p-4 border border-red-500/20">
                  <p className="text-sm text-red-300 font-semibold mb-1">This is NOT cheap outsourcing</p>
                  <p className="text-sm text-slate-400">These are expert practitioners who make your product fundamentally better by being part of it.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center glass rounded-3xl p-10 border border-amber-500/20">
            <h2 className="text-2xl font-bold mb-3">Ready to 4× your engineering output?</h2>
            <p className="text-slate-400 mb-7 text-sm">Walk us through your current build pipeline. We&apos;ll show you exactly where AI takes over.</p>
            <Link href="/contact#book" className="inline-block px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0A162A] font-bold text-sm transition-all">Book a Discovery Call →</Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
