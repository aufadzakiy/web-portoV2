'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X } from 'lucide-react';

// Daftar link navigasi untuk memudahkan pengelolaan
const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const [ctaWidth, setCtaWidth] = useState<number | null>(null);

  // Efek untuk scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Fungsi untuk smooth scroll
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Measure CTA width so divider can match its size on mobile overlay
  useEffect(() => {
    function updateWidth() {
      if (ctaRef.current) setCtaWidth(ctaRef.current.offsetWidth);
    }
    // initial measure and on resize
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [isMenuOpen]);

  // Varian animasi untuk menu mobile
  const mobileMenuVariants: Variants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'tween' as const, ease: 'easeInOut' as const } },
    exit: { y: '-100%', opacity: 0, transition: { type: 'tween' as const, ease: 'easeInOut' as const } },
  };

  // Variants for hamburger bar animations (to morph into X)
  const topBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };

  const middleBarVariants = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 0, x: -8 },
  };

  const bottomBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins ${
          isScrolled 
            ? 'bg-white/80 dark:bg-slate-200/80 backdrop-blur-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="text-2xl font-bold bg-[#0253EE] bg-clip-text text-transparent"
            >
              &lt;A/&gt;
            </a>

            {/* Navigasi Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="relative px-4 py-2 text-slate-900 dark:text-slate-900 font-medium transition-colors hover:text-[#0253EE] after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:w-0 after:h-0.5 after:bg-indigo-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-[calc(100%-2rem)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Garis pemisah */}
              <div className="h-6 w-px bg-slate-400 dark:bg-black mx-4"></div>
              
              <div className="flex items-center gap-4">
                 {/* Tombol Hubungi Saya */}
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0253EE] rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition-all duration-300"
                >
                  Hubungi Saya
                </a>
              </div>
            </div>

            {/* Tombol Menu Mobile */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen((s) => !s)} className="p-2 text-[#0253EE] flex items-center justify-end" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
                {/* Animated hamburger that morphs into X */}
                <span className="flex flex-col gap-1 items-end justify-center" aria-hidden="true" style={{ lineHeight: 0 }}>
                  <motion.span
                    className="block w-9 h-1 bg-current rounded-full origin-center"
                    variants={topBarVariants}
                    animate={isMenuOpen ? 'open' : 'closed'}
                    transition={{ type: 'tween', duration: 0.18 }}
                  />
                  <motion.span
                    className="block w-5 h-1 bg-current rounded-full origin-center"
                    variants={middleBarVariants}
                    animate={isMenuOpen ? 'open' : 'closed'}
                    transition={{ type: 'tween', duration: 0.18 }}
                  />
                  <motion.span
                    className="block w-7 h-1 bg-current rounded-full origin-center"
                    variants={bottomBarVariants}
                    animate={isMenuOpen ? 'open' : 'closed'}
                    transition={{ type: 'tween', duration: 0.18 }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay Menu Mobile dengan Animasi */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] bg-white/80 dark:bg-slate-200/80 backdrop-blur-lg lg:hidden"
          >
            <div className="container mx-auto px-6 h-full flex flex-col">
              <div className="flex items-center justify-between h-20">
                <a 
                  href="#hero" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
                  className="text-2xl font-bold bg-[#0253EE] bg-clip-text text-transparent"
                >
                  &lt;A/&gt;
                </a>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-900 dark:text-[#0253EE]" aria-label="Close menu">
                  <span className="flex flex-col gap-1 items-end justify-center" aria-hidden="true" style={{ lineHeight: 0 }}>
                    <motion.span className="block w-9 h-1 bg-current rounded-full origin-center" variants={topBarVariants} animate={'open'} transition={{ type: 'tween', duration: 0.18 }} />
                    <motion.span className="block w-5 h-1 bg-current rounded-full origin-center" variants={middleBarVariants} animate={'open'} transition={{ type: 'tween', duration: 0.18 }} />
                    <motion.span className="block w-7 h-1 bg-current rounded-full origin-center" variants={bottomBarVariants} animate={'open'} transition={{ type: 'tween', duration: 0.18 }} />
                  </span>
                </button>
              </div>

              <div className="flex-grow flex flex-col items-center justify-center gap-6 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-3xl font-semibold text-black dark:text-black"
                  >
                    {link.label}
                  </a>
                ))}
                
                {/* Theme & CTA di mobile */}
                {/* Divider above CTA */}
                <div ref={dividerRef} className="w-full border-t border-black mt-8" aria-hidden="true" style={ctaWidth ? { width: ctaWidth } : undefined} />
                <div className="mt-6 flex flex-col items-center gap-6">
                  <a
                    href="#contact"
                    ref={ctaRef}
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                    className="px-8 py-3 text-lg font-semibold text-white bg-[#0253EE] rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300"
                  >
                    Hubungi Saya
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}