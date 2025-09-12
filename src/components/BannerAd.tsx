import React from 'react';

const BannerAd: React.FC = () => {
  return (
    <section
      className="
        bg-gray-100 
        w-full p-4 
        sm:p-6 
        md:p-8 
        lg:w-[50rem] lg:p-8 lg:ml-[24rem] lg:mt-[-22rem] lg:mb-[2rem]
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
       
        {/* Left Text */}
        <div className="mb-8 md:mb-0 md:w-1/2 text-center md:text-left">
          <p className="text-yellow-500 font-semibold uppercase mb-2">
            Best Smartphone
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Wireless <br /> Charging Stand
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Up To 70% Off
          </p>
          <button className="bg-yellow-500 text-black font-semibold hover:bg-black hover:text-yellow-400 px-6 py-3 rounded transition">
            Buy Now
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://kapee.presslayouts.com/wp-content/uploads/2020/07/electronics-slider-1.png"
            alt="Wireless Charging Stand"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerAd;
