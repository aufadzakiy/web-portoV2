// CareerIntro.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import DynamicTypingText from './DynamicTypingText'; 

const CareerIntro: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center items-start px-6 py-24 md:py-44 lg:py-30 pb-12 lg:pb-45 lg:px-8 overflow-hidden bg-gradient-to-b from-[#DEE9FF] via-white to-white">
      {/* Simple Background Element */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-[#0253EE]/20 to-[#011C4F]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 lg:space-y-12">
        {/* Hidden H1 for SEO */}
        <h1 className="sr-only">Tentang Aufa Dzakiy - Perjalanan Karir Full-Stack Developer Indonesia</h1>
        
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[50px] sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#011C4F] text-left lg:text-center"
        >
          Perjalanan <strong>Aufa Dzakiy</strong>: <br className="hidden lg:block" />
          Dari <span className="bg-gradient-to-r from-[#0253EE] to-[#011C4F] bg-clip-text text-transparent">Mahasiswa</span> hingga <span className="bg-gradient-to-r from-[#0253EE] to-[#011C4F] bg-clip-text text-transparent">Developer</span>
        </motion.h2>

        {/* Static Text for Mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-600 font-light text-left lg:hidden"
        >
          Mengubah ide menjadi aplikasi web yang responsif dan interaktif.
        </motion.p>

        {/* Dynamic Typing Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="min-h-[60px] lg:min-h-[80px] hidden lg:block"
        >
          <p className="text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto text-left lg:text-center">
            <DynamicTypingText 
              phrases={[
                "Mengubah ide menjadi aplikasi web yang responsif dan interaktif.", 
                "Membangun jembatan antara desain UI/UX dan kode yang fungsional."
              ]} 
              speed={50} 
              className="block"
            />
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 lg:gap-8 max-w-2xl mx-auto pt-4"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#0253EE] to-[#011C4F] bg-clip-text text-transparent mb-2">
              2+
            </div>
            <div className="text-xs lg:text-sm text-gray-600 font-medium">
              Years
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#0253EE] to-[#011C4F] bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-xs lg:text-sm text-gray-600 font-medium">
              Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#0253EE] to-[#011C4F] bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-xs lg:text-sm text-gray-600 font-medium">
              Leadership
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerIntro;