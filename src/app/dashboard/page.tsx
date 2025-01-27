'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Import RootState correctly
import { useRouter } from 'next/navigation';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user); // Corrected for user
  const cartItems = useSelector((state: RootState) => state.cart); // Corrected for cart items
  
  if (!user) {
    router.push('/login'); // Redirect if user is not logged in
    return null;
  }

  const orderHistory = [
    {
      id: 1,
      date: '2021-01-01',
      total: 100,
      items: ['Item 1', 'Item 2'],
    },
    {
      id: 2,
      date: '2021-02-01',
      total: 200,
      items: ['Item 3', 'Item 4'],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* User Details */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">User Details</h2>
        <p><strong>Name:</strong> {user.name || 'Not provided'}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Saved Addresses:</strong></p>
        <ul className="list-disc pl-6">
          <li>123 Street, City, Country</li>
          <li>456 Another Street, City, Country</li>
        </ul>
      </div>

      {/* Order History */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Order History</h2>
        {orderHistory.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <ul className="list-disc pl-6">
            {orderHistory.map((order) => (
              <li key={order.id} className="mb-2">
                <p>
                  <strong>Order ID:</strong> {order.id}
                </p>
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
                <p>
                  <strong>Total:</strong> {order.total}
                </p>
                <p>
                  <strong>Items:</strong> {order.items.join(', ')}
                </p>
                <button
                  className="text-blue-500 underline mt-2"
                  onClick={() => router.push(`/orders/${order.id}`)}
                >
                  View Order Details
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Cart Items */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-disc pl-6">
            {cartItems.map((item: any, index: number) => (
              <li key={index} className="mb-2">
                <p>
                  <strong>Title:</strong> {item.title}
                </p>
                <p>
                  <strong>Price:</strong> {item.price}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
