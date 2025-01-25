'use client'
import React from "react";
import Image from "next/image";
import Contact from "@/public/demo/contactusimage1.svg"
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Herobanner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Grid 1 */}
        <div className="space-y-6">
          <div>
            <h1 className="text-left font-montserrat text-3xl tracking-wider text-white">
              Connect With Us
            </h1>
            <p className="mt-4 text-white text-lg leading-relaxed">
              For business inquiries and appointment bookings, kindly mail us or connect on WhatsApp.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              onClick={() => window.location.href = "mailto:webxodetechnologies@gmail.com"}
            >
              <MdEmail className="mr-2 text-xl" />
              Email Us
            </button>
            <button
              className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
              onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=9345336311"}
            >
              <IoLogoWhatsapp className="mr-2 text-xl" />
              WhatsApp
            </button>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={Contact}
            alt="Contact Us"
            width={900}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Herobanner;
