
import { Link } from "react-router-dom";
import { MoreVertical } from "lucide-react";

export type ProductData = {
  productId:number;
  ProductName: string;
  ProductPrice: number;
  Category: string;
  ProductDescription:string;
  Stock: number;
  
  
};



export const Products: ProductData[] = [



  {
    productId:3,
    ProductName: "iPhone 14 Pro Max",
    ProductPrice:1099.99,
    Category: "Smart Phones",
    ProductDescription:"Apple iPhone with advanced features",
    Stock: 200,  
  },
    {
    productId:3,
    ProductName: "iPhone 14 Pro Max",
    ProductPrice:1099.99,
    Category: "Smart Phones",
    ProductDescription:"Apple iPhone with advanced features",
    Stock: 200,  
  },
    {
    productId:3,
    ProductName: "iPhone 14 Pro Max",
    ProductPrice:1099.99,
    Category: "Smart Phones",
    ProductDescription:"Apple iPhone with advanced features",
    Stock: 200,  
  },
    {
    productId:3,
    ProductName: "iPhone 14 Pro Max",
    ProductPrice:1099.99,
    Category: "Smart Phones",
    ProductDescription:"Apple iPhone with advanced features",
    Stock: 200,  
  },
    {
    productId:3,
    ProductName: "iPhone 14 Pro Max",
    ProductPrice:1099.99,
    Category: "Smart Phones",
    ProductDescription:"Apple iPhone with advanced features",
    Stock: 200,  
  },
    {
    productId:3,
    ProductName: "iPhone 14 Pro Max",
    ProductPrice:1099.99,
    Category: "Smart Phones",
    ProductDescription:"Apple iPhone with advanced features",
    Stock: 200,  
  },
    {
    productId:3,
    ProductName: "iPhone 14 Pro Max",
    ProductPrice:1099.99,
    Category: "Smart Phones",
    ProductDescription:"Apple iPhone with advanced features",
    Stock: 200,  
  },
    {
    productId:3,
    ProductName: "iPhone 14 Pro Max",
    ProductPrice:1099.99,
    Category: "Smart Phones",
    ProductDescription:"Apple iPhone with advanced features",
    Stock: 200,  
  },
   
 
 
]; 

const ProductTable = () => {

  

  return (
    <div className=" w-[78%] ml-[19%] p-3 bg-white rounded-lg shadow-md mt-[3rem]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Products List
        </h2>
        <Link to ="/addproduct">
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
            <th className="p-2">Stock</th>
            <th className="p-2">
             <div></div>
            </th>
          </tr>
        </thead>
       <tbody>
      {Products.map((Product, index) => (
        <tr key={index} className="border-b hover:bg-gray-50 relative">
          <td className="p-3">{Product.productId}</td>
          <td className="p-3">{Product.ProductName}</td>
          <td className="p-3">{Product.ProductPrice}</td>
          <td className="p-3">{Product.Category}</td>
          <td className="p-3">{Product.ProductDescription}</td>
          <td className="p-3">{Product.Stock}</td>

          <td className="p-3 relative">
            {/* Parent with group */}
            <div className="relative inline-block group">
              <button className="p-2 rounded hover:bg-gray-200">
                <MoreVertical size={20} />
              </button>

              {/* Show buttons on hover */}
              <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-lg hidden group-hover:block z-10">
                <button
                  className="block w-full px-3 py-2 text-left text-sm hover:bg-gray-100"
                  onClick={() => alert(`Update ${Product.ProductName}`)}
                >
                  Update
                </button>
                <button
                  className="block w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                  onClick={() => alert(`Delete ${Product.ProductName}`)}
                >
                  Delete
                </button>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
      </table>
      <div className="mt-4 flex justify-end text-sm text-gray-500">
      
      </div>
    </div>
  );
};

export default ProductTable;