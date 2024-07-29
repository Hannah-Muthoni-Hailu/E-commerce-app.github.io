"use client"
import React, { useState } from 'react'
import ProductList from './ProductList'
import {products} from '../data/products';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

function ProductSection() {
    const [productList, setProductList] = useState(products);

    const filterProductList=(category)=>{
        const result=productList.filter(item=>item.category===category);
        return result;
    }

  return (
    <div className='px-10 md:px-20'>
        <div className='mb-20'>
            <h2 className='font-bold text-[35px] my-4'>All Categories
                <span className='font-normal text-[14px] float-right text-primary flex items-center cursor-pointer hover:text-orange-400'>
                    <Link href={'/pages/'+2}>
                        View All Collections
                    </Link>
                    
                    <ArrowRight className='h-4'/>
                </span>
            </h2>
            <ProductList productList={productList}/>
        </div>
        
        <div className='mb-20'>
            <h2 className='font-bold text-[35px] my-4'>Lorem
                <span className='font-normal text-[14px] float-right text-primary flex items-center cursor-pointer hover:text-orange-400'>
                    <Link href={'/pages/'+2}>
                        View All Collections
                    </Link>
                    <ArrowRight className='h-4'/>
                </span>
            </h2>
            <ProductList productList={filterProductList('Lorem')}/>
        </div>

        <div className='mb-20'>
            <h2 className='font-bold text-[35px] my-4'>Ipsum
                <span className='font-normal text-[14px] float-right text-primary flex items-center cursor-pointer hover:text-orange-400'>
                    <Link href={'/pages/'+2}>
                        View All Collections
                    </Link>
                    <ArrowRight className='h-4'/>
                </span>
            </h2>
            <ProductList productList={filterProductList('Ipsum')}/>
        </div>
        
    </div>
  )
}

export default ProductSection