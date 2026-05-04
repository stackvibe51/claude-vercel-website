import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "StackVibeAI — Agentic AI for the Enterprise",
};

const offerings = [
  {
    num: "01", title: "Agentic AI Transformation", color: "#00BC9E", border: "border-teal-500/30",
    tagline: "Make your existing stack intelligent",
    desc: "AI orchestration layer built on top of your existing SaaS platforms — Salesforce, SAP, ServiceNow — turning siloed tools into connected, agent-driven workflows.",
    href: "/offerings/agentic-ai-transformation",
  },
  {
    num: "02", title: "Sovereign AI", color: "#3B82F6", border: "border-blue-500/30",
    tagline: "AI that never leaves your walls",
    desc: "On-prem or on-tenant domain-aware AI with full data sovereignty. Compliance-grade, accuracy-first. Powered by domain-aware language models trained on your data.",
    href: "/offerings/sovereign-ai",
  },
  {
    num: "03", title: "AI Agent Studio", color: "#8B5CF6", border: "border-purple-500/30",
    tagline: "From use case to production in weeks",
    desc: "Rapid, fixed-scope agent builds for a single business problem — invoice processing, lead qualification, contract review — shipped in 4–8 weeks.",
    href: "/offerings/ai-agent-studio",
  },
  {
    num: "04", title: "AI-Native Engineering", color: "#F59E0B", border: "border-amber-500/30",
    tagline: "Senior AI engineers who ship",
    desc: "Premium AI engineering teams embedded into your product. Force multipliers who take your AI backlog from idea to production with a 4x delivery model.",
    href: "/offerings/ai-native-engineering",
  },
];

const steps = [
  { num: "01", title: "AI Readiness Assessment", color: "#00BC9E", time: "8–12 weeks",
    desc: "Stakeholder workshops, use case discovery, process mapping, and AI opportunity scoring. Output: a prioritised AI opportunity map." },
  { num: "02", title: "Tech Feasibility",        color: "#3B82F6", time: "3–4 weeks",
    desc: "Data readiness audit, architecture mapping, API surface review, and integration complexity scoring. Output: a technical blueprint." },
  { num: "03", title: "Establish ROI",            color: "#8B5CF6", time: "2–3 weeks",
    desc: "Business case per use case, cost-impact modelling, phased roadmap, and a board-ready investment brief." },
  { num: "04", title: "Deliver & Transform",      color: "#F59E0B", time: "Ongoing",
    desc: "Build agentic agents, deploy on your stack, measure savings, iterate and scale. We stay until outcomes are real." },
];

const stats = [
  { value: "+30%", label: "Lead activation uplift", sub: "Agentic marketing automation" },
  { value: "4×",   label: "Engineering throughput",  sub: "AI-native SDLC transformation" },
  { value: "90",   label: "Days to payback",          sub: "Average client deployment" },
  { value: "0",    label: "Data leaves your walls",   sub: "Sovereign AI deployments" },
];

const blogPreviews = [
  { slug: "why-ai-pilots-fail", title: "Why 95% of AI Pilots Never Reach Production", date: "May 2026", tag: "Strategy" },
  { slug: "sovereign-ai-explained", title: "Sovereign AI: What It Is and Why Mid-Market Needs It", date: "May 2026", tag: "Sovereign AI" },
  { slug: "4x-engineering-velocity", title: "How We Achieved 4× Engineering Velocity With a Custom AI SDLC", date: "April 2026", tag: "Engineering" },
];


