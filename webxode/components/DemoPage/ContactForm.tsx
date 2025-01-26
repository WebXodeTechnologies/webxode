import React from "react";
import Image from "next/image";
import contact from "@/public/demo/phone1.png";

const ContactForm = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl font-montserrat tracking-wide text-white mb-5">
          Share your Query
        </h1>
        <p className="text-lg font-montserrat text-white mb-5">
          Having an idea? Let’s make it happen!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Grid1: Contact Image */}
        <div className="container mx-auto flex justify-center items-center">
          <Image
            src={contact}
            alt="contact"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Grid2: Form Data */}
        <div className="container mx-auto rounded-lg p-8">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border-b border-gray-300 rounded-lg"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="email"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border-b border-gray-300 rounded-lg"
              />
            </div>

            {/* Share Your Idea */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="idea"
              >
                Share Your Idea
              </label>
              <input
                type="text"
                id="idea"
                className="w-full px-4 py-2 border-b border-gray-300 rounded-lg"
              />
            </div>

            {/* Available Time and Date */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label
                  className="block text-white font-medium mb-2"
                  htmlFor="time"
                >
                  Available Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="w-full px-4 py-2 border-b border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex-1 mt-4 md:mt-0">
                <label
                  className="block text-white font-medium mb-2"
                  htmlFor="date"
                >
                  Select a Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-2 border-b border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Meeting Platform */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="platform"
              >
                Preferred Platform
              </label>
              <select
                id="platform"
                className="w-full px-4 py-2 border-b border-gray-300 rounded-lg"
              >
                <option value="google-meet">Google Meet</option>
                <option value="microsoft-teams">Microsoft Teams</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
