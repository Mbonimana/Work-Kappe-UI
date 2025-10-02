import { Settings, LogOutIcon, MessageCircle, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function DashboardNabar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row">
      {/* Logo Section */}
      <div className="bg-blue-500 w-full md:w-[15%] h-[3.5rem] flex items-center justify-center shadow-sm">
        <h2 className="text-white font-semibold text-lg md:text-xl">
          Admin Dashboard
        </h2>
      </div>

     {/* Navigation Section */}
<div className="bg-white w-full md:w-[85%] h-auto md:h-[3.5rem] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-2 md:py-0 shadow-md">
  {/* Search + Icons Row */}
  <div className="w-full flex items-center justify-between space-x-4">
    {/* Search Bar */}
    <form className="flex flex-1 items-center space-x-2">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full md:w-[24rem] lg:w-[30rem] border border-gray-300 px-2 h-10 rounded focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>

    {/* Desktop Icons */}
    <div className="hidden md:flex items-center space-x-6">
      <Link to="/messages">
        <MessageCircle size={22} className="text-blue-500" />
      </Link>
      <Link to="/adminsettings">
        <Settings size={22} className="text-blue-500" />
      </Link>
      <button onClick={handleLogout}>
        <LogOutIcon size={22} className="text-blue-500" />
      </button>
    </div>

    {/* Mobile Menu Icon */}
    <div className="md:hidden">
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={24} className="text-blue-500" />
      </button>
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  {menuOpen && (
    <div className="md:hidden mt-2 bg-white border rounded shadow-md w-full">
      <Link to="/messages" className="block px-4 py-2 text-blue-500 hover:bg-gray-100">
        Messages
      </Link>
      <Link to="/adminsettings" className="block px-4 py-2 text-blue-500 hover:bg-gray-100">
        Settings
      </Link>
      <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  )}
</div>

    </div>
  );
}

export default DashboardNabar;
