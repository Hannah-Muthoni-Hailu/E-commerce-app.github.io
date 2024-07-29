"use client"
import React, { useEffect, useState } from 'react'
import {products} from '@/app/data/products';
import Breadcrumb from '@/app/_components/Breadcrumb';
import ProjectBanner from './_components/ProjectBanner';
import ProjectInfo from './_components/ProjectInfo';
import ProductList from '@/app/_components/ProductList';
import { usePathname } from 'next/navigation';

const ProjectDetail = ({params}) => {
    const path=usePathname();

    const [productDetails,setProductDetails] = useState();

    useEffect(()=>{
        getProductById(params.projectId)
    },[])

    const getProductById=(id)=>{
        setProductDetails(products[id - 1]);
    }

    const filterProductList=(category)=>{
        const result=products.filter(item=>item.category===category);
        return result;
    }

  return (
    <div>
            <div className='py-10 px-10'>
                <Breadcrumb path={path} />
                <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-10 sm:gap-5 md:gap-3 px-10'>
                    <ProjectBanner productDetails={productDetails}/>
                    <ProjectInfo productDetails={productDetails}/>
                </div>
            </div>
            
            <div className='my-5 p-5'>
                <h2 className='mt-10 font-bold text-[30px]'>Similar Products</h2>
                <ProductList productList={filterProductList(productDetails?.category)}/>
            </div> 
        
                               
    </div>

  )
}

export default ProjectDetail