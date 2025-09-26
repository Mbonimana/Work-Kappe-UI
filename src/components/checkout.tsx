import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";

const Checkout: React.FC = () => {
  const { cart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash On Delivery");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handlePayment = async () => {
    if (!token) {
      Notiflix.Notify.failure("You must be logged in to place an order.");
      return;
    }

    if (!customerName || !email || !address || !phone || !paymentMode) {
      Notiflix.Notify.failure("Please fill in all required fields.");
      return;
    }

    if (!cart || cart.length === 0) {
      Notiflix.Notify.failure("Your cart is empty.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/orders/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            customerName,
            email,
            address,
            phone,
            paymentMode,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to place order");
      }

      Notiflix.Notify.success("Order placed successfully!");

      // Clear cart after successful checkout
      await clearCart();

      navigate("/");
    } catch (err: any) {
      console.error("Checkout error:", err);
      Notiflix.Notify.failure(
        err.message || "Something went wrong during checkout."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Order Summary */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4 max-h-[500px] overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{item.content}</p>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t pt-4">
              <p className="text-lg font-bold">Total: ${getTotal().toFixed(2)}</p>
            </div>
          </div>

          {/* Right: Shipping & Payment */}
          <div className="bg-white p-4 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold mb-2">Shipping & Payment</h2>

            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Payment Mode</label>
              <select
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none"
              >
                <option value="Cash On Delivery">Cash On Delivery</option>
                <option value="Mobile Money">Mobile Money</option>
                <option value="Credit Card">Credit Card</option>
              </select>
            </div>

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-green-500 text-white py-3 rounded mt-4 hover:bg-green-600 transition-all"
            >
              {loading ? "Processing..." : `Pay $${getTotal().toFixed(2)}`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
