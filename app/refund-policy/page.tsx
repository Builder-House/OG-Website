import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Builder House refund policy — clear and honest terms for project cancellations.',
}

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Refund Policy." />
      <section className="bg-[#f5f2ec] py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-xs text-[#8a8a80] mb-10">Last updated: January 2025</p>
          <div className="space-y-10 text-sm text-[#8a8a80] leading-relaxed">
            {[
              { heading: '1. Deposits', body: 'The initial deposit (50% of the total project fee) is non-refundable once the project has commenced. This deposit covers initial discovery, planning, and design work.' },
              { heading: '2. Work in Progress', body: 'If a client cancels a project after work has begun, they are liable for payment for all work completed to date. An itemised account of work completed will be provided.' },
              { heading: '3. Pre-Commencement Cancellation', body: 'If a project is cancelled before any work has commenced and before the deposit has been invoiced, no charges will apply. If the deposit has already been paid but no work has started, a full refund of the deposit will be issued.' },
              { heading: '4. Completed Projects', body: 'No refunds are issued for completed and delivered projects. Once a website has been launched and handed over, the project is considered complete.' },
              { heading: '5. Disputes', body: 'If you are dissatisfied with any aspect of the work, please contact us at hello@builderhouse.in before raising a dispute. We are committed to resolving issues fairly and professionally.' },
              { heading: '6. Exceptional Circumstances', body: 'In cases where Builder House is unable to fulfil the agreed scope due to our own circumstances, we will provide a full refund for any work not yet delivered.' },
              { heading: '7. Contact', body: 'For refund-related enquiries, contact hello@builderhouse.in. We respond within 48 hours.' },
            ].map((section, i) => (
              <div key={i}>
                <h2 className="font-display text-xl text-[#1c1c1a] mb-3">{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
