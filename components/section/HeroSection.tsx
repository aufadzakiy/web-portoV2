import React, { useEffect, useRef, useState } from 'react'

export default function HeroSection() {
  const [badges, setBadges] = useState<any[]>([])
  const [width, setWidth] = useState<number | null>(null)
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
  }, [])

  // setup responsive badge positions only on client
  useEffect(() => {
    function handleResize() {
      setWidth(typeof window !== 'undefined' ? window.innerWidth : null)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Deterministic badge layout per breakpoint (no randomness)
    const sources = [
      '/flutter-icon.svg',
      '/react-js-icon.svg',
      '/figma-icon.svg',
      '/tailwind-icon.svg',
      '/laravel.svg',
      '/next.svg',
    ]

    // Layout presets for breakpoints
    const presets: Record<string, Array<{ src: string; left: string; top: string; size: number }>> = {
      desktop: [
        { src: '/figma-icon.svg', left: 'calc(75% + 40px)', top: 'calc(35% + 140px)', size: 50 },
        { src: '/next.svg', left: 'calc(25% - 140px)', top: 'calc(20% + 10px)', size: 120 },
        { src: '/laravel.svg', left: 'calc(40% + 140px)', top: 'calc(10% - 10px)', size: 120 },
        { src: '/flutter-icon.svg', left: 'calc(60% - 140px)', top: 'calc(90% + 10px)', size: 50 },
      ],
      tablet: [
        { src: '/js-icon.svg', left: 'calc(50% + 110px)', top: 'calc(50% + 8px)', size: 40 },
        { src: '/react-js-icon.svg', left: 'calc(50% + 32px)', top: 'calc(50% + 110px)', size: 36 },
        { src: '/figma-icon.svg', left: 'calc(50% - 110px)', top: 'calc(50% + 6px)', size: 34 },
        { src: '/tailwind-icon.svg', left: 'calc(50% + 6px)', top: 'calc(50% - 110px)', size: 34 },
      ],
      // Use same positions as desktop to keep icons aligned between breakpoints
      mobile: [
        { src: '/figma-icon.svg', left: 'calc(60% + 40px)', top: 'calc(15% + 140px)', size: 50 },
        { src: '/next.svg', left: 'calc(35% - 140px)', top: 'calc(5% + 10px)', size: 120 },
        { src: '/laravel.svg', left: 'calc(5% + 140px)', top: 'calc(5% - 10px)', size: 120 },
        { src: '/flutter-icon.svg', left: 'calc(65% - 140px)', top: 'calc(80% + 10px)', size: 50 },
      ],
    }

    const w = width || (typeof window !== 'undefined' ? window.innerWidth : 1024)
    let chosenPreset = presets.desktop
    if (w < 640) chosenPreset = presets.mobile
    else if (w < 1024) chosenPreset = presets.tablet

    // filter by available sources (maintain order)
    const final = chosenPreset.filter((p) => sources.includes(p.src))
    setBadges(final)
  }, [width])

  // Scoped styles for animated gradient and blob blur
  const extraStyles = `
    /* gradient animation removed per user request */
    .blur-3xl {
      filter: blur(48px);
    }
    /* outer badge frame floats */
    .badge-frame {
      will-change: transform, opacity;
      animation-name: floatFrame;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }

    /* inner icon micro-motion */
    .badge-inner {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      will-change: transform, opacity;
      animation-name: floatInner;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }

    @keyframes floatFrame {
      0% { transform: translateY(0) rotate(0deg); }
      25% { transform: translateY(-8px) rotate(-3deg); }
      50% { transform: translateY(-14px) rotate(3deg); }
      75% { transform: translateY(-8px) rotate(-1deg); }
      100% { transform: translateY(0) rotate(0deg); }
    }

    @keyframes floatInner {
      0% { transform: translateY(0) scale(1) rotate(0deg); }
      25% { transform: translateY(-3px) scale(0.98) rotate(-2deg); }
      50% { transform: translateY(-6px) scale(1.02) rotate(2deg); }
      75% { transform: translateY(-3px) scale(0.99) rotate(-1deg); }
      100% { transform: translateY(0) scale(1) rotate(0deg); }
    }

    /* Mobile: reduce amplitude and speed for small screens */
    @media (max-width: 640px) {
      .badge-frame { animation-duration: 4.2s; }
      .badge-inner { animation-duration: 2.6s; }
      @keyframes floatFrame {
        0% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-4px) rotate(-2deg); }
        50% { transform: translateY(-7px) rotate(2deg); }
        75% { transform: translateY(-4px) rotate(-1deg); }
        100% { transform: translateY(0) rotate(0deg); }
      }
      @keyframes floatInner {
        0% { transform: translateY(0) scale(1) rotate(0deg); }
        50% { transform: translateY(-3px) scale(1.01) rotate(1deg); }
        100% { transform: translateY(0) scale(1) rotate(0deg); }
      }
    }
  `

  return (
  <section className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-44 lg:py-44 relative overflow-hidden">
      <style jsx>{extraStyles}</style>
      {/* background image using bg-kotak.png with overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: '#fff',
          backgroundImage: `url('/bg-kotak.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* subtle dark overlay to keep text readable over image
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: 'rgba(2,6,23,0.35)' }}
      /> */}

      {/* decorative blurred blobs */}
      <div aria-hidden="true" className="absolute -z-20 pointer-events-none">
        <div
          className="blob-1 rounded-full blur-3xl"
          style={{
            width: 420,
            height: 420,
            background: 'radial-gradient(closest-side, rgba(253,215,160,0.14), rgba(253,215,160,0.06))',
            left: -120,
            top: -80,
            position: 'absolute',
          }}
        />

        <div
          className="blob-2 rounded-full blur-3xl"
          style={{
            width: 360,
            height: 360,
            background: 'radial-gradient(closest-side, rgba(199,210,254,0.12), rgba(199,210,254,0.04))',
            right: -100,
            bottom: -60,
            position: 'absolute',
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Left: content ~70% */}
          <div className="w-full lg:w-[70%] text-left lg:text-left pr-4 mt-20 lg:">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#011C4F]" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.6)' }}>
              Membangun Solusi Digital Melalui Pengembangan <br></br>
              <span style={{ color: '#0253EE' }}>Full-Stack</span>
            </h1>

            <p className="mt-6 text-black text-base sm:text-lg mx-auto lg:mx-0" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.6)' }}>
              Perkenalkan, saya Aufa. Saya bersemangat dalam menciptakan solusi digital yang utuh, dengan mengintegrasikan antarmuka pengguna yang intuitif dengan logika back-end yang andal dan berperforma tinggi.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 bg-[#0253EE] text-white font-semibold px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-sky-200/40 w-full sm:w-auto"
                aria-label="Lihat Proyek Saya"
              >
                Lihat Proyek Saya
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#011C4F] text-white font-semibold px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-slate-300/40 w-full sm:w-auto"
                aria-label="Hubungi Saya"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Right: image ~30% */}
          <div className="w-full lg:w-[30%] flex justify-center lg:justify-end">
            <div className="relative" style={{ width: 'max-content' }}>

              <div className="transition-transform duration-300 hover:scale-110 rounded-full" style={{ width: 'max-content', boxShadow: '0 8px 30px rgba(15,23,42,0.18)' }}>
                <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 overflow-hidden rounded-full">
                  <img
                    src="/gw4.png"
                    alt="Foto Aufa Dzakiy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Deterministic decorative badges with frame+inner animations */}
              {badges.map((b, idx) => {
                const frameDelay = `${(idx * 140) % 1000}ms`
                const frameDuration = `${4800 + (idx % 3) * 400}ms`
                const innerDelay = `${(idx * 140 + 80) % 1000}ms`
                const innerDuration = `${3000 + (idx % 4) * 300}ms`
                const isLaravel = b.src === '/laravel.svg'
                return (
                  <div
                      key={idx}
                      style={{
                        position: 'absolute',
                        left: b.left,
                        top: b.top,
                        width: b.size,
                        height: b.size,
                        transform: isLaravel ? 'translate(-50%, -50%) scale(1.05)' : 'translate(-50%, -50%)',
                        animationDelay: frameDelay,
                        animationDuration: frameDuration,
                      }}
                      className="badge-frame flex items-center justify-center"
                    >
                    <div
                      className="badge-inner"
                      style={{ animationDelay: innerDelay, animationDuration: innerDuration }}
                    >
                      <img
                        src={b.src}
                        alt={`badge-${idx}`}
                        style={{ width: isLaravel ? '90%' : '70%', height: isLaravel ? '90%' : '70%', objectFit: 'contain' }}
                        className="select-none"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
