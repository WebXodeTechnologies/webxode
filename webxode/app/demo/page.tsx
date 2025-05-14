import DemoCTA from "@/components/DemoPage/DemoCTA";
import React from "react";
import HeroBanner from "@/components/DemoPage/Herobanner";
import ContactForm from "@/components/DemoPage/ContactForm.jsx";

export const metadata = {
  title: "Get a Free Demo | Web & App Development by WebXode",
  description:
    "Explore WebXode's powerful web and mobile app development services. Get a free demo and see how we can build your custom digital solution.",
  keywords: [
    "WebXode Demo",
    "Free Demo",
    "Web App Development",
    "Mobile App Development",
    "Custom Software Solutions",
    "MERN Stack",
    "Next.js",
    "React",
    "WebXode Technologies",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Get a Free Demo | WebXode Technologies",
    description:
      "Discover how WebXode builds high-quality web and mobile applications tailored to your business. Request a demo now.",
    url: "https://webxode.vercel.app/demo",
    type: "website",
    images: [
      {
        url: "/webxodelogoc.png",
        width: 1200,
        height: 630,
        alt: "WebXode Demo",
      },
    ],
    siteName: "WebXode Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Demo | WebXode Technologies",
    description:
      "Try WebXode's web and app development services. Get a custom demo for your business.",
    images: ["/webxodelogoc.png"],
  },
};

const page = () => {
  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-2 sm:px-2 md:px-4">
          <HeroBanner />
          <DemoCTA />
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default page;
