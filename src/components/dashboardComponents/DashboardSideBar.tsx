import { Activity, Box,  ShoppingBag, Users,Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/profile.jpg';

function DashboardSideBar() {
  return (
    <>
      <div className="flex">
        <div className="">
          {/* Profile Picture */}
          <div className="text-center font-semibold mt-14 fixed bg-slate-50 w-[15%] h-[100%] shadow-lg justify justify-center">
            <div className="Profile bg-transparent h-24 w-24 bg-white rounded-full mt-16 ml-8 border-2 border-blue-400">
              <img src={profilePic} alt="" className="h-full w-full rounded-full object-cover"  />
            </div>
            <h1 className=" mt-6 ml-[-1rem] font-normal text-blue-500 ">
              Manasseh Admin
            </h1>
          </div>

          <div className="mt-[20rem] ml-3 fixed">
            <Link to="/dashboard">
              <div className="flex flex-row p-2">
                <Activity size={23} className="text-slate-400" />
                <h1 className="pl-2 text-slate-400">Performance</h1>
              </div>
            </Link>

            <Link to="/orders">
              <div className="flex flex-row p-2">
                <ShoppingBag size={23} className="text-slate-400" />
                <h1 className="pl-2 text-slate-400">Orders</h1>
              </div>
            </Link>

            <Link to="/products">
              <div className="flex flex-row p-2">
                <Box size={23} className="text-slate-400" />
                <h1 className="pl-2 text-slate-400">Products</h1>
              </div>
            </Link>

            <Link to="/users">
              <div className="flex flex-row p-2">
                <Users size={23} className="text-slate-400" />
                <h1 className="pl-2 text-slate-400">Users</h1>
              </div>
            </Link>
             <Link to="/adminsettings">
              <div className="flex flex-row p-2">
                <Settings size={23} className="text-slate-400" />
                <h1 className="pl-2 text-slate-400">Settings</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardSideBar;