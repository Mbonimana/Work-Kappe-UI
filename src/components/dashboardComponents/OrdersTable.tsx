import React, { useEffect, useState } from "react";

const statusStyles: Record<string, string> = {
  Paid: "w-24 text-center px-2 py-1 rounded-lg bg-green-100 text-green-700 font-medium",
  Pending: "w-24 text-center px-2 py-1 rounded-lg bg-yellow-100 text-yellow-700 font-medium",
  Canceled: "w-24 text-center px-2 py-1 rounded-lg bg-red-100 text-red-700 font-medium",
};

type OrderItem = {
  product: string;
  title: string;
  quantity: number;
};

type Order = {
  _id: string;
  customerName: string;
  address: string;
  status: "Paid" | "Pending" | "Canceled";
  items: OrderItem[];
};

const OrderTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/orders/getallorders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setOrders(data.orders || []);
        } else {
          console.error("Failed to fetch orders:", data.message);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <div className="w-[78%] ml-[19%] p-3 bg-white rounded-lg shadow-md mt-[0.5rem]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Orders</h2>
      </div>

      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-2">Product</th>
            <th className="p-2">Customer</th>
            <th className="p-2">Location</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) =>
              order.items.map((item, index) => (
                <tr key={`${order._id}-${index}`} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{order.customerName}</td>
                  <td className="p-3">{order.address}</td>
                  <td className="p-3">{item.quantity}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan={5} className="p-3 text-center text-gray-500">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
