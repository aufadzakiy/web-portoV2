import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Saya - Aufa Dzakiy | Full-Stack Developer Indonesia",
  description: "Pelajari lebih lanjut tentang perjalanan karir Aufa Dzakiy sebagai Full-Stack Developer Indonesia. Pengalaman, keahlian teknologi, dan dedikasi dalam pengembangan web dan mobile.",
  keywords: [
    "Aufa Dzakiy",
    "Full-Stack Developer Indonesia", 
    "Web Developer Indonesia",
    "UI/UX Designer Indonesia",
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Laravel Developer",
    "Portfolio Developer Indonesia",
    "Tentang Developer",
    "Karir Developer Indonesia"
  ],
  openGraph: {
    title: "Tentang Saya - Aufa Dzakiy | Full-Stack Developer Indonesia",
    description: "Pelajari lebih lanjut tentang perjalanan karir Aufa Dzakiy sebagai Full-Stack Developer Indonesia. Pengalaman, keahlian teknologi, dan dedikasi dalam pengembangan web dan mobile.",
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
    title: "Tentang Saya - Aufa Dzakiy | Full-Stack Developer Indonesia",
    description: "Pelajari lebih lanjut tentang perjalanan karir Aufa Dzakiy sebagai Full-Stack Developer Indonesia.",
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