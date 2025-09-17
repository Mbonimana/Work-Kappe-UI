import { MailOpen, MousePointerClick, DollarSign } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;

};

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <div className="flex items-center gap-2 p-10 bg-white rounded-md shadow-md hover:shadow-lg transition h-[1rem] ">
    <div className="p-2  text-blue-500 ">
      {icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  </div>
);

const OrderCards = () => {
  return (
    <div className="w-[82%] p-6 ml-[17%]  mt-4 ">
   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="RECEIVED ORDERS"
          value={120}
          icon={<MailOpen className="w-6 h-6" />}
        />
        <StatCard title="COMPLETED ORDERS" value={2390} icon={<MousePointerClick className="w-6 h-6" />}
        />
        <StatCard
          title="TOTAL EARNINGS"
          value="$294"
          icon={<DollarSign className="w-6 h-6" />}
        />
      </div>
    </div>
  );
};

export default OrderCards;