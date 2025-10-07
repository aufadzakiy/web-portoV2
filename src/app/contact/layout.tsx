import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Aufa (Aufa Dzakiy) - Full-Stack Developer Terbaik Indonesia",
  description: "Hubungi Aufa (Aufa Dzakiy) untuk web development, mobile app development, UI/UX design. Aufa developer profesional terbaik siap membantu mewujudkan solusi digital Anda. Kontak Aufa Dzakiy sekarang.",
  keywords: [
    "Kontak Aufa",
    "Hubungi Aufa",
    "Kontak Aufa Dzakiy",
    "Hubungi Aufa Dzakiy",
    "aufa",
    "aufa dzakiy",
    "aufa dzakiy contact",
    "Email Aufa",
    "Email Aufa Dzakiy",
    "Hubungi Developer Indonesia",
    "Full-Stack Developer Freelance",
    "Konsultasi Web Development",
    "Jasa Pembuatan Website",
    "Developer untuk Hire",
    "React Developer Indonesia",
    "Flutter Developer Indonesia",
    "Freelance Developer Terbaik"
  ],
  openGraph: {
    title: "Hubungi Aufa (Aufa Dzakiy) - Full-Stack Developer Indonesia",
    description: "Hubungi Aufa untuk web development, mobile app development, UI/UX design. Developer profesional terbaik untuk solusi digital Anda.",
    url: "https://aufa-space.vercel.app/contact",
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
    title: "Hubungi Aufa (Aufa Dzakiy) - Full-Stack Developer Indonesia",
    description: "Hubungi Aufa untuk web development, mobile app, UI/UX design. Developer profesional siap membantu.",
    images: ["/gw3.png"],
  },
  alternates: {
    canonical: "https://aufa-space.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}