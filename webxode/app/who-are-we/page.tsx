import React from "react";
import Intro from "@/components/AboutPage/IntroComponent";
import Mission from "@/components/AboutPage/Mission";
import { CompanyTimeline } from "@/components/AboutPage/CompanyTimeline";
import CompanyValues from "@/components/AboutPage/CompanyValues";
import CompanyProcess from "@/components/AboutPage/CompanyProcess";
import Team from "@/components/AboutPage/Team";
import BookDemo from "@/components/BookDemo";


export const metadata = {
  title: "Who Are We - WEBXODE is Startup Service Company Providing End to End SErvices to the Tech People and Startups To improve their Performance and Efficiency to generate a solid Revenue for Enhanced Future",
  description: "Learn about WEBXODE's mission, values, and the team shaping tomorrow’s digital experiences.",
  keywords: ["WEBXODE", "Who Are We", "Our Team", "Digital Agency", "Web Design", "Web Development"],
  openGraph: {
    title: "Who Are We - WEBXODE",
    description: "Explore our journey, values, and the team behind WEBXODE.",
    url: "https://yourdomain.com/who-are-we",
    siteName: "WEBXODE",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "WEBXODE Team Photo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Are We - WEBXODE",
    description: "Meet the WEBXODE team and discover our mission to innovate the web.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};


const Page = () => {
  return (
    <main className="min-h-screen">
      {/* Section for Intro Component */}
      <section className="py-20">
        <div className="container mx-auto px-2 sm:px-2 md:px-4">
          <Intro />
          <Mission />
          <CompanyValues />
          <CompanyProcess />
          <CompanyTimeline />
          <Team />
          <BookDemo />
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "WEBXODE",
            url: "https://yourdomain.com",
            logo: "https://yourdomain.com/logo.png",
            sameAs: [
              "https://www.youtube.com/@Webxodetechnologies",
              "https://www.linkedin.com/company/webxode"
            ],
            description: "A digital agency crafting seamless, impactful web solutions.",
            foundingDate: "2021",
            founder: {
              "@type": "Person",
              name: "Your Founder Name"
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tamil Nadu",
              addressRegion: "TN",
              addressCountry: "IN"
            }
          }),
        }}
      />
    </main>
  );
};

export default Page;
