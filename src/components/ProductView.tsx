import { useParams } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./CartContext"; // ✅ import cart context

type Product = {
  id: string;
  title: string;
  content: string;
  price: number;
  image: string;
};

export default function ProductView() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // ✅ use addToCart from context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          "https://kappebackend.onrender.com/api/products/get-products"
        );

        // find the product by MongoDB _id
        const p = res.data.products.find((prod: any) => prod._id === id);

        if (p) {
          setProduct({
            id: p._id,
            title: p.prodName,
            content: p.prodDesc,
            price: Number(p.prodPrice), // ✅ ensure price is number
            image: p.productimage,
          });
        }
      } catch (err) {
        console.error("Error fetching product", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <h1 className="text-xl font-semibold">Loading product...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center mt-20">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product); // ✅ send product to cart context
  };

  return (
    <div className="flex justify-center items-center p-6 mmt-4 mb-5">
      <div className="bg-white rounded-2xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Left: Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg w-full max-h-[400px] object-contain"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {product.content}
            </h1>
            <p className="text-sm text-gray-500 mt-1">{product.title}</p>

            <div className="flex items-center mt-4 space-x-4">
              <span className="text-3xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <p className="text-gray-600 mt-6 leading-relaxed">
              This {product.content} is one of the top-rated products in our{" "}
              {product.title} category. Designed with quality and performance in
              mind, it’s perfect for both everyday use and special occasions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart} // ✅ connect addToCart
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-yellow-500 text-white font-medium shadow-md hover:bg-yellow-600 transition-all"
            >
              <ShoppingBag size={20} /> Add to Cart
            </button>
          </div>

          {/* Back Button */}
          <div className="mt-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-all font-medium"
            >
              <ArrowLeft size={18} /> Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
