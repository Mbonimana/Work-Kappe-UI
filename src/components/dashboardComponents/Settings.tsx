
import { User} from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto mt-4">
      <h1 className="text-2xl font-bold  mb-6 text-blue-500 mt-1">Account Settings</h1>

      <div className="space-y-10 bg-white p-6 rounded-2xl shadow-md">
        {/* Store Settings */}
        <section>
          <div className="flex items-center mb-4">
              <User className="text-green-600 mr-2" />
            <h2 className="text-xl font-semibold">Account Settings</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <input
                type="text"
                placeholder="Manasseh"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium">SecondName</label>
              <input
                type="text"
                placeholder="MBONIMANA"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Profile Picture</label>
              <input
                type="file"
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
        </section>

    
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Change Password</label>
              <input
                type="email"
                placeholder="Enter Old Password"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Enter New Password</label>
              <input
                type="password"
                placeholder="Enter New Password"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
      

       
       
        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
