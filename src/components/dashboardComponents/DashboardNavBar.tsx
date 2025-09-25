import { Settings, LogOutIcon, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function DashboardNabar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // redirect to login page
  };

  return (
    <div>
      <div className="bg-blue-500 w-[15%] h-[3.5rem] text-center shadow-sm fixed">
        <h2 className="text-white font-semibold text-xl pt-2">Admin Dashboard</h2>
      </div>

      <div className="bg-white w-[85%] h-[3.5rem] text-center shadow-md ml-[15%] fixed">
        <div className="flex flex-row justify-between p-2">
          <div className="mt-[-0.2rem] justify-center ml-20">
            <form className="flex">
              <input
                type="text"
                placeholder="Search for products, categories, brands..."
                className="w-[30rem] border border-gray-300 px-2 h-10 rounded-l focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
              >
                Search
              </button>
            </form>
          </div>

          <div className="flex flex-row py-1 space-x-12 mr-6">
            <Link to="/messages">
              <MessageCircle size={24} color="blue" />
            </Link>
            <Link to="/adminsettings">
              <Settings size={24} color="blue" />
            </Link>
            <button onClick={handleLogout}>
              <LogOutIcon size={24} color="blue" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNabar;
