'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import HeroSection from '../../components/section/HeroSection';
import LogoSlider from '../../components/section/LogoSlider';
// import TechStackSection from '../../components/section/TechStackSection';

export default function Home() {
  const [backVisible, setBackVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setBackVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Load client-only interactions (cursor icons, animations)
    import('../../lib/interactions').catch((err) => {
      // fail silently during dev if module can't load
      console.error('Failed to load interactions module', err);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <LogoSlider />
        {/* <TechStackSection /> */}
      </main>
      
      <Footer />

      {/* WhatsApp Button (moves up when Back-to-top appears) */}
      <a 
        href="https://wa.me/6283872839074"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 animate-bounce ${backVisible ? 'bottom-20' : 'bottom-6'}`}
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>

      {/* Back to Top Button (appears below WhatsApp) */}
      <button
        id="back-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`fixed right-6 w-14 h-14 bg-[#0253EE] hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 ${backVisible ? 'bottom-6 opacity-100 visible' : 'bottom-0 opacity-0 invisible'}`}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up text-lg"></i>
      </button>

      {/* custom cursor removed; icon-emitting cursor implemented in interactions.ts */}
    </div>
  );
}