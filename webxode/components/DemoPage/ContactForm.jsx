"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import contact from "@/public/demo/phone1.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
    time: "",
    date: "",
    platform: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.idea.trim()) newErrors.idea = "Please share your idea.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.platform) newErrors.platform = "Platform is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const serviceId = "service_vf40qkt";
      const templateId = "template_jzodkr7";
      const userId = "cqQ3FiRF2IfSekZFU";

      // Send the form data to the EmailJS template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        idea: formData.idea,
        time: formData.time,
        date: formData.date,
        platform: formData.platform,
      };

      // Send the email
      await emailjs.send(serviceId, templateId, templateParams, userId);

      toast.success("Data Sent Success!");

      // Reset form data
      setFormData({
        name: "",
        email: "",
        idea: "",
        time: "",
        date: "",
        platform: "",
      });
      setErrors({});
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again later.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section className="py-20 bg-transparent">
      <Toaster />
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
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-red-500 rounded-lg"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
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
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b border-gray-300 rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
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
                value={formData.idea}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b border-gray-300 rounded-lg"
              />
              {errors.idea && (
                <p className="text-red-500 text-sm">{errors.idea}</p>
              )}
            </div>

            {/* Available Time and Date */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 mt-4 md:mt-0">
                <label
                  className="block text-white font-medium mb-2"
                  htmlFor="time"
                >
                  Available Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b border-gray-300 rounded-lg"
                />
                {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )}
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
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b border-gray-300 rounded-lg"
                />
                {errors.date && (
                  <p className="text-red-500 text-sm">{errors.date}</p>
                )}
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
                value={formData.platform}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b border-gray-300 rounded-lg"
              >
                <option value="">Select Platform</option>
                <option value="google-meet">Google Meet</option>
                <option value="microsoft-teams">Microsoft Teams</option>
              </select>
              {errors.platform && (
                <p className="text-red-500 text-sm">{errors.platform}</p>
              )}
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