import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Aufa (Aufa Dzakiy) - Full-Stack Developer & UI/UX Designer Terbaik Indonesia",
  description: "Kenali Aufa (Aufa Dzakiy) lebih dekat. Aufa adalah Full-Stack Developer & UI/UX Designer Indonesia terbaik dengan pengalaman React, Next.js, Flutter, Laravel. Pelajari perjalanan karir Aufa Dzakiy dan keahlian teknologi yang dimiliki Aufa.",
  keywords: [
    "Aufa",
    "Tentang Aufa",
    "Aufa Dzakiy",
    "aufa dzakiy",
    "aufa",
    "Tentang Aufa Dzakiy",
    "Profil Aufa",
    "Profil Aufa Dzakiy",
    "Biodata Aufa",
    "Biodata Aufa Dzakiy",
    "Aufa Developer",
    "Aufa Full Stack",
    "Full-Stack Developer Indonesia", 
    "Web Developer Indonesia",
    "UI/UX Designer Indonesia",
    "React Developer Indonesia",
    "Next.js Developer Indonesia",
    "Flutter Developer Indonesia",
    "Laravel Developer Indonesia",
    "Developer Terbaik Indonesia",
    "Portfolio Developer Indonesia",
    "Karir Developer Indonesia"
  ],
  openGraph: {
    title: "Tentang Aufa (Aufa Dzakiy) - Full-Stack Developer Terbaik Indonesia",
    description: "Kenali Aufa (Aufa Dzakiy) lebih dekat. Full-Stack Developer Indonesia terbaik dengan pengalaman React, Next.js, Flutter, Laravel.",
    url: "https://aufadzakiy.vercel.app/about",
    images: [
      {
        url: "/gw3.png",
        width: 1200,
        height: 630,
        alt: "Aufa Dzakiy - About Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Aufa (Aufa Dzakiy) - Full-Stack Developer Indonesia",
    description: "Kenali Aufa lebih dekat. Full-Stack Developer Indonesia dengan pengalaman React, Next.js, Flutter, Laravel.",
    images: ["/gw3.png"],
  },
  alternates: {
    canonical: "https://aufadzakiy.vercel.app/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}