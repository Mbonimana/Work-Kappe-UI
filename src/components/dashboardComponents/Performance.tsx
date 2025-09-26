import React, { useEffect, useState } from "react";
import { ShoppingBag, Users, DollarSign, RotateCcw } from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

interface UserData {
  _id: string;
  fullnames: string;
  email: string;
  phone: string;
  userRole: string;
  createdAt: string;
}

interface OrderData {
  _id: string;
  userId: string;
  total: number;
  status: "Completed" | "Pending" | "Cancelled";
  createdAt: string;
}

const PerformancePage: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch users + orders
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, orderRes] = await Promise.all([
          fetch("https://kappebackend.onrender.com/api/user/getAllUsers"),
          fetch("http://localhost:5000/api/orders/getallorders"),
        ]);

        const usersData = await userRes.json();
        const ordersData = await orderRes.json();

        if (userRes.ok && usersData.users) setUsers(usersData.users);
        if (orderRes.ok && ordersData.orders) setOrders(ordersData.orders);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- Stats ---
  const totalSales = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const refunds = orders
    .filter((o) => o.status === "Cancelled")
    .reduce((sum, o) => sum + (o.total || 0), 0);

  const stats = [
    { title: "Total Sales", value: `$${totalSales.toLocaleString()}`, icon: DollarSign },
    { title: "Orders", value: orders.length.toString(), icon: ShoppingBag },
    { title: "Customers", value: users.length.toString(), icon: Users },
    { title: "Refunds", value: `$${refunds.toLocaleString()}`, icon: RotateCcw },
  ];

  // --- Orders by status (Pie Chart) ---
  const orderStatusData = [
    { name: "Completed", value: orders.filter((o) => o.status === "Completed").length },
    { name: "Pending", value: orders.filter((o) => o.status === "Pending").length },
    { name: "Cancelled", value: orders.filter((o) => o.status === "Cancelled").length },
  ];

  const COLORS = ["#16a34a", "#facc15", "#dc2626"]; // green, yellow, red

  // --- Monthly Sales (Line Chart) ---
  const monthlySalesMap: { [key: string]: number } = {};
  orders.forEach((o) => {
    const month = new Date(o.createdAt).toLocaleString("default", { month: "short" });
    monthlySalesMap[month] = (monthlySalesMap[month] || 0) + (o.total || 0);
  });

  const salesData = Object.keys(monthlySalesMap).map((month) => ({
    month,
    sales: monthlySalesMap[month],
  }));

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4 w-[110%] ml-[15%]">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-6 text-blue-500 mt-1">
        Performance Overview
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 w-[74%]">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition"
          >
            <div className="p-3 rounded-lg">
              <stat.icon className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-slate-500">{stat.title}</p>
              <p className="text-xl font-semibold text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 w-[75%]">
        {/* Sales Line Chart */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Monthly Sales
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Pie Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Orders by Status
          </h3>
          <ResponsiveContainer width="90%" height={250}>
            <PieChart>
              <Pie
                data={orderStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {orderStatusData.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PerformancePage;
