import React from 'react';
import Image from 'next/image';
import Logo from '@/public/WebxodeLogo.png';
import { FaFacebookF, FaLinkedin, FaYoutube,FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="text-neutral-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* Grid 1 */}
        <div className="space-y-6">
          <Image src={Logo} alt="Company Logo" width={200} height={200} className="" />
          <div className="text-center md:text-left">
            <p><a href="mailto:contact.webxodetechnolgies@gmail.com" className="text-white-100 transition-colors">contact.webxodetechnolgies@gmail.com</a></p>
            <p><a href="tel:+9150253488" className="text-white-100 transition-colors">+91-9150253488</a></p>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="space-y-4 flex flex-col items-center">
          <ul className="space-y-2">
            <li><a href="#home" className=" text-white-100 transition-colors">Who are we?</a></li>
            <li><a href="#about" className=" text-white-100  transition-colors">What we Do?</a></li>
            <li><a href="#services" className=" text-white-100 transition-colors">How we Do?</a></li>
            <li><a href="#contact" className=" text-white-100  transition-colors">Terms & Conditions</a></li>
            <li><a href="#contact" className=" text-white-100  transition-colors">Carrers</a></li>
            <li><a href="#contact" className=" text-white-100 transition-colors">Connect With Us</a></li>
          </ul>
        </div>

        {/* Grid 3 */}
        <div className="space-y-4 flex flex-col items-center">
          <ul className="space-y-2">
            <li><a href="#web-development" className="text-white-100 transition-colors">Web Development</a></li>
            <li><a href="#app-development" className="text-white-100 transition-colors">App Development</a></li>
            <li><a href="#digital-marketing" className="text-white-100 transition-colors">Digital Marketing</a></li>
            <li><a href="#ui-ux-design" className="text-white-100 transition-colors">UI/UX Design</a></li>
            <li><a href="#ui-ux-design" className="text-white-100 transition-colors">Business Consulting</a></li>
          </ul>
        </div>

        {/* Grid 4 */}
        <div className="flex flex-col justify-center items-center space-y-4">
          {/* Heading centered */}
          <h2 className="text-white-100 text-xl font-semibold">Connect with Us</h2>
          {/* Icons in a row */}
          <div className="flex justify-center items-center space-x-8">
            <div className="flex flex-col items-center">
              <a href="https://www.facebook.com/profile.php?id=61566478409721" className="transition-transform transform hover:scale-110">
                <FaFacebookF className="text-[#4267B2] text-3xl" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.instagram.com/webxode/" className="transition-transform transform hover:scale-110">
                <FaInstagram className="text-[#E1306C] text-3xl" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="#" className="transition-transform transform hover:scale-110">
                <FaLinkedin className="text-[#0077B5] text-3xl" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.youtube.com/@Webxodetechnologies" className="transition-transform transform hover:scale-110">
                <FaYoutube className="text-[#FF0000] text-3xl" />
              </a>
            </div>
          </div>
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
