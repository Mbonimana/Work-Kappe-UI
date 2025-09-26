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
        const res = await fetch("http://localhost:5000/api/orders", {
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
            <th className="p-2">Address</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Payment</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Total</th>
            <th className="p-2">Status</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) =>
              order.items.map((item, index) => (
                <tr
                  key={`${order._id}-${index}`}
                  className="border-b hover:bg-gray-50"
                >
                  {/* Product (item from array) */}
                  <td className="p-3">
                    <div className="flex items-center space-x-2">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-10 h-10 object-cover rounded"
                        />
                      )}
                      <span>{item.title}</span>
                    </div>
                  </td>

                  {/* Order-level info */}
                  <td className="p-3">{order.customerName}</td>
                  <td className="p-3">{order.address}</td>
                  <td className="p-3">{order.phone}</td>
                  <td className="p-3">{order.paymentMode}</td>

                  {/* Item quantity */}
                  <td className="p-3">{item.quantity}</td>

                  {/* Order total (same for all items in same order) */}
                  {index === 0 ? (
                    <td className="p-3" rowSpan={order.items.length}>
                      ${order.totalPrice}
                    </td>
                  ) : null}

                  {/* Status */}
                  {index === 0 ? (
                    <td className="p-3" rowSpan={order.items.length}>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  ) : null}

                  {/* Date */}
                  {index === 0 ? (
                    <td className="p-3" rowSpan={order.items.length}>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                  ) : null}
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan={9} className="p-3 text-center text-gray-500">
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
