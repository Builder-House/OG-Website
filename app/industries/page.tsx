import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Builder House builds premium websites for restaurants, retail, professional services, creative agencies, and more.',
}

const industries = [
  { title: 'Restaurants & Fine Dining', description: 'Websites that capture atmosphere, showcase menus, and make reservations effortless.', examples: ['Fine dining', 'Casual restaurants', 'Cloud kitchens', 'Food delivery brands'] },
  { title: 'Cafés & Coffee Brands', description: 'Warm, inviting digital spaces that match your café\'s character and connect with your community.', examples: ['Independent cafés', 'Coffee chains', 'Bakeries', 'Brunch spots'] },
  { title: 'Retail & E-commerce', description: 'Online stores that make buying simple and build trust at every step of the journey.', examples: ['Fashion', 'Home goods', 'Lifestyle brands', 'Gift shops'] },
  { title: 'Professional Services', description: 'Authoritative, clean websites for firms and practitioners that build credibility and bring in leads.', examples: ['Law firms', 'Consultancies', 'Financial advisors', 'HR firms'] },
  { title: 'Creative Studios', description: 'Portfolio sites and agency websites that let the work do the talking.', examples: ['Architecture firms', 'Design studios', 'Photography', 'Film production'] },
  { title: 'Health & Wellness', description: 'Calming, trustworthy websites for wellness brands that put people first.', examples: ['Yoga studios', 'Clinics', 'Wellness apps', 'Nutrition brands'] },
  { title: 'Hospitality & Travel', description: 'Immersive sites for hotels, resorts, and travel brands that inspire bookings.', examples: ['Boutique hotels', 'B&Bs', 'Travel agencies', 'Tour operators'] },
  { title: 'Real Estate', description: 'Property websites with clean listings, search, and enquiry tools that convert visitors.', examples: ['Agencies', 'Developers', 'Interior firms', 'Home staging'] },
]

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Specialists in the Sectors That Matter Most."
        subtitle="We bring sector-specific knowledge to every project — understanding your customers, competitors, and context."
        dark
      />

      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2d4a2d]/10">
            {industries.map((ind, i) => (
              <div key={i} className="bg-[#f5f2ec] p-8 md:p-10">
                <p className="text-xs font-mono text-[#8a8a80] mb-4">{String(i + 1).padStart(2, '0')}</p>
                <h2 className="font-display text-2xl text-[#1c1c1a] mb-3">{ind.title}</h2>
                <p className="text-[#8a8a80] text-sm leading-relaxed mb-5">{ind.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.examples.map((ex, j) => (
                    <span key={j} className="text-xs bg-[#2d4a2d]/8 text-[#2d4a2d] border border-[#2d4a2d]/15 px-2.5 py-1">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
