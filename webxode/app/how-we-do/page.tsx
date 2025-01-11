
import ProposalCTA from '@/components/ServicesPage/ProposalCTA'
import Benefits from '@/components/WorkFlow/Benefits'
import GettoKnow from '@/components/WorkFlow/GettoKnow'
import HeroSection from '@/components/WorkFlow/HeroSection'
import Payment from '@/components/WorkFlow/Payment'
import Promise from '@/components/WorkFlow/Promise'
import Questions from '@/components/WorkFlow/Questions'
import DevelopmentProcess from "@/components/WorkFlow/DevelopmentProcess"
import React from 'react'

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
          <Questions />
          <ProposalCTA />
        </div>
      </section>
    </main>
  )
}

export default page