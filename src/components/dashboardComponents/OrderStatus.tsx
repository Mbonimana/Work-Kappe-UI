import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const OrderStatus: React.FC = () => {
  const data = [
    { name: "Orders", value: 70 },
    { name: "Pending", value: 30 },
    { name: "Delivered", value: 20 },
  ];

  const COLORS = ["#3b82f6", "#facc15", "#ef4444"]; // Blue, Yellow, Red
  const totalOrders = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="w-[25%] ml-[72%] bg-white rounded-md h-[18rem] mt-[-18rem]">
     
        <h3 className="text-sm font-semibold text-slate-800 p-2">
          Order Status
        </h3>
        <div className="relative w-[19rem] h-[14.3rem] ">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={100}
              
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={30} />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-2">
            <p className="text-sm font-semibold text-slate-600">TOTAL ORDER</p>
            <p className="text-xl font-bold text-slate-800">{totalOrders}</p>
          </div>
        </div>
      </div>
   
  );
};

export default OrderStatus;
