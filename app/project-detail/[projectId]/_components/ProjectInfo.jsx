import { ShoppingCart } from 'lucide-react'
import React, { useContext } from 'react';

function ProjectInfo({productDetails}) {

  return (
      <div>
        { productDetails? 
          <div className='m-0'>
            <h2 className='text-[30px]'>{productDetails?.title}</h2>
            <h2 className='text-[15px] text-gray-500'>{productDetails?.category}</h2>
            <h2 className='text-[15px] mt-5 text-gray-700'>{productDetails?.description}</h2>
            <h2 className='text-[35px] mt-5 text-primary font-medium'>${productDetails?.pricing}</h2>

            <button className='flex gap-2 p-4 bg-primary text-white rounded-lg px-6 mt-5 hover:text-orange-500 hover:bg-white hover:border-primary'>
              <ShoppingCart />
              Add to Cart
            </button>
            <div>

            </div>
          </div>
          :
          <div className='flex flex-col gap-5 ml-4'>
            <div className='h-[20px] w-[400px] bg-slate-200 animate-pulse'></div>
            <div className='h-[20px] w-[100px] bg-slate-200 animate-pulse'></div>
            <div className='h-[50px] w-[400px] bg-slate-200 animate-pulse'></div>
            <div className='h-[20px] w-[100px] bg-slate-200 animate-pulse'></div>
          </div>
        
      }
    </div>
    
  )
}

export default ProjectInfo