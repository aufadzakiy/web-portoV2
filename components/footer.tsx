const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/aufadzakiy",
    label: "GitHub"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aufadzakiy",
    label: "LinkedIn"
  },
  {
    name: "Email",
    href: "mailto:aufadzakiy.work@gmail.com",
    label: "Email"
  },
];

import Image from "next/image";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/contact" },
];

const skills = [
  { name: "UI/UX Design", href: "/#skills" },
  { name: "Web Development", href: "/#skills" },
  { name: "Mobile Apps", href: "/#skills" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative bg-[#0a1628] text-white pt-16 pb-16"
      style={{
        backgroundImage: 'url(/bg-garis-kotak.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-6 lg:px-9">
        <div className="relative bg-[#2B2D42]/80 backdrop-blur-sm rounded-[32px] px-6 py-16 lg:px-12 lg:py-20 border border-white/10">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 pb-8">
            {/* Brand Section */}
            <div className="lg:max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <Image src="/favicon-white.svg" alt="Aufa logo" width={40} height={40} className="object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Aufa Dzakiy
                </h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Full-Stack Developer & UI/UX Designer yang membantu bisnis membangun solusi digital yang inovatif dan user-friendly — semua yang Anda butuhkan dalam satu tempat.
              </p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-3">
                  {skills.map((skill) => (
                    <li key={skill.name}>
                      <a 
                        href={skill.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {skill.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="text-white font-semibold mb-4">Connect</h4>
                <ul className="space-y-3">
                  {socialLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/70">
              © {currentYear} Aufa Dzakiy. All rights reserved
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-white/70 hover:text-white transition-colors underline">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/70 hover:text-white transition-colors underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
