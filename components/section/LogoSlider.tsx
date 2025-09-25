"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PartnersSection = () => {
  const partners = [
    { src: "/html-icon.svg", alt: "HMTL5", width: 140, height: 32 },
    { src: "/css-icon.svg", alt: "CSS", width: 140, height: 32 },
    { src: "/js-icon.svg", alt: "JS", width: 140, height: 32 },
    { src: "/laravel.svg", alt: "Blindpay", width: 140, height: 32 },
    { src: "/php-icon.svg", alt: "PHP", width: 140, height: 32 },
    { src: "/bootstrap-icon.svg", alt: "bootstrap", width: 140, height: 32 },
    { src: "/react-js-icon.svg", alt: "React JS", width: 140, height: 32 },
    { src: "/typescript-icon.svg", alt: "TS", width: 140, height: 32 },
    { src: "/tailwind-icon.svg", alt: "Tailwind", width: 140, height: 48 },
    { src: "/Next.js.svg", alt: "Next JS", width: 140, height: 32 },
    { src: "/mysql-icon.svg", alt: "mysql", width: 140, height: 32 },
    { src: "/flutter-icon.svg", alt: "flutter", width: 140, height: 32 },
    { src: "/dart-icon.svg", alt: "Dart", width: 140, height: 32 },
    { src: "/figma-icon.svg", alt: "Figma", width: 140, height: 32 },
    { src: "/python-icon.svg", alt: "python", width: 140, height: 32 },
    { src: "/flask-logo.svg", alt: "flask", width: 140, height: 32 },
    { src: "/canva-icon.svg", alt: "canva", width: 140, height: 32 },
  ];

  // We'll render two consecutive tracks (original + copy). To avoid a jump we need
  // to translate exactly the pixel width of one track. We'll measure the first
  // track's width and set CSS variables for the animation distance and duration.
  const firstTrackRef = useRef<HTMLDivElement | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const node = firstTrackRef.current;
    if (!node) return;

    // Measure and update whenever the track size changes.
    const update = () => setTrackWidth(node.offsetWidth || 0);

    update();
    const ro = new ResizeObserver(update);
    ro.observe(node);

    // Also update on window resize as a fallback
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [partners.length]);

  // Determine animation duration based on width for a constant speed (px/sec)
  const SPEED_PX_PER_SEC = 120; // tweak this to speed up / slow down
  const duration = trackWidth ? Math.max(8, trackWidth / SPEED_PX_PER_SEC) : 25;

  return (
        <section className="logo-section bg-white backdrop-blur-md py-6 overflow-hidden">
      <div className="slider-viewport overflow-hidden">
        <div
          className={`logo-slider ${trackWidth ? "is-ready" : ""}`}
          aria-hidden
          style={{
            // set CSS vars for keyframes to use
            ["--track-width" as any]: `${trackWidth}px`,
            ["--duration" as any]: `${duration}s`,
            // Ensure both tracks fit side-by-side to avoid overlap
            width: trackWidth ? `${trackWidth * 2}px` : undefined,
          }}
        >
          <div ref={firstTrackRef} className="track">
            {partners.map((partner, index) => (
              <div key={index} className="slide-item">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="h-6 md:h-8 w-auto"
                />
              </div>
            ))}
          </div>

          {/* spacer so end of first track -> start of duplicate keeps same spacing as between items */}
          <div className="track-gap" aria-hidden />

          {/* duplicate the track once for seamless repeat */}
          <div className="track" aria-hidden>
            {partners.map((partner, index) => (
              <div key={`dup-${index}`} className="slide-item">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="h-6 md:h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`

        /* Hide any unexpected hairline between sections on small screens */
        @media (max-width: 640px) {
          .logo-section {
            border-top: none !important;
            border-bottom: none !important;
            box-shadow: none !important;
              outline: none !important;
              /* small negative margin to cover a 1px seam caused by background-image rounding */
              margin-top: -1px;
          }
        }

        .slider-viewport {
          width: 100%;
        }

        .logo-slider {
          display: flex;
          align-items: center;
          flex-wrap: nowrap; /* don't wrap tracks */
          /* don't start animating until measurement is ready */
          animation: none;
          will-change: transform;
        }

        .logo-slider.is-ready {
          animation: scroll var(--duration, 25s) linear infinite;
        }

        .track {
          display: flex;
          gap: var(--item-gap, 2rem);
          flex-shrink: 0; /* keep exact measured width */
        }

        /* spacer between end of first track and start of duplicate */
        .track-gap {
          flex: 0 0 auto;
          width: calc(var(--item-gap, 0px) + (2 * var(--item-margin, 1rem)));
        }

        .slide-item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          margin: 0 var(--item-margin, 1rem);
          padding: var(--item-padding, 0.5rem); /* added padding inside each icon */
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-1 * var(--track-width)));
          }
        }

        /* Reduce motion for users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .logo-slider {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;