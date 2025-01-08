import DevelopementProcess from '@/components/ServicesPage/DevelopementProcess'
import DigitalBanner from '@/components/ServicesPage/DigitalBanner'
import DigitalServices from '@/components/ServicesPage/DigitalServices'
import Frameworks from '@/components/ServicesPage/Frameworks'
import HeroBanner from '@/components/ServicesPage/HeroBanner'
import ProposalCTA from '@/components/ServicesPage/ProposalCTA'
import Tools from '@/components/ServicesPage/Tools'
import WhyChooseus from '@/components/ServicesPage/WhyChooseus'
import WorkFlow from '@/components/ServicesPage/WorkFlow'
import React from 'react'

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
          <DevelopementProcess/>
          <Tools/>
          <Frameworks/>
          <ProposalCTA/>
         </div>
       </section>
    </main>
  )
}

export default page