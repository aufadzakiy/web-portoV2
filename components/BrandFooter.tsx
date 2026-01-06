"use client";

export default function BrandFooter() {
  return (
    <section 
      className="relative w-screen overflow-hidden bg-[#0a1628] -mx-[50vw] left-[50%] right-[50%] -mt-12"
      style={{
        backgroundImage: 'url(/bg-garis-kotak.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
        height: '240px',
      }}
    >
      <div className="absolute inset-0 flex items-start justify-center">
        <h2 
          className="text-[280px] sm:text-[320px] md:text-[400px] lg:text-[500px] font-black text-[#0253EE] select-none pointer-events-none"
          style={{
            opacity: 0.08,
            letterSpacing: '0.05em',
            lineHeight: '1',
            transform: 'translateY(-50%)',
            fontFamily: 'var(--font-poppins), sans-serif',
          }}
        >
          AUFA
        </h2>
      </div>
    </section>
  );
}
