import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface Post {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  content: string;
}

export function getAllPosts(): Omit<Post, "content">[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw  = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data } = matter(raw);
      return { slug: file.replace(".mdx", ""), title: data.title, date: data.date, tag: data.tag, excerpt: data.excerpt };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return { slug, title: data.title, date: data.date, tag: data.tag, excerpt: data.excerpt, content };
}
