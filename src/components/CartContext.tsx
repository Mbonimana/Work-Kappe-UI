import { createContext, useState, useContext, ReactNode, useEffect } from "react"; 

export type Product = {
  id: string;          // frontend reference
  _id?: string;        // backend cart item ID
  title: string;
  content: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Omit<Product, "quantity">) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  increaseQuantity: (id: string) => Promise<void>;
  decreaseQuantity: (id: string) => Promise<void>;
  getTotal: () => number;
  clearCart: () => Promise<void>;
  fetchCart: () => Promise<void>;
  logout: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
const API_URL = "https://kappebackend.onrender.com/api/cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // ✅ Fetch cart for logged-in user
  const fetchCart = async () => {
    if (!token || !user?._id) {
      setCart([]); // ensure cart is empty if no user
      return;
    }

    try {
      const res = await fetch(`${API_URL}/getCartByUser/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (res.ok) {
        setCart(
          data.cart.map((item: any) => ({
            id: item.productId,
            _id: item._id,
            title: item.productName,
            content: item.productName,
            price: item.price,
            image: item.image,
            quantity: item.quantity,
          }))
        );
      } else {
        setCart([]); // empty cart or error
      }
    } catch (err) {
      console.error("Error fetching cart:", err);
      setCart([]);
    }
  };

  // ✅ Add product to cart
  const addToCart = async (product: Omit<Product, "quantity">) => {
    if (!token || !user?._id) return;
    try {
      const res = await fetch(`${API_URL}/addtoCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product.id,
          quantity: 1,
        }),
      });

      if (res.ok) {
        await fetchCart();
      } else {
        const errorData = await res.json();
        console.error("Add to cart error:", errorData);
      }
    } catch (err) {
      console.error("Add to cart error:", err);
    }
  };

  // ✅ Remove product
  const removeFromCart = async (id: string) => {
    if (!token) return;
    try {
      const res = await fetch(`${API_URL}/deleteProduct/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) await fetchCart();
    } catch (err) {
      console.error("Remove from cart error:", err);
    }
  };

  // ✅ Increase quantity
  const increaseQuantity = async (id: string) => {
    if (!token) return;
    try {
      const item = cart.find((c) => c._id === id);
      if (!item) return;
      const res = await fetch(`${API_URL}/updatecartquantity/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity: item.quantity + 1 }),
      });
      if (res.ok) await fetchCart();
    } catch (err) {
      console.error("Increase quantity error:", err);
    }
  };

  // ✅ Decrease quantity
  const decreaseQuantity = async (id: string) => {
    if (!token) return;
    try {
      const item = cart.find((c) => c._id === id);
      if (!item || item.quantity <= 1) return;
      const res = await fetch(`${API_URL}/updatecartquantity/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      });
      if (res.ok) await fetchCart();
    } catch (err) {
      console.error("Decrease quantity error:", err);
    }
  };

  // ✅ Clear cart
  const clearCart = async () => {
    if (!token || !user?._id) return;
    try {
      const res = await fetch(`${API_URL}/clear`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) setCart([]);
    } catch (err) {
      console.error("Clear cart error:", err);
    }
  };

  // ✅ Logout clears cart and local storage
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCart([]);
  };

  // ✅ Calculate total
  const getTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Load cart on mount if token exists
  useEffect(() => {
    if (token && user?._id) fetchCart();
  }, [token, user?._id]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotal,
        clearCart,
        fetchCart,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
