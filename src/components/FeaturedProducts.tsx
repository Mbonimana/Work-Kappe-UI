import { Strikethrough,Heart } from 'lucide-react';



const FeaturedProducts = () => {
  interface Card {
    title: string;
    content: string;
    price: string;
    image: string;
    discount: string;
    off:string;
  }

  const cards: Card[] = [
    {
      title: "ELECTRONICS ",
      content: "Apple 11 Promax",
      price:"$400",
      discount:"$600",
      off:"17% OFF", 
      image: 'https://kapee.presslayouts.com/wp-content/uploads/2020/07/Apple-iPhone-11-Pro-Max-256GB-2-300x350.jpg',
    },

    {
      title: "ELECTRONICS ",
      content: "Apple Watch Series 5",
      price:"$400",
      discount:"$600",
      off:"17% OFF", 
      image: 'https://kapee.presslayouts.com/wp-content/uploads/2020/07/Apple-Watch-Series-5-White-2-300x350.jpg',
    },
    
    {
      title: "ELECTRONICS ",
      content: "JBL Speaker",
      price:"$400",
      discount:"$600",
      off:"17% OFF", 
      image: 'https://kapee.presslayouts.com/wp-content/uploads/2020/07/JBL-Wireless-Bluetooth-Speaker-2-300x350.jpg',
    },
    {
      title: "ELECTRONICS ",
      content: "JBL on Ear",
      price:"$400",
      discount:"$600",
      off:"17% OFF", 
      image: 'https://kapee.presslayouts.com/wp-content/uploads/2020/07/JBL-On-Ear-Headphones-2-300x350.jpg',
    },
    {
      title: "ELECTRONICS ",
      content: "Samsung Virtual Reality-Headset",
      price:"$400",
      discount:"$600",
      off:"17% OFF", 
      image: 'https://kapee.presslayouts.com/wp-content/uploads/2020/07/Samsung-Virtual-Reality-Headset-2-300x350.jpg',
    },
    
    {
      title: "ELECTRONICS ",
      content: "Samsung Gear 360",
      price:"$400",
      discount:"$600",
      off:"17% OFF", 
      image: 'https://kapee.presslayouts.com/wp-content/uploads/2020/07/Samsung-Gear-360-Camera-2-300x350.jpg',
    },
    
    {
      title: "ELECTRONICS ",
      content: "Microsoft-Xbox One Wireless Controller",
      price:"$400",
      discount:"$600",
      off:"17% OFF", 
      image: 'https://kapee.presslayouts.com/wp-content/uploads/2020/07/Microsoft-Xbox-One-Wireless-Controller-2-300x350.jpg',
    },
    {
      title: "ELECTRONICS ",
      content: "Samsung Galaxy S20",
      price:"$400",
      discount:"$600",
      off:"17% OFF", 
      image: 'https://kapee.presslayouts.com/wp-content/uploads/2020/07/Samsung-Galaxy-S20-8GB-RAM-128GB-Storage-2-300x350.jpg',
    },
    
    





    
  ];

  return (
  
    <div className=' grid grid-cols-4  gap-x-[8rem]  p-2 pl-1 w-[40rem] ml-[29rem] mt-[-38rem] mb-5'>
     
      
      
      {cards.map((card, index) => (

        <div  className=' bg-whte h-[19rem] w-[10rem] hover:shadow-md  duration:1000 text-sm pt-3 ' >
          <div className='flex flex-row justify-between '>
            <div className="bg-green-500 text-white w-16 pt-2 h-[1.5rem] items-center flex justify-center ">
            <p>{card.off}</p>
          </div>
          <Heart size={20} color='gray' />

          </div>

        
          <img src={card.image} alt={card.title} />
  
          <h2 >{card.title}</h2>

          <p>{card.content}</p>
          <div className='flex flex-row justify-between p-2'>
          <p >{card.price}  </p>
          <p className='line-through text-gray-400'>{card.discount}</p>
          </div>


        </div>
      )
      )
      }


   </div>
  


  );
};

export default FeaturedProducts;