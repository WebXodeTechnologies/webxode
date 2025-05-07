
// import RecentWorks from '@/components/RecentWorks'
import DevelopementProcess from '@/components/ServicesPage/DevelopementProcess'
import DigitalBanner from '@/components/ServicesPage/DigitalBanner'
import DigitalServices from '@/components/ServicesPage/DigitalServices'
import HeroBanner from '@/components/ServicesPage/HeroBanner'
import ProposalCTA from '@/components/ServicesPage/ProposalCTA'
import Tools from '@/components/ServicesPage/Tools'
import WhyChooseus from '@/components/ServicesPage/WhyChooseus'
import WorkFlow from '@/components/ServicesPage/WorkFlow'
import React from 'react'

export const metadata = {
  title: "What We Do - WEBXODE Digital Services",
  description:
    "Discover how WEBXODE transforms businesses through web development, UI/UX design, and cutting-edge digital strategies.",
  keywords: [
    "WEBXODE",
    "Digital Services",
    "Web Development",
    "UI/UX Design",
    "Software Solutions",
    "Digital Transformation",
  ],
  openGraph: {
    title: "What We Do - WEBXODE",
    description:
      "Explore the full suite of digital services WEBXODE offers — from development to design to delivery.",
    url: "https://yourdomain.com/what-we-do",
    siteName: "WEBXODE",
    images: [
      {
        url: "https://yourdomain.com/images/og-what-we-do.jpg", // Update with real image
        width: 1200,
        height: 630,
        alt: "WEBXODE Digital Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What We Do - WEBXODE",
    description:
      "WEBXODE delivers web development, design, and custom digital solutions tailored to your brand.",
    images: ["https://yourdomain.com/images/og-what-we-do.jpg"],
  },
};

const page = () => {
  return (
    <main className="min-h-screen">
       <section className="py-20">
         <div className="container mx-auto px-2 sm:px-2 md:px-4">
          <HeroBanner/>
          <DigitalServices/>
          <DigitalBanner/>
          <WhyChooseus/>
          <WorkFlow/>
          {/* <RecentWorks/> */}
          <DevelopementProcess/>
          <Tools/>
          <ProposalCTA/>
         </div>
       </section>

       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web Design and Development",
            provider: {
              "@type": "Organization",
              name: "WEBXODE",
              url: "https://yourdomain.com",
              logo: "https://yourdomain.com/logo.png",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            description:
              "WEBXODE provides expert web development, UI/UX design, and digital transformation services tailored to modern businesses.",
          }),
        }}
      />
    </main>
  )
}

export default page