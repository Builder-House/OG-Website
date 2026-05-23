import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'The story behind Builder House — why we started, what drives us, and where we\'re going.',
}

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Why We Started Builder House."
        dark
      />

      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="prose-custom space-y-8 text-[#8a8a80] text-base leading-relaxed">
            <p className="font-display text-2xl text-[#1c1c1a] leading-snug">
              Every great business deserves a website that does it justice. We started Builder House because too many didn't have one.
            </p>
            <p>
              Divyansh and Bhaskar met while working in the web and tech industry, where they kept seeing the same problem: businesses with real quality — great food, excellent services, beautiful products — held back by websites that communicated none of it.
            </p>
            <p>
              Templated. Slow. Unclear. Embarrassing to share. These websites were losing their owners customers every single day, and nobody was helping them fix it affordably and properly.
            </p>
            <p>
              So they decided to do something about it. Builder House was built on the belief that premium web design shouldn't be reserved for corporations and venture-backed startups. A neighbourhood restaurant, a solo architect, a growing boutique brand — they all deserve a website that works as hard as they do.
            </p>
            <p>
              We started small, taking on projects we believed in, refusing to compromise on quality, and building a reputation one launch at a time. Every project we take on is one we're genuinely proud to put our name on.
            </p>
            <p>
              Today, Builder House works with businesses across India and internationally. We're still a small team by choice — because staying small means staying excellent.
            </p>
            <div className="pt-6 border-t border-[#2d4a2d]/10">
              <p className="text-sm text-[#1c1c1a]">— Divyansh Agarwal & Bhaskar Rao, Co-Founders</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
