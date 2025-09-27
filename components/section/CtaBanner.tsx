"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../lib/animation";
import Link from "next/link";

const CtaBannerSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-8 py-10 sm:py-16 md:py-17">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="relative bg-gradient-to-br from-[#004bd5] to-[#0253EE] text-white rounded-3xl pt-10 pb-10 sm:p-8 md:p-12 text-center overflow-hidden"
        >
          <motion.h2
            variants={fadeIn()}
            className="text-[40px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 sm:mb-8 leading-tight"
          >
            Tertarik untuk berkolaborasi atau memiliki pertanyaan?
          </motion.h2>

          <motion.div
            variants={fadeIn("up", 0.4)}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link href="/contact">
              <button className="bg-white text-[#0253EE] font-semibold py-3 px-8 sm:px-8 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base w-full sm:w-auto max-w-[220px] sm:max-w-full">
                Hubungi Saya
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBannerSection;