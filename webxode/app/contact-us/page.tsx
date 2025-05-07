import DemoCTA from "@/components/DemoPage/DemoCTA";
import React from "react";
import HeroBanner from "@/components/DemoPage/Herobanner";
import ContactForm from "@/components/DemoPage/ContactForm.jsx";


export const metadata = {
  title: "Contact Us | WEBXODE",
  description: "Get in touch with WEBXODE for custom web development, digital solutions, and consultations. Let's build your next big idea.",
  keywords: [
    "WEBXODE Contact",
    "Contact WEBXODE",
    "Get in Touch WEBXODE",
    "Web Development Inquiry",
    "Custom Web Solutions",
  ],
  openGraph: {
    title: "Contact Us | WEBXODE",
    description: "Talk to our team at WEBXODE and bring your digital vision to life. We’re here to help.",
    url: "https://yourdomain.com/contact-us",
    siteName: "WEBXODE",
    images: [
      {
        url: "https://yourdomain.com/images/og-contact.jpg", // ✅ Replace with real OG image
        width: 1200,
        height: 630,
        alt: "Contact WEBXODE",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | WEBXODE",
    description: "Connect with our team for tailored digital solutions.",
    images: ["https://yourdomain.com/images/og-contact.jpg"], // ✅ Replace
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
            "@type": "ContactPage",
            name: "Contact Us",
            description: "Reach out to WEBXODE for expert digital development services.",
            url: "https://yourdomain.com/contact-us",
            mainEntity: {
              "@type": "Organization",
              name: "WEBXODE",
              url: "https://yourdomain.com",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png", // ✅ Replace with your logo
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