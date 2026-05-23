'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'

const projects = [
  {
    title: 'Verdant Kitchen',
    category: 'Restaurant Website',
    year: '2024',
    description: 'Full-service restaurant website with online menu and reservation system.',
    color: '#2d4a2d',
  },
  {
    title: 'Marble & Oak',
    category: 'E-commerce Store',
    year: '2024',
    description: 'Premium furniture brand with Shopify integration and editorial photography.',
    color: '#1a2e1a',
  },
  {
    title: 'Studio Prism',
    category: 'Portfolio Website',
    year: '2023',
    description: 'Architectural studio portfolio with cinematic project presentations.',
    color: '#3d5c3a',
  },
  {
    title: 'Harlow Collective',
    category: 'Brand Website',
    year: '2023',
    description: 'Multi-brand collective website with editorial blog and team pages.',
    color: '#1e3a1e',
  },
]

export default function HomePortfolio() {
  return (
    <section className="bg-[#0e0e0c] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Selected Work"
            title={`Work We're\nProud Of.`}
            subtitle="A curated selection of projects that show what thoughtful web design can achieve."
            light
          />
          <Link
            href="/portfolio"
            className="text-sm text-[#4a6741] border-b border-[#4a6741] pb-0.5 hover:text-[#f5f2ec] hover:border-[#f5f2ec] transition-colors shrink-0"
          >
            See Full Portfolio →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ backgroundColor: project.color }}
            >
              <div className="aspect-[4/3] p-10 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#f5f2ec]/40">{project.category}</span>
                  <span className="text-xs text-[#f5f2ec]/30 font-mono">{project.year}</span>
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-[#f5f2ec] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#ede8e0]/50 text-sm">{project.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#f5f2ec]/40 text-xs group-hover:text-[#f5f2ec]/70 transition-colors">
                    <span>View Project</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
