import React from 'react';
import Image from 'next/image';
import Logo from '@/public/WebxodeLogo.png';

const Footer = () => {
  return (
    <footer className="text-neutral-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Grid 1 */}
        <div className="space-y-6">
          <Image src={Logo} alt="Company Logo" width={200} height={200} className="" />
          <div className="text-center md:text-left">
            <p>Email: <a href="mailto:contact.webxodetechnolgies@gmail.com" className="text-blue-500 hover:text-blue-400 transition-colors">contact.webxodetechnolgies@gmail.com</a></p>
            <p>Contact: <a href="tel:+9150253488" className="text-blue-500 hover:text-blue-400 transition-colors">+91-9150253488</a></p>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-blue-500 hover:text-blue-400 transition-colors">Who are we?</a></li>
            <li><a href="#about" className="text-blue-500 hover:text-blue-400 transition-colors">What we Do?</a></li>
            <li><a href="#services" className="text-blue-500 hover:text-blue-400 transition-colors">How we Do?</a></li>
            <li><a href="#contact" className="text-blue-500 hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
            <li><a href="#contact" className="text-blue-500 hover:text-blue-400 transition-colors">Connect With Us</a></li>
          </ul>
        </div>

        {/* Grid 3 */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg text-white">Find us on</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">Facebook</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">Instagram</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-700 my-8" />

      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Webxode Technology Solutions | All rights reserved.</p>
        <p>Designed by <span className="font-bold text-blue-500">Webxode Technology Solutions</span>.</p>
      </div>
    </footer>
  );
};

export default Footer;
