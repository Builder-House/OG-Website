'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeHero() {
  return (
    <section className="relative min-h-screen bg-[#1a2e1a] flex flex-col justify-end overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f5f2ec' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Large background number */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[30vw] font-display text-[#f5f2ec]/[0.02] leading-none select-none pointer-events-none">
        BH
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-20 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-widest text-[#4a6741] mb-8"
            >
              Web Design & Development Agency
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[clamp(2.8rem,8vw,6.5rem)] text-[#f5f2ec] leading-[1.0] tracking-tight mb-8"
            >
              We Build
              <br />
              <em className="not-italic text-[#4a6741]">Websites</em>
              <br />
              That Work.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#ede8e0]/60 text-base md:text-lg leading-relaxed max-w-lg"
            >
              Premium web design and development for businesses that value craft, clarity, and real results. From restaurant menus to Shopify stores — we build it right.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-start gap-4 mt-10"
            >
              <a
                href="mailto:hello@builderhouse.in"
                className="inline-flex items-center gap-2 bg-[#f5f2ec] text-[#1a2e1a] px-7 py-3.5 text-sm font-medium hover:bg-white transition-colors duration-200"
              >
                Start Your Project
                <span>→</span>
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-[#f5f2ec]/20 text-[#f5f2ec] px-7 py-3.5 text-sm hover:border-[#f5f2ec]/50 transition-colors duration-200"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-block border-l border-[#4a6741]/40 pl-6"
            >
              <p className="text-[#4a6741] text-xs uppercase tracking-widest mb-1">Founded by</p>
              <p className="text-[#ede8e0]/80 text-sm">Divyansh Agarwal</p>
              <p className="text-[#ede8e0]/80 text-sm">Bhaskar Rao</p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 border-t border-[#f5f2ec]/10 pt-6 overflow-hidden"
        >
          <div className="flex gap-12 text-xs uppercase tracking-widest text-[#f5f2ec]/20 whitespace-nowrap">
            {['Business Websites', 'Shopify Stores', 'Restaurant Websites', 'E-commerce', 'UI/UX Design', 'Landing Pages', 'Portfolio Sites', 'Brand Websites', 'Website Redesign'].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
