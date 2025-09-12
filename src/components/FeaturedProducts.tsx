import { Heart } from "lucide-react";

const FeaturedProducts = () => {
  interface Card {
    title: string;
    content: string;
    price: string;
    image: string;
    discount: string;
    off: string;
  }

  const cards: Card[] = [
    {
      title: "ELECTRONICS ",
      content: "Apple 11 Promax",
      price: "$400",
      discount: "$600",
      off: "17% OFF",
      image:
        "https://kapee.presslayouts.com/wp-content/uploads/2020/07/Apple-iPhone-11-Pro-Max-256GB-2-300x350.jpg",
    },
    {
      title: "ELECTRONICS ",
      content: "Apple Watch Series 5",
      price: "$400",
      discount: "$600",
      off: "17% OFF",
      image:
        "https://kapee.presslayouts.com/wp-content/uploads/2020/07/Apple-Watch-Series-5-White-2-300x350.jpg",
    },
    {
      title: "ELECTRONICS ",
      content: "JBL Speaker",
      price: "$400",
      discount: "$600",
      off: "17% OFF",
      image:
        "https://kapee.presslayouts.com/wp-content/uploads/2020/07/JBL-Wireless-Bluetooth-Speaker-2-300x350.jpg",
    },
    {
      title: "ELECTRONICS ",
      content: "JBL on Ear",
      price: "$400",
      discount: "$600",
      off: "17% OFF",
      image:
        "https://kapee.presslayouts.com/wp-content/uploads/2020/07/JBL-On-Ear-Headphones-2-300x350.jpg",
    },
    {
      title: "ELECTRONICS ",
      content: "JBL on Ear",
      price: "$400",
      discount: "$600",
      off: "17% OFF",
      image:
        "https://kapee.presslayouts.com/wp-content/uploads/2020/07/JBL-On-Ear-Headphones-2-300x350.jpg",
    },
    {
      title: "ELECTRONICS ",
      content: "Samsung Gear 360 Camera",
      price: "$400",
      discount: "$600",
      off: "17% OFF",
      image:
        "https://kapee.presslayouts.com/wp-content/uploads/2020/07/Samsung-Gear-360-Camera-672x768.jpg",
    },
     {
      title: "ELECTRONICS ",
      content: "Air Pod Pro",
      price: "$400",
      discount: "$600",
      off: "17% OFF",
      image:
        "https://kapee.presslayouts.com/wp-content/uploads/2020/07/Apple-AirPods-with-Wireless-Charging-2-300x350.jpg",
    },
     {
      title: "ELECTRONICS ",
      content: " S 20Samsung",
      price: "$400",
      discount: "$600",
      off: "17% OFF",
      image:
        "https://kapee.presslayouts.com/wp-content/uploads/2020/07/Samsung-Galaxy-S20-8GB-RAM-128GB-Storage-2-300x350.jpg",
    },
   
  ];

  return (
    <div className="max-w-[80%]  lg:max-w-[65%] mx-auto  mt-8 mb-5 lg:ml-[27rem] lg:mt-[-37rem] md:">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group bg-white shadow-sm hover:shadow-md transition rounded-lg overflow-hidden text-sm relative"
          >
            {/* Top badge + heart */}
            <div className="flex flex-row justify-between items-center px-2 pt-2">
              <div className="bg-green-500 text-white px-2 py-1 text-xs rounded">
                {card.off}
              </div>
              <Heart size={18} color="gray" />
            </div>

            {/* Product image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full object-contain h-40"
            />

            {/* Product info */}
            <div className="p-2">
              <h2 className="text-xs text-gray-500">{card.title}</h2>
              <p className="font-medium">{card.content}</p>
              <div className="flex flex-row justify-between items-center mt-1">
                <p className="font-semibold">{card.price}</p>
                <p className="line-through text-gray-400 text-xs">
                  {card.discount}
                </p>
              </div>
            </div>

            {/* Add to Cart button (hidden until hover) */}
            <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition">
              <button className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-lg shadow hover:bg-yellow-500">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
