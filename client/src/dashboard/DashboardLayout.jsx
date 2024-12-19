import React from 'react';
import Sidebar from './components/Sidebar';

const DashboardLayout = ({ setActivePage, children }) => {
  // Example user info, you can replace this with actual data from your app's state or context
  const user = {
    profilePicture: 'https://via.placeholder.com/600/e924e6', // Replace with user's profile picture URL
    username: 'John Doe', // Replace with the actual username
    userType: 'Admin' // Replace with the actual user type (e.g., Admin, User, etc.)
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar setActivePage={setActivePage} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto px-5 flex flex-col">
        {/* User Info Section */}
        <div className=" items-center text-end mb-4 sticky">
          <div className="flex items-center justify-end space-x-3 bg-gray-800 text-white p-3 px-5 rounded-lg">
            <img 
              src={user.profilePicture} 
              alt="User Profile" 
              className="w-12 h-12 rounded-full border-2 border-gray-600" 
            />
            <div className="text-right">
              <p className="font-semibold">{user.username}</p>
              <p className="text-sm">{user.userType}</p>
            </div>
          </div>
        </div>

        {/* Children (main content) */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
