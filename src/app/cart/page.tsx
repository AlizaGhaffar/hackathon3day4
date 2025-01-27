"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { remove, clearCart } from "../redux/cartslice";
import { RootState } from "../redux/store";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  const handleBuy = () => {
    dispatch(clearCart()); // Clear the cart
    router.push("/order-success"); // Redirect to the order success page
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Your Cart</h3>
      {cartItems.length > 0 ? (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                <div className="ml-4 flex-grow">
                  <h5 className="text-lg font-semibold">{item.title}</h5>
                  <h5 className="text-lg font-medium text-gray-600 mt-2">₹{item.price}</h5>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            className="mt-8 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors block mx-auto"
            onClick={handleBuy}
          >
            Buy
          </button>
        </>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;