import React from "react";
import { FaTachometerAlt, FaMoneyCheckAlt, FaProjectDiagram, FaUser, FaPlus } from "react-icons/fa";

const Sidebar = ({ setActivePage, userRole }) => {
  return (
    <div className="w-56 bg-gray-800 shadow-md ">
      <h2 className="text-2xl font-bold ml-3 py-4 text-white">My Dashboard</h2>
      <ul className="space-y-4 px-4 ">
        <li>
          <button
            className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
            onClick={() => setActivePage("dashboard")}
          >
            <FaTachometerAlt className="mr-2" />
            Dashboard
          </button>
        </li>
        {userRole === "manufacturer" && (
          <li>
            <button
              className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
              onClick={() => setActivePage("upload-project")}
            >
              <FaPlus className="mr-2" />
              Post Project
            </button>
          </li>
        )}

        <li>
          <button
            className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
            onClick={() => setActivePage("freelance-project")}
          >
            <FaProjectDiagram className="mr-2" />
            Freelance Projects
          </button>
        </li>
        <li>
          <button
            className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
            onClick={() => setActivePage("execution-project")}
          >
            <FaProjectDiagram className="mr-2" />
            Execution Projects
          </button>
        </li>
        <li>
          <button
            className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
            onClick={() => setActivePage("applied-project")}
          >
            <FaProjectDiagram className="mr-2" />
            {userRole === "manufacturer" ? "All Projects" : "Applied Projects"}
          </button>
        </li>
        <li>
          <button
            className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
            onClick={() => setActivePage("profile")}
          >
            <FaUser className="mr-2" />
            My Profile
          </button>
        </li>
        <li>
          <button
            className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
            onClick={() => setActivePage("pricing")}
          >
            <FaMoneyCheckAlt className="mr-2" />
            My Subscription
          </button>
        </li>
        <li>
          <button
            className="w-full text-left flex items-center p-2 hover:bg-red-200 text-red-600 rounded"
            onClick={() => alert("Logged out")}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
