"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// 1. Perbarui href ke root-relative paths
const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins ${
          isScrolled ? "bg-white/80 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* 2. Ganti Logo dengan Link */}
            <Link href="/#hero" className="flex items-center">
              <Image src="/favicon.svg" alt="Aufa Dzakiy Logo" width={50} height={50} />
            </Link>

            {/* Navigasi Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              <ul className="flex items-center gap-1">
                {/* 3. Ganti Nav Links dengan Link dan hapus onClick */}
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className="group relative px-5 py-2.5 text-slate-800 font-semibold text-sm tracking-wide transition-all duration-300 hover:text-[#0253EE] block"
                    >
                      {/* Animated background gradient */}
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0253EE]/0 via-[#0253EE]/5 to-[#0253EE]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Glowing effect */}
                      <span className="absolute inset-0 rounded-xl bg-[#0253EE]/5 scale-0 group-hover:scale-100 transition-transform duration-500 blur-sm" />
                      
                      {/* Text */}
                      <span className="relative z-10">{link.label}</span>
                      
                      {/* Modern underline with gradient */}
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0253EE] via-indigo-500 to-[#0253EE] group-hover:w-[calc(100%-2.5rem)] transition-all duration-300 rounded-full" />
                      
                      {/* Dot indicator */}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0253EE] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-[#0253EE]/50" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Elegant divider with gradient */}
              <div className="relative h-8 w-px mx-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0253EE] to-transparent"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div className="flex items-center gap-4">
                {/* Premium CTA Button */}
                <Link
                  href="/contact"
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden rounded-xl"
                  >
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0253EE] via-indigo-600 to-[#0253EE] bg-[length:200%_100%] group-hover:bg-[length:100%_100%] transition-all duration-500" />
                    
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      animate={{
                        x: ["-200%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0253EE] via-indigo-500 to-[#0253EE] rounded-xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
                    
                    {/* Button content */}
                    <div className="relative px-6 py-3 flex items-center gap-2">
                      {/* Icon */}
                      <motion.svg
                        className="w-4 h-4 text-white"
                        animate={{ 
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </motion.svg>
                      
                      <span className="text-sm font-bold text-white tracking-wide">
                        Hubungi Saya
                      </span>
                      
                      {/* Arrow */}
                      <motion.svg
                        className="w-4 h-4 text-white"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </div>
                  </motion.div>
                  
                  {/* Premium tooltip */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Let's work together! 🚀
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Tombol Menu Mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen((s) => !s)}
                className="p-2 text-[#0253EE] flex items-center justify-end"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <span
                  className="flex flex-col gap-1 items-end justify-center"
                  aria-hidden="true"
                  style={{ lineHeight: 0 }}
                >
                  <motion.span
                    className="block w-9 h-1 bg-current rounded-full origin-center"
                    variants={topBarVariants}
                    animate={isMenuOpen ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <motion.span
                    className="block w-5 h-1 bg-current rounded-full origin-center"
                    variants={middleBarVariants}
                    animate={isMenuOpen ? "open" : "closed"}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <motion.span
                    className="block w-7 h-1 bg-current rounded-full origin-center"
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

      {/* Overlay Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] lg:hidden"
          >
            {/* Background with blur effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-[#011C4F]/98 via-[#0253EE]/95 to-[#011C4F]/98 backdrop-blur-2xl"
            />
            
            {/* Animated background patterns */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#0253EE]/15 to-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#011C4F]/20 to-[#0253EE]/15 rounded-full blur-3xl"
              />
            </div>

            <div className="relative container mx-auto px-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between h-20">
                <Link
                  href="/#hero"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center relative z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image src="/favicon-white.svg" alt="Aufa Dzakiy Logo" width={50} height={50} />
                  </motion.div>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white relative z-10"
                  aria-label="Close menu"
                >
                  <span
                    className="flex flex-col gap-1 items-end justify-center"
                    aria-hidden="true"
                    style={{ lineHeight: 0 }}
                  >
                    <motion.span
                      className="block w-9 h-1 bg-current rounded-full origin-center"
                      variants={topBarVariants}
                      animate={"open"}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    <motion.span
                      className="block w-5 h-1 bg-current rounded-full origin-center"
                      variants={middleBarVariants}
                      animate={"open"}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    <motion.span
                      className="block w-7 h-1 bg-current rounded-full origin-center"
                      variants={bottomBarVariants}
                      animate={"open"}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </span>
                </motion.button>
              </div>

              {/* Menu Content */}
              <div className="flex-grow flex flex-col justify-center relative z-10">
                <nav className="space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      variants={menuItemVariants}
                      custom={index}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group block"
                      >
                        <motion.div
                          whileTap={{ scale: 0.98 }}
                          className="relative flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-200"
                        >
                          
                          
                          {/* Link text */}
                          <span className="text-2xl font-semibold text-white">
                            {link.label}
                          </span>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Section */}
                <motion.div
                  variants={menuItemVariants}
                  className="mt-12 space-y-4"
                >
                  {/* Decorative line */}
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Let's Connect</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>

                  {/* Contact Button */}
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative group overflow-hidden rounded-2xl"
                    >
                      {/* Gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0253EE] via-white to-[#0253EE] opacity-100 group-hover:opacity-90 transition-opacity" />
                      
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#011C4F]/30 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          ease: "linear"
                        }}
                      />

                      {/* Button content */}
                      <div className="relative px-8 py-5 flex items-center justify-center gap-3">
                        <span className="text-lg font-bold text-[#011C4F] drop-shadow-sm">
                          Hubungi Saya
                        </span>
                        <motion.svg
                          className="w-5 h-5 text-[#011C4F]"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </motion.svg>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>

              {/* Footer info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="py-6 text-center"
              >
                <p className="text-xs text-white/40">
                  © 2025 Aufa Dzakiy. Crafted with passion
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
