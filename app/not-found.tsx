import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1a2e1a] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-widest text-[#4a6741] mb-6">404</p>
      <h1 className="font-display text-5xl md:text-7xl text-[#f5f2ec] leading-tight mb-6">
        Page Not Found.
      </h1>
      <p className="text-[#ede8e0]/50 text-base max-w-sm mb-12">
        The page you're looking for doesn't exist or has been moved. It happens.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-block bg-[#f5f2ec] text-[#1a2e1a] px-7 py-3.5 text-sm font-medium hover:bg-white transition-colors"
        >
          Back to Home
        </Link>
        <a
          href="mailto:hello@builderhouse.in"
          className="inline-block border border-[#f5f2ec]/20 text-[#f5f2ec] px-7 py-3.5 text-sm hover:border-[#f5f2ec]/50 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}
