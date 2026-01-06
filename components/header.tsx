"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// Navigation links matching PayXB design
const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Project" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Varian animasi untuk menu mobile
  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.2,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { 
        duration: 0.15,
        ease: "easeIn",
        when: "afterChildren"
      },
    },
  };

  // Varian animasi untuk menu items
  const menuItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 25, duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: { duration: 0.15 },
    },
  };

  // Variants for hamburger bar animations
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
      <nav className={`fixed top-0 left-0 right-0 z-50 font-poppins px-4 lg:px-8 ${isScrolled ? 'pt-2' : 'pt-4'} transition-all duration-300`}>
        <div className="max-w-[1470px] mx-auto bg-[#2B2D42]/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/10 px-6 lg:px-12 transition-all duration-300">
          <div className={`flex items-center justify-between ${isScrolled ? 'h-12' : 'h-16'} transition-all duration-300`}>
            {/* Logo */}
            <Link href="/#hero" className="flex items-center gap-3">
              <div className={`${isScrolled ? 'w-8 h-8' : 'w-10 h-10'} flex items-center justify-center transition-all duration-300`}>
                <Image src="/favicon-white.svg" alt="AUFA logo" width={isScrolled ? 32 : 40} height={isScrolled ? 32 : 40} className="rounded-lg" />
              </div>
            </Link>

            {/* Navigation Desktop */}
            <div className="hidden lg:flex items-center gap-12">
              <ul className={`flex items-center ${isScrolled ? 'gap-6' : 'gap-8'} transition-all duration-300`}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${isScrolled ? 'text-sm' : 'text-base'} text-white/90 hover:text-white font-medium transition-colors duration-200`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section: Flag, Sign in, Get Started */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Indonesian Flag */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
                  <div className="w-full h-1/2 bg-[#FF0000]" />
                  <div className="w-full h-1/2 bg-white" />
                </div>
              </div>

              {/* Sign in */}
              {/* <Link
                href="/signin"
                className="text-white font-medium text-base hover:text-white/80 transition-colors duration-200"
              >
                Sign in
              </Link> */}

              {/* Get Started Button */}
              <Link
                href="/contact"
                className={`${isScrolled ? 'px-4 py-1.5 text-sm' : 'px-6 py-2 text-base'} bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-full transition-all duration-200`}
              >
                Hubungi Saya
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen((s) => !s)}
                className="p-2 text-white flex items-center justify-end"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <span
                  className="flex flex-col gap-1.5 items-end justify-center"
                  aria-hidden="true"
                  style={{ lineHeight: 0 }}
                >
                  <motion.span
                    className="block w-6 h-0.5 bg-current rounded-full origin-center"
                    variants={topBarVariants}
                    animate={isMenuOpen ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <motion.span
                    className="block w-6 h-0.5 bg-current rounded-full origin-center"
                    variants={middleBarVariants}
                    animate={isMenuOpen ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <motion.span
                    className="block w-6 h-0.5 bg-current rounded-full origin-center"
                    variants={bottomBarVariants}
                    animate={isMenuOpen ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-100 lg:hidden"
          >
            {/* Background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#2B2D42]"
            />

            <div className="relative container mx-auto px-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between h-16">
                <Link
                  href="/#hero"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <Image src="/favicon-white.svg" alt="AUFA logo" width={40} height={40} className="rounded-lg" />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white"
                  aria-label="Close menu"
                >
                  <span
                    className="flex flex-col gap-1.5 items-end justify-center"
                    aria-hidden="true"
                    style={{ lineHeight: 0 }}
                  >
                    <motion.span
                      className="block w-6 h-0.5 bg-current rounded-full origin-center"
                      variants={topBarVariants}
                      animate={"open"}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    <motion.span
                      className="block w-6 h-0.5 bg-current rounded-full origin-center"
                      variants={middleBarVariants}
                      animate={"open"}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    <motion.span
                      className="block w-6 h-0.5 bg-current rounded-full origin-center"
                      variants={bottomBarVariants}
                      animate={"open"}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </span>
                </button>
              </div>

              {/* Menu Content */}
              <div className="grow flex flex-col justify-center">
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      variants={menuItemVariants}
                      custom={index}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-lg font-medium text-lg transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA Section */}
                <motion.div
                  variants={menuItemVariants}
                  className="mt-8 space-y-4"
                >
                  {/* Indonesian Flag */}
                  <div className="flex items-center gap-2 px-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
                      <div className="w-full h-1/2 bg-[#FF0000]" />
                      <div className="w-full h-1/2 bg-white" />
                    </div>
                    <span className="text-white/60 text-sm">Indonesia</span>
                  </div>

                  {/* Sign in */}
                  <Link
                    href="/signin"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:bg-white/5 rounded-lg font-medium transition-all duration-200"
                  >
                    Sign in
                  </Link>

                  {/* Get Started Button */}
                  <Link
                    href="/get-started"
                    onClick={() => setIsMenuOpen(false)}
                    className="block mx-4 px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white text-center font-semibold rounded-lg transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
