

const statusStyles: Record<string, string> = {
  Paid: "w-24 text-center px-2 py-1 rounded-lg bg-green-100 text-green-700 font-medium",
  Pending: "w-24 text-center px-2 py-1 rounded-lg bg-yellow-100 text-yellow-700 font-medium",
  Canceled: "w-24 text-center px-2 py-1 rounded-lg bg-red-100 text-red-700 font-medium",
};


export type UserData = {
  product: string;
  customer: string;
  location: string;
  quantity: number;
  status: "Paid" | "Pending" | "Canceled";
};

export const userData: UserData[] = [
  {
    product: "Leisure Suit Casual",
    customer: "Manasseh MBONIMANA",
    location: "Rwanda",
    quantity: 2,
    status: "Paid",
  },
  {
    product: "Leisure Suit Casual",
    customer: "Manasseh MBONIMANA",
    location: "Rwanda",
    quantity: 2,
    status: "Canceled",
  },
  {
    product: "Leisure Suit Casual",
    customer: "Manasseh MBONIMANA",
    location: "Rwanda",
    quantity: 2,
    status: "Canceled",
  },
  {
    product: "Leisure Suit Casual",
    customer: "Manasseh MBONIMANA",
    location: "Rwanda",
    quantity: 2,
    status: "Canceled",
  },
  {
    product: "Leisure Suit Casual",
    customer: "Manasseh MBONIMANA",
    location: "Rwanda",
    quantity: 2,
    status: "Canceled",
  },
  {
    product: "Leisure Suit Casual",
    customer: "Manasseh MBONIMANA",
    location: "Rwanda",
    quantity: 2,
    status: "Canceled",
  },
  {
    product: "Leisure Suit Casual",
    customer: "Manasseh MBONIMANA",
    location: "Rwanda",
    quantity: 2,
    status: "Canceled",
  },
 
  {
    product: "Leisure Suit Casual",
    customer: "Manasseh MBONIMANA",
    location: "Rwanda",
    quantity: 2,
    status: "Paid",
  },
  {
    product: "Leisure Suit Casual",
    customer: "Manasseh MBONIMANA",
    location: "Rwanda",
    quantity: 2,
    status: "Pending",
  },
 
 
]; 

const OrderTable = () => {
  return (
    <div className=" w-[78%] ml-[19%] p-3 bg-white rounded-lg shadow-md mt-[0.5rem]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
         Orders
        </h2>
        <button className="text-sm text-blue-600 hover:underline">
         
        </button>
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
          {userData.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
             
              <td className="p-3">{item.product}</td>
              <td className="p-3">{item.customer}</td>
              <td className="p-3">{item.location}</td>
              <td className="p-3">{item.quantity}</td>
              <td className="p-3">
                <span
                
                  className={`px-2 py-1 rounded-full  text-xs font-medium ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end text-sm text-gray-500">
      
      </div>
    </div>
  );
};

export default OrderTable;