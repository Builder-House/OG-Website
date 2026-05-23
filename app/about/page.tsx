import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Builder House — a premium web design and development agency founded by Divyansh Agarwal and Bhaskar Rao.',
}

const values = [
  { title: 'Craft First', description: 'We treat every website as a handcrafted product, not a template checkbox exercise.' },
  { title: 'Results-Driven', description: 'Beautiful design must also perform. We measure success by the results our clients see.' },
  { title: 'Transparent Process', description: 'No mystery boxes. You know what we're building, why, and when it ships.' },
  { title: 'Long-Term Thinking', description: 'We build for where you want to be in three years, not just this quarter.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Builder House"
        title="Designed by People. Built with Purpose."
        subtitle="We're a small, focused web design agency that believes great websites come from genuine care — for the craft, the client, and the end user."
        dark
      />

      {/* Story Section */}
      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionHeader
              eyebrow="Our Origin"
              title="Born from frustration with mediocre design."
            />
            <div className="space-y-5 text-[#8a8a80] leading-relaxed text-base">
              <p>
                Builder House was founded by Divyansh Agarwal and Bhaskar Rao after years of watching businesses settle for websites that were either overpriced, underwhelming, or both.
              </p>
              <p>
                We started with a simple belief: every business, regardless of size, deserves a website that actually represents them well and helps them grow.
              </p>
              <p>
                Today, we work with restaurants, brands, startups, and established businesses to craft web experiences that are premium without being pretentious, and functional without being forgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#1a2e1a] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            eyebrow="The Team"
            title="The People Behind the Work."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-2xl">
            {[
              { name: 'Divyansh Agarwal', role: 'Co-Founder — Design & Strategy', bio: 'Leads visual design, brand direction, and client relationships. Passionate about the intersection of aesthetics and business outcomes.' },
              { name: 'Bhaskar Rao', role: 'Co-Founder — Engineering & Development', bio: 'Leads technical architecture, development, and deployment. Ensures every site is fast, accessible, and built to last.' },
            ].map((person, i) => (
              <div key={i} className="border border-[#4a6741]/20 p-8">
                <div className="w-12 h-12 bg-[#2d4a2d] mb-6 flex items-center justify-center">
                  <span className="font-display text-[#f5f2ec] text-lg">{person.name[0]}</span>
                </div>
                <h3 className="font-display text-2xl text-[#f5f2ec] mb-1">{person.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[#4a6741] mb-4">{person.role}</p>
                <p className="text-[#ede8e0]/50 text-sm leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader eyebrow="What We Stand For" title="How We Work." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2d4a2d]/10 mt-16">
            {values.map((v, i) => (
              <div key={i} className="bg-[#f5f2ec] p-8">
                <p className="text-xs text-[#8a8a80] font-mono mb-4">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-display text-xl text-[#1c1c1a] mb-3">{v.title}</h3>
                <p className="text-sm text-[#8a8a80] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
