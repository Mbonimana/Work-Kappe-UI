import React from 'react';

const BestSales: React.FC = () => {
  return (

    <div className=' hidden lg:flex flex-col pl-3 justify-center md:flex-row  pb-7 '>
    <section className="md:bg-gray-100 w-[35rem] h-[20rem] p-8   ">
    <div className='flex flex-row'>
      <div className=" max-w-6xl mx-auto flex flex-row items-center justify-start">
     
        <div className="mb-8 md:mb-0 md:w-1/2">
         <p className="text-yellow-500 font-semibold uppercase mb-2">DIGITAL SMART</p>
        <h1 className='text-2xl font-bold'>WIRELESS SPEAKER</h1>
         
         
          <p className="text-xl text-black mb-6">MIN. 30-75%</p>
          <button className="bg-yellow-500 text-black font-semibold hover:bg-black hover:text-yellow-400 px-6 py-3 rounded transition">
           SHOP NOW
          </button>
        </div>

       
        <div className="md:w-1/2 flex flex-row justify-end">
          <img
            src="https://pngimg.com/d/wireless_speaker_PNG45.png " 
            alt="Wireless Charging Stand"
            className="max-w-xs w-full object-contain hover:scale-125  transition-transform duration-1000 ease-in-out "
          />
        </div>
      </div>  
    </div>
    </section>


    <section className="w-[90%] bg-gray-100 lg:w-[35rem] md:h-[20rem] p-8  mt-2 lg:mt-0 md:mt-0 ml-1">
    <div className='flex flex-row'>
      <div className=" max-w-6xl mx-auto flex flex-row items-center justify-start">
     
        <div className="mb-8 md:mb-0 md:w-1/2">
         <p className="text-yellow-500 font-semibold uppercase mb-2">DIGITAL SMART</p>
        <h1 className='text-2xl font-bold'>WIRELESS SPEAKER</h1>
         
         
          <p className="text-xl text-black mb-6">MIN. 30-75%</p>
          <button className="bg-yellow-500 text-black font-semibold hover:bg-black hover:text-yellow-400 px-6 py-3 rounded transition">
           SHOP NOW
          </button>
        </div>

       
        <div className="md:w-1/2 flex flex-row justify-end">
          <img
            src="https://th.bing.com/th/id/R.4a6c1e751c7dca481d00400820f633dd?rik=yEJDllhqd8CCsg&riu=http%3a%2f%2fau.evolvedchargers.com%2fcdn%2fshop%2ffiles%2fsamsung-watch-portable-charger-power-bank-1000-mah-keychain-charger-for-travel_9.png%3fv%3d1694458865%26width%3d2048&ehk=xA1yR%2b933oHQTTJWNgbp2XiXUqUIXBnI8NhPaDqzT1I%3d&risl=&pid=ImgRaw&r=0" 
            alt="Wireless Charging Stand"
            className="max-w-xs w-full object-contain hover:scale-125  transition-transform duration-1000 ease-in-out "
          />
        </div>
      </div>  
    </div>
    </section>

    


      </div> 
  );
};

export default BestSales;
