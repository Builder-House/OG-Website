'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'

const services = [
  { title: 'Business Websites', description: 'Professional, conversion-focused websites that represent your brand with authority.' },
  { title: 'Restaurant & Café Sites', description: 'Beautiful menus, reservation flows, and brand storytelling for food businesses.' },
  { title: 'E-commerce Websites', description: 'Custom online stores built for performance, usability, and sales growth.' },
  { title: 'Shopify Stores', description: 'Fully configured Shopify stores with custom themes and seamless checkout.' },
  { title: 'Portfolio Websites', description: 'Striking portfolio sites for creatives, architects, and professionals.' },
  { title: 'UI/UX Design', description: 'Research-led interface design that turns visitors into loyal customers.' },
  { title: 'Landing Pages', description: 'High-converting landing pages crafted for campaigns and product launches.' },
  { title: 'Website Redesign', description: 'Breathe new life into outdated websites without losing what already works.' },
]

export default function HomeServices() {
  return (
    <section className="bg-[#f5f2ec] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="What We Do"
            title={`Websites Built\nfor Business.`}
            subtitle="From first impression to final conversion — we handle every part of your web presence."
          />
          <Link
            href="/services"
            className="text-sm text-[#1e3a1e] border-b border-[#1e3a1e] pb-0.5 hover:text-[#2d4a2d] transition-colors shrink-0"
          >
            View All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2d4a2d]/10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              className="bg-[#f5f2ec] p-8 group hover:bg-[#1e3a1e] transition-colors duration-300 cursor-default"
            >
              <p className="text-xs text-[#8a8a80] group-hover:text-[#4a6741] mb-4 font-mono">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display text-xl text-[#1c1c1a] group-hover:text-[#f5f2ec] mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-[#8a8a80] group-hover:text-[#ede8e0]/60 leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
