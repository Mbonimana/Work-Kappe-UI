import React from "react";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
const Nav: React.FC = () => {
  return (
    <nav className="w-full h-48">
      
      <div className="bg-black text-white text-sm flex  px-4 py-1 h-16 pr-10">
        <div className="flex-1 flex items-center justify-center space-x-4">
        <span>SUMMER SALE, Get 40% Off for all products.</span>
        <button className="bg-yellow-400 text-white   px-3 py-1 rounded text-[0.5 rem] ">
          Click Here
        </button>
        </div>
        <button className="bg-black text-white  px-3 py-1 rounded text-[0.5 rem] justify-end">
          X
        </button>
      </div>

     
      <div className="bg-yellow-400 flex justify-between px-6 py-2 text-sm ">
        <div className="flex space-x-4">
          <select className="bg-yellow-400 text-sm focus:outline-none">
            <option className=" bg-white">ENGLISH</option>
            <option className=" bg-white">French</option>
            <option className=" bg-white">Deautch</option>
          </select>
          <select className="bg-yellow-400 font-small focus:outline-none hover:cursor-pointer">
            <option className=" bg-white">$ DOLLAR (US)</option>
            <option className=" bg-white"> POUND UK</option>
            <option className=" bg-white">  EURO</option>
          </select>
        </div>
        <div className="flex space-x-6 font-small">
          <a href="#">WELCOME TO OUR STORE!</a>
          <a href="#">BLOG</a>
          <a href="#">FAQ</a>
          <a href="#">CONTACT US</a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">kapee.</h1>

        {/* Search Bar */}
        <div className="flex flex-1 mx-6 max-w-2xl">
          <input
            type="text"
            placeholder="Search for products, categories, brands, sku..."
            className="w-full border border-gray-300 px-3 py-2 rounded-l focus:outline-none"
          />
          <select className="border border-gray-300 px-2 bg-white focus:outline-none">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Analogs</option>
            <option>Anklets</option>
            <option>Beauty Accessory</option>
            <option>Belts</option>
          </select>
          <button className="bg-black text-white px-4 rounded-r">
            <Search size={20} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <div className="flex items-center space-x-1 ">
            <User size={20} />
          <Link to={'/auth/MyAccount'}> SIGN IN </Link>
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
    </nav>
  );
};

export default Nav;
