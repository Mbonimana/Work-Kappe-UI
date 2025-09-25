import { useParams } from "react-router-dom";
import { ProjectArray } from "./project";

export default function ViewSingleData() {
  const { id } = useParams();
  const project = ProjectArray.find((data) => data.id === Number(id));

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">
           Project not found
        </h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50p-6 mt-20 mb-20">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 ">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-lg px-5 py-3 mb-6 shadow-md">
          <h1 className="text-xl font-bold">{project.title}</h1>
          <p className="text-sm opacity-90">Project Details Overview</p>
        </div>

        <div className="flex flex-col gap-4 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Title:</span>
            <span>{project.title}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Description:</span>
            <span>{project.desc}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Budget:</span>
            <span className="text-green-600 font-bold">{project.budget}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Beneficiaries:</span>
            <span>{project.benef}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-full bg-yellow-500 text-white font-medium shadow-md hover:bg-yellow-600 transition-all"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
}
