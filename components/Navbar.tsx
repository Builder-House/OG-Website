'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#f5f2ec]/95 backdrop-blur-sm border-b border-[#2d4a2d]/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#1e3a1e] flex items-center justify-center">
              <span className="text-[#f5f2ec] text-xs font-mono font-medium tracking-wider">BH</span>
            </div>
            <span className="font-display text-[#1c1c1a] text-lg tracking-tight">
              Builder House
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-[#1e3a1e] font-medium'
                    : 'text-[#8a8a80] hover:text-[#1c1c1a]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:hello@builderhouse.in"
              className="text-sm bg-[#1e3a1e] text-[#f5f2ec] px-5 py-2.5 hover:bg-[#2d4a2d] transition-colors duration-200"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-[#1c1c1a] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-4 h-px bg-[#1c1c1a] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-[#1c1c1a] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#f5f2ec] flex flex-col pt-[72px]"
          >
            <nav className="flex flex-col px-8 pt-12 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-3xl text-[#1c1c1a] hover:text-[#1e3a1e] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="mt-6"
              >
                <a
                  href="mailto:hello@builderhouse.in"
                  className="inline-block text-sm bg-[#1e3a1e] text-[#f5f2ec] px-6 py-3 hover:bg-[#2d4a2d] transition-colors"
                >
                  Start a Project →
                </a>
              </motion.div>
            </nav>
            <div className="mt-auto px-8 pb-10">
              <p className="text-sm text-[#8a8a80]">hello@builderhouse.in</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
