import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://builderhouse.in'),
  title: {
    default: 'Builder House — Premium Web Design & Development Agency',
    template: '%s | Builder House',
  },
  description:
    'Builder House crafts premium websites for businesses, restaurants, cafés, and brands. Thoughtful design. Clean code. Results that matter.',
  keywords: [
    'web design agency',
    'website development',
    'premium websites',
    'restaurant websites',
    'e-commerce',
    'Shopify',
    'UI UX design',
    'Builder House',
  ],
  authors: [{ name: 'Builder House' }],
  creator: 'Builder House',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://builderhouse.in',
    siteName: 'Builder House',
    title: 'Builder House — Premium Web Design & Development Agency',
    description:
      'We design and develop premium websites for ambitious brands and businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Builder House — Premium Web Design & Development Agency',
    description:
      'We design and develop premium websites for ambitious brands and businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
