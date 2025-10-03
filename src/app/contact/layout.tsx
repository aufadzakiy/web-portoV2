import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak - Aufa Dzakiy | Hubungi Full-Stack Developer Indonesia",
  description: "Hubungi Aufa Dzakiy untuk diskusi proyek, konsultasi pengembangan web/mobile, atau peluang kolaborasi. Full-Stack Developer Indonesia siap membantu kebutuhan teknologi Anda.",
  keywords: [
    "Kontak Aufa Dzakiy",
    "Hubungi Developer Indonesia",
    "Full-Stack Developer Freelance",
    "Konsultasi Web Development",
    "Jasa Pembuatan Website",
    "Developer untuk Hire",
    "React Developer Indonesia",
    "Flutter Developer Indonesia",
    "Freelance Developer"
  ],
  openGraph: {
    title: "Kontak - Aufa Dzakiy | Hubungi Full-Stack Developer Indonesia",
    description: "Hubungi Aufa Dzakiy untuk diskusi proyek, konsultasi pengembangan web/mobile, atau peluang kolaborasi.",
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
    title: "Kontak - Aufa Dzakiy | Hubungi Full-Stack Developer Indonesia",
    description: "Hubungi Aufa Dzakiy untuk diskusi proyek, konsultasi pengembangan web/mobile, atau peluang kolaborasi.",
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