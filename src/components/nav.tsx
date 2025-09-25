import React, { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotal, logout } = useCart();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="w-full border-b fixed top-0 bg-white z-50">
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
          <Link to="/ContactUs">Contact Us</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">kapee.</h1>
        </Link>
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

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

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <div className="flex items-center space-x-1">
            <User size={20} />
            {user ? (
              <>
                <span>Hello, {user.fullnames.split(" ")[0]}</span>
                <button onClick={handleLogout} className="text-red-500 ml-2">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/Login">Sign In</Link>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Heart size={20} />
            <span>(0)</span>
          </div>
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag size={20} />
            <span>({cart.length})</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-2 px-4 text-sm font-medium">
          <div className="flex items-center space-x-1">
            <User size={20} />
            {user ? (
              <>
                <span>Hello, {user.fullnames.split(" ")[0]}</span>
                <button onClick={handleLogout} className="text-red-500 ml-2">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/Login">Sign In</Link>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Heart size={20} />
            <span>(0)</span>
          </div>
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag size={20} />
            <span>({cart.length})</span>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
          <div className="bg-white w-80 h-[80%] mt-12 p-4 shadow-lg relative flex flex-col animate-fadeIn animation-delay-500">
            <button
              className="absolute top-3 right-3"
              onClick={() => setCartOpen(false)}
            >
              <X size={22} />
            </button>
            <h2 className="text-lg font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="flex-1 overflow-y-auto space-y-3">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center space-x-3 border-b pb-2"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.content}</p>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <button
                          onClick={() => decreaseQuantity(item._id!)}
                          className="px-2 py-1 border rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item._id!)}
                          className="px-2 py-1 border rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id!)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <div className="mt-4 border-t pt-4">
                <p className="font-bold text-lg">
                  Total: ${getTotal().toFixed(2)}
                </p>
                <button
                  onClick={() => {
                    setCartOpen(false);
                    navigate("/checkout");
                  }}
                  className="w-full bg-yellow-500 text-black py-2 mt-2 rounded"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;