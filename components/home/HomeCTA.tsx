'use client'
import { motion } from 'framer-motion'

export default function HomeCTA() {
  return (
    <section className="bg-[#1e3a1e] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-[#4a6741] mb-6"
        >
          Ready to Begin?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl text-[#f5f2ec] leading-tight mb-6 max-w-3xl mx-auto"
        >
          Let's Build Something Worth Visiting.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#ede8e0]/50 text-base max-w-md mx-auto mb-10"
        >
          Tell us about your project and we'll get back to you within 24 hours.
        </motion.p>
        <motion.a
          href="mailto:hello@builderhouse.in"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-[#f5f2ec] text-[#1a2e1a] px-8 py-4 text-sm font-medium hover:bg-white transition-colors duration-200"
        >
          hello@builderhouse.in
          <span>→</span>
        </motion.a>
      </div>
    </section>
  )
}
