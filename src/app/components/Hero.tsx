import React from "react";
import Image from "next/image";
import cont from "../../../public/Container.png";
import cont1 from "../../../public/Photo.png";
import cont2 from "../../../public/Photo (1).png";
import cont3 from "../../../public/Photo (2).png";
import cont4 from "../../../public/Photo (3).png";
import cont5 from "../../../public/Photo (4).png";
import Link from "next/link";
export default function Hero() {
  return (
    <div>
      {/*Section 1 */}
    <div>
      <div>
        <Image
          src={cont}
          alt="hero image"
          className="px-8 py-20 w-full h-auto"
        />
      </div>
{/*2nd section */}
<h1 className="text-lg font-light pl-6">New ceramics</h1>
      <div className="  px-2 grid grid-cols-2 sm:grid-cols-4 pt-4 ">
        
        <div>
         
          <Image
            src={cont1}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Dandy Chair <br />250</p>
        </div>
        
        <div>
          
          <Image
            src={cont2}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">Rustic Vase Set   <br />155</p>
        </div>
        <div>
          
          <Image
            src={cont3}
            alt="hero image"
            className=" px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Silk Vase <br />125</p>
        </div>
        <div>
          
          <Image
            src={cont4}
            alt="hero image"
            className="px-4 w-full h-auto"
          />
          <p className="font-normal py-3 text-gray-600 px-4">The Lucky Lamp <br />399</p>
        </div>
        
      </div>
      <button className=" ml-8 font-normal py-4 px-8 text-gray-600  bg-slate-100 sm:ml-96 my-8 "><Link href='/Products'>View Collection</Link></button>
    </div>












    {/*Dosra hissa */}


    <div className="bg-white py-12">
  <h1 className="text-2xl font-light text-gray-800 mb-8 pl-4">Our popular products</h1>
  <div className="flex justify-center gap-8 px-4">
    {/* Product 1 */}
    <div className="text-center">
      <img
        src="/Large.png" // Replace with actual path
        alt="The Poplar suede sofa"
        className="w-max h-72 mx-auto"
      />
      <p className="font-normal text-gray-600 mt-3">
        The Poplar suede sofa <br /> <span className="text-gray-900 font-medium">£980</span>
      </p>
    </div>
    {/* Product 2 */}
    <div className="text-center">
      <img
        src="/Photo.png" // Replace with actual path
        alt="The Dandy chair"
        className="w-64 h-72 mx-auto"
      />
      <p className="font-normal text-gray-600 mt-3">
        The Dandy chair <br /> <span className="text-gray-900 font-medium">£250</span>
      </p>
    </div>
    {/* Product 3 */}
    <div className="text-center">
      <img
        src="/Photo (4).png" // Replace with actual path
        alt="The Dandy chair"
        className="w-64 h-72 mx-auto"
      />
      <p className="font-normal text-gray-600 mt-3">
        The Dandy chair <br /> <span className="text-gray-900 font-medium">£250</span>
      </p>
    </div>
  </div>
  <div className="text-center mt-8">
    <button className="font-normal text-gray-600 px-8 py-3 bg-gray-100 rounded hover:bg-gray-200">
    <Link href='/Products'>View Collection</Link>
    </button>
  </div>
</div>

    </div>
    
    
  );
}
