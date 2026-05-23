import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on web design, business, and building things that last — from the Builder House team.',
}

const posts = [
  { slug: 'why-cheap-websites-cost-more', title: 'Why Cheap Websites End Up Costing More', date: 'May 2025', category: 'Business', excerpt: 'The real price of a bad website isn\'t what you paid — it\'s the customers you lost while it was live.' },
  { slug: 'restaurant-websites-that-convert', title: 'What Makes a Restaurant Website Actually Work', date: 'April 2025', category: 'Design', excerpt: 'Most restaurant sites are pretty but broken. Here\'s what separates the ones that fill tables from the ones that don\'t.' },
  { slug: 'shopify-vs-custom-ecommerce', title: 'Shopify vs Custom E-commerce: How to Choose', date: 'March 2025', category: 'E-commerce', excerpt: 'The honest answer depends on your business stage, product complexity, and how much control you need.' },
  { slug: 'mobile-first-is-not-optional', title: 'Mobile-First Design Isn\'t Optional Anymore', date: 'February 2025', category: 'Design', excerpt: 'Over 70% of your visitors are on a phone. If your website doesn\'t feel great on mobile, it\'s already broken.' },
  { slug: 'website-redesign-without-losing-seo', title: 'How to Redesign Without Destroying Your SEO', date: 'January 2025', category: 'SEO', excerpt: 'A redesign that tanks your rankings is a step backward. Here\'s how to do it right.' },
  { slug: 'typography-in-web-design', title: 'Why Typography Is the Most Underrated Design Decision', date: 'December 2024', category: 'Design', excerpt: 'You can spot a cheap website by its fonts before you read a single word. Good typography builds trust before the headline.' },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Thinking Out Loud."
        subtitle="Honest writing on web design, business, and building things that matter."
        dark
      />

      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2d4a2d]/10">
            {posts.map((post, i) => (
              <article key={i} className="bg-[#f5f2ec] p-8 group cursor-pointer hover:bg-[#1e3a1e] transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-widest text-[#2d4a2d] group-hover:text-[#4a6741] transition-colors">{post.category}</span>
                  <span className="text-xs text-[#8a8a80] font-mono group-hover:text-[#f5f2ec]/30 transition-colors">{post.date}</span>
                </div>
                <h2 className="font-display text-xl text-[#1c1c1a] group-hover:text-[#f5f2ec] transition-colors leading-snug mb-4">
                  {post.title}
                </h2>
                <p className="text-sm text-[#8a8a80] group-hover:text-[#ede8e0]/50 transition-colors leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="mt-6 text-xs text-[#2d4a2d] group-hover:text-[#4a6741] transition-colors">Read more →</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
