"use client";

import React from "react";

type Props = {
  active: number;
};

const PANELS: { title: string; description: string; skills: string[] }[] = [
  {
    title: "Front-End Development",
    description:
      "Membangun antarmuka responsif dan interaktif menggunakan HTML, CSS, dan framework modern untuk pengalaman pengguna yang mulus.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Back-End Development",
    description:
      "Merancang API, otentikasi, dan logika server menggunakan teknologi yang scalable dan aman.",
    skills: ["Laravel", "PHP", "MySQL", "REST API"],
  },
  {
    title: "Mobile App Development",
    description:
      "Membangun aplikasi mobile cross-platform dan native dengan performa baik serta UX yang konsisten.",
    skills: ["Flutter", "Dart", "Android"],
  },
  {
    title: "Data Science & Machine Learning",
    description:
      "Menganalisis data, membuat model prediktif, dan mengintegrasikannya ke produk untuk mendapatkan insight bisnis.",
    skills: [
      "Python",
      "Pandas",
      "scikit-learn",
      "ML models",
      "Data Visualization",
      "Flask",
    ],
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "Mendesain pengalaman pengguna yang intuitif dan membuat prototipe cepat untuk validasi ide.",
    skills: [
      "Figma",
      "Prototyping",
      "User Research",
      "Design Systems",
      "Canva",
    ],
  },
];

export default function TabPanels({ active }: Props) {
  // Render only the currently active panel and show each skill (one by one) with a short description.
  const panel = PANELS[active] ?? PANELS[0];

  const SKILL_DESCRIPTIONS: Record<string, string> = {
    HTML: "Bahasa markup fundamental untuk menyusun struktur konten di web.",
    CSS: "Bahasa untuk mendesain tata letak, warna, dan responsivitas visual.",
    JavaScript:
      "Bahasa skrip untuk menciptakan interaktivitas dan logika pada sisi klien (browser).",
    React: "Pustaka (library) UI untuk membangun antarmuka pengguna berbasis komponen yang modern.",
    "Next.js": "Framework React untuk rendering sisi-server (SSR), routing, dan optimasi performa.",
    TypeScript: "Superset JavaScript dengan pengetikan statis untuk kode yang lebih aman dan skalabel.",
    "Tailwind CSS": "Framework CSS utility-first untuk pengembangan antarmuka yang cepat dan kustom.",
    Bootstrap:
      "Framework CSS untuk proyek responsif dan mobile-first dengan komponen siap pakai.",
    Flask: "Micro-framework Python untuk membangun API backend yang ringan dan efisien.",
    Laravel: "Framework PHP untuk membangun aplikasi backend yang tangguh dan terstruktur.",
    PHP: "Bahasa skrip sisi-server yang populer untuk pengembangan backend web.",
    MySQL: "Sistem manajemen basis data relasional untuk penyimpanan data terstruktur.",
    Firebase: "Platform Backend-as-a-Service untuk otentikasi, database real-time, dan hosting.",
    "REST API": "Standar arsitektur untuk merancang layanan web yang terukur dan stateless.",
    Flutter: "UI toolkit dari Google untuk membangun aplikasi mobile natif yang terkompilasi.",
    "React Native": "Framework untuk membangun aplikasi mobile natif menggunakan React.",
    Dart: "Bahasa pemrograman yang dioptimalkan untuk UI, digunakan oleh Flutter.",
    Android: "Platform Android untuk pengembangan aplikasi pada perangkat mobile.",
    iOS: "Platform mobile Apple untuk pengembangan aplikasi iPhone/iPad.",
    Python: "Bahasa serbaguna yang unggul dalam analisis data, AI, dan pengembangan backend.",
    Pandas: "Pustaka Python esensial untuk manipulasi dan analisis data.",
    "scikit-learn": "Pustaka machine learning untuk menerapkan algoritma ML klasik.",
    TensorFlow: "Pustaka komprehensif untuk membangun dan melatih jaringan saraf tiruan.",
    "ML models": "Model prediktif yang dibangun dari data untuk memberikan wawasan dan fitur cerdas.",
    "Data Visualization": "Teknik dan pustaka untuk menyajikan data secara visual agar mudah dipahami.",
    Figma: "Alat desain kolaboratif untuk merancang UI/UX dan prototipe interaktif.",
    Prototyping: "Proses pembuatan mockup cepat untuk memvalidasi alur UX dan menguji ide.",
    "User Research": "Metode riset untuk memahami kebutuhan, perilaku, dan motivasi pengguna.",
    "Design Systems": "Kumpulan komponen dan panduan UI yang dapat digunakan kembali untuk menjaga konsistensi.",
    Canva:
      "Alat desain grafis untuk membuat aset visual, materi media sosial, dan mockup ringan.",
  };

  const SKILL_ICONS: Record<string, string> = {
    HTML: "html-icon.svg",
    CSS: "css-icon.svg",
    JavaScript: "js-icon.svg",
    React: "react-js-icon.svg",
    "Next.js": "Next.js.svg",
    TypeScript: "typescript-icon.svg",
    "Tailwind CSS": "tailwind-icon.svg",
    Bootstrap: "bootstrap-icon.svg",
    Flask: "flask-logo.svg",
    Laravel: "laravel.svg",
    PHP: "php-icon.svg",
    MySQL: "mysql-icon.svg",
    Firebase: "firebase-icon.svg",
    "REST API": "api-icon.svg",
    Flutter: "flutter-icon.svg",
    "React Native": "react-js-icon.svg",
    Dart: "dart-icon.svg",
    Android: "android-icon.svg",
    iOS: "window.svg",
    Python: "python-icon.svg",
    Pandas: "python-icon.svg",
    "scikit-learn": "scikit-icon.svg",
    TensorFlow: "ml-icon.svg",
    "ML models": "algoritma.svg",
    "Data Visualization": "data.svg",
    Figma: "figma-icon.svg",
    Prototyping: "figma-icon.svg",
    "User Research": "user.svg",
    "Design Systems": "desain.svg",
    Canva: "canva-icon.svg",
  };

  return (
    <section
      className="mt-6 w-full"
      role="tabpanel"
      id={`tab-panel-${active}`}
      aria-labelledby={`tab-${active}`}
    >
      <div className="w-full bg-white rounded-2xl py-6 md:py-10 px-6 lg:px-8 shadow-sm border border-slate-100">
        <div className="text-center mb-6">
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            {panel.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {panel.skills.map((skill) => {
            const icon = SKILL_ICONS[skill] ?? "globe.svg";
            return (
              <article
                key={skill}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center justify-center h-full"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <img
                      src={`/${icon}`}
                      alt={`${skill} icon`}
                      className="w-8 h-8"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">
                      {skill}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {SKILL_DESCRIPTIONS[skill] ??
                        "Keahlian ini digunakan untuk membangun bagian terkait dalam proyek."}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
