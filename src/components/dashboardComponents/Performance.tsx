import React from "react";
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

const PerformancePage: React.FC = () => {
  const stats = [
    { title: "Total Sales", value: "$12,430", icon: DollarSign },
    { title: "Orders", value: "324", icon: ShoppingBag },
    { title: "Customers", value: "128", icon: Users },
    { title: "Refunds", value: "$340", icon: RotateCcw },
  ];

  const salesData = [
    { month: "Jan", sales: 1200 },
    { month: "Feb", sales: 2100 },
    { month: "Mar", sales: 800 },
    { month: "Apr", sales: 1600 },
    { month: "May", sales: 2400 },
    { month: "Jun", sales: 1800 },
  ];

  const orderStatusData = [
    { name: "Completed", value: 200 },
    { name: "Pending", value: 90 },
    { name: "Cancelled", value: 34 },
  ];

  const COLORS = ["#16a34a", "#facc15", "#dc2626"]; // green, yellow, red


  return (
    <div className="p-4  w-[110%] ml-[15%]">
      {/* Page Title */}
      <h2 className="text-2xl font-bold  mb-6 text-blue-500 mt-1">Performance Overview</h2>

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 w-[75%] ">
        {/* Sales Line Chart */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Monthly Sales</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Pie Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Orders by Status</h3>
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
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
