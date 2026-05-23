import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Our Process',
  description: 'Learn how Builder House takes your project from initial brief to live website — a clear, collaborative process.',
}

const steps = [
  {
    number: '01',
    title: 'Discovery',
    duration: 'Days 1–3',
    description: 'We start by understanding your business, your audience, and what success looks like for you. No assumptions — just good questions and careful listening.',
    deliverables: ['Project brief', 'Goals & KPIs', 'Competitor audit', 'Content outline'],
  },
  {
    number: '02',
    title: 'Strategy & Architecture',
    duration: 'Days 4–7',
    description: 'We map out the site structure, user flows, and content hierarchy before a single pixel is designed. Structure first, beauty second.',
    deliverables: ['Sitemap', 'User flow diagrams', 'Content structure', 'Tech stack decision'],
  },
  {
    number: '03',
    title: 'Design',
    duration: 'Days 8–18',
    description: 'We create high-fidelity designs for all key pages, starting with mobile. You'll see realistic, fully designed screens — not rough wireframes.',
    deliverables: ['Mobile designs', 'Desktop designs', 'Design system', 'Interaction notes'],
  },
  {
    number: '04',
    title: 'Development',
    duration: 'Days 19–35',
    description: 'We build the site with clean, semantic code. Every component is responsive, accessible, and performance-optimised from day one.',
    deliverables: ['Fully coded site', 'CMS integration', 'Form setup', 'Performance audit'],
  },
  {
    number: '05',
    title: 'Review & Refine',
    duration: 'Days 36–42',
    description: 'You get a staging link to review. We work through your feedback together until every detail is exactly right.',
    deliverables: ['Staging environment', 'Feedback rounds', 'QA testing', 'Cross-device testing'],
  },
  {
    number: '06',
    title: 'Launch',
    duration: 'Day 43+',
    description: 'We handle the full launch — domain setup, SSL, performance checks, and a final walkthrough so you know how to manage your new site.',
    deliverables: ['Live deployment', 'Domain & DNS', 'Google Analytics', 'Handover & training'],
  },
]

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="How We Go From Brief to Beautiful."
        subtitle="A clear, structured process that respects your time and delivers results you can count on."
        dark
      />

      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="space-y-px bg-[#2d4a2d]/10">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#f5f2ec] p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                  <div className="md:col-span-1">
                    <span className="text-xs text-[#8a8a80] font-mono">{step.number}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h2 className="font-display text-2xl text-[#1c1c1a]">{step.title}</h2>
                    <p className="text-xs uppercase tracking-widest text-[#2d4a2d] mt-2">{step.duration}</p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[#8a8a80] text-sm leading-relaxed">{step.description}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-xs uppercase tracking-widest text-[#8a8a80] mb-3">Deliverables</p>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((d, j) => (
                        <li key={j} className="text-xs text-[#1c1c1a] flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#2d4a2d] shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
