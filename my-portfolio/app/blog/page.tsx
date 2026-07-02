import BlogPostsGrid from "@/app/blog/blog-posts-grid";
import HeroSection from "@/components/hero/hero";
import { AnimateSection } from "@/app/page-animate-provider";

const Blog = async () => {
  // Simulate network request to trigger the Next.js suspense boundary (loading.tsx)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <main className="min-h-screentext-slate-200">
      <AnimateSection>
        <HeroSection
          image="/assets/bg-hero/contact_bg.png"
          subtitle="----// 002 - KNOWLEDGE BASE"
          title="Developer Log"
          description="Insights, technical deep dives, and reflections."
        />
      </AnimateSection>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <BlogPostsGrid />
      </section>
    </main>
  );
};

export default Blog;