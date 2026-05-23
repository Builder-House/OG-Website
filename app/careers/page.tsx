import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Builder House — a small, focused web design agency that values craft, clarity, and doing excellent work.',
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="We're Always Looking for Exceptional People."
        subtitle="Builder House is a small team. We grow slowly and deliberately, and every hire matters."
        dark
      />

      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#2d4a2d] mb-6">Our Culture</p>
              <div className="space-y-5 text-[#8a8a80] text-sm leading-relaxed">
                <p>We believe the best work comes from people who care deeply about craft. Not just "getting it done" — but doing it in a way that makes you genuinely proud.</p>
                <p>We're remote-friendly, asynchronous-first, and we don't believe in performative busyness. Results matter. Process matters. Pretending to look busy doesn't.</p>
                <p>We're a small team on purpose. That means every person has real ownership over their work, and real influence over how we grow.</p>
              </div>

              <div className="mt-12">
                <p className="text-xs uppercase tracking-widest text-[#2d4a2d] mb-6">What We Look For</p>
                <ul className="space-y-3 text-sm text-[#1c1c1a]">
                  {['Strong portfolio and genuine craft', 'Comfortable with feedback and iteration', 'Self-directed and reliable', 'Clear written communicator', 'Obsessed with quality, not speed'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#2d4a2d] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#2d4a2d] mb-6">Open Roles</p>
              <div className="space-y-px bg-[#2d4a2d]/10">
                {[
                  { role: 'Web Designer (UI/UX)', type: 'Part-time / Project-based' },
                  { role: 'Frontend Developer', type: 'Part-time / Project-based' },
                  { role: 'Content Strategist', type: 'Freelance' },
                ].map((job, i) => (
                  <div key={i} className="bg-[#f5f2ec] p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg text-[#1c1c1a]">{job.role}</h3>
                      <p className="text-xs text-[#8a8a80] mt-1">{job.type}</p>
                    </div>
                    <a href="mailto:hello@builderhouse.in" className="text-xs text-[#1e3a1e] border-b border-[#1e3a1e] pb-0.5">Apply →</a>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#8a8a80] mt-6">
                Don't see a role that fits? Send us your portfolio anyway — we'd love to hear from talented people.
              </p>
              <a href="mailto:hello@builderhouse.in" className="inline-block mt-4 text-sm bg-[#1e3a1e] text-[#f5f2ec] px-6 py-3 hover:bg-[#2d4a2d] transition-colors">
                hello@builderhouse.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
