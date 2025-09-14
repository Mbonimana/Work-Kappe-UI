import React, { useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b">
      {/* Top Sale Banner */}
      <div className="bg-black text-white text-xs flex justify-between items-center px-4 py-2">
        <div className="flex-1 text-center">
          <span>SUMMER SALE, Get 40% Off for all products.</span>
          <button className="ml-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs">
            Click Here
          </button>
        </div>
        <button className="text-white px-2">X</button>
      </div>

      {/* Language & Links */}
      <div className="bg-yellow-400 flex flex-col md:flex-row md:justify-between px-4 py-2 text-xs">
        <div className="flex justify-center md:justify-start space-x-4 mb-2 md:mb-0">
          <select className="bg-yellow-400 focus:outline-none">
            <option className="bg-white">ENGLISH</option>
            <option className="bg-white">French</option>
            <option className="bg-white">Deutsch</option>
          </select>
          <select className="bg-yellow-400 focus:outline-none">
            <option className="bg-white">$ DOLLAR (US)</option>
            <option className="bg-white">POUND UK</option>
            <option className="bg-white">EURO</option>
          </select>
        </div>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#">WELCOME TO OUR STORE!</a>
          <a href="#">BLOG</a>
          <a href="#">FAQ</a>
          <Link to='/ContactUs'>Contact Us</Link>

         
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
       <Link to={"/"}><h1 className="text-2xl font-bold">kapee.</h1>
       </Link> 
        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6 max-w-2xl">
          <input
            type="text"
            placeholder="Search for products, categories, brands..."
            className="w-full border border-gray-300 px-3 py-2 rounded-l focus:outline-none"
          />
          <select className="border border-gray-300 px-2 bg-white focus:outline-none">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Beauty Accessory</option>
            <option>Belts</option>
          </select>
          <button className="bg-black text-white px-4 rounded-r">
            <Search size={20} />
          </button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <div className="flex items-center space-x-1">
            <User size={20} />

            

             <Link to="/Login">Sign In</Link>

          </div>
          <div className="flex items-center space-x-1">
            <Heart size={20} />
            <span>(0)</span>
          </div>
          <div className="flex items-center space-x-1">
            <ShoppingBag size={20} />
            <span>$0.00</span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-4 py-3 space-y-3">
          {/* Search (mobile) */}
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 px-2 py-1 rounded-l focus:outline-none"
            />
            <button className="bg-black text-white px-3 rounded-r">
              <Search size={18} />
            </button>
          </div>

          {/* Icons (mobile) */}
          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/auth/login" className="flex items-center space-x-2">
              <User size={18} /> <span>Sign In/span</span>
            </Link>


            <div className="flex items-center space-x-2">
              <Heart size={18} /> <span>(0)</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingBag size={18} /> <span>$0.00</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
