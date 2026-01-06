"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../../lib/animation.js";
// import TabPanels from "./TabPanels";

const ALL_SKILLS = [
  // Modern Frontend (Advanced)
  { name: "TypeScript", icon: "/typescript-icon.svg", description: "JavaScript dengan type safety untuk kode yang lebih aman dan maintainable.", level: "Advanced", experience: "3+ Years", category: "Frontend" },
  { name: "Next.js", icon: "/Next.js.svg", description: "Framework React dengan SSR, routing otomatis, dan optimasi performa.", level: "Advanced", experience: "2+ Years", category: "Frontend" },
  { name: "React", icon: "/react-js-icon.svg", description: "Library UI untuk membangun antarmuka berbasis komponen yang reusable.", level: "Advanced", experience: "3+ Years", category: "Frontend" },
  // Mobile Development
  { name: "Flutter", icon: "/flutter-icon.svg", description: "Framework UI untuk membangun aplikasi mobile native yang beautiful.", level: "Intermediate", experience: "2+ Years", category: "Mobile" },
  { name: "Android", icon: "/android-icon.svg", description: "Platform mobile untuk mengembangkan aplikasi Android native.", level: "Intermediate", experience: "2+ Years", category: "Mobile" },
  { name: "Dart", icon: "/dart-icon.svg", description: "Bahasa pemrograman yang dioptimalkan untuk pengembangan UI dengan Flutter.", level: "Intermediate", experience: "2+ Years", category: "Mobile" },
  // Backend Frameworks
  { name: "Laravel", icon: "/laravel.svg", description: "Framework PHP yang elegan untuk membangun aplikasi web yang robust.", level: "Advanced", experience: "3+ Years", category: "Backend" },
  // Data Science & AI (Most Prestigious)
  { name: "Python", icon: "/python-icon.svg", description: "Bahasa serbaguna untuk data science, AI, dan pengembangan backend.", level: "Advanced", experience: "3+ Years", category: "Backend" },
  { name: "scikit-learn", icon: "/scikit-icon.svg", description: "Library machine learning untuk implementasi algoritma ML klasik.", level: "Intermediate", experience: "1+ Years", category: "AI/ML" },
  { name: "Pandas", icon: "/python-icon.svg", description: "Library Python untuk manipulasi dan analisis data yang efisien.", level: "Intermediate", experience: "2+ Years", category: "Data Science" },
  // Backend Frameworks
  { name: "Flask", icon: "/flask-logo.svg", description: "Micro-framework Python untuk membangun API backend yang ringan.", level: "Intermediate", experience: "2+ Years", category: "Backend" },
  { name: "REST API", icon: "/api-icon.svg", description: "Arsitektur API untuk komunikasi antara client dan server yang scalable.", level: "Advanced", experience: "3+ Years", category: "Backend" },
  // Database & Backend Languages
  { name: "MySQL", icon: "/mysql-icon.svg", description: "Database relasional untuk menyimpan dan mengelola data terstruktur.", level: "Advanced", experience: "3+ Years", category: "Database" },
  { name: "PHP", icon: "/php-icon.svg", description: "Bahasa server-side untuk pengembangan backend web yang powerful.", level: "Advanced", experience: "3+ Years", category: "Backend" },
  // Frontend Essentials
  { name: "JavaScript", icon: "/js-icon.svg", description: "Interaktivitas dinamis dan logika client-side untuk aplikasi web modern.", level: "Expert", experience: "4+ Years", category: "Frontend" },
  { name: "Tailwind CSS", icon: "/tailwind-icon.svg", description: "Utility-first CSS framework untuk styling cepat dan konsisten.", level: "Advanced", experience: "2+ Years", category: "Frontend" },
  { name: "Bootstrap", icon: "/bootstrap-icon.svg", description: "Framework CSS dengan komponen siap pakai untuk UI responsif.", level: "Advanced", experience: "3+ Years", category: "Frontend" },
  // UI/UX Design
  { name: "Figma", icon: "/figma-icon.svg", description: "Tool desain kolaboratif untuk UI/UX dan prototyping interaktif.", level: "Intermediate", experience: "2+ Years", category: "Design" },
  // Fundamentals
  { name: "CSS", icon: "/css-icon.svg", description: "Styling dan tata letak responsif untuk pengalaman visual yang menarik.", level: "Expert", experience: "4+ Years", category: "Frontend" },
  { name: "HTML", icon: "/html-icon.svg", description: "Struktur dasar untuk membangun halaman web yang semantik dan terstruktur.", level: "Expert", experience: "4+ Years", category: "Frontend" },
  // { name: "Canva", icon: "/canva-icon.svg", description: "Platform desain grafis untuk membuat konten visual dengan mudah.", level: "Intermediate", experience: "1+ Years", category: "Design" },
];

export default function TabsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const VISIBLE_CARDS = 5; // Show 5 cards at a time
  const AUTO_SLIDE_INTERVAL = 3500; // Auto slide setiap 3.5 detik

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ALL_SKILLS.length - 1 : prev - 1));
  };

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % ALL_SKILLS.length);
  }, []);

  // Auto slide functionality - stable and smooth
  React.useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Create new stable interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ALL_SKILLS.length);
    }, AUTO_SLIDE_INTERVAL);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Empty dependency - runs once on mount

  // Calculate which cards to show
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + ALL_SKILLS.length) % ALL_SKILLS.length;
      cards.push({ skill: ALL_SKILLS[index], offset: i });
    }
    return cards;
  };

  return (
    <motion.section
      id="skills"
      className="w-full py-20 md:py-24 lg:py-28 relative"
      style={{
        backgroundColor: '#0a1628',
        backgroundImage: 'url(/bg-garis-kotak.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat'
      }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-[1550px] px-8 md:px-12 lg:px-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <motion.div
              variants={fadeIn("down")}
              className="mb-3 md:mb-4"
            >
              <span className="text-sm md:text-base text-white/60 font-medium">
                My Expertise
              </span>
            </motion.div>

            <motion.h2
              variants={fadeIn("down", 0.2)}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-white"
            >
              Mastering the<br />
              Digital Craft
            </motion.h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center lg:justify-start lg:pt-8 space-y-6">
            <motion.p
              variants={fadeIn("down", 0.3)}
              className="text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed"
            >
              From frontend frameworks to backend architecture, mobile apps to machine learning.
            </motion.p>

            <motion.p
              variants={fadeIn("down", 0.4)}
              className="text-base md:text-lg text-white/70 font-light leading-relaxed"
            >
              Explore the technologies and tools I use to bring ideas to life
              <br />
              and build meaningful digital experiences.
            </motion.p>
          </div>
        </div>

        {/* Skills Slider - 3D Carousel */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="relative"
        >
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center perspective-[2000px]">
            {/* Cards Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {getVisibleCards().map(({ skill, offset }, idx) => {
                  const isCenter = offset === 0;
                  const absOffset = Math.abs(offset);
                  
                  // Calculate transforms for 3D carousel effect - jarak yang konsisten
                  const rotateY = offset * 12; // Rotasi lebih kecil agar kartu tidak terlihat gepeng
                  const translateX = offset * 200; // Jarak horizontal lebih dekat untuk overlap
                  const translateZ = 100 - absOffset * 100; // Depth konsisten untuk semua kartu
                  const scale = 1.05 - absOffset * 0.05; // Scaling lebih subtle
                  const opacity = 1 - absOffset * 0.15; // Opacity lebih gentle
                  const zIndex = 50 - absOffset * 10;

                  // Get actual index in ALL_SKILLS array
                  const actualIndex = (currentIndex + offset + ALL_SKILLS.length) % ALL_SKILLS.length;

                  return (
                    <motion.div
                      key={`skill-${actualIndex}`}
                      className="absolute"
                      initial={{ 
                        x: translateX,
                        z: translateZ,
                        rotateY: rotateY,
                        scale: scale,
                        opacity: 0
                      }}
                      animate={{ 
                        x: translateX,
                        z: translateZ,
                        rotateY: rotateY,
                        scale: scale,
                        opacity: opacity
                      }}
                      exit={{ 
                        x: translateX + (offset > 0 ? 200 : -200),
                        opacity: 0,
                        transition: { duration: 0.4 }
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        mass: 1
                      }}
                      style={{
                        zIndex: zIndex,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div 
                        className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 w-[300px] ${
                          isCenter ? 'h-[480px]' : 'h-[440px]'
                        }`}
                        style={{
                          background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98))',
                          boxShadow: isCenter 
                            ? '0 25px 60px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                            : '0 10px 30px -5px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        {/* Logo Badge - Top Left */}
                        <div className="absolute top-4 left-4 z-10">
                          <div className="w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-7 h-7 object-contain"
                              style={skill.name === "Next.js" ? { filter: 'brightness(0) invert(1)' } : {}}
                            />
                          </div>
                        </div>

                        {/* Category Badge - Top Right */}
                        <div className="absolute top-4 right-4 z-10 h-12 flex items-center">
                          <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-white/10">
                            <span className="text-xs font-bold text-blue-300">
                              {skill.category}
                            </span>
                          </div>
                        </div>

                        {/* Main Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800/50 via-slate-900/60 to-slate-950/80">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className={`object-contain transition-all duration-700 ${
                              isCenter ? 'w-48 h-48 opacity-30' : 'w-36 h-36 opacity-20'
                            }`}
                            style={skill.name === "Next.js" ? { filter: 'brightness(0) invert(1)' } : {}}
                          />
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>

                        {/* Content - Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className={`font-bold text-white mb-2 transition-all duration-700 ${
                            isCenter ? 'text-2xl' : 'text-xl'
                          }`}>
                            {skill.name}
                          </h3>
                          <p className={`text-white/60 leading-relaxed font-light transition-all duration-700 ${
                            isCenter ? 'text-sm line-clamp-3' : 'text-xs line-clamp-2'
                          }`}>
                            {skill.description}
                          </p>
                          
                          {/* Meta Info */}
                          <div className="flex items-center gap-3 mt-3 text-xs">
                            <span className="px-2 py-1 rounded-md font-semibold bg-slate-800/60 text-blue-300 border border-white/10">
                              {skill.level}
                            </span>
                            <span className="text-white/40">•</span>
                            <span className="text-blue-200/70 font-medium">{skill.experience}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Controls - Side Placement */}
            {/* Previous Button - Left Side */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-md hover:from-blue-600 hover:to-blue-500 text-white/70 hover:text-white transition-all duration-300 group border border-white/10 hover:border-white/20 shadow-2xl hover:shadow-blue-500/20 hover:scale-110 z-[60]"
              aria-label="Previous skill"
            >
              <svg 
                className="w-7 h-7 group-hover:-translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button - Right Side */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-slate-700/90 to-slate-800/90 backdrop-blur-md hover:from-blue-500 hover:to-blue-600 text-white/70 hover:text-white transition-all duration-300 group border border-white/10 hover:border-white/20 shadow-2xl hover:shadow-blue-500/20 hover:scale-110 z-[60]"
              aria-label="Next skill"
            >
              <svg 
                className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Indicator - Modern Design */}
          <div className="flex flex-col items-center gap-4 mt-4">
            {/* Current Skill Info */}
            <div className="text-center">
              <p className="text-sm text-white/40 font-medium">
                {currentIndex + 1} / {ALL_SKILLS.length}
              </p>
            </div>
            
            {/* Progress Dots */}
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/40 backdrop-blur-sm border border-white/5">
              {ALL_SKILLS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="group relative"
                  aria-label={`Go to skill ${idx + 1}`}
                >
                  {/* Dot */}
                  <div className={`rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-10 h-2 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40 hover:scale-125"
                  }`} />
                  
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900/95 backdrop-blur-sm rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    <span className="text-xs text-white font-medium">{ALL_SKILLS[idx].name}</span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                      <div className="border-4 border-transparent border-t-slate-900/95"></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
