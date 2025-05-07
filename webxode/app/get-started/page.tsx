import DemoCTA from "@/components/DemoPage/DemoCTA";
import React from "react";
import HeroBanner from "@/components/DemoPage/Herobanner";
import ContactForm from "@/components/DemoPage/ContactForm.jsx";


export const metadata = {
  title: "Get Started with WEBXODE | Web Development & Digital Solutions",
  description:
    "Kickstart your digital journey with WEBXODE. Let's build your next web or mobile project with cutting-edge technology.",
  keywords: [
    "Get started WEBXODE",
    "Start project WEBXODE",
    "WEBXODE consultation",
    "Hire WEBXODE",
    "Web development services",
    "Start your project",
  ],
  openGraph: {
    title: "Get Started | WEBXODE",
    description:
      "Partner with WEBXODE for seamless, high-performance digital solutions. Fill out the form and let’s build together.",
    url: "https://yourdomain.com/get-started", // ✅ Replace with your actual URL
    siteName: "WEBXODE",
    images: [
      {
        url: "https://yourdomain.com/images/og-get-started.jpg", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Get Started with WEBXODE",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started | WEBXODE",
    description: "Let’s bring your digital vision to life.",
    images: ["https://yourdomain.com/images/og-get-started.jpg"], // ✅ Replace
  },
};
const page = () => {
  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-2 sm:px-2 md:px-4">
            <HeroBanner/>
            <DemoCTA/>
            <ContactForm/>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Get Started",
            description:
              "Start your project with WEBXODE - the leading web and app development partner.",
            url: "https://yourdomain.com/get-started", // ✅ Replace
            mainEntity: {
              "@type": "Organization",
              name: "WEBXODE",
              url: "https://yourdomain.com",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png", // ✅ Replace
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-1234567890", // ✅ Replace
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["English", "Tamil"],
              },
            },
          }),
        }}
      />
    </main>
  )
}

export default page