import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import AppliedProject from "./components/AppliedProject";
import FreelanceProject from "./components/FreelanceProject";
import ExecutionProject from "./components/ExecutionProject";
import Profile from "./components/Profile";
import UploadProject from "./components/UploadProject"; // New Component
import DashboardImg from "../assets/dashbord-img.png"

const Index = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [userRole, setUserRole] = useState("execution"); // Default role
  const userDetails = {
    name: "rj surya",
    email: "Manufacturer",
    image: DashboardImg,
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "pricing":
        return <Pricing />;
      case "freelance-project":
        return <FreelanceProject />;
      case "execution-project":
        return <ExecutionProject />;
      case "applied-project":
        return <AppliedProject />;
      case "profile":
        return <Profile />;
      case "upload-project":
        return userRole === "manufacturer" ? <UploadProject /> : null;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar setActivePage={setActivePage} userRole={userRole} />

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-900">
        {/* Top Bar */}
        <div className="bg-gray-800 text-white p-4 rounded-md flex justify-between items-center mb-6">
          <div className="space-x-4">
            <button
              className={`px-4 py-2 rounded ${userRole === "execution"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
                }`}
              onClick={() => setUserRole("execution")}
            >
              Consultant Dashboard
            </button>
            <button
              className={`px-4 py-2 rounded ${userRole === "manufacturer"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
                }`}
              onClick={() => setUserRole("manufacturer")}
            >
              Enterprise Dashboard
            </button>
          </div>
          <div>
            <div className="flex">
              <h2 className="text-2xl font-bold mr-2 mt-2">{userDetails.name}</h2>
              <img src={userDetails.image} alt="" className="h-[50px] rounded-full" />
            </div>
            <p className="text-sm">{userDetails.email}</p>
          </div>

        </div>

        {/* Page Content */}
        {renderPage()}
      </div>
    </div>
  );
};

export default Index;
