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



export default function Home() {
  return (
    <main className="relative flex justify-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div>
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
