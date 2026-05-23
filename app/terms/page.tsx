import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Builder House terms and conditions governing the use of our website and services.',
}

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions." />
      <section className="bg-[#f5f2ec] py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-xs text-[#8a8a80] mb-10">Last updated: January 2025</p>
          <div className="space-y-10 text-sm text-[#8a8a80] leading-relaxed">
            {[
              { heading: '1. Agreement', body: 'By engaging Builder House for web design and development services, you agree to these terms. These terms apply to all projects, unless a separate written agreement is signed.' },
              { heading: '2. Services', body: 'Builder House provides web design, development, and related digital services as agreed in the project scope. The scope of each project is defined via email correspondence and a written quote or proposal.' },
              { heading: '3. Payment Terms', body: 'A deposit of 50% is required before work begins. The remaining balance is due on completion, prior to the website going live. We accept bank transfers. All prices are in INR unless otherwise stated.' },
              { heading: '4. Revisions', body: 'Each project includes a defined number of revision rounds as stated in the proposal. Additional revision rounds beyond the agreed scope will be charged at our standard hourly rate.' },
              { heading: '5. Client Responsibilities', body: 'Clients are responsible for providing content (text, images, logos) in a timely manner. Delays in content delivery may affect project timelines, for which Builder House is not liable.' },
              { heading: '6. Intellectual Property', body: 'Upon receipt of final payment, you own the final website design and code. Builder House retains the right to display the completed project in our portfolio unless otherwise agreed in writing.' },
              { heading: '7. Confidentiality', body: 'We treat all client information as confidential. We will not share your business information, strategy, or project details with third parties without your written consent.' },
              { heading: '8. Limitation of Liability', body: 'Builder House is not liable for indirect, incidental, or consequential damages arising from the use of your website. Our total liability is limited to the project fee paid.' },
              { heading: '9. Termination', body: 'Either party may terminate the project with written notice. In the event of termination, the client is liable for all work completed to date. The deposit is non-refundable after work has commenced.' },
              { heading: '10. Governing Law', body: 'These terms are governed by the laws of India. Any disputes shall be resolved under Indian jurisdiction.' },
              { heading: '11. Contact', body: 'For any questions about these terms, contact hello@builderhouse.in.' },
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
