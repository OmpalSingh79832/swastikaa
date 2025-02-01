import React from 'react';
import { FaDollarSign, FaBriefcase, FaTools, FaClipboard, FaCreditCard } from 'react-icons/fa';
const Dashboard = () => {
    const cards = [
        { title: 'Plan Details', count: '0', icon: <FaDollarSign className="text-xl" />, bgColor: 'bg-green-500' },
        { title: 'Freelance Project', count: '0', icon: <FaBriefcase className="text-xl" />, bgColor: 'bg-purple-500' },
        { title: 'Execution Project', count: '0', icon: <FaTools className="text-xl" />, bgColor: 'bg-blue-500' },
        { title: 'Applied Project', count: '0', icon: <FaClipboard className="text-xl" />, bgColor: 'bg-indigo-500' },
        { title: 'Credit', count: '₹0', icon: <FaCreditCard className="text-xl" />, bgColor: 'bg-indigo-500' },
    ];

    return (
        <div className="min-h-screen text-white p-5 ">
            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center justify-between"
                    >
                        {/* Count and Title */}
                        <div>
                            <p className="text-2xl font-bold">{card.count}</p>
                            <p className="text-gray-400">{card.title}</p>
                        </div>
                        {/* Icon */}
                        <div
                            className={`w-10 h-10 ${card.bgColor} text-white flex items-center justify-center rounded-full text-lg`}
                        >
                            {card.icon}
                        </div >
                    </div >
                ))}
            </div >
        </div >
    );
};

export default Dashboard;
