import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, Code } from 'lucide-react';
import { fadeIn } from '../../lib/animation.js';

type Project = {
  title: string;
  description: string;
  image: string;
  role: string;
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
    role: 'Full-Stack Developer',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    title: 'RefreshOil Mobile App',
    description:
      "Membangun aplikasi mobile cross-platform untuk manajemen transaksi minyak jelantah, dilengkapi antarmuka intuitif dan notifikasi status real-time.",
    image: '/porto2.png',
    role: 'Mobile Developer',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    liveDemoUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    title: 'Weather Prediction System',
    description:
      "Merancang sistem prediktif berbasis machine learning untuk memprakirakan kondisi cuaca, guna mendukung analisis dan pengambilan keputusan.",
    image: '/porto3.png',
    role: 'Machine Learning Engineer',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
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
  'Scikit-learn': '/scikit-icon.svg',
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

  useEffect(() => {
    const slideInterval = setInterval(goToNext, 5000); // Slide every 5 seconds
    return () => clearInterval(slideInterval); // Clean up on unmount
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="projects"
      className="py-15 bg-[#0253EE] lg:bg-white sm:py-15"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Decorative gradient lines with label */}
        <motion.div
          variants={fadeIn("down")}
          className="flex items-center justify-center mb-8"
        >
          <div
            className="w-24 h-[1px] mr-3 rounded-sm bg-gradient-to-r from-slate-400/20 via-slate-400/50 to-slate-400/90"
            aria-hidden="true"
          />
          <span className="text-sm text-white lg:text-gray-600 text-center">My Portfolio</span>
          <div
            className="w-24 h-[1px] ml-3 rounded-sm bg-gradient-to-l from-slate-400/20 via-slate-400/50 to-slate-400/90"
            aria-hidden="true"
          />
        </motion.div>
        <h2 className="text-5xl font-bold text-center text-white lg:text-black mb-6">
          Bringing Ideas to Life
        </h2>
        <p className="text-lg text-white lg:text-black text-center max-w-3xl mx-auto mb-12">
          Here are some of the selected projects that showcase my skills in turning complex problems into elegant solutions.
        </p>

        <div className="relative py-4">
          <div className="relative max-w-[1070px] mx-auto">
            {/* Add mobile padding and explicit bg so the shadow is visible on all sides on small screens */}
            <div className="rounded-2xl p-4 lg:p-0 bg-white">
              <div className="overflow-hidden rounded-2xl">
                              <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                              >
                                {projects.map((project, idx) => (
                                  <div key={idx} className="min-w-full lg:bg-gray-50">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 items-end lg:items-center">
                                      <div className={`order-1 p-8 lg:p-12 space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                                          {project.role}
                                        </span>
                                        <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                                          {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg leading-relaxed lg:text-justify">
                                          {project.description}
                                        </p>
                                        <div>
                                          <h4 className="text-md font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                                          <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => {
                                              const iconSrc = techIconMap[tech];
                                              return (
                                                <span
                                                  key={i}
                                                  className="inline-flex items-center bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                                                >
                                                  {iconSrc && <img src={iconSrc} alt={`${tech} icon`} className="w-4 h-4 mr-2" />}
                                                  {tech}
                                                </span>
                                              );
                                            })}
                                          </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                          {project.liveDemoUrl && (
                                            <a
                                              href={project.liveDemoUrl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-sm w-full sm:flex-1"
                                            >
                                              <Eye className="w-5 h-5 mr-2" />
                                              View Project
                                            </a>
                                          )}
                                          {project.sourceCodeUrl && (
                                            <a
                                              href={project.sourceCodeUrl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-sm w-full sm:flex-1"
                                            >
                                              <Code className="w-5 h-5 mr-2" />
                                              View Code
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                      <div className={`order-2 flex p-10 lg:p-0 justify-center items-center bg-white h-full ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <img
                                          src={project.image}
                                          alt={project.title}
                                          className="w-full h-full object-cover rounded-xl lg:rounded-none"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>            <div className="absolute left-1/2 -translate-x-1/2 bottom-5 flex space-x-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-6 bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0253EE] hover:bg-blue-500 rounded-full hidden md:flex items-center justify-center text-white transition-colors duration-200 shadow-lg z-10"
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0253EE] hover:bg-blue-500 rounded-full hidden md:flex items-center justify-center text-white transition-colors duration-200 shadow-lg z-10"
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
