import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from '@/public/webxodelogo.png';

const Footer = () => {
  return (
    <footer className="py-20 text-white bg-transparent mt-5">
      {/* Logo Section */}
      <div className="flex justify-center mb-6">
        <Image src={Logo} alt="Webxode Logo" height={150} width={150} className="object-contain" />
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap justify-center gap-6 text-lg mb-6 font-montserrat cursor-pointer">
        {[
          { label: 'Who are we', href: '/who-we-are' },
          { label: 'What we do', href: '/what-we-do' },
          { label: 'How we do', href: '/how-we-do' },
          { label: 'Contact us', href: '/contact-us' },
          { label: 'Blog', href: '/blog' },
          { label: 'Careers', href: '/careers' },
          { label: 'Terms and Conditions', href: '/terms-and-conditions' },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-purple transition-colors scale-110"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-t-1 border-dashed border-neutral-300 shadow-2xl mb-6 mx-20" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between gap-5 items-center px-20">
        {/* Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Webxode Technologies. All rights reserved.
        </p>

        {/* Social Media */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=61566478409721" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="w-5 h-5 hover:text-[#1877F2] transition-colors" />
          </a>
          <a href="https://www.instagram.com/webxode/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="w-5 h-5 hover:text-[#E4405F] transition-colors" />
          </a>
          <a href="https://www.youtube.com/@Webxodetechnologies" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
            <FaYoutube  className="w-5 h-5 hover:text-[#FF0000] transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5  hover:text-[#0077B5] transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
