import React from "react";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";

const DemoCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Book a Live Demo</h1>
        <p className="text-lg mb-8">
          Schedule a personalized demo with us to see how Webxode can help
          elevate your business.
          <br /> Choose your preferred platform and let&apos;s get started!
        </p>

        <div className="flex justify-center gap-8">
          {/* Google Meet Button */}
          <a
            href="https://meet.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50"
          >
            <FaGoogle className="mr-3 text-2xl" />
            <span>Google Meet</span>
          </a>

          {/* Microsoft Teams Button */}
          <a
            href="https://www.microsoft.com/en/microsoft-teams/group-chat-software"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50"
          >
            <FaMicrosoft className="mr-3 text-2xl" />
            <span>Microsoft Teams</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoCTA;
