"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// 1. Perbarui href ke root-relative paths
const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
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
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "tween" as const, ease: "easeInOut" as const },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { type: "tween" as const, ease: "easeInOut" as const },
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
            <Link
              href="/#hero"
              className="text-2xl font-bold bg-[#0253EE] bg-clip-text text-transparent"
            >
              &lt;A/&gt;
            </Link>

            {/* Navigasi Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <ul className="flex items-center gap-2">
                {/* 3. Ganti Nav Links dengan Link dan hapus onClick */}
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-slate-900 font-medium transition-colors hover:text-[#0253EE] after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:w-0 after:h-0.5 after:bg-indigo-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-[calc(100%-2rem)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="h-6 w-px bg-slate-400 mx-4"></div>

              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0253EE] rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition-all duration-300"
                >
                  Hubungi Saya
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
                    transition={{ type: "tween", duration: 0.18 }}
                  />
                  <motion.span
                    className="block w-5 h-1 bg-current rounded-full origin-center"
                    variants={middleBarVariants}
                    animate={isMenuOpen ? "open" : "closed"}
                    transition={{ type: "tween", duration: 0.18 }}
                  />
                  <motion.span
                    className="block w-7 h-1 bg-current rounded-full origin-center"
                    variants={bottomBarVariants}
                    animate={isMenuOpen ? "open" : "closed"}
                    transition={{ type: "tween", duration: 0.18 }}
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
            className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-lg lg:hidden"
          >
            <div className="container mx-auto px-6 h-full flex flex-col">
              <div className="flex items-center justify-between h-20">
                <Link
                  href="/#hero"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold bg-[#0253EE] bg-clip-text text-transparent"
                >
                  &lt;A/&gt;
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-[#0253EE]"
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
                      transition={{ type: "tween", duration: 0.18 }}
                    />
                    <motion.span
                      className="block w-5 h-1 bg-current rounded-full origin-center"
                      variants={middleBarVariants}
                      animate={"open"}
                      transition={{ type: "tween", duration: 0.18 }}
                    />
                    <motion.span
                      className="block w-7 h-1 bg-current rounded-full origin-center"
                      variants={bottomBarVariants}
                      animate={"open"}
                      transition={{ type: "tween", duration: 0.18 }}
                    />
                  </span>
                </button>
              </div>

              <div className="flex-grow flex flex-col items-center justify-center gap-6 text-center">
                {/* 4. Ganti juga di Mobile Menu */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-semibold text-black"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-8 flex justify-center" aria-hidden="true">
                  <div className="border-t border-black w-max">
                    {/* Invisible text (kept in DOM to size the divider to exactly match the button width) */}
                    <span className="px-8 text-transparent select-none text-lg font-semibold">Hubungi Saya</span>
                  </div>
                </div>
                <div className="mt-2 flex flex-col items-center gap-6">
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-8 py-3 text-lg font-semibold text-white bg-[#0253EE] rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300"
                  >
                    Hubungi Saya
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
