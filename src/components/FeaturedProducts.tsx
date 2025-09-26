import { Eye, ShoppingBag } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./CartContext";
import Notiflix from "notiflix";

type Card = {
  id: string;
  title: string;
  content: string;
  price: number | string;
  off: string;
  image: string;
};

// ✅ Type for Axios response
type ProductResponse = {
  products: {
    _id: string;
    ProdCat: string;
    prodName: string;
    prodPrice: string | number;
    productimage: string;
  }[];
};

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<Card[]>([]);
  const { addToCart } = useCart(); // ✅ from context

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //  Type the response
        const res = await axios.get<ProductResponse>(
          "https://kappebackend.onrender.com/api/products/get-products"
        );

        const products = res.data.products.map((p) => ({
          id: p._id,
          title: p.ProdCat,
          content: p.prodName,
          price: Number(p.prodPrice),
          off: "New",
          image: p.productimage,
        }));

        setCards(products);
      } catch (err) {
        console.error("Error fetching products", err);
        Notiflix.Notify.failure("Failed to load products. Please try again.");
      }
    };

    fetchProducts();
  }, []);

  const handleViewSingleRow = (id: string) => {
    navigate(`/ProductView/${id}`);
  };

  // handle add to cart with login check
  const handleAddToCart = async (card: Card) => {
    const token = localStorage.getItem("token");

    if (!token) {
      Notiflix.Notify.failure("You must be logged in to add items to the cart.");
      return;
    }

    try {
      await addToCart({
        id: card.id,
        title: card.title,
        content: card.content,
        price: Number(card.price),
        image: card.image,
      });
      Notiflix.Notify.success("Item added to cart!");
    } catch (err: any) {
      console.error("Add to cart error:", err);
      Notiflix.Notify.failure(err.message || "Failed to add item to cart.");
    }
  };

  return (
    <div className="max-w-[80%] lg:max-w-[60%] mx-auto mt-8 mb-5 lg:ml-[28rem] lg:mt-[-36rem]">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group bg-white shadow-sm hover:shadow-md transition rounded-lg overflow-hidden text-sm relative"
          >
            <div className="flex flex-row justify-between items-center px-2 pt-2">
              <div className="bg-green-500 text-white px-2 py-1 text-xs rounded">
                {card.off}
              </div>
             
            </div>

            <img
              src={card.image}
              alt={card.title}
              className="w-full object-contain h-40"
            />

            <div className="p-2">
              <h2 className="text-xs text-gray-500">{card.title}</h2>
              <p className="font-medium">{card.content}</p>
              <div className="flex flex-row justify-between items-center mt-1">
                <p>
                  $ <span className="font-semibold">{card.price}</span>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition mt-[-10rem]">
              <button
                className="bg-yellow-400 w-20 h-10 text-black font-medium text-center py-2 rounded-lg shadow hover:bg-yellow-500"
                onClick={() => handleAddToCart(card)}
              >
                <ShoppingBag size={18} color="white" className="ml-8" />
              </button>
              <button
                className="bg-yellow-400 w-20 h-10 ml-2 text-black font-medium py-2 rounded-lg shadow hover:bg-yellow-500"
                onClick={() => handleViewSingleRow(card.id)}
              >
                <Eye size={18} color="white" className="ml-8" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
