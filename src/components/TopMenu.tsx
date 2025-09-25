
const TopMenu = () => {
  // const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // const menuItems = [
  //   { title: "HOME", dropdown: ["Home 1", "Home 2", "Home 3"] },
  //   { title: "SHOP", dropdown: ["Shop Grid", "Shop List", "Shop Single"] },
  //   { title: "PAGES", dropdown: ["About Us", "Contact", "FAQ"] },
  //   { title: "BLOG", dropdown: ["Blog Grid", "Blog Single"] },
  //   { title: "ELEMENTS", dropdown: ["Buttons", "Forms", "Icons"] },
  //   { title: "BUY NOW", dropdown: [] },
  // ];

  // return (
  //   <div className=" h-12 flex items-center space-x-8 text-sm border border-gray-200 relative  w-full justify-center">
  //     {menuItems.map((item, idx) => (
  //       <div
  //         key={idx}
  //         className="relative group cursor-pointer"
  //         onMouseEnter={() => setActiveMenu(item.title)}
  //         onMouseLeave={() => setActiveMenu(null)}
  //       >
         
  //         <div className="flex items-center space-x-1">
  //           <span className="hover:text-yellow-500">{item.title}</span>
  //           {item.dropdown.length > 0 && <ChevronDown size={14} />}
  //         </div>

         
  //         {item.dropdown.length > 0 && activeMenu === item.title && (
  //           <div className="absolute left-0 top-full mt-2 w-40 bg-white border border-gray-200 shadow-md rounded z-10">
  //             <ul className="divide-y divide-gray-100">
  //               {item.dropdown.map((sub, subIdx) => (
  //                 <li
  //                   key={subIdx}
  //                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
  //                 >
  //                   {sub}
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
  //         )}
  //       </div>
  //     ))}
  //   </div>
  return(

    <div className=" h-12 flex items-center space-x-8 text-sm border border-gray-200 relative  w-full justify-center mt-[8.8rem] ">
    <select className="Select w-24 outline-none" name="" id="">
        <option value="">HOME</option>
        <option value="">SHOP</option>
        <option value="">PAGES</option>
    </select>
    <select className="Select w-24 outline-none" name="" id="">
        <option value="">SHOP</option>
        <option value="">SHOP</option>
        <option value="">PAGES</option>
    </select>
    <select className="Select w-24 outline-none" name="" id="">
        <option value="">BLOG</option>
        <option value="">SHOP</option>
        <option value="">PAGES</option>
    </select>
    <select className="Select w-24 outline-none" name="" id="">
        <option value="">ELEMENTS</option>
        <option value="">SHOP</option>
        <option value="">PAGES</option>
    </select>
    <select className="Select w-24 outline-none" name="" id="">
        <option value="">BUY NOW</option>
        <option value="">SHOP</option>
        <option value="">PAGES</option>
    </select>
    </div>
  );
};

export default TopMenu;
