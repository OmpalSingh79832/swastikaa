import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaMoneyCheckAlt,
  FaProjectDiagram,
  FaUser,
  FaPlus,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ setActivePage, userRole }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="text-white text-2xl p-2 fixed top-4 left-4 z-100 bg-gray-800 rounded-full focus:outline-none lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 shadow-md transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-56`}
      >
        <h2 className="text-2xl font-bold ml-3 py-4 text-white">My Dashboard</h2>
        <ul className="space-y-4 px-4">
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

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
