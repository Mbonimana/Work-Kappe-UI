import React, { useState } from "react";
import { Menu, ChevronRight } from "lucide-react"; 

const ByCategory: React.FC = () => {
  const [open, setOpen] = useState(true); 

  const categories = [
    "Men’s Clothing",
    "Women’s Clothing",
    "Accessories",
    "Shoes",
    "Jewellery",
    "Bags & Backpacks",
    "Watches",
    "Dresses",
    "Shirts",
  ];

  return (
    <div className="  mt-4 ml-10 w-64 border border-gray-200 rounded shadow-sm relative">
      
      <div
        className="bg-yellow-400 text-black  px-4 mt-[-4rem]  py-2 flex justify-between items-center cursor-pointer h-12"
        
      >
        <span>SHOP BY CATEGORIES</span>
        <Menu size={18} />
      </div>

      
      {open && (
        <ul className="bg-white divide-y divide-gray-200">
          {categories.map((cat, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 hover:text-yellow-400 cursor-pointer"
            >
              <span>{cat}</span>
              <ChevronRight size={16} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ByCategory;
