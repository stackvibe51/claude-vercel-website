import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getAllPosts } from "@/lib/mdx";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return { title: post.title, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try { post = getPost(slug); } catch { notFound(); }

  return (
    <article className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-purple-400 mb-10 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          All Insights
        </Link>
        <div className="flex items-center gap-3 mb-5">
          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold">{post.tag}</span>
          <span className="text-xs text-slate-500">{post.date}</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-8 leading-tight">{post.title}</h1>
        <div className="prose prose-invert prose-slate max-w-none prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-headings:text-white prose-strong:text-white">
          <MDXRemote source={post.content} />
        </div>
        <div className="mt-14 glass rounded-2xl p-7 border border-purple-500/20 text-center">
          <h3 className="font-bold text-lg mb-2">Ready to move from thinking to doing?</h3>
          <p className="text-slate-400 text-sm mb-5">Book a 30-minute discovery call. We map your highest-value AI opportunity at no cost.</p>
          <Link href="/contact#book" className="inline-block px-6 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-sm transition-all">Book a Discovery Call →</Link>
        </div>
      </div>
    </article>
  );
}
