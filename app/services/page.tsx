import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Builder House services — business websites, restaurant sites, Shopify stores, UI/UX design, landing pages, and more.',
}

const services = [
  {
    number: '01',
    title: 'Business Websites',
    description: 'A great business website is your best salesperson. We build professional, conversion-optimised sites that establish authority and drive enquiries.',
    includes: ['Custom design', 'Contact & lead forms', 'SEO foundations', 'Mobile-first build', 'Fast performance'],
  },
  {
    number: '02',
    title: 'Café & Restaurant Websites',
    description: 'Food is emotional. Your website should feel that way too. We build beautiful, functional sites for food and hospitality businesses.',
    includes: ['Online menu design', 'Reservation integration', 'Gallery & story sections', 'Google Maps embed', 'Mobile-optimised'],
  },
  {
    number: '03',
    title: 'E-commerce Websites',
    description: 'Sell online with confidence. We build custom e-commerce stores that are fast, intuitive, and built to convert browsers into buyers.',
    includes: ['Product catalogue', 'Cart & checkout', 'Payment integration', 'Inventory management', 'Order tracking'],
  },
  {
    number: '04',
    title: 'Shopify Stores',
    description: 'Shopify is the gold standard for retail e-commerce. We set up, customise, and launch fully configured Shopify stores ready to sell.',
    includes: ['Theme customisation', 'App integration', 'Product setup', 'Checkout optimisation', 'Analytics setup'],
  },
  {
    number: '05',
    title: 'Portfolio Websites',
    description: 'Let your work speak loudly. We build striking portfolio sites for architects, designers, photographers, and creative professionals.',
    includes: ['Project showcases', 'Case study layouts', 'Custom galleries', 'About & contact pages', 'PDF/CV integration'],
  },
  {
    number: '06',
    title: 'Brand Websites',
    description: 'Your brand deserves a home that matches its ambition. We design brand websites that tell your story and deepen audience connection.',
    includes: ['Brand storytelling', 'Team & culture pages', 'Press & media kit', 'Blog/journal setup', 'Social integration'],
  },
  {
    number: '07',
    title: 'Landing Pages',
    description: 'One page. One goal. Maximum impact. We design high-converting landing pages for product launches, ad campaigns, and lead generation.',
    includes: ['Clear value proposition', 'CTA optimisation', 'A/B test ready', 'Form integration', 'Analytics events'],
  },
  {
    number: '08',
    title: 'UI/UX Design',
    description: 'Interfaces that feel effortless are deeply considered. We provide full UI/UX design services — from wireframes to polished prototypes.',
    includes: ['User research', 'Wireframing', 'UI design', 'Prototyping', 'Handoff to dev'],
  },
  {
    number: '09',
    title: 'Website Redesign',
    description: 'Outdated design costs you customers every day. We redesign existing websites with fresh visuals, better UX, and improved performance.',
    includes: ['Design audit', 'Content migration', 'Performance improvements', 'SEO preservation', 'New visual identity'],
  },
  {
    number: '10',
    title: 'Responsive Websites',
    description: 'Every website we build is fully responsive. But for clients with legacy sites, we offer a dedicated responsiveness upgrade service.',
    includes: ['Mobile layout audit', 'Breakpoint fixes', 'Touch optimisation', 'Speed improvements', 'Cross-browser testing'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything Your Website Needs."
        subtitle="From concept to launch and beyond — we offer the full spectrum of web design and development services."
        dark
      />

      <section className="bg-[#f5f2ec] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="space-y-px bg-[#2d4a2d]/10">
            {services.map((service, i) => (
              <div key={i} className="bg-[#f5f2ec] p-8 md:p-10 group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                  <div className="md:col-span-1">
                    <span className="text-xs text-[#8a8a80] font-mono">{service.number}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="font-display text-2xl md:text-3xl text-[#1c1c1a]">{service.title}</h2>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-[#8a8a80] text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="md:col-span-3">
                    <ul className="space-y-1">
                      {service.includes.map((item, j) => (
                        <li key={j} className="text-xs text-[#8a8a80] flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#2d4a2d] rounded-full shrink-0" />
                          {item}
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

      {/* CTA */}
      <section className="bg-[#1e3a1e] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-[#f5f2ec]">Not sure what you need?</h2>
            <p className="text-[#ede8e0]/50 mt-2 text-sm">Write to us and we'll help you figure it out.</p>
          </div>
          <a
            href="mailto:hello@builderhouse.in"
            className="bg-[#f5f2ec] text-[#1a2e1a] px-7 py-3.5 text-sm font-medium hover:bg-white transition-colors shrink-0"
          >
            hello@builderhouse.in →
          </a>
        </div>
      </section>
    </>
  )
}
