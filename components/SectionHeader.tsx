'use client'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left', light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-2xl`}
    >
      {eyebrow && (
        <p className={`text-xs uppercase tracking-widest mb-4 ${light ? 'text-[#4a6741]' : 'text-[#2d4a2d]'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-5 ${light ? 'text-[#f5f2ec]' : 'text-[#1c1c1a]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed ${light ? 'text-[#ede8e0]/70' : 'text-[#8a8a80]'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
