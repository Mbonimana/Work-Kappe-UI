import React, { useEffect, useState } from "react";
import { MailOpen, MousePointerClick, DollarSign } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
};

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <div className="flex items-center gap-3 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
    <div className="p-2 text-blue-500">{icon}</div>
    <div>
      <p className="text-lg font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  </div>
);

const OrderCards: React.FC = () => {
  const [receivedOrders, setReceivedOrders] = useState<number>(0);
  const [completedOrders, setCompletedOrders] = useState<number>(0);
  const [totalEarnings, setTotalEarnings] = useState<number>(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/orders/getallorders", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();

        if (res.ok && data.orders) {
          const orders = data.orders;

          // Total orders
          setReceivedOrders(orders.length);

          // Completed orders (status = Paid)
          const completed = orders.filter((o: any) => o.status === "Paid");
          setCompletedOrders(completed.length);

          // Total earnings (sum of Paid orders)
          const earnings = completed.reduce(
            (sum: number, o: any) => sum + (o.totalPrice || 0),
            0
          );
          setTotalEarnings(earnings);
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
    <div className="w-[82%] p-6 ml-[17%] mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="RECEIVED ORDERS"
          value={receivedOrders}
          icon={<MailOpen className="w-6 h-6" />}
        />
        <StatCard
          title="COMPLETED ORDERS"
          value={completedOrders}
          icon={<MousePointerClick className="w-6 h-6" />}
        />
        <StatCard
          title="TOTAL EARNINGS"
          value={`$${totalEarnings.toFixed(2)}`}
          icon={<DollarSign className="w-6 h-6" />}
        />
      </div>
    </div>
  );
};

export default OrderCards;
