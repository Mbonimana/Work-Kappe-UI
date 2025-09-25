import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-6 text-center mt-12 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">🎉 Order Placed Successfully!</h2>
      <p className="mb-6">Thank you for shopping with us. Your order has been received and is being processed.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default OrderConfirmation;
