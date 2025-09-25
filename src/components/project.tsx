import { useNavigate } from "react-router-dom";

interface ProjectData {
  id: number;
  title: string;
  desc: string;
  budget: number;
  benef: string;
}

export const ProjectArray: ProjectData[] = [
   {
    id: 1,            
    title: "Manfact Project",
    desc: "industry development",
    budget: 2000000,
    benef: "Citizens"
  },
  {
    id:2,
    title: "Transport Project",
    desc: "Transportatuon",
    budget: 3000000,
    benef: "Business Man"
  },
  {
    id: 3,
    title: "Ecommerce Project",
    desc: "Business development",
    budget: 10000,
    benef: "Customers"
  },
  {
    id: 4,
    title: "agribusiness Project",
    desc: "Agriculture development",
    budget: 2000000,
    benef: "Farmers"
  },

   {
    id: 5,
    title: "Ecommerce Project",
    desc: "Business development",
    budget: 10000,
    benef: "Customers"
  },
];

export default function Project() {
   const navigate=useNavigate();

    const handleViewSingleRow =(id:number)=>{
        navigate(`/singleView/${id}`)

    }

  return (
    <>
      <table className="mt-[20rem] mb-[10rem] ml-[15%] w-[70%] border border-gray-200  overflow-hidden">
        <thead className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white">
          <tr >
            <th>ID</th>
            <th className="py-4 px-6 text-left font-semibold">Title</th>
            <th className="py-4 px-6 text-left font-semibold">Description</th>
            <th className="py-4 px-6 text-left font-semibold">Budget</th>
            <th className="py-4 px-6 text-left font-semibold">Beneficiary</th>
             <th className="py-4 px-6 text-left font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {ProjectArray.map((item, id) => (
            <tr
              key={id}
              className="hover:bg-blue-50 "
            >   
            <td className="py-3 px-6 font-medium text-gray-700" >
                {id+1}
              </td>
              <td className="py-3 px-6 font-medium text-gray-700">
                {item.title}
              </td>
              <td className="py-3 px-6 text-gray-600">{item.desc}</td>
              <td className="py-3 px-6 text-green-600 font-semibold">
                {item.budget}
              </td>
              <td className="py-3 px-6 text-gray-600">{item.benef}</td>
              <td className="py-3 px-6 text-gray-600 cursor-pointer"  onClick={()=>{handleViewSingleRow(item.id)}}>View</td>

            </tr>
            
          ))}
        </tbody>
      </table>
    </>
  );
}
