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
  title: "Portofolio Kreatif - Aufa Dzakiy",
  description:
    "Portfolio website showcasing web development, mobile development, UI/UX design, and machine learning projects",
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
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />

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
