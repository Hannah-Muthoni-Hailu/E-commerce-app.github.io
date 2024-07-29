"use client"
import React from 'react'

const Contact = () => {
    function sendEmail(){
        setTimeout(()=>{
            alert('Your email has been sent')
        }, 1000);
        window.location.reload();        
    }
  return (
    <div>
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12">
                    <h2 className='text-2xl font-bold text-gray-600 text-center'>Reach Out to Us with any question</h2>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="#" className="space-y-4">
                    <div className=''>
                        <label className="sr-only" htmlFor="name">Name</label>
                        <input
                        className="border-gray-200 w-full rounded-lg p-3 text-sm border"
                        placeholder="Name"
                        type="text"
                        id="name"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                            placeholder="Email address"
                            type="email"
                            id="email"
                        />
                        </div>

                        <div>
                        <label className="sr-only" htmlFor="phone">Phone</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                            placeholder="Phone Number"
                            type="tel"
                            id="phone"
                        />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                        <div>
                        <label
                            htmlFor="Option1"
                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                            tabIndex="0"
                        >
                            <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="option" />

                            <span className="text-sm"> Option 1 </span>
                        </label>
                        </div>

                        <div>
                        <label
                            htmlFor="Option2"
                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                            tabIndex="0"
                        >
                            <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="option" />

                            <span className="text-sm"> Option 2 </span>
                        </label>
                        </div>

                        <div>
                        <label
                            htmlFor="Option3"
                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                            tabIndex="0"
                        >
                            <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="option" />

                            <span className="text-sm"> Option 3 </span>
                        </label>
                        </div>
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="message">Message</label>

                        <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                        placeholder="Message"
                        rows="8"
                        id="message"
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <button
                        onClick={sendEmail}
                        type="submit"
                        className="inline-block w-full ml-[45%] rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                        >
                        Send Enquiry
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact