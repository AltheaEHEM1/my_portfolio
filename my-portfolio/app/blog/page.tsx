import HeroSection from "@/components/hero/hero";
import blogPosts from "@/data/blog.json";
import Link from "next/link";

const Blog = () => {
  return (
    <main className="min-h-screentext-slate-200">
      <HeroSection
        image="/assets/bg-hero/contact_bg.png"
        subtitle="----// 002 - KNOWLEDGE BASE"
        title="Developer Log"
        description="Insights, technical deep dives, and reflections."
      />

		  <section className="max-w-6xl mx-auto px-6 py-20">
			  
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{blogPosts.map((post) => (
					<article
					key={post.id}
					className="group flex flex-col border border-slate-200 dark:border-slate-800 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/50"
					>
					{/* Category and Date */}
					<div className="text-cyan-600 dark:text-cyan-500 text-xs font-semibold tracking-wider mb-3 uppercase">
						{post.category} • {post.date}
					</div>

					{/* Title */}
					<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
						{post.title}
					</h2>

					{/* Excerpt */}
					<p className="text-slate-600 dark:text-slate-400 text-sm font-mono leading-relaxed mb-6 flex-grow">
						{post.excerpt}
					</p>

					{/* Action Link */}
					<Link
						href={`/blog/${post.id}`}
						className="inline-flex items-center text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
					>
						READ LOG
						<span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
					</Link>
					</article>
				))}
				</div>
		</section>
    </main>
  );
};

export default Blog;