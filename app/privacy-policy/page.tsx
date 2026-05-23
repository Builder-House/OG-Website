import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Builder House privacy policy — how we collect, use, and protect your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy." />
      <section className="bg-[#f5f2ec] py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-xs text-[#8a8a80] mb-10">Last updated: January 2025</p>
          <div className="space-y-10 text-sm text-[#8a8a80] leading-relaxed">
            {[
              { heading: '1. Information We Collect', body: 'When you contact us via email at hello@builderhouse.in, we collect your name, email address, and any information you choose to share. We do not use contact forms, live chat, or any third-party data collection tools on this website.' },
              { heading: '2. How We Use Your Information', body: 'We use your information solely to respond to your enquiry and fulfil any project or service engagement you enter into with us. We do not sell, share, or rent your personal data to third parties.' },
              { heading: '3. Data Storage', body: 'Your email correspondence is stored securely in our email system. We retain project-related communications for up to 3 years for reference and legal purposes.' },
              { heading: '4. Cookies', body: 'This website uses only essential cookies required for basic website functionality. We do not use tracking, advertising, or analytics cookies without your consent.' },
              { heading: '5. Third-Party Services', body: 'We use standard web hosting services. Our website is hosted on Vercel. Please review Vercel\'s privacy policy for information about their data practices.' },
              { heading: '6. Your Rights', body: 'You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at hello@builderhouse.in.' },
              { heading: '7. Children\'s Privacy', body: 'Our services are not directed at children under 18. We do not knowingly collect personal data from children.' },
              { heading: '8. Changes to This Policy', body: 'We may update this policy from time to time. Changes will be posted on this page with an updated date.' },
              { heading: '9. Contact', body: 'For any privacy-related questions, contact us at hello@builderhouse.in.' },
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
