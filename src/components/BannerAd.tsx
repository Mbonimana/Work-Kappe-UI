import React from 'react';

const BannerAd: React.FC = () => {
  return (
    <section className=" bg-gray-100 w-[50rem] p-8 ml-[24rem] mt-[-22rem] mb-[2rem] ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
       
        <div className="mb-8 md:mb-0 md:w-1/2">
          <p className="text-yellow-500 font-semibold uppercase mb-2">Best Smartphone</p>
          <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Wireless <br /> Charging Stand
          </h1>
          <p className="text-xl text-gray-700 mb-6">Up To 70% Off</p>
          <button className="bg-yellow-500 text-black font-semibold hover:bg-black hover:text-yellow-400 px-6 py-3 rounded transition">
            Buy Now
          </button>
        </div>

        
        <div className="md:w-1/2 flex justify-end">
          <img
            src="https://kapee.presslayouts.com/wp-content/uploads/2020/07/electronics-slider-1.png" // Replace with your hosted image or static import
            alt="Wireless Charging Stand"
            className="max-w-xs w-full object-contain"
          />
        </div>
      </div>

      
    </section>
  );
};

export default BannerAd;
