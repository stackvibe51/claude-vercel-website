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

function AgenticArchitectureDiagram() {
  return (
    <div className="glass rounded-2xl p-6 md:p-10 overflow-x-auto">
      <svg viewBox="0 0 900 420" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" aria-label="Agentic AI architecture diagram">
        <defs>
          <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00BC9E" stopOpacity="1" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
          </linearGradient>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(0,188,158,0.6)" />
          </marker>
          <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(59,130,246,0.6)" />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* ── Background grid */}
        <rect width="900" height="420" fill="transparent" />
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        </pattern>
        <rect width="900" height="420" fill="url(#grid)" />

        {/* ── COLUMN 1: Inputs ── */}
        <text x="60" y="22" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="2">INPUTS</text>

        {/* User */}
        <rect x="10" y="32" width="100" height="40" rx="8" fill="rgba(0,188,158,0.08)" stroke="rgba(0,188,158,0.3)" strokeWidth="1"/>
        <text x="60" y="52" textAnchor="middle" fill="#00BC9E" fontSize="11" fontWeight="bold">Business User</text>
        <text x="60" y="65" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">Goals &amp; Tasks</text>

        {/* Data Sources */}
        <rect x="10" y="88" width="100" height="40" rx="8" fill="rgba(0,188,158,0.08)" stroke="rgba(0,188,158,0.3)" strokeWidth="1"/>
        <text x="60" y="108" textAnchor="middle" fill="#00BC9E" fontSize="11" fontWeight="bold">Enterprise Data</text>
        <text x="60" y="121" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">CRM · ERP · Docs</text>

        {/* Triggers */}
        <rect x="10" y="144" width="100" height="40" rx="8" fill="rgba(0,188,158,0.08)" stroke="rgba(0,188,158,0.3)" strokeWidth="1"/>
        <text x="60" y="164" textAnchor="middle" fill="#00BC9E" fontSize="11" fontWeight="bold">Event Triggers</text>
        <text x="60" y="177" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">Schedules · Webhooks</text>

        {/* Input arrows */}
        <line x1="110" y1="52" x2="188" y2="130" stroke="rgba(0,188,158,0.4)" strokeWidth="1" markerEnd="url(#arrow)" strokeDasharray="4,3"/>
        <line x1="110" y1="108" x2="188" y2="130" stroke="rgba(0,188,158,0.4)" strokeWidth="1" markerEnd="url(#arrow)" strokeDasharray="4,3"/>
        <line x1="110" y1="164" x2="188" y2="140" stroke="rgba(0,188,158,0.4)" strokeWidth="1" markerEnd="url(#arrow)" strokeDasharray="4,3"/>

        {/* ── COLUMN 2: Orchestration ── */}
        <text x="250" y="22" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="2">ORCHESTRATION</text>

        <rect x="188" y="90" width="124" height="80" rx="12" fill="rgba(0,188,158,0.12)" stroke="url(#tealGrad)" strokeWidth="1.5" filter="url(#glow)"/>
        <text x="250" y="118" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">AI Orchestrator</text>
        <text x="250" y="134" textAnchor="middle" fill="rgba(0,188,158,0.9)" fontSize="9">LangGraph · CrewAI</text>
        <text x="250" y="150" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">Routing · Planning · Memory</text>

        {/* Orchestrator → Agents */}
        <line x1="312" y1="115" x2="388" y2="72" stroke="rgba(0,188,158,0.4)" strokeWidth="1" markerEnd="url(#arrow)"/>
        <line x1="312" y1="130" x2="388" y2="130" stroke="rgba(0,188,158,0.4)" strokeWidth="1" markerEnd="url(#arrow)"/>
        <line x1="312" y1="145" x2="388" y2="188" stroke="rgba(0,188,158,0.4)" strokeWidth="1" markerEnd="url(#arrow)"/>

        {/* ── COLUMN 3: Agents ── */}
        <text x="460" y="22" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="2">AGENTS</text>

        {/* Research Agent */}
        <rect x="388" y="40" width="144" height="54" rx="10" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.35)" strokeWidth="1"/>
        <text x="460" y="60" textAnchor="middle" fill="#60A5FA" fontSize="10" fontWeight="bold">Research Agent</text>
        <text x="460" y="75" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8.5">Retrieval · RAG · Web search</text>
        <text x="460" y="87" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8.5">Knowledge synthesis</text>

        {/* Action Agent */}
        <rect x="388" y="104" width="144" height="54" rx="10" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.35)" strokeWidth="1"/>
        <text x="460" y="124" textAnchor="middle" fill="#A78BFA" fontSize="10" fontWeight="bold">Action Agent</text>
        <text x="460" y="139" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8.5">CRM writes · Email · Tickets</text>
        <text x="460" y="151" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8.5">API calls · Workflow triggers</text>

        {/* Analysis Agent */}
        <rect x="388" y="168" width="144" height="54" rx="10" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.35)" strokeWidth="1"/>
        <text x="460" y="188" textAnchor="middle" fill="#FCD34D" fontSize="10" fontWeight="bold">Analysis Agent</text>
        <text x="460" y="203" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8.5">Reporting · Scoring · Insights</text>
        <text x="460" y="215" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8.5">Decision support</text>

        {/* Agents → Tools */}
        <line x1="532" y1="67" x2="608" y2="67" stroke="rgba(59,130,246,0.4)" strokeWidth="1" markerEnd="url(#arrowBlue)"/>
        <line x1="532" y1="131" x2="608" y2="131" stroke="rgba(139,92,246,0.4)" strokeWidth="1" markerEnd="url(#arrowBlue)"/>
        <line x1="532" y1="195" x2="608" y2="195" stroke="rgba(245,158,11,0.4)" strokeWidth="1" markerEnd="url(#arrowBlue)"/>

        {/* ── COLUMN 4: Tools/Integrations ── */}
        <text x="688" y="22" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="2">INTEGRATIONS</text>

        <rect x="608" y="40" width="160" height="40" rx="8" fill="rgba(59,130,246,0.07)" stroke="rgba(59,130,246,0.2)" strokeWidth="1"/>
        <text x="688" y="57" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="9.5" fontWeight="600">Salesforce · HubSpot</text>
        <text x="688" y="72" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8.5">CRM &amp; Marketing Automation</text>

        <rect x="608" y="104" width="160" height="40" rx="8" fill="rgba(139,92,246,0.07)" stroke="rgba(139,92,246,0.2)" strokeWidth="1"/>
        <text x="688" y="121" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="9.5" fontWeight="600">SAP · ServiceNow · Jira</text>
        <text x="688" y="136" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8.5">ERP, ITSM &amp; Dev Ops</text>

        <rect x="608" y="168" width="160" height="40" rx="8" fill="rgba(245,158,11,0.07)" stroke="rgba(245,158,11,0.2)" strokeWidth="1"/>
        <text x="688" y="185" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="9.5" fontWeight="600">Pinecone · MongoDB · S3</text>
        <text x="688" y="200" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8.5">Vector DB &amp; Knowledge Stores</text>

        {/* Tools → Output */}
        <line x1="768" y1="60" x2="820" y2="110" stroke="rgba(0,188,158,0.3)" strokeWidth="1" markerEnd="url(#arrow)" strokeDasharray="4,3"/>
        <line x1="768" y1="124" x2="820" y2="124" stroke="rgba(0,188,158,0.3)" strokeWidth="1" markerEnd="url(#arrow)" strokeDasharray="4,3"/>
        <line x1="768" y1="188" x2="820" y2="138" stroke="rgba(0,188,158,0.3)" strokeWidth="1" markerEnd="url(#arrow)" strokeDasharray="4,3"/>

        {/* ── COLUMN 5: Output ── */}
        <text x="858" y="22" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="2">OUTPUT</text>

        <rect x="820" y="80" width="72" height="88" rx="10" fill="rgba(0,188,158,0.12)" stroke="url(#tealGrad)" strokeWidth="1.5" filter="url(#glow)"/>
        <text x="856" y="106" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="bold">Automated</text>
        <text x="856" y="120" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="bold">Outcomes</text>
        <text x="856" y="138" textAnchor="middle" fill="rgba(0,188,158,0.9)" fontSize="8">Actions taken</text>
        <text x="856" y="150" textAnchor="middle" fill="rgba(0,188,158,0.9)" fontSize="8">Reports sent</text>
        <text x="856" y="162" textAnchor="middle" fill="rgba(0,188,158,0.9)" fontSize="8">Savings tracked</text>

        {/* ── BOTTOM: Human-in-the-loop + Governance ── */}
        <rect x="188" y="290" width="600" height="50" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="6,4"/>
        <text x="488" y="311" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="600">Human-in-the-Loop Controls  ·  Audit Trail  ·  Compliance &amp; Governance  ·  Explainable AI</text>
        <text x="488" y="328" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8.5">Every agent action is logged, reviewable, and reversible</text>

        {/* Vertical connector lines down to governance bar */}
        <line x1="250" y1="170" x2="250" y2="290" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="3,4"/>
        <line x1="460" y1="222" x2="460" y2="290" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="3,4"/>
        <line x1="688" y1="208" x2="688" y2="290" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="3,4"/>

        {/* ── Bottom legend ── */}
        <circle cx="210" cy="380" r="5" fill="rgba(0,188,158,0.7)"/>
        <text x="220" y="384" fill="rgba(255,255,255,0.4)" fontSize="9">Orchestration</text>
        <circle cx="310" cy="380" r="5" fill="rgba(59,130,246,0.7)"/>
        <text x="320" y="384" fill="rgba(255,255,255,0.4)" fontSize="9">Agent Layer</text>
        <circle cx="400" cy="380" r="5" fill="rgba(139,92,246,0.7)"/>
        <text x="410" y="384" fill="rgba(255,255,255,0.4)" fontSize="9">Tool Integrations</text>
        <circle cx="520" cy="380" r="5" fill="rgba(245,158,11,0.7)"/>
        <text x="530" y="384" fill="rgba(255,255,255,0.4)" fontSize="9">Knowledge Stores</text>
        <circle cx="640" cy="380" r="5" fill="rgba(0,188,158,0.7)"/>
        <text x="650" y="384" fill="rgba(255,255,255,0.4)" fontSize="9">Automated Outcomes</text>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16">
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

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold tracking-widest uppercase mb-4">The AI Paradox</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">95% of AI Pilots End Up<br />in the Graveyard</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Enterprises invest, run pilots, get excited — then nothing reaches production. The reasons are always the same.</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", color: "#EF4444", t: "Hallucination & Low Accuracy",  d: "Generic LLMs aren't trained on your domain. They confuse, hallucinate, and erode trust fast." },
              { n: "02", color: "#F59E0B", t: "No Data Sovereignty",            d: "Your data can't leave your environment — but public LLMs demand it." },
              { n: "03", color: "#3B82F6", t: "No Delivery Partner",            d: "Consultants hand you a roadmap. Nobody actually builds the thing." },
              { n: "04", color: "#8B5CF6", t: "Slow Time to Value",             d: "Months of discovery, dozens of workshops, no deployed agent. Momentum dies." },
            ].map((p) => (
              <div key={p.n} className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                <div className="text-2xl font-bold mb-3" style={{ color: p.color }}>{p.n}</div>
                <h3 className="font-semibold text-white mb-2 text-sm">{p.t}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.d}</p>
              </div>
            ))}
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
          <div className="max-w-5xl mx-auto">
            <AgenticArchitectureDiagram />
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
