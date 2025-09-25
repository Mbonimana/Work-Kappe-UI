import { Link } from "react-router-dom";
import { Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

// ✅ Product data type
export type ProductData = {
  productId: string;
  ProductName: string;
  ProductPrice: number;
  Category: string;
  ProductDescription: string;
  Stock?: number;
  productimage?: string;
};

// ✅ Response type for GET products
type GetProductsResponse = {
  products: Array<{
    _id: string;
    prodName: string;
    prodPrice: number;
    ProdCat: string;
    prodDesc: string;
    stock?: number;
    productimage?: string;
  }>;
};

// ✅ Response type for DELETE product
type DeleteProductResponse = {
  message: string;
};

const ProductTable = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get<GetProductsResponse>(
        "https://kappebackend.onrender.com/api/products/get-products"
      );

      const mappedProducts: ProductData[] = res.data.products.map((p) => ({
        productId: p._id,
        ProductName: p.prodName,
        ProductPrice: p.prodPrice,
        Category: p.ProdCat,
        ProductDescription: p.prodDesc,
        Stock: p.stock || 0,
        productimage: p.productimage,
      }));

      setProducts(mappedProducts);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product by id
  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const res = await axios.delete<DeleteProductResponse>(
        `https://kappebackend.onrender.com/api/products/delete-product/${deleteId}`
      );

      if (res.status === 200) {
        setProducts(products.filter((p) => p.productId !== deleteId));
        alert(res.data.message || "Product deleted successfully!");
      } else {
        alert("Failed to delete product.");
      }
    } catch (err: any) {
      console.error("Error deleting product:", err.response?.data || err.message);
      alert("Error deleting product. Check console.");
    } finally {
      setDeleteId(null);
      setShowConfirm(false);
    }
  };

  return (
    <div className="w-[78%] ml-[19%] p-3 bg-white rounded-lg shadow-md mt-[3rem]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Products List</h2>
        <Link to="/addproduct">
          <button className="text-sm bg-blue-500 text-white hover:bg-blue-700 h-8 w-28 rounded-md">
            Add Products
          </button>
        </Link>
      </div>

      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-2">Product ID</th>
            <th className="p-2">Product Name</th>
            <th className="p-2">Product Price</th>
            <th className="p-2">Category</th>
            <th className="p-2">Description</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.productId} className="border-b hover:bg-gray-50 relative">
              <td className="p-3">{product.productId}</td>
              <td className="p-3">{product.ProductName}</td>
              <td className="p-3">${product.ProductPrice}</td>
              <td className="p-3">{product.Category}</td>
              <td className="p-3">{product.ProductDescription}</td>
              <td className="p-3 flex space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => alert(`Update ${product.ProductName}`)}
                >
                  <Edit className="h-5 w-5" />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => {
                    setDeleteId(product.productId);
                    setShowConfirm(true);
                  }}
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Delete
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
