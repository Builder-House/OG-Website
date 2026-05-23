import type { Metadata } from 'next'
import HomeHero from '@/components/home/HomeHero'
import HomeServices from '@/components/home/HomeServices'
import HomePortfolio from '@/components/home/HomePortfolio'
import HomeStats from '@/components/home/HomeStats'
import HomeTestimonials from '@/components/home/HomeTestimonials'
import HomeCTA from '@/components/home/HomeCTA'

export const metadata: Metadata = {
  title: 'Builder House — Premium Web Design & Development Agency',
  description:
    'Builder House designs and builds premium websites for businesses, restaurants, brands, and e-commerce stores. Thoughtful design. Clean code.',
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeServices />
      <HomePortfolio />
      <HomeTestimonials />
      <HomeCTA />
    </>
  )
}
