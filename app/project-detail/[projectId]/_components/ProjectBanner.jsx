import Image from 'next/image'
import React from 'react'

function ProjectBanner({productDetails}) {
  return (
    <div>
      {
        productDetails?<Image src={productDetails?.banner} alt='banner' width={500} height={550} className='rounded-lg object-cover m-0'/>
        :
        <div className='h-[300px] w-[300px] bg-slate-200 animate-pulse rounded-lg'></div>
      }
    </div>
  )
}

export default ProjectBanner