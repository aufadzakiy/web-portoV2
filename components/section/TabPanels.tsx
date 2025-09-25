"use client";

import React from 'react';

type Props = {
  active: number;
};

const PANELS: { title: string; description: string; skills: string[] }[] = [
  {
    title: 'Front-End Development',
    description:
      'Membangun antarmuka responsif dan interaktif menggunakan HTML, CSS, dan framework modern untuk pengalaman pengguna yang mulus.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Back-End Development',
    description:
      'Merancang API, otentikasi, dan logika server menggunakan teknologi yang scalable dan aman.',
    skills: ['Laravel', 'PHP', 'MySQL', 'REST API'],
  },
  {
    title: 'Mobile App Development',
    description:
      'Membangun aplikasi mobile cross-platform dan native dengan performa baik serta UX yang konsisten.',
    skills: ['Flutter', 'Dart', 'Android'],
  },
  {
    title: 'Data Science & Machine Learning',
    description:
      'Menganalisis data, membuat model prediktif, dan mengintegrasikannya ke produk untuk mendapatkan insight bisnis.',
    skills: ['Python', 'Pandas', 'scikit-learn', 'ML models', 'Data Visualization', 'Flask'],
  },
  {
    title: 'UI/UX Design & Prototyping',
    description:
      'Mendesain pengalaman pengguna yang intuitif dan membuat prototipe cepat untuk validasi ide.',
    skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Canva'],
  },
];

export default function TabPanels({ active }: Props) {
  // Render only the currently active panel and show each skill (one by one) with a short description.
  const panel = PANELS[active] ?? PANELS[0];

  const SKILL_DESCRIPTIONS: Record<string, string> = {
    HTML: 'Markup language for structuring web content.',
    CSS: 'Styling language for layout, colors, and responsive design.',
    JavaScript: 'Scripting language for interactivity and logic in the browser.',
    React: 'UI library for building component-based user interfaces.',
    'Next.js': 'React framework for SSR, routing, and static generation.',
    'TypeScript': 'Typed superset of JavaScript for safer code and tooling.',
    'Tailwind CSS': 'Utility-first CSS framework for rapid UI development.',
    Bootstrap: 'CSS framework for responsive, mobile-first projects with prebuilt components and utilities.',
    Flask: 'Micro web framework for Python, used for building backend APIs.',
    Laravel: 'PHP framework for building robust backend applications.',
    PHP: 'Server-side scripting language for web backends.',
    MySQL: 'Relational database for structured data storage.',
    Firebase: 'Backend-as-a-service for auth, database, and hosting.',
    'REST API': 'Standard architectural style for networked APIs.',
    Flutter: 'UI toolkit for building natively compiled mobile apps.',
    'React Native': 'Framework for building native mobile apps with React.',
    Dart: 'Programming language used by Flutter for cross-platform apps.',
    Android: 'Android platform targeting mobile devices.',
    iOS: 'Apple mobile platform for iPhone/iPad apps.',
    Python: 'General-purpose language popular for data and backend tasks.',
    Pandas: 'Python library for data manipulation and analysis.',
    'scikit-learn': 'Machine learning library for classical ML algorithms.',
    TensorFlow: 'Library for building and training neural networks.',
    'ML models': 'Predictive models built from data to power features.',
    'Data Visualization': 'Techniques and libraries to present data visually.',
    Figma: 'Design tool used for UI/UX and prototyping.',
    Prototyping: 'Quick mockups to validate UX flows and ideas.',
    'User Research': 'Methods to understand user needs and behaviors.',
    'Design Systems': 'Reusable UI components and guidelines for consistency.',
    Canva: 'Design tool for creating graphics, social media assets, and lightweight UI mockups.',
  };

  const SKILL_ICONS: Record<string, string> = {
    HTML: 'html-icon.svg',
    CSS: 'css-icon.svg',
    JavaScript: 'js-icon.svg',
    React: 'react-js-icon.svg',
    'Next.js': 'Next.js.svg',
    'TypeScript': 'typescript-icon.svg',
    'Tailwind CSS': 'tailwind-icon.svg',
    Bootstrap: 'bootstrap-icon.svg',
    Flask: 'flask-logo.svg',
    Laravel: 'laravel.svg',
    PHP: 'php-icon.svg',
    MySQL: 'mysql-icon.svg',
    Firebase: 'firebase-icon.svg',
    'REST API': 'api-icon.svg',
    Flutter: 'flutter-icon.svg',
    'React Native': 'react-js-icon.svg',
    Dart: 'dart-icon.svg',
    Android: 'android-icon.svg',
    iOS: 'window.svg',
    Python: 'python-icon.svg',
    Pandas: 'python-icon.svg',
    'scikit-learn': 'scikit-icon.svg',
    TensorFlow: 'ml-icon.svg',
    'ML models': 'algoritma.svg',
    'Data Visualization': 'data.svg',
    Figma: 'figma-icon.svg',
    Prototyping: 'figma-icon.svg',
    'User Research': 'user.svg',
    'Design Systems': 'desain.svg',
    Canva: 'canva-icon.svg',
  };

  return (
    <section className="mt-6 w-full" role="tabpanel" id={`tab-panel-${active}`} aria-labelledby={`tab-${active}`}>
      <div className="w-full bg-white rounded-2xl py-6 md:py-10 px-6 lg:px-8 shadow-sm border border-slate-100">
        <div className="text-center mb-6">
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">{panel.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {panel.skills.map((skill) => {
            const icon = SKILL_ICONS[skill] ?? 'globe.svg';
            return (
              <article key={skill} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center justify-center h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <img src={`/${icon}`} alt={`${skill} icon`} className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">{skill}</h3>
                    <p className="text-sm text-slate-600">{SKILL_DESCRIPTIONS[skill] ?? 'Keahlian ini digunakan untuk membangun bagian terkait dalam proyek.'}</p>
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