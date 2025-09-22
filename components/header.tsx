'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

// Daftar link navigasi untuk memudahkan pengelolaan
const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk tema dan scroll
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle Tema
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  // Fungsi untuk smooth scroll
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Varian animasi untuk menu mobile
  const mobileMenuVariants: Variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'tween' as const, ease: 'easeInOut' as const } },
    exit: { x: '100%', opacity: 0, transition: { type: 'tween' as const, ease: 'easeInOut' as const } },
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
                      className="relative px-4 py-2 text-slate-900 dark:text-slate-900 font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:w-0 after:h-0.5 after:bg-indigo-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-[calc(100%-2rem)]"
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
                {/* Theme Switcher */}
                <button onClick={toggleTheme} className="p-2 rounded-full text-slate-900 dark:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle theme">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-300 dark:border-slate-600">
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </span>
                </button>
              </div>
            </div>

            {/* Tombol Menu Mobile */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="p-2 text-slate-900 dark:text-[#0253EE]" aria-label="Open menu">
                <Menu size={24} />
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
                  <X size={24} />
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
                <div className="mt-12 flex flex-col items-center gap-6">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                    className="px-8 py-3 text-lg font-semibold text-white bg-[#0253EE] rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
                  >
                    Hubungi Saya
                  </a>
                  <button onClick={toggleTheme} className="flex items-center gap-3 p-3 rounded-full text-slate-900 dark:text-black hover:bg-slate-100 dark:hover:bg-slate-500 transition-colors text-lg" aria-label="Toggle theme">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 dark:border-slate-600">
                      {isDarkMode ? <Sun /> : <Moon />}
                    </span>
                    <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}