"use client"
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero').then(mod => mod.Hero), { ssr: false });
const Services = dynamic(()=> import("@/components/Services"),{ssr:false});
const OurApproach = dynamic(()=>import('@/components/OurApproach'),{ssr:false});
const AboutUs = dynamic(()=>import ("@/components/AboutUs"), {ssr:false});
const RecentProjects = dynamic(()=>import("@/components/RecentProjects"),{ssr:false});
const TechStack  = dynamic(()=> import("@/components/TechStack"),{ssr:false});
const Testimonial = dynamic(()=> import("@/components/Testimonial"), {ssr:false});
const Faq = dynamic(() => import ("@/components/Faq"),{ssr:false});
const BookDemo = dynamic(()=> import ("@/components/BookDemo"), {ssr:false});
const Macbookscroll = dynamic(()=>import("@/components/Macbookscroll"),{ssr:false});
const ScrollVideo = dynamic(()=> import("@/components/ScrollVideo").then(mod=>mod.ScrollVideo), {ssr:false});


export const metadata = {
  title: "WebXode | Scalable Digital Solutions for Growing Businesses",
  description:
    "WebXode Technologies builds modern websites and mobile apps using MERN Stack and Next.js. Explore our services, projects, and get a custom solution for your business.",
  keywords: [
    "WebXode Technologies",
    "MERN Stack",
    "Next.js Development",
    "Mobile App Development",
    "Web Development Company",
    "React Development",
    "Custom Software Solutions",
    "IT Services Namakkal",
    "Tech Company India"
  ],
  authors: [{ name: "WebXode Technologies", url: "https://webxode.vercel.app" }],
  creator: "WebXode Technologies",
  publisher: "WebXode Technologies",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://webxode.vercel.app",
    title: "WebXode Technologies | MERN Stack, Web & Mobile App Development",
    description:
      "Custom web and mobile app solutions built with React, Next.js, and MERN Stack. Discover our portfolio and development approach.",
    images: [
      {
        url: "/webxodelogoc.png",
        width: 1200,
        height: 630,
        alt: "WebXode Technologies",
      },
    ],
    siteName: "WebXode Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebXode | Expert Web & Mobile Development with MERN Stack",
    description:
      "From idea to launch — WebXode builds scalable, modern web and mobile apps tailored for your business.",
    images: ["/webxodelogoc.png"],
  },
};

export default function Home() {
  return (
    <main className="relative space-y-20 flex justify-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="w-full">
        <Hero />
        <AboutUs /> 
        <ScrollVideo/>
        <Services />
        <OurApproach />
        <RecentProjects />
        <TechStack />
        <Testimonial />
        <Faq />
        <BookDemo />
        <Macbookscroll /> 
      </div>
    </main>
  );
}
