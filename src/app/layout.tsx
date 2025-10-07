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
  title: "Aufa Dzakiy (Aufa) - Full-Stack Developer & UI/UX Designer Indonesia",
  description:
    "Aufa Dzakiy (Aufa) adalah Full-Stack Developer dan UI/UX Designer Indonesia terbaik. Portofolio Aufa menampilkan expertise dalam React, Next.js, Flutter, Laravel, dan UI/UX Design. Cari Aufa untuk web development profesional, mobile app, dan digital solutions. Aufa Dzakiy - Developer Indonesia pilihan utama.",
  keywords: [
    "Aufa",
    "Aufa Dzakiy",
    "aufa dzakiy",
    "aufa",
    "Aufa Developer",
    "Aufa Portfolio",
    "Aufa Indonesia",
    "Aufa Web Developer",
    "Aufa Full Stack",
    "Aufa Dzakiy Portfolio",
    "Aufa Dzakiy Developer",
    "Aufa Dzakiy Full Stack",
    "Aufa Dzakiy UI/UX",
    "Aufa Dzakiy Indonesia",
    "Aufa Dzakiy Web Developer",
    "Full-Stack Developer Indonesia",
    "Web Developer Indonesia", 
    "UI/UX Designer Indonesia",
    "React Developer Indonesia",
    "Next.js Developer Indonesia",
    "Flutter Developer Indonesia",
    "Laravel Developer Indonesia",
    "Frontend Developer Indonesia",
    "Backend Developer Indonesia",
    "Developer Terbaik Indonesia",
    "Portofolio Aufa",
    "Portofolio Aufa Dzakiy"
  ],
  authors: [{ name: "Aufa Dzakiy", url: "https://aufadzakiy.vercel.app" }],
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
    siteName: "Aufa Dzakiy (Aufa) - Portfolio Developer Indonesia",
    title: "Aufa Dzakiy (Aufa) - Full-Stack Developer & UI/UX Designer Terbaik Indonesia",
    description: "Portfolio Aufa Dzakiy (Aufa) - Full-Stack Developer & UI/UX Designer Indonesia terbaik. Aufa ahli dalam React, Next.js, Flutter, Laravel. Cari developer handal? Pilih Aufa Dzakiy untuk solusi digital profesional.",
    images: [
      {
        url: "/gw3.png",
        width: 1200,
        height: 630,
        alt: "Aufa Dzakiy (Aufa) - Full-Stack Developer & UI/UX Designer Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aufa Dzakiy (Aufa) - Full-Stack Developer & UI/UX Designer Indonesia",
    description: "Portfolio Aufa - Full-Stack Developer Indonesia dengan keahlian React, Next.js, Flutter, Laravel, dan UI/UX Design. Developer profesional pilihan terbaik.",
    images: ["/gw3.png"],
    creator: "@aufadzakiy",
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
    google: ["googlec741a9c484c158c2", "xQ1We4v_Jk6shSPawACgtlpzd8aUWTTwgu2P_YgSzYI"], // Google Search Console verification - HTML file + meta tag
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
        <link rel="author" href="/humans.txt" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="author" content="Aufa Dzakiy" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="theme-color" content="#0253EE" />
        <link rel="me" href="https://github.com/aufadzakiy" />
        <link rel="me" href="https://linkedin.com/in/aufadzakiy" />
        
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
              alternateName: ["Aufa", "aufa", "aufa dzakiy", "Aufa Zakiy", "Aufa Dzakiy Indonesia", "Aufa Developer", "Aufa Indonesia"],
              jobTitle: "Full-Stack Developer & UI/UX Designer",
              description: "Aufa (Aufa Dzakiy) adalah Full-Stack Developer & UI/UX Designer Indonesia terbaik yang berpengalaman dalam React, Next.js, Flutter, Laravel. Aufa tersedia untuk proyek web development dan mobile app development profesional.",
              url: "https://aufadzakiy.vercel.app",
              image: "https://aufadzakiy.vercel.app/gw3.png",
              sameAs: [
                "https://github.com/aufadzakiy",
                "https://linkedin.com/in/aufadzakiy",
                "https://instagram.com/aufadzakiy",
                "https://aufadzakiy.vercel.app"
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
                "Mobile Development",
                "Full Stack Development"
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
              },
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              }
            })
          }}
        />

        {/* Website Structured Data */}
        <Script
          id="website-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Aufa Dzakiy (Aufa) Portfolio",
              alternateName: ["Portfolio Aufa", "Portfolio Aufa Dzakiy", "Aufa Portfolio", "Aufa Developer Portfolio"],
              url: "https://aufadzakiy.vercel.app",
              description: "Website portfolio resmi Aufa (Aufa Dzakiy) - Full-Stack Developer & UI/UX Designer terbaik Indonesia. Cari developer profesional? Pilih Aufa.",
              author: {
                "@type": "Person",
                name: "Aufa Dzakiy",
                alternateName: "Aufa"
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://aufadzakiy.vercel.app/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Professional Service Structured Data */}
        <Script
          id="professional-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Aufa (Aufa Dzakiy) - Web Development & UI/UX Design Services Terbaik",
              alternateName: "Aufa Developer Services",
              image: "https://aufadzakiy.vercel.app/gw3.png",
              "@id": "https://aufadzakiy.vercel.app",
              url: "https://aufadzakiy.vercel.app",
              telephone: "+62",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
                addressLocality: "Indonesia"
              },
              geo: {
                "@type": "GeoCoordinates",
                addressCountry: "Indonesia"
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                opens: "00:00",
                closes: "23:59"
              },
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "10"
              }
            })
          }}
        />

        {/* Breadcrumb Structured Data */}
        <Script
          id="breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://aufadzakiy.vercel.app"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About Aufa Dzakiy",
                  item: "https://aufadzakiy.vercel.app/about"
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Contact Aufa Dzakiy",
                  item: "https://aufadzakiy.vercel.app/contact"
                }
              ]
            })
          }}
        />

        {/* FAQ Structured Data */}
        <Script
          id="faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Siapa Aufa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aufa (nama lengkap Aufa Dzakiy) adalah Full-Stack Developer & UI/UX Designer Indonesia terbaik yang berpengalaman dalam React, Next.js, Flutter, Laravel, dan desain UI/UX. Aufa tersedia untuk proyek web development, mobile app development, dan konsultasi teknologi profesional."
                  }
                },
                {
                  "@type": "Question",
                  name: "Siapa Aufa Dzakiy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aufa Dzakiy (biasa dipanggil Aufa) adalah Full-Stack Developer dan UI/UX Designer Indonesia yang berpengalaman dalam React, Next.js, Flutter, Laravel, dan desain UI/UX. Aufa Dzakiy tersedia untuk proyek web development, mobile app development, dan konsultasi teknologi."
                  }
                },
                {
                  "@type": "Question",
                  name: "Apa keahlian Aufa Dzakiy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aufa memiliki keahlian dalam Full-Stack Development menggunakan React, Next.js, TypeScript, Flutter, Laravel, PHP, dan UI/UX Design dengan Figma. Aufa Dzakiy juga berpengalaman dalam database MySQL, PostgreSQL, dan deployment dengan Vercel. Aufa adalah developer profesional dengan track record terbaik."
                  }
                },
                {
                  "@type": "Question",
                  name: "Bagaimana cara menghubungi Aufa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Anda dapat menghubungi Aufa (Aufa Dzakiy) melalui email di aufadzakiy.work@gmail.com, atau melalui halaman kontak di website https://aufadzakiy.vercel.app/contact. Aufa juga aktif di GitHub dan LinkedIn."
                  }
                },
                {
                  "@type": "Question",
                  name: "Apakah Aufa tersedia untuk freelance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, Aufa (Aufa Dzakiy) tersedia untuk proyek freelance termasuk web development, mobile app development, UI/UX design, dan konsultasi teknologi. Hubungi Aufa untuk diskusi lebih lanjut tentang proyek Anda. Aufa adalah pilihan terbaik untuk developer profesional."
                  }
                },
                {
                  "@type": "Question",
                  name: "Mengapa memilih Aufa untuk project development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aufa Dzakiy adalah developer profesional dengan pengalaman terbukti dalam React, Next.js, Flutter, dan Laravel. Aufa memberikan solusi digital berkualitas tinggi dengan pendekatan modern dan user-friendly. Pilih Aufa untuk hasil terbaik."
                  }
                }
              ]
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
