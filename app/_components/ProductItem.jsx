import { PanelLeftOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function ProductItem({product}) {
  return (
    <div>
        <Link href={'/project-detail/'+product.id}>
            <div className='hover:bg-primary p-1 rounded-lg bg-slate-300'>
                <Image src={product.banner} alt='banner' width={400} height={350} className='rounded-t-lg h-[130px] object-cover sm:w-full'/>

                <div className='flex justify-between items-center bg-gray-50 p-3 rounded-b-lg'>
                    <div>
                        <h2 className='text-[12px] font-medium line-clamp-2'>{product.title}</h2>
                        <h2 className='text-[10px] text-gray-500 flex gap-2'>
                            <PanelLeftOpen className='h-4 w-4' />
                            {product.category}
                        </h2>
                        <h2 className='font-medium'>${product.pricing}</h2>
                    </div>
                </div>
            </div>
        </Link>
        
    </div>
  )
}

export default ProductItem