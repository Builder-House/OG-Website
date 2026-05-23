import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Deep dives into how Builder House helped clients achieve measurable results through thoughtful web design.',
}

const caseStudies = [
  {
    client: 'Verdant Kitchen',
    category: 'Restaurant Website',
    headline: 'How a new website increased reservations by 40% in 30 days.',
    challenge: 'Verdant Kitchen had an outdated website with no online booking, poor mobile experience, and a menu that was nearly impossible to read on a phone.',
    solution: 'We rebuilt the site from scratch — a beautiful, mobile-first design with an integrated reservation system, a digital menu, and a brand story section.',
    results: ['+40% reservations', '+65% mobile traffic', '3× faster load time', 'Google Maps integration'],
    color: '#2d4a2d',
  },
  {
    client: 'Marble & Oak',
    category: 'Shopify Store',
    headline: 'How premium design doubled their Shopify conversion rate.',
    challenge: 'Marble & Oak was using a generic Shopify theme that didn\'t match their luxury furniture brand. Visitors weren\'t converting and average order value was stagnating.',
    solution: 'We designed a fully custom Shopify theme with editorial photography layouts, refined typography, and a streamlined checkout experience.',
    results: ['2× conversion rate', '+55% AOV', 'Custom product pages', 'Brand-aligned design'],
    color: '#1a2e1a',
  },
  {
    client: 'Studio Prism',
    category: 'Portfolio Website',
    headline: 'Helping an architecture firm win better clients through better presentation.',
    challenge: 'Studio Prism was struggling to communicate the quality of their work online. Their old portfolio site used low-res images and cluttered layouts.',
    solution: 'We built a cinematic portfolio site with full-bleed project presentations, a case study format, and a strong about page that attracted premium clients.',
    results: ['3 new premium projects', '2× enquiry quality', 'Featured in design press', 'Reduced bounce rate 45%'],
    color: '#3d5c3a',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real Projects. Real Results."
        subtitle="We measure success by what changes for our clients after we launch."
        dark
      />

      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-8">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-[#f5f2ec] border border-[#2d4a2d]/10">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left colored */}
                <div className="p-10 md:p-14 flex flex-col justify-between min-h-[300px]" style={{ backgroundColor: cs.color }}>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#f5f2ec]/40 mb-2">{cs.category}</p>
                    <h2 className="font-display text-2xl md:text-3xl text-[#f5f2ec] leading-tight">{cs.client}</h2>
                  </div>
                  <p className="font-display text-xl text-[#ede8e0]/80 italic leading-snug mt-8">{cs.headline}</p>
                </div>
                {/* Right content */}
                <div className="p-10 md:p-14">
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-[#8a8a80] mb-2">The Challenge</p>
                    <p className="text-sm text-[#1c1c1a] leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-[#8a8a80] mb-2">Our Solution</p>
                    <p className="text-sm text-[#1c1c1a] leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#8a8a80] mb-3">Results</p>
                    <div className="flex flex-wrap gap-2">
                      {cs.results.map((r, j) => (
                        <span key={j} className="text-xs bg-[#2d4a2d]/8 text-[#1e3a1e] border border-[#2d4a2d]/20 px-3 py-1.5">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
