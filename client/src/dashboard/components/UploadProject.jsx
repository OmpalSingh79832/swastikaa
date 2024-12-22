import React from "react";

const UploadProject = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Post a New Project</h2>
      <div className="flex">
        <form className="space-y-4 w-[70%]">
          <div>
            <label className="block font-semibold mb-2">Project Name</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter project name"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Choose Your Sector</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter Your Manufacturing Sector"
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

        </form>
        <div>
          <div>
            <label className="block font-semibold mb-2">Last Date for Apply</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter the last date for apply"
            />
          </div>
          <button style={{ backgroundColor: "rgb(223 20 97)" }}
            type="submit"
            className="w-[100%] mx-auto items-center justify-between h-[50px] px-4 py-2  text-white rounded hover:bg-blue-700"
          >
            Submit Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadProject;
