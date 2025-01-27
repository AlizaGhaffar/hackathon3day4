
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Mock product data
const productData = [
  { id: "1", title: "The Dandy Chair", price: 250, image: "/Photo.png" },
  { id: "2", title: "Rustic Vase Set", price: 155, image: "/Photo (1).png" },
  { id: "3", title: "The Silk Vase", price: 125, image: "/Photo (2).png" },
  { id: "4", title: "The Lucky Lamp", price: 399, image: "/Photo (3).png" },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {productData.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow rounded">
            <Image
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
              className="rounded"
            />
            <h2 className="mt-4 text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">₹{product.price}</p>
            <Link href={`/Products/${product.id}`} className="text-blue-500 mt-2 inline-block">
  View Details
</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

