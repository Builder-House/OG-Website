'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Builder House delivered beyond our expectations. Our new restaurant website brought in 40% more reservations in the first month.',
    author: 'Priya Menon',
    role: 'Owner, The Green Table',
  },
  {
    quote: "The team's attention to detail is remarkable. Every pixel feels intentional. Our Shopify store conversion rate doubled.",
    author: 'Arjun Kapoor',
    role: 'Founder, Marble & Oak',
  },
  {
    quote: 'Professional, communicative, and genuinely talented. They understood our brand better than agencies three times the price.',
    author: 'Sneha Reddy',
    role: 'Creative Director, Studio Prism',
  },
]

export default function HomeTestimonials() {
  return (
    <section className="bg-[#f5f2ec] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-xs uppercase tracking-widest text-[#2d4a2d] mb-16">Client Voices</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2d4a2d]/10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#f5f2ec] p-8 md:p-10"
            >
              <p className="font-display text-2xl text-[#1e3a1e] leading-snug mb-2">"</p>
              <p className="text-[#1c1c1a] text-base leading-relaxed mb-8 font-display italic">
                {t.quote}
              </p>
              <div>
                <p className="text-sm font-medium text-[#1c1c1a]">{t.author}</p>
                <p className="text-xs text-[#8a8a80] mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
