'use client';

import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Initialize particles on client side
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${2 + Math.random() * 3}s`
    }));
    setParticles(newParticles);
  }, []);

  const socialLinks = [
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/aufadzakiy', color: 'hover:text-pink-500' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/aufadzakiy', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/aufadzakiy', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/aufadzakiy', color: 'hover:text-gray-600' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/aufadzakiy', color: 'hover:text-red-500' }
  ];

  const navigationLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skill', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Machine Learning',
    'Consulting',
    'Technical Writing'
  ];

  const contactInfo = [
    { icon: 'fas fa-envelope', text: 'aufadzakiy@example.com', link: 'mailto:aufadzakiy@example.com' },
    { icon: 'fab fa-whatsapp', text: '+62 838-7283-9074', link: 'https://wa.me/6283872839074' },
    { icon: 'fas fa-map-marker-alt', text: 'Jalan Adhyaksa Raya, Sukapura, Dayeuhkolot, Bandung, Jawa Barat, Indonesia', link: '#' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <footer id="main-footer" className="relative bg-white text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Footer Top */}
      <div className="relative z-10 py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-poppins">
                  Portofolio.
                </h3>
                <p className="text-gray-400 mt-2 font-poppins leading-relaxed">
                  Menciptakan pengalaman digital yang mengesankan melalui kode yang berkualitas dan desain yang thoughtful.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700 `}
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 font-poppins">Navigasi</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 font-poppins hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 font-poppins">Layanan</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 font-poppins">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 font-poppins">Kontak</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className={`${contact.icon} text-purple-400 mt-1 flex-shrink-0`}></i>
                    {contact.link.startsWith('#') ? (
                      <span className="text-gray-400 text-sm font-poppins leading-relaxed">
                        {contact.text}
                      </span>
                    ) : (
                      <a
                        href={contact.link}
                        target={contact.link.startsWith('http') ? '_blank' : undefined}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-poppins leading-relaxed"
                      >
                        {contact.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm font-poppins">
                © {currentYear} Aufa Dzakiy. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-poppins"
              >
                Privacy Policy
              </a>
              <a 
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-poppins"
              >
                Terms of Service
              </a>
              <a 
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-poppins"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>



      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {isClient && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-500/20 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        #back-to-top {
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
      `}</style>
    </footer>
  );
}
