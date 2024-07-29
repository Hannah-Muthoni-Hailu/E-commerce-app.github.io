import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 my-6'>
        {productList.map((item,index) => (
            <div key={index}>
                <ProductItem product={item} />
            </div>
        ))}


    </div>
  )
}

export default ProductList