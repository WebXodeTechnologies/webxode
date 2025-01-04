"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/casestudy/companylogonew.svg";
import { GrFormClose } from "react-icons/gr";
import { BiMenuAltLeft } from "react-icons/bi";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export function FloatingNav({ navItems, className = "" }: FloatingNavProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div
      className={`fixed top-0 inset-x-0 z-50 text-white border-b border-white-100 shadow-md backdrop-blur-md ${className}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 px-2 py-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt="Webxode Logo"
              width={50}
              height={40}
              className="w-16 sm:w-20 md:w-24"
            />
            <h1 className="text-3xl font-semibold uppercase tracking-widest font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 cursor-pointer">
              Webxode
            </h1>
          </Link>
        </div>

        {/* Center: Navigation Items (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="flex items-center space-x-1 text-xs sm:text-sm font-medium hover:text-gray-300 transition duration-300"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/get-started">
            <button className="bg-blue-600 text-white px-4 py-1 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-sm">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button for sm and md devices */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <GrFormClose className="w-6 h-6" />
            ) : (
              <BiMenuAltLeft className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full Screen) */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-75 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button at Top Right for mobile menu */}
        {isMobileMenuOpen && (
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-white w-8 h-8 bg-opacity-50 hover:bg-opacity-75 rounded-full"
          >
            <GrFormClose className="w-6 h-6" />
          </button>
        )}
        <div className="flex justify-center items-center w-full h-screen bg-black">
          <ul className="space-y-6 text-center text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="text-xl font-medium hover:text-gray-300 transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/get-started">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 transition duration-300 text-lg">
                  Get Started
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
