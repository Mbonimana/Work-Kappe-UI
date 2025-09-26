import React, { useEffect, useState } from "react";

const statusStyles: Record<string, string> = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Canceled: "bg-red-100 text-red-700",
};

type OrderItem = {
  product: string;
  title: string;
  quantity: number;
  price: number;
  image?: string;
};

type Order = {
  _id: string;
  customerName: string;
  email: string;
  address: string;
  phone: string;
  paymentMode: string;
  totalPrice: number;
  status: "Paid" | "Pending" | "Canceled";
  createdAt: string;
  items: OrderItem[];
};

const OrderTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/orders/getallorders", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (res.ok) setOrders(data.orders || []);
        else console.error("Failed to fetch orders:", data.message);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <div className="w-[78%] ml-[19%] p-6 bg-white rounded-xl shadow-lg mt-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">📦 Orders Overview</h2>
        <span className="text-sm text-gray-500">
          Total Orders: {orders.length}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 border-b text-gray-700 uppercase text-xs">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Address</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) =>
                order.items.map((item, index) => (
                  <tr
                    key={`${order._id}-${index}`}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    {/* Product */}
                    <td className="p-3">
                      <div className="flex items-center space-x-3">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded-md border"
                          />
                        )}
                        <span className="font-medium text-gray-800">
                          {item.title}
                        </span>
                      </div>
                    </td>

                    {/* Customer */}
                    <td className="p-3">{order.customerName}</td>

                    {/* Address */}
                    <td className="p-3 text-gray-600">{order.address}</td>

                    {/* Phone */}
                    <td className="p-3 text-gray-600">{order.phone}</td>

                    {/* Payment */}
                    <td className="p-3">{order.paymentMode}</td>

                    {/* Qty */}
                    <td className="p-3 font-medium">{item.quantity}</td>

                    {/* Total (merged per order) */}
                    {index === 0 && (
                      <td className="p-3 font-semibold text-gray-900" rowSpan={order.items.length}>
                        ${order.totalPrice.toFixed(2)}
                      </td>
                    )}

                    {/* Status (merged per order) */}
                    {index === 0 && (
                      <td className="p-3" rowSpan={order.items.length}>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[order.status]}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    )}

                    {/* Date (merged per order) */}
                    {index === 0 && (
                      <td className="p-3 text-gray-500 text-sm" rowSpan={order.items.length}>
                        {new Date(order.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                    )}
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan={9} className="p-6 text-center text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
