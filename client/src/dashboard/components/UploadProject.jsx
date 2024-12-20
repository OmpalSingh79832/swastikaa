import React from "react";

const UploadProject = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Upload a New Project</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Project Name</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter project name"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter project description"
            rows="4"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Budget</label>
          <input
            type="number"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter budget"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default UploadProject;
