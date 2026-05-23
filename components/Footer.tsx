import Link from 'next/link'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Business Websites', href: '/services' },
    { label: 'E-commerce & Shopify', href: '/services' },
    { label: 'Restaurant & Café', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
    { label: 'Website Redesign', href: '/services' },
  ],
  Resources: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Our Process', href: '/process' },
    { label: 'Industries', href: '/industries' },
    { label: 'FAQ', href: '/faq' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0c] text-[#f5f2ec]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        {/* Top Section */}
        <div className="border-b border-white/10 pb-16 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#1e3a1e] flex items-center justify-center">
                  <span className="text-[#f5f2ec] text-xs font-mono font-medium">BH</span>
                </div>
                <span className="font-display text-xl tracking-tight">Builder House</span>
              </div>
              <p className="text-[#8a8a80] text-sm leading-relaxed max-w-xs">
                We design and build premium websites for businesses that value craft, clarity, and results.
              </p>
              <div className="mt-8">
                <p className="text-xs text-[#8a8a80] uppercase tracking-widest mb-2">Get in touch</p>
                <a
                  href="mailto:hello@builderhouse.in"
                  className="text-[#f5f2ec] hover:text-[#4a6741] transition-colors duration-200 text-sm"
                >
                  hello@builderhouse.in
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <p className="text-xs uppercase tracking-widest text-[#8a8a80] mb-4">{category}</p>
                  <ul className="space-y-2.5">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-[#ede8e0]/70 hover:text-[#f5f2ec] transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[#8a8a80]">
            © {new Date().getFullYear()} Builder House. All rights reserved.
          </p>
          <p className="text-xs text-[#8a8a80]">
            Founded by Divyansh Agarwal & Bhaskar Rao
          </p>
        </div>
      </div>
    </footer>
  )
}
