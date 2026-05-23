import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Builder House. Tell us about your project and we\'ll respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start a Conversation."
        subtitle="Tell us what you're building. We'll take it from there."
        dark
      />

      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#2d4a2d] mb-8">The Only Way to Reach Us</p>
              <a
                href="mailto:hello@builderhouse.in"
                className="font-display text-3xl md:text-4xl text-[#1c1c1a] hover:text-[#1e3a1e] transition-colors underline underline-offset-8 decoration-[#2d4a2d]/30"
              >
                hello@builderhouse.in
              </a>
              <p className="text-[#8a8a80] text-sm leading-relaxed mt-8 max-w-sm">
                We respond to all enquiries within 24 hours. If you'd like a faster response, mention your timeline in the subject line.
              </p>

              <div className="mt-16 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#8a8a80] mb-2">What to include</p>
                  <ul className="space-y-2 text-sm text-[#1c1c1a]">
                    {[
                      'Your business name and what you do',
                      'Type of website you need',
                      'Any reference sites you like',
                      'Your rough timeline',
                      'Approximate budget range (optional)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#2d4a2d] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#8a8a80] mb-2">Founded by</p>
                  <p className="text-sm text-[#1c1c1a]">Divyansh Agarwal & Bhaskar Rao</p>
                </div>
              </div>
            </div>

            {/* Right — visual */}
            <div className="bg-[#1a2e1a] p-10 flex flex-col justify-between min-h-[360px]">
              <p className="text-xs uppercase tracking-widest text-[#4a6741]">Builder House</p>
              <div>
                <p className="font-display text-4xl text-[#f5f2ec] leading-tight mb-4">
                  "We reply within 24 hours. Always."
                </p>
                <p className="text-[#ede8e0]/40 text-sm">No wait queues. No automated responses. Real people reading your email.</p>
              </div>
              <div className="border-t border-[#4a6741]/20 pt-6 mt-6">
                <p className="text-xs text-[#ede8e0]/30">© {new Date().getFullYear()} Builder House</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
