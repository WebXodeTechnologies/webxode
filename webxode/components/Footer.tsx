import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Logo from "@/public/webxodelogo.png";

const Footer = () => {
  return (
    <footer className="py-10 text-white">
      {/* Logo Section */}
      <div className="flex justify-center mb-4">
        <Image
          src={Logo}
          alt="Webxode Logo"
          height={150}
          width={150}
          className="object-contain"
        />
      </div>

      {/* Quick Links */}
      <div className="container flex flex-wrap justify-center gap-4 text-sm sm:text-base lg:text-lg font-montserrat cursor-pointer mb-8">
        {[
          { label: "Who are we", href: "/who-we-are" },
          { label: "What we do", href: "/what-we-do" },
          { label: "How we do", href: "/how-we-do" },
          { label: "Contact us", href: "/contact-us" },
          { label: "Blog", href: "/blog" },
          { label: "Careers", href: "/careers" },
          { label: "Terms and Conditions", href: "/terms-and-conditions" },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-purple transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-t border-dashed border-neutral-700 shadow-lg mb-8 mx-6 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-40" />

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-16 md:px-24 lg:px-32 xl:px-40 gap-6">
        {/* Copyright */}
        <p className="text-xs sm:text-sm md:text-base">
          &copy; {new Date().getFullYear()} Webxode Technologies. All rights
          reserved.
        </p>

        {/* Social Media */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61566478409721"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6 hover:text-[#1877F2] transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/webxode/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6 hover:text-[#E4405F] transition-colors" />
          </a>
          <a
            href="https://github.com/ak220193"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub className="w-6 h-6 hover:text-purple-500 transition-colors" />
          </a>
          <a
            href="https://www.youtube.com/@Webxodetechnologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
          >
            <FaYoutube className="w-6 h-6 hover:text-[#FF0000] transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 hover:text-[#0077B5] transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
