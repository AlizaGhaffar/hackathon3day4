import React from 'react'
import Image from 'next/image'
export default function Sign() {
  return (
    <div>
        <div className="bg-gray-50 py-16">
  <div className="max-w-3xl mx-auto text-center px-4">
    <h2 className="text-2xl font-semibold text-gray-800">Join the club and get the benefits</h2>
    <p className="text-gray-600 mt-4">
      Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
    </p>
    <form className="mt-8 flex items-center justify-center gap-4">
      <input
        type="email"
        placeholder="your@email.com"
        className="w-full max-w-md py-3 px-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <button
        type="submit"
        className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800"
      >
        Sign up
      </button>
    </form>
  </div>
</div>
{/**************************/}

<div className="flex flex-col md:flex-row items-center md:items-start px-8 md:px-16  py-12 bg-gray-50 gap-4">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left sm:pl-6">
        <h1 className="text-[28px] md:text-[32px] lg:text-[36px] font-light text-gray-900 leading-tight mb-6">
          From a studio in London to a global brand with over 400 outlets
        </h1>
        <p className="text-gray-700 text-[16px] leading-relaxed mb-4">
          When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
        </p>
        <p className="text-gray-700 text-[16px] leading-relaxed mb-8">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique becomes the hotbed for the London interior design community.
        </p>
        <button className="px-6 py-3 bg-gray-100 text-gray-900 text-[14px] font-medium rounded-lg hover:bg-gray-200 transition">
          Get in touch
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w- mt-8 md:mt-0 flex mr-0 pr-0 ">
        <Image
          src="/Image (13).png" // Replace with the actual image path
          alt="Studio furniture setup"
          width={540} // Adjusted width to match the visual
          height={360} // Adjusted height to match the aspect ratio
          className="rounded-md shadow-sm"
        />
      </div>
    </div>
    </div>
  )
}
