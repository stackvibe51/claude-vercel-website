import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = { title: "Contact — Book a Discovery Call" };

const ways = [
  { icon: "📧", title: "Email Us",            body: "hello@stackvibeai.com",       sub: "We respond within one business day." },
  { icon: "🌍", title: "Where We Are",         body: "UK · India · USA",            sub: "Global team, local delivery." },
  { icon: "⚡", title: "Fastest Path",          body: "Book a Discovery Call",      sub: "30 minutes. No obligation. Real clarity." },
];

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-5">Get in Touch</span>
          <h1 className="text-5xl font-bold mb-5">Let&apos;s Talk About <span className="gradient-text">Your AI Journey</span></h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every StackVibeAI engagement starts with a conversation. Tell us where you are — we&apos;ll tell you the fastest path to production.
          </p>
        </AnimatedSection>

        {/* 3 contact cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {ways.map((w) => (
            <AnimatedSection key={w.title} className="glass rounded-2xl p-7 text-center border border-white/[0.06]">
              <div className="text-3xl mb-3">{w.icon}</div>
              <h3 className="font-semibold mb-1">{w.title}</h3>
              <p className="text-purple-300 font-medium text-sm mb-1">{w.body}</p>
              <p className="text-xs text-slate-500">{w.sub}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Book a call CTA — Calendly */}
        <AnimatedSection id="book">
          <div className="glass rounded-3xl p-10 md:p-14 border border-purple-500/20 glow-purple text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-3">Book a Discovery Call</h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
              30 minutes. We listen. We map your single highest-value AI opportunity.
              No jargon, no pitch deck — just a practical conversation about what&apos;s possible for your business.
            </p>
            <p className="text-slate-500 text-sm mb-6">What we cover in 30 minutes:</p>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-sm">
              {["Your current AI challenges and what you&apos;ve tried", "Your systems, data, and key workflows", "The fastest path to a deployed AI agent in your environment"].map((item) => (
                <div key={item} className="glass rounded-xl p-3 border border-white/10">
                  <span className="text-purple-400">✓</span>{" "}
                  <span className="text-slate-300" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
            {/* Replace href with your Calendly link */}
            <CalendlyButton className="px-10 py-4 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-base transition-all hover:scale-105 cursor-pointer">
              Book on Calendly →
            </CalendlyButton>
            <p className="mt-4 text-xs text-slate-500">Or email us directly: hello@stackvibeai.com</p>
          </div>
        </AnimatedSection>

        {/* What happens next */}
        <AnimatedSection>
          <div className="glass rounded-2xl p-8 border border-white/[0.06]">
            <h3 className="text-xl font-bold mb-6 text-center">What Happens After You Book</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { n: "01", t: "Confirmation",       d: "You&apos;ll get a calendar invite and a short intake form to fill in before the call." },
                { n: "02", t: "Discovery Call",      d: "30-minute conversation. We listen and ask the 8 questions that matter." },
                { n: "03", t: "Recommendations",     d: "Within 48 hours, you receive a brief with our recommended next step." },
                { n: "04", t: "Your Decision",       d: "No pressure. If it&apos;s a fit, we propose Phase 1. If not, we&apos;ll tell you honestly." },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="text-2xl font-black text-purple-400 mb-2 font-mono">{s.n}</div>
                  <h4 className="font-semibold mb-1 text-sm">{s.t}</h4>
                  <p className="text-xs text-slate-400" dangerouslySetInnerHTML={{ __html: s.d }} />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
