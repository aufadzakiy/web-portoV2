"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../lib/animation";
import Link from "next/link";
import Image from "next/image";

const CtaBannerSection = () => {
  // Shake animation for ringing phone effect
  const shakeAnimation = {
    x: [0, -3, 3, -3, 3, -2, 2, -1, 1, 0],
    rotate: [0, -1, 1, -1, 1, -0.5, 0.5, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      className="pt-18 pb-4 relative overflow-hidden"
      style={{
        backgroundColor: '#0a1628',
        backgroundImage: 'url(/bg-garis-kotak.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat'
      }}
    >
      <div className="container mx-auto px-6 lg:px-9">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Main Card Container */}
          <motion.div
            variants={fadeIn()}
            animate={shakeAnimation}
            className="relative rounded-[32px]"
          >
            <div className="bg-[#0a1628] rounded-[30px] border-2 border-[#004bd5]/30 backdrop-blur-sm">
              <div className="flex items-center justify-between px-8 py-6 sm:px-10 sm:py-7">
                {/* Avatar Section */}
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  className="flex-shrink-0"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gradient-to-br from-[#0253EE] to-[#004bd5] p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0a1628] flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-br from-[#0253EE] to-[#004bd5] flex items-center justify-center p-3">
                        <Image src="/favicon-white.svg" alt="Aufa logo" width={40} height={40} className="object-contain" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  className="flex-1 ml-6 sm:ml-8 text-left"
                >
                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                    Siap Berkolaborasi?
                  </h2>
                  <p className="text-gray-400 text-base sm:text-lg font-medium tracking-wider">
                    Mari Diskusikan Proyek Anda
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  variants={fadeIn("left", 0.4)}
                  className="flex-shrink-0"
                >
                  <Link href="/contact">
                    <button 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#16A34A] to-[#059669] hover:from-[#34D399] hover:to-[#16A34A] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 group"
                      aria-label="Hubungi Saya"
                    >
                      <svg 
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:scale-110 transition-transform" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                      </svg>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBannerSection;