import React from 'react'
import Image from "next/image"
import Workflow from "@/public/workflow/workflowimage3.svg"

const DevelopmentProcess = () => {
  return (
    <section className="py-20">
      <Image src={Workflow} alt="workflow" width={1150} height={800} unoptimized className='object-contain w-full h-full'/>
    </section>
  )
}

export default DevelopmentProcess