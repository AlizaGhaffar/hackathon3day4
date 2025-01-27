"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { add } from "../../redux/cartslice";

// Mock product data
const productData = [
  { id: 1, title: "The Dandy Chair", price: 250, description: "A stylish and comfortable chair perfect for your living room.", image: "/Photo.png" },
  { id: 2, title: "Rustic Vase Set", price: 155, description: "Beautifully crafted vases to enhance your home decor.", image: "/Photo (1).png" },
  { id: 3, title: "The Silk Vase", price: 125, description: "Elegant silk vase with a premium finish.", image: "/Photo (2).png" },
  { id: 4, title: "The Lucky Lamp", price: 399, description: "A lamp that brings warmth and luck to your home.", image: "/Photo (3).png" },
];

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams(); // Get product ID from URL
  const product = productData.find((item) => item.id === Number(id));
  const dispatch = useDispatch();
  const router = useRouter();

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    dispatch(add(product)); // Add product to cart
    router.push("/cart"); // Navigate to the cart page
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={300}
            className="rounded-lg w-full"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-gray-800 mb-6">Price: ₹{product.price}</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
