import blogPosts from "@/data/blog.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/hero/hero";

export default async function IndividualBlog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <HeroSection
        image="/assets/bg-hero/contact_bg.png"
        subtitle="----// 002 - KNOWLEDGE BASE"
        title="Developer Log"
        description="Insights, technical deep dives, and reflections."
      />

      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Back Navigation */}
        <div className="mb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-500 border-b border-slate-300 hover:border-cyan-600 dark:border-slate-700 dark:hover:border-cyan-500 transition-colors"
          >
            ← BACK TO LOGS
          </Link>
        </div>

        {/* Metadata */}
        <div className="text-cyan-600 dark:text-cyan-500 font-mono mb-4 text-xs tracking-widest uppercase">
          {post.category} // {post.date}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">
          {post.title}
        </h1>
        
        {/* Content - Justified Text */}
        <div className="prose dark:prose-invert prose-slate prose-lg max-w-none text-justify">
          <p>{post.content}</p>
        </div>
      </article>
    </main>
  );
}