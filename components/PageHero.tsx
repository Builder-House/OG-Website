'use client'
import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  dark?: boolean
}

export default function PageHero({ eyebrow, title, subtitle, dark = false }: PageHeroProps) {
  return (
    <section className={`pt-40 pb-20 md:pt-48 md:pb-28 ${dark ? 'bg-[#1a2e1a]' : 'bg-[#f5f2ec]'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-xs uppercase tracking-widest mb-6 ${dark ? 'text-[#4a6741]' : 'text-[#2d4a2d]'}`}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`font-display text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl ${dark ? 'text-[#f5f2ec]' : 'text-[#1c1c1a]'}`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className={`mt-6 text-base md:text-lg leading-relaxed max-w-xl ${dark ? 'text-[#ede8e0]/60' : 'text-[#8a8a80]'}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
