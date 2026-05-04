import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = { title: "Insights — AI Transformation Thinking" };

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <section className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="mb-14 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase mb-5">Insights</span>
          <h1 className="text-5xl font-bold mb-4">AI Transformation Thinking</h1>
          <p className="text-slate-400 max-w-lg mx-auto">Perspectives on agentic AI, sovereign deployments, and engineering velocity — from practitioners who build, not just advise.</p>
        </AnimatedSection>

        <div className="space-y-5">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.06}>
              <Link href={`/blog/${post.slug}`} className="block glass rounded-2xl p-7 hover:bg-white/[0.07] transition-all group border border-white/[0.06]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold">{post.tag}</span>
                      <span className="text-xs text-slate-500">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">{post.title}</h2>
                    <p className="text-sm text-slate-400 leading-relaxed">{post.excerpt}</p>
                  </div>
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
