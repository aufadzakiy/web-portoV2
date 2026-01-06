import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full bg-slate-800 min-h-screen overflow-visible"
    >
      {/* Gradient overlay layer with rounded bottom */}
      <div 
        className="absolute inset-0 rounded-b-[90px]"
        style={{
          background: "linear-gradient(90deg, #3B82F6 0%, #2563EB 15%, #0253EE 40%, #1E3A8A 70%, #0F172A 100%)",
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 container mx-auto max-w-[1550px] px-8 md:px-12 lg:px-18 py-16 md:py-20 lg:py-24 min-h-screen flex flex-col justify-between">
        {/* Top Section - Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-8 md:pt-12">
          {/* Left Column - Main Heading */}
          <div className="flex flex-col justify-center">
            <p className="text-white text-lg md:text-xl lg:text-2xl font-light mb-3 md:mb-4">
              Hey, I'm a
            </p>
            <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-4">
              Full Stack<br />
              Developer
            </h1>
          </div>

          {/* Right Column - Quote Section */}
          <div className="flex flex-col justify-center lg:justify-start lg:pt-16 space-y-6 md:space-y-8">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Clean code should<br />
              work seamlessly.
            </h2>
            <p className="text-white/80 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-md">
              From web to mobile, I build applications that<br />
              solve problems and deliver value.
            </p>
          </div>
        </div>

        {/* Bottom Section - Services */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 pb-8 md:pb-12">
          {/* Service 01 */}
          <div className="space-y-2">
            <p className="text-white/60 text-sm md:text-base font-medium">01</p>
            <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold">
              Web Development
            </h3>
          </div>

          {/* Service 02 */}
          <div className="space-y-2">
            <p className="text-white/60 text-sm md:text-base font-medium">02</p>
            <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold">
              Mobile Development
            </h3>
          </div>

          {/* Service 03 */}
          <div className="space-y-2">
            <p className="text-white/60 text-sm md:text-base font-medium">03</p>
            <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold">
              UI/UX Design
            </h3>
          </div>

          {/* Service 04 */}
          <div className="space-y-2">
            <p className="text-white/60 text-sm md:text-base font-medium">04</p>
            <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold">
              Data Science
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
