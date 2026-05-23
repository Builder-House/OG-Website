import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse our portfolio of premium websites — restaurants, e-commerce stores, portfolios, and brand sites.',
}

const projects = [
  { title: 'Verdant Kitchen', category: 'Restaurant Website', year: '2024', tags: ['Design', 'Development', 'SEO'], color: '#2d4a2d' },
  { title: 'Marble & Oak', category: 'E-commerce — Shopify', year: '2024', tags: ['Shopify', 'Design', 'Development'], color: '#1a2e1a' },
  { title: 'Studio Prism', category: 'Portfolio Website', year: '2023', tags: ['Design', 'Development'], color: '#3d5c3a' },
  { title: 'Harlow Collective', category: 'Brand Website', year: '2023', tags: ['Brand', 'Blog', 'Design'], color: '#1e3a1e' },
  { title: 'Copper & Clay', category: 'Café Website', year: '2024', tags: ['Design', 'Menu', 'Reservations'], color: '#4a6741' },
  { title: 'Northside Legal', category: 'Business Website', year: '2024', tags: ['Business', 'Design', 'SEO'], color: '#1a2e1a' },
  { title: 'The Botanist Bar', category: 'Restaurant & Bar', year: '2023', tags: ['Design', 'Development'], color: '#2d4a2d' },
  { title: 'Veda Collective', category: 'Landing Page', year: '2024', tags: ['Landing Page', 'Conversion'], color: '#1e3a1e' },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work Speaks Louder Than Promises."
        subtitle="A selection of websites we've designed and built for brands, businesses, and restaurants."
        dark
      />

      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group cursor-pointer"
                style={{ backgroundColor: project.color }}
              >
                <div className="aspect-[3/2] p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#f5f2ec]/40">{project.category}</span>
                    <span className="text-xs font-mono text-[#f5f2ec]/30">{project.year}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-[#f5f2ec] group-hover:translate-x-1 transition-transform duration-200">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="text-xs text-[#f5f2ec]/40 border border-[#f5f2ec]/10 px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
