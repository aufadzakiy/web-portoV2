import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Aufa Dzakiy - Full-Stack Developer Indonesia",
  description: "Hubungi Aufa Dzakiy untuk diskusi proyek web development, mobile app development, UI/UX design, atau peluang kolaborasi. Aufa Dzakiy siap membantu mewujudkan solusi digital Anda.",
  keywords: [
    "Kontak Aufa Dzakiy",
    "Hubungi Aufa Dzakiy",
    "aufa dzakiy contact",
    "Hubungi Developer Indonesia",
    "Full-Stack Developer Freelance",
    "Konsultasi Web Development",
    "Jasa Pembuatan Website",
    "Developer untuk Hire",
    "React Developer Indonesia",
    "Flutter Developer Indonesia",
    "Freelance Developer",
    "Email Aufa Dzakiy"
  ],
  openGraph: {
    title: "Hubungi Aufa Dzakiy - Full-Stack Developer Indonesia",
    description: "Hubungi Aufa Dzakiy untuk diskusi proyek web development, mobile app development, UI/UX design, atau peluang kolaborasi.",
    url: "https://aufadzakiy.vercel.app/contact",
    images: [
      {
        url: "/gw3.png",
        width: 1200,
        height: 630,
        alt: "Kontak Aufa Dzakiy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubungi Aufa Dzakiy - Full-Stack Developer Indonesia",
    description: "Hubungi Aufa Dzakiy untuk diskusi proyek web development, mobile app development, UI/UX design, atau peluang kolaborasi.",
    images: ["/gw3.png"],
  },
  alternates: {
    canonical: "https://aufadzakiy.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}