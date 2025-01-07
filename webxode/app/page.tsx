import { Hero } from "@/components/Hero";
import Services from "@/components/Services";
import OurApproach from "@/components/OurApproach";
import AboutUs from "@/components/AboutUs";
import RecentWorks from "@/components/RecentWorks";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import BookDemo from "@/components/BookDemo";
import Macbookscroll from "@/components/Macbookscroll";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="relative space-y-20 flex justify-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="w-full">
        <Hero />
        <AboutUs />
        <RecentWorks />
        <Services />
        <OurApproach />
        <RecentProjects/>
        <TechStack/>
        <Testimonial/>
        <Faq/> 
        <BookDemo/>  
        <Macbookscroll/>
      </div>
    </main>
  );
}
