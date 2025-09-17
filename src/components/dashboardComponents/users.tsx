



export type UserData = {
  UserName: string;
  Email: string;
  location: string;
  role: "Client" | "Admin";
};

export const userData: UserData[] = [
  {
 UserName: "Manasseh",
  Email: "mbonimana12@gmail.com",
  location: "Kigali rwanda",
  role:"Admin",
  },
   {
 UserName: "Manasseh",
  Email: "mbonimana12@gmail.com",
  location: "Kigali rwanda",
  role:"Admin",
  },
   {
 UserName: "Manasseh",
  Email: "mbonimana12@gmail.com",
  location: "Kigali rwanda",
  role:"Admin",
  },
   {
 UserName: "Manasseh",
  Email: "mbonimana12@gmail.com",
  location: "Kigali rwanda",
  role:"Admin",
  },
   {
 UserName: "Manasseh",
  Email: "mbonimana12@gmail.com",
  location: "Kigali rwanda",
  role:"Admin",
  },
   {
 UserName: "Manasseh",
  Email: "mbonimana12@gmail.com",
  location: "Kigali rwanda",
  role:"Admin",
  },
   {
 UserName: "Manasseh",
  Email: "mbonimana12@gmail.com",
  location: "Kigali rwanda",
  role:"Admin",
  },
   {
 UserName: "Manasseh",
  Email: "mbonimana12@gmail.com",
  location: "Kigali rwanda",
  role:"Admin",
  },
   {
 UserName: "Manasseh",
  Email: "mbonimana12@gmail.com",
  location: "Kigali rwanda",
  role:"Admin",
  },
   {
 UserName: "Manasseh",
  Email: "mbonimana12@gmail.com",
  location: "Kigali rwanda",
  role:"Admin",
  },
  
 
]; 

const UserTable = () => {
  return (
    <div className=" w-[78%] ml-[19%] p-3 bg-white rounded-lg shadow-md mt-[4rem]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
        Users
        </h2>
        <button className="text-sm text-blue-600 hover:underline">
         
        </button>
      </div>
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-2">UserName</th>
            <th className="p-2">Email</th>
            <th className="p-2">Location</th>
            <th className="p-2">role</th>
        
            
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
             
              <td className="p-3">{item.UserName}</td>
              <td className="p-3">{item.Email}</td>
              <td className="p-3">{item.location}</td>
              <td className="p-3">{item.role}</td>
             
             
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end text-sm text-gray-500">
      
      </div>
    </div>
  );
};

export default UserTable;