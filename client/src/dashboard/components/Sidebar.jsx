import React from 'react';

const Sidebar = ({ setActivePage }) => {
    return (
        <div className="w-64 bg-white shadow-md h-full">
            <h2 className="text-2xl font-bold text-center py-4 text-blue-600">My Dashboard</h2>
            <ul className="space-y-4 px-4">
                <li>
                    <button
                        className="w-full text-left p-2 hover:bg-gray-200 rounded"
                        onClick={() => setActivePage('dashboard')}
                    >
                        Dashboard
                    </button>
                </li>
                <li>
                    <button
                        className="w-full text-left p-2 hover:bg-gray-200 rounded"
                        onClick={() => setActivePage('pricing')}
                    >
                        My Subsciption
                    </button>
                </li>
                <li>
                    <button
                        className="w-full text-left p-2 hover:bg-gray-200 rounded"
                        onClick={() => setActivePage('freelance-project')}
                    >
                        Freelance Projects
                    </button>
                </li>
                <li>
                    <button
                        className="w-full text-left p-2 hover:bg-gray-200 rounded"
                        onClick={() => setActivePage('execution-project')}
                    >
                        Execution Projects
                    </button>
                </li>
                <li>
                    <button
                        className="w-full text-left p-2 hover:bg-gray-200 rounded"
                        onClick={() => setActivePage('applied-project')}
                    >
                        Applied Project
                    </button>
                </li>
                <li>
                    <button
                        className="w-full text-left p-2 hover:bg-gray-200 rounded"
                        onClick={() => setActivePage('change-password')}
                    >
                        Change Password
                    </button>
                </li>
                <li>
                    <button
                        className="w-full text-left p-2 hover:bg-red-200 rounded text-red-600"
                        onClick={() => alert('Logged out')}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
