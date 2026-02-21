'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering client-only features
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return;
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, mounted]);

  const navLinks = [
    { href: '/bathroom', label: 'Bathroom' },
    { href: '/kitchen', label: 'Kitchen' },
    { href: '/flooring', label: 'Flooring' },
  ];

  // Use a consistent initial state to prevent hydration mismatches
  const headerBgClass = mounted && isHomePage && !isMobileMenuOpen 
    ? 'bg-transparent' 
    : 'bg-white/95 backdrop-blur-sm shadow-md';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0"
              >
                <Image
                  src="/img/website_logo.png"
                  alt="Summit Core Logo"
                  fill
                  className="object-contain"
                  priority
                  style={{ filter: mounted && isHomePage && !isMobileMenuOpen ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' : 'none' }}
                />
              </motion.div>
              <div className="hidden xs:block">
                <h1 className={`text-base sm:text-xl md:text-2xl font-bold transition-colors ${
                  mounted && isHomePage && !isMobileMenuOpen ? 'text-white drop-shadow-md' : 'text-gray-900'
                }`}>
                  Summit Core
                </h1>
                <p className={`text-[10px] sm:text-xs md:text-sm transition-colors ${
                  mounted && isHomePage && !isMobileMenuOpen ? 'text-gray-200 drop-shadow-md' : 'text-gray-600'
                }`}>
                  Fix & Flip Partnership
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    mounted && isHomePage && !isMobileMenuOpen ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Get Estimate
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                mounted && isHomePage && !isMobileMenuOpen
                  ? 'text-white hover:bg-white/20'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="relative w-16 h-16">
                      <Image
                        src="/img/website_logo.png"
                        alt="Summit Core Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">Summit Core</h2>
                      <p className="text-xs text-gray-600">Fix & Flip Partnership</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 p-4">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                            pathname === link.href
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="mt-6"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      Get Free Estimate
                    </Link>
                  </motion.div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Serving the Tampa Bay Area
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
