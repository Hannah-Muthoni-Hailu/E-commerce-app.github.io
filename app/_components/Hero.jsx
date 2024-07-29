"use client"
import React from 'react';


const Hero = () => {
  return (
    <div>
      <section className="bg-white text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center p-2">
            <h1
              className="p-2 bg-gradient-to-r from-orange-700 to-orange-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Find the Product For You

              <span className="sm:block"> Today </span>
            </h1>

            <p className="mx-auto mt-3 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#products"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-orange-600 px-12 py-3 text-sm font-medium text-black hover:bg-orange-600 hover:text-white focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Hero