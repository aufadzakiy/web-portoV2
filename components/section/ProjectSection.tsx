import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { fadeIn } from '../../lib/animation.js';

type Project = {
  title: string;
  description: string;
  image: string;
  role: string[];
  technologies: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
};

const projects: Project[] = [
  {
    title: 'RefreshOil Web Platform',
    description:
      "Mengembangkan platform web untuk distribusi minyak jelantah, dengan fitur utama pelacakan real-time dan manajemen pengguna untuk efisiensi operasional.",
    image: '/porto1.png',
    role: ['Full-Stack Developer', 'UI/UX Designer'],
    technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    title: 'RefreshOil Mobile App',
    description:
      "Membangun aplikasi mobile cross-platform untuk manajemen transaksi minyak jelantah, dilengkapi antarmuka intuitif dan notifikasi status real-time.",
    image: '/porto2.png',
    role: ['Mobile Developer'],
    technologies: ['Flutter', 'Dart', 'Rest API'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    title: 'Weather Prediction System',
    description:
      "Merancang sistem prediktif berbasis machine learning untuk memprakirakan kondisi cuaca, guna mendukung analisis dan pengambilan keputusan.",
    image: '/porto3.png',
    role: ['Machine Learning Engineer'],
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    title: 'Sistem Manajemen Pelatihan K3',
    description:
      "Mengembangkan sistem manajemen pelatihan Keselamatan dan Kesehatan Kerja (K3) untuk mengelola pendaftaran, jadwal, dan sertifikasi peserta pelatihan.",
    image: '/porto1.png',
    role: ['Full-Stack Developer'],
    technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    title: 'Landing Page BRDZ',
    description:
      "Merancang dan membangun landing page modern untuk brand BRDZ dengan fokus pada user experience, performa optimal, dan desain yang menarik.",
    image: '/porto2.png',
    role: ['Frontend Developer', 'UI/UX Designer'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
];

const techIconMap: { [key: string]: string } = {
  'React': '/react-js-icon.svg',
  'TypeScript': '/typescript-icon.svg',
  'Tailwind CSS': '/tailwind-icon.svg',
  'Flutter': '/flutter-icon.svg',
  'Dart': '/dart-icon.svg',
  'Firebase': '/firebase-icon.svg',
  'Python': '/python-icon.svg',
  'Pandas': '/python-icon.svg',
  'Scikit-learn': '/scikit-icon.svg',
  'MySQL': '/mysql-icon.svg',
  'Laravel': '/laravel.svg',
  'Rest API': '/firebase-icon.svg'
};

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectCount = projects.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectCount) % projectCount);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectCount);
  };

  const currentProject = projects[currentIndex];

  return (
    <motion.section
      id="projects"
      className="py-16 md:py-0 px-4 sm:px-6 lg:px-7"
      style={{
        backgroundColor: '#0a1628',
        backgroundImage: 'url(/bg-garis-kotak.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 pb-24 md:pb-28 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[450px]">
          {/* Left Section - Dynamic Text Content */}
          <div className="space-y-8 lg:pr-12">
            {/* Number Indicator with decorative line */}
            <div className="flex items-center gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-6xl sm:text-7xl font-bold text-[#0253EE]"
                >
                  0{currentIndex + 1}
                </motion.div>
              </AnimatePresence>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 via-blue-400/40 to-transparent" />
              <div className="hidden sm:flex gap-2 text-gray-500 text-sm">
                {projects.map((_, i) => (
                  <span key={i} className={i === currentIndex ? 'text-[#0253EE] font-semibold' : ''}>
                    0{i + 1}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                className="space-y-4"
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  {currentProject.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Label */}
            <div className="text-sm text-blue-600 font-semibold">/Projects</div>

            {/* Main Title */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                style={{ 
                  background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {currentProject.title}
              </motion.h2>
            </AnimatePresence>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0253EE] to-[#3b82f6] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Learn More</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-[#0253EE]" />
              </div>
            </motion.button>
          </div>

          {/* Right Section - Single Card Display */}
          <div className="relative h-[400px] sm:h-[480px] lg:h-[550px] flex items-center justify-center">
            {/* Card Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="relative"
                  initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -50,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {/* Card */}
                  <div className="relative w-[320px] sm:w-[360px] h-[400px] sm:h-[480px] transform-gpu">
                    <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>

                      {/* Content Overlay */}
                      <motion.div 
                        className="relative h-full flex flex-col justify-between p-6 sm:p-8 z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                      >
                        {/* Top Section */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-white/70"></div>
                            <span className="text-white/70 text-sm font-light">
                              0{currentIndex + 1}/0{projects.length}
                            </span>
                          </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="space-y-4">
                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                            {currentProject.title}
                          </h3>
                          
                          {/* Description/Role */}
                          <p className="text-white/80 text-sm font-light">
                            {currentProject.role.join(' • ')}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 items-center">
                            {currentProject.technologies.map((tech, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                              >
                                {techIconMap[tech] && (
                                  <img
                                    src={techIconMap[tech]}
                                    alt={tech}
                                    className="w-4 h-4 object-contain"
                                  />
                                )}
                                <span className="text-xs text-white/90 font-medium">{tech}</span>
                              </div>
                            ))}
                          </div>

                          {/* Action Button */}
                          <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-all duration-300 group"
                          >
                            <span>View Project</span>
                            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Vertical Navigation with Dots - Right Side */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-6">
              {/* Previous Button (Up) */}
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToPrevious}
                className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg border-2 border-blue-500/20"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-6 h-6 text-[#0253EE] rotate-90" />
              </motion.button>

              {/* Dot Indicators */}
              <div className="flex flex-col gap-3 py-2">
                {projects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="relative group"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to project ${index + 1}`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-gradient-to-r from-[#0253EE] to-[#3b82f6] scale-125'
                          : 'bg-gray-300 hover:bg-blue-300'
                      }`}
                    />
                    {/* Tooltip */}
                    <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg">
                        {projects[index].title}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Next Button (Down) */}
              <motion.button
                whileHover={{ scale: 1.1, y: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToNext}
                className="w-12 h-12 bg-gradient-to-r from-[#0253EE] to-[#3b82f6] hover:from-[#0243ce] hover:to-[#2563eb] rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
                aria-label="Next Project"
              >
                <ChevronRight className="w-6 h-6 text-white rotate-90" />
              </motion.button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;