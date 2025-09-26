import React, { useState } from "react";
import axios from "axios";

interface ProductFormData {
  name: string;
  price: number;
  category: string;
  description: string;
  imageFile: File | null;
}

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    price: 0,
    category: "",
    description: "",
    imageFile: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "imageFile" && files && files[0]) {
      setFormData((prev) => ({ ...prev, imageFile: files[0] }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: name === "price" ? parseFloat(value) : value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.imageFile) {
      alert("Please select an image file!");
      return;
    }

    try {
      const data = new FormData();
      data.append("prodName", formData.name);
      data.append("prodDesc", formData.description);
      data.append("prodPrice", formData.price.toString());
      data.append("ProdCat", formData.category);
      data.append("image", formData.imageFile); // Must match backend

      const res = await axios.post(
        "https://kappebackend.onrender.com/api/products/create-product",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Product created:", res.data);
      alert("Product added successfully!");

      // Reset form
      setFormData({ name: "", price: 0, category: "", description: "", imageFile: null });
      (document.getElementById("imageFileInput") as HTMLInputElement).value = "";
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to add product. Check console for details.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[40%] mx-auto p-4 mt-16 bg-white shadow-md rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-800">Add New Product</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Price (USD)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
        >
          <option value="">Select category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="books">Books</option>
          <option value="home">Home</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Product Image</label>
        <input
          type="file"
          id="imageFileInput"
          name="imageFile"
          accept="image/*"
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
