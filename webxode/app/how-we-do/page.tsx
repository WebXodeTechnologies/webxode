
import ProposalCTA from '@/components/ServicesPage/ProposalCTA'
import Benefits from '@/components/WorkFlow/Benefits'
import GettoKnow from '@/components/WorkFlow/GettoKnow'
import HeroSection from '@/components/WorkFlow/HeroSection'
import Payment from '@/components/WorkFlow/Payment'
import Promise from '@/components/WorkFlow/Promise'
import DevelopmentProcess from "@/components/WorkFlow/DevelopmentProcess"
import React from 'react'
export const metadata = {
  title: "How We Do It - WEBXODE Workflow & Execution",
  description:
    "Explore the workflow behind WEBXODE's success — from idea to execution, we deliver digital excellence with transparency and efficiency.",
  keywords: [
    "WEBXODE",
    "Workflow",
    "Development Process",
    "How We Work",
    "Project Execution",
    "Web Development Agency",
  ],
  openGraph: {
    title: "How We Do It - WEBXODE Workflow & Execution",
    description:
      "Discover how WEBXODE turns your ideas into digital solutions with a proven step-by-step process.",
    url: "https://yourdomain.com/how-we-do",
    siteName: "WEBXODE",
    images: [
      {
        url: "https://yourdomain.com/images/og-how-we-do.jpg", // Replace with real image URL
        width: 1200,
        height: 630,
        alt: "WEBXODE Workflow and Execution",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Do It - WEBXODE",
    description:
      "Get a behind-the-scenes look at WEBXODE’s complete workflow — from research to launch.",
    images: ["https://yourdomain.com/images/og-how-we-do.jpg"],
  },
};

const page = () => {
  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-2 sm:px-2 md:px-4">
          <HeroSection />
          <Promise />
          <Benefits />
          <GettoKnow />
          <DevelopmentProcess />
          <Payment />
          <ProposalCTA />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "How We Do It",
            description:
              "Learn how WEBXODE approaches projects from concept to completion using our step-by-step development workflow.",
            url: "https://yourdomain.com/how-we-do",
            publisher: {
              "@type": "Organization",
              name: "WEBXODE",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png", // Replace with your actual logo
              },
            },
          }),
        }}
      />
    </main>
  )
}

export default page