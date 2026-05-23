'use client'
import { motion } from 'framer-motion'

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '3', label: 'Years of Craft' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '11', label: 'Service Types' },
]

export default function HomeStats() {
  return (
    <section className="bg-[#f5f2ec] border-b border-[#2d4a2d]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2d4a2d]/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#f5f2ec] text-center py-10 px-6"
            >
              <p className="font-display text-4xl md:text-5xl text-[#1e3a1e] mb-2">{stat.number}</p>
              <p className="text-xs uppercase tracking-widest text-[#8a8a80]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
