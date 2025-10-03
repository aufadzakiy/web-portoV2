import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import {
  Poppins,
  Montserrat,
  Inter,
  JetBrains_Mono,
  Orbitron,
} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aufadzakiy.vercel.app'),
  title: "Aufa Dzakiy - Full-Stack Developer & UI/UX Designer | Web Developer Indonesia",
  description:
    "Portofolio Aufa Dzakiy, Full-Stack Developer Indonesia dengan keahlian React, Next.js, Flutter, Laravel, dan UI/UX Design. Berpengalaman dalam pengembangan aplikasi web dan mobile modern. Tersedia untuk proyek freelance dan peluang karir.",
  keywords: [
    "Full-Stack Developer Indonesia",
    "Web Developer Indonesia", 
    "UI/UX Designer Indonesia",
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Laravel Developer",
    "Frontend Developer Indonesia",
    "Backend Developer Indonesia",
    "Mobile App Developer",
    "Aufa Dzakiy",
    "Portfolio Developer",
    "Freelance Developer Indonesia"
  ],
  authors: [{ name: "Aufa Dzakiy" }],
  creator: "Aufa Dzakiy",
  publisher: "Aufa Dzakiy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://aufadzakiy.vercel.app",
    siteName: "Aufa Dzakiy Portfolio",
    title: "Aufa Dzakiy - Full-Stack Developer & UI/UX Designer Indonesia",
    description: "Full-Stack Developer Indonesia dengan keahlian React, Next.js, Flutter, Laravel, dan UI/UX Design. Berpengalaman dalam pengembangan aplikasi web dan mobile modern.",
    images: [
      {
        url: "/gw3.png",
        width: 1200,
        height: 630,
        alt: "Aufa Dzakiy - Full-Stack Developer Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aufa Dzakiy - Full-Stack Developer & UI/UX Designer Indonesia",
    description: "Full-Stack Developer Indonesia dengan keahlian React, Next.js, Flutter, Laravel, dan UI/UX Design.",
    images: ["/gw3.png"],
  },
  alternates: {
    canonical: "https://aufadzakiy.vercel.app",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    google: "google0340d445fd787cfd.html", // Ganti dengan kode verifikasi Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4JRF3PNM19"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4JRF3PNM19');
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased bg-white`}>
        {children}
        <SpeedInsights />
        <Analytics />

        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aufa Dzakiy",
              jobTitle: "Full-Stack Developer & UI/UX Designer",
              description: "Full-Stack Developer Indonesia dengan keahlian React, Next.js, Flutter, Laravel, dan UI/UX Design",
              url: "https://aufadzakiy.vercel.app",
              image: "https://aufadzakiy.vercel.app/gw3.png",
              sameAs: [
                "https://github.com/aufadzakiy",
                "https://linkedin.com/in/aufadzakiy",
                "https://instagram.com/aufadzakiy"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
                addressLocality: "Indonesia"
              },
              knowsAbout: [
                "JavaScript",
                "TypeScript", 
                "React",
                "Next.js",
                "Flutter",
                "Laravel",
                "PHP",
                "Python",
                "UI/UX Design",
                "Web Development",
                "Mobile Development"
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Full-Stack Developer",
                occupationLocation: {
                  "@type": "Country",
                  name: "Indonesia"
                },
                skills: [
                  "React Development",
                  "Next.js Development", 
                  "Flutter Development",
                  "Laravel Development",
                  "UI/UX Design",
                  "Frontend Development",
                  "Backend Development"
                ]
              }
            })
          }}
        />

        {/* Interactive Features Script (without custom cursor) */}
        <Script id="portfolio-interactions" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              document.addEventListener('DOMContentLoaded', function() {
                // Back to top button functionality
                const backToTopBtn = document.getElementById('back-to-top');
                if (backToTopBtn) {
                  window.addEventListener('scroll', function() {
                    if (window.scrollY > 300) {
                      backToTopBtn.style.opacity = '1';
                      backToTopBtn.style.visibility = 'visible';
                    } else {
                      backToTopBtn.style.opacity = '0';
                      backToTopBtn.style.visibility = 'hidden';
                    }
                  });
                }

                // Smooth scrolling for navigation links
                document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
                  anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                      target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  });
                });

                // Form validation and interaction
                const formInputs = document.querySelectorAll('.form-input');
                formInputs.forEach(function(input) {
                  input.addEventListener('focus', function() {
                    this.parentElement.classList.add('focused');
                  });
                  
                  input.addEventListener('blur', function() {
                    if (!this.value) {
                      this.parentElement.classList.remove('focused');
                    }
                  });
                });
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
