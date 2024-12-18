import React from 'react';
import Sidebar from './components/Sidebar';

const DashboardLayout = ({ setActivePage, children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar setActivePage={setActivePage} />

            {/* Main Content */}
            <div className="flex-1 overflow-auto p-5">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
