'use client'
import { useState } from 'react'
import PageHero from '@/components/PageHero'

const faqs = [
  { q: 'How much does a website cost?', a: 'Every project is different, so we don't publish flat rates. After understanding your needs, we provide a detailed, itemised quote. We work with businesses at various budget levels and will always be upfront about what's achievable within your budget.' },
  { q: 'How long does it take to build a website?', a: 'Typically 4–8 weeks from kickoff to launch, depending on the size and complexity. A simple business website may be done in 3 weeks. A large e-commerce store may take 10 weeks. We provide a clear timeline at the start of every project.' },
  { q: 'Do you work with businesses outside India?', a: 'Yes. We work with clients across India and internationally. Our primary communication is via email, and we're comfortable with asynchronous workflows across time zones.' },
  { q: 'What information do you need to get started?', a: 'A brief description of your business, the type of website you need, any reference websites you like, and your rough timeline and budget expectations. From there, we'll ask more specific questions.' },
  { q: 'Will I be able to update the website myself?', a: 'Yes. We build on platforms and CMS tools that are easy to manage. We also provide a handover walkthrough so you can update content, add pages, and manage your site confidently.' },
  { q: 'Do you offer ongoing maintenance?', a: 'We offer optional maintenance packages for clients who want ongoing support, updates, and monitoring. Details are discussed and agreed upon after the initial project is complete.' },
  { q: 'Do you handle hosting and domain setup?', a: 'Yes. We can assist with domain registration, DNS configuration, and hosting setup. We work with reliable hosting providers and will recommend the best option for your site.' },
  { q: 'Can you redesign my existing website?', a: 'Absolutely. Redesigns are one of our most common projects. We audit your current site, identify what's working and what isn't, and rebuild with fresh design while preserving your SEO foundation.' },
  { q: 'Do you provide SEO services?', a: 'Every website we build includes SEO foundations — proper structure, metadata, speed optimisation, and sitemap setup. We don't offer ongoing SEO campaigns, but we set you up for success from day one.' },
  { q: 'How do we communicate during the project?', a: 'Primarily by email. We send regular updates, share work-in-progress via staging links, and maintain a clear feedback loop throughout. We don't use calls unless specifically requested.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#2d4a2d]/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-6 flex items-center justify-between gap-4 group"
      >
        <span className="font-display text-lg text-[#1c1c1a] group-hover:text-[#1e3a1e] transition-colors">{q}</span>
        <span className={`text-[#2d4a2d] text-xl transition-transform duration-300 shrink-0 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="pb-6 pr-8">
          <p className="text-[#8a8a80] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers to the Questions We Hear Most."
        subtitle="If something isn't covered here, email us directly."
        dark
      />
      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
          <div className="mt-16 text-center">
            <p className="text-[#8a8a80] text-sm mb-4">Still have a question?</p>
            <a href="mailto:hello@builderhouse.in" className="inline-block bg-[#1e3a1e] text-[#f5f2ec] px-6 py-3 text-sm hover:bg-[#2d4a2d] transition-colors">
              Email Us →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