export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24">
        {/* Radial background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-5%,rgba(0,188,158,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_80%,rgba(59,130,246,0.1)_0%,transparent_60%)] pointer-events-none" />

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-teal-300 mb-8 border border-teal-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Agentic AI for the Enterprise
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            From Pilots to Production:
            <br />
            <span className="gradient-text">Agentic AI for the Enterprise</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            StackVibeAI builds, deploys, and owns AI outcomes for mid-market enterprises.
            From agentic orchestration to sovereign on-prem AI — we make it real, in weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton className="px-8 py-3.5 rounded-xl bg-[#00BC9E] hover:bg-[#00956f] text-[#0A162A] font-bold text-sm transition-all hover:scale-105 glow-teal cursor-pointer">
              Book a Discovery Call →
            </CalendlyButton>
            <Link href="#offerings"
              className="px-8 py-3.5 rounded-xl glass hover:bg-white/10 text-sm font-medium transition-colors">
              See Our Offerings
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="border-y border-white/[0.06] bg-[#070F1E]/60 py-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-sm font-semibold text-white mb-0.5">{s.label}</div>
                <div className="text-xs text-slate-500">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── DELIVERED. NOT JUST ADVISED. ─────────────────────────────────── */}
      <AnimatedSection>
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-widest uppercase mb-4">Client Results</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-5">Delivered. Not Just Advised.</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Real transformations. Real outcomes. Here is what AI delivery actually looks like when someone owns the result alongside you.</p>
            </div>

            {/* ── Featured: Engineering Velocity ── */}
            <div className="glass rounded-3xl border border-purple-500/20 overflow-hidden mb-8">

              {/* Case study header */}
              <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/30 px-8 py-6 border-b border-white/[0.06] flex flex-col md:flex-row md:items-center gap-4 justify-between">
                <div>
                  <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase">Case Study — Engineering Velocity</span>
                  <h3 className="text-2xl font-bold text-white mt-1">AI-Native SDLC Transformation</h3>
                  <p className="text-slate-400 text-sm mt-1">Mid-size US Engineering Firm · End-to-end AI transformation of people, process, and tooling</p>
                </div>
                <div className="flex gap-6 shrink-0">
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-400">4×</div>
                    <div className="text-xs text-slate-400 mt-0.5">Engineering throughput</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-400">60%</div>
                    <div className="text-xs text-slate-400 mt-0.5">Faster req-to-delivery</div>
                  </div>
                </div>
              </div>

              {/* 3-column transformation */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">

                {/* People */}
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/15 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <h4 className="font-bold text-white text-sm">People</h4>
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-400">
                    <li className="flex gap-2"><span className="text-purple-400 mt-0.5">→</span>AI Lead role introduced to guide human-in-the-loop requirement specification</li>
                    <li className="flex gap-2"><span className="text-purple-400 mt-0.5">→</span>Full engineering team upskilled on AI-assisted development with Claude</li>
                    <li className="flex gap-2"><span className="text-purple-400 mt-0.5">→</span>Org-specific skills embedded via custom Claude plugin — every engineer had context-aware AI assistance tuned to their codebase and standards</li>
                    <li className="flex gap-2"><span className="text-purple-400 mt-0.5">→</span>Mindset shift: from &ldquo;write code&rdquo; to &ldquo;direct, review, and improve AI output&rdquo;</li>
                  </ul>
                </div>

                {/* Process */}
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    </div>
                    <h4 className="font-bold text-white text-sm">Process — AI SDLC</h4>
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-400">
                    <li className="flex gap-2"><span className="text-blue-400 font-bold shrink-0">01</span>AI-assisted requirements gathering — structured specs produced in hours, not days</li>
                    <li className="flex gap-2"><span className="text-blue-400 font-bold shrink-0">02</span>GitHub task automation — stories, subtasks, and acceptance criteria auto-generated from specs</li>
                    <li className="flex gap-2"><span className="text-blue-400 font-bold shrink-0">03</span>AI-augmented coding — Claude with org context writes, reviews, and refactors code in-context</li>
                    <li className="flex gap-2"><span className="text-blue-400 font-bold shrink-0">04</span>Asana workflow automation — sprint tracking, blockers, and handoffs automated end-to-end</li>
                    <li className="flex gap-2"><span className="text-blue-400 font-bold shrink-0">05</span>AI-led testing and deployment validation before every release</li>
                  </ul>
                </div>

                {/* Tools */}
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-teal-500/15 flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <h4 className="font-bold text-white text-sm">Tools Built &amp; Deployed</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex gap-2">
                      <span className="text-teal-400 shrink-0">⬡</span>
                      <div><span className="text-white font-medium">Claude + Custom Org Plugin</span> — org-specific skills, coding standards, and domain knowledge baked into every interaction</div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400 shrink-0">⬡</span>
                      <div><span className="text-white font-medium">Bug Hunter</span> — custom AI tool that scans all repositories, understands bug context, produces root cause analysis and a prescriptive fix guide automatically</div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400 shrink-0">⬡</span>
                      <div><span className="text-white font-medium">GitHub + Asana Automation</span> — end-to-end task lifecycle managed without manual overhead</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── Two supporting case studies ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Marketing Automation */}
              <div className="glass rounded-2xl border border-teal-500/20 p-7">
                <span className="text-xs font-semibold text-teal-400 tracking-widest uppercase">Case Study — Agentic AI Transformation</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-1">Marketing & Sales Agent Deployment</h3>
                <p className="text-sm text-slate-400 mb-5">5-agent architecture deployed inside an existing CRM — no platform replacement, no disruption.</p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[{v:"+30%",l:"Lead activation"},{v:"−40%",l:"SDR manual effort"},{v:"+22%",l:"Meetings booked"}].map(s=>(
                    <div key={s.l} className="text-center glass rounded-xl p-3">
                      <div className="text-xl font-black text-teal-400">{s.v}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500">Payback within 90 days of deployment</p>
              </div>

              {/* Sovereign AI */}
              <div className="glass rounded-2xl border border-blue-500/20 p-7">
                <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">Case Study — Sovereign AI</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-1">On-Prem AI for a Regulated Business</h3>
                <p className="text-sm text-slate-400 mb-5">Domain-aware AI deployed entirely within the client&apos;s private cloud — zero data exposure, full compliance.</p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[{v:"0",l:"Data leaves walls"},{v:"100%",l:"Compliance met"},{v:"3×",l:"Query accuracy vs generic LLM"}].map(s=>(
                    <div key={s.l} className="text-center glass rounded-xl p-3">
                      <div className="text-xl font-black text-blue-400">{s.v}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500">Powered by CogitX sovereign AI infrastructure</p>
              </div>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* ── OFFERINGS ────────────────────────────────────────────────────── */}
      <section id="offerings" className="py-24 px-6 bg-[#070F1E]/40">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-widest uppercase mb-4">Our Offerings</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Four Ways We Deliver AI Value</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Every engagement is scoped to your challenge. Every outcome is owned by us together.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((o, i) => (
              <AnimatedSection key={o.num} delay={i * 0.08}>
                <Link href={o.href} className={`block glass rounded-2xl p-7 hover:bg-white/[0.07] transition-all group border ${o.border}`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-mono font-bold" style={{ color: o.color }}>{o.num}</span>
                    <svg className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{o.title}</h3>
                  <p className="text-sm mb-3" style={{ color: o.color }}>{o.tagline}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{o.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-xs font-medium" style={{ color: o.color }}>
                    Learn more <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENTIC ARCHITECTURE ─────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-widest uppercase mb-4">How It Works</span>
            <h2 className="text-3xl font-bold mb-3">Agentic AI Architecture</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Intelligent agents orchestrated across your existing stack — reading, reasoning, and acting in real time.</p>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/[0.06]">
            <Image
              src="/images/architecture.jpeg"
              alt="Enterprise Agentic Architecture"
              width={1600}
              height={1049}
              className="w-full h-auto"
            />
          </div>
        </section>
      </AnimatedSection>

      {/* ── HOW WE WORK ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#070F1E]/40">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-widest uppercase mb-4">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our 4-Phase Delivery Method</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Every engagement begins with your data, your systems, your people.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="text-3xl font-black mb-3 font-mono" style={{ color: s.color }}>{s.num}</div>
                  <h3 className="font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: s.color }}>{s.time}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRM DASHBOARD SHOWCASE ────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-widest uppercase mb-5">Live in Production</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Agents That Run Inside Your Existing Tools</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                We build AI agents that operate directly inside your CRM, ERP, and productivity tools —
                not in a separate platform. Your team keeps working the way they work. The AI handles the rest.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                {["5-agent architecture deployed inside CRM", "+30% lead activation, −40% SDR manual effort", "+22% meetings generated", "Payback within 90 days of deployment"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-teal-400">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/offerings/agentic-ai-transformation" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#00BC9E] hover:gap-3 transition-all">
                See Agentic AI Transformation <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="flex-1 max-w-md">
              <div className="glass rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/crm-dashboard.png" alt="AI agent inside CRM" width={800} height={600} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── BLOG PREVIEW ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#070F1E]/40">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-widest uppercase mb-4">Insights</span>
              <h2 className="text-3xl md:text-4xl font-bold">AI Transformation Thinking</h2>
            </div>
            <Link href="/blog" className="text-sm text-teal-400 hover:text-teal-300 font-medium hidden md:block">View all →</Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPreviews.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="block glass rounded-2xl p-6 hover:bg-white/[0.07] transition-colors group">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold mb-4">{post.tag}</span>
                  <h3 className="font-semibold text-white leading-snug mb-3 group-hover:text-teal-300 transition-colors">{post.title}</h3>
                  <p className="text-xs text-slate-500">{post.date}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-12 border border-teal-500/20 glow-teal">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start With an AI Readiness Assessment</h2>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto">
              A structured diagnostic that maps your challenges, your systems, and your highest-value AI opportunities.
              No jargon. No obligation. Just clarity.
            </p>
            <CalendlyButton className="px-8 py-3.5 rounded-xl bg-[#00BC9E] hover:bg-[#00956f] text-[#0A162A] font-bold text-sm transition-all hover:scale-105 cursor-pointer">
              Book a Discovery Call →
            </CalendlyButton>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
