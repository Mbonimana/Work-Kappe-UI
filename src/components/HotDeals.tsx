import React from "react";
import { Heart } from "lucide-react";

function HotDeals() {
  return (
    <div>
      <div className="
        border-[0.2rem] border-yellow-300 
        w-[80%] h-auto md:w-[30%] lg:w-[20rem]
        p-8 
        ml-10 sm:ml-[7rem] 
        mb-4
      ">
        <h1 className="text-2xl font-semibold">HOT DEALS</h1>

        <div className="flex flex-row">
          <div className="border border-yellow-300 w-[6rem]"></div>
          <div className="border pl-[3rem] border-gray-500 flex-1"></div>
        </div>

        <div className="flex flex-row justify-between pt-4">
          <div className="bg-green-500 text-white px-2">
            <p>17% OFF</p>
          </div>
          <Heart size={20} color="gray" />
        </div>

        <img
          src="https://kapee.presslayouts.com/wp-content/uploads/2020/07/Apple-Watch-Series-5-White-2-300x350.jpg"
          alt="Apple Watch"
          className="w-full object-contain"
        />

        <div className="text-sm text-gray-600 mt-2">
          <p>ELECTRONICS</p>
          <p>Apple Watch Series</p>
          <p className="font-bold text-black">$499.00 - $599.00</p>
        </div>

        <div className="text-sm flex flex-row justify-between mt-2">
          <p>Already Sold: 50</p>
          <p>Available: 75</p>
        </div>

        <div className="flex flex-row pt-2">
          <div className="border-[0.3rem] border-yellow-300 w-[6rem]"></div>
          <div className="border-[0.3rem] border-gray-500 flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export default HotDeals;
