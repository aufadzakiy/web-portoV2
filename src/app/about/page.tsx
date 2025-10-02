'use client';

import { useEffect, useState } from 'react';
import CareerTimeline from '../../../components/CareerTimeline';
import CareerIntro from '../../../components/CareerIntro';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import CtaBannerSection from '../../../components/section/CtaBanner';
import { PortfolioInteractions } from '../../../lib/interactions';
import Link from 'next/link';

export default function AboutPage() {
  const [backVisible, setBackVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setBackVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interactions = new PortfolioInteractions();
    return () => {
      interactions.destroy();
    };
  }, []);

  return (
    <main>
      <Header />
      <CareerIntro />
      <CareerTimeline />
      <CtaBannerSection />
      <Footer />

      {/* Contact Button (moves up when Back-to-top appears) */}
      <Link
        href="/contact"
        className={`fixed right-6 w-14 h-14 bg-blue-600 hover:bg-blue-900 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 animate-bounce ${backVisible ? "bottom-20" : "bottom-6"}`}
        aria-label="Hubungi Saya"
      >
        <i className="fas fa-envelope text-2xl"></i>
      </Link>

      {/* Back to Top Button (appears below WhatsApp) */}
      <button
        id="back-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`fixed right-6 w-14 h-14 bg-[#0253EE] hover:bg-blue-900 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 ${backVisible ? "bottom-6 opacity-100 visible" : "bottom-0 opacity-0 invisible"}`}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up text-lg"></i>
      </button>
    </main>
  );
}
