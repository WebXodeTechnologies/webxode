"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; 
import Contact from "@/public/demo/office.svg";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Herobanner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Grid 1 */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h1
              className="text-left font-montserrat text-4xl tracking-wider text-white"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Connect With Us
            </motion.h1>
            <motion.p
              className="mt-4 text-white text-lg leading-relaxed"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              For business inquiries and appointment bookings, kindly mail us or connect on WhatsApp.
            </motion.p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <motion.button
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              onClick={() => window.location.href = "mailto:webxodetechnologies@gmail.com"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdEmail className="mr-2 text-xl" />
              Email Us
            </motion.button>
            <motion.button
              className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
              onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=9345336311"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoLogoWhatsapp className="mr-2 text-xl" />
              WhatsApp
            </motion.button>
          </div>
        </motion.div>

        {/* Grid 2 */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src={Contact}
            alt="Contact Us"
            width={900}
            height={900}
            unoptimized
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Herobanner;
