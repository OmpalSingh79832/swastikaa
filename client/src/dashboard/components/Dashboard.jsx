import React from 'react';
import Theme1 from "../../assets/img1.jpg"
import Theme2 from "../../assets/img2.jpg"
import Theme3 from "../../assets/img4.jpg"

const Dashboard = () => {
    const projects = ['Dashboard', 'Freelance Project', 'Execution Project', 'Applied Project', 'Credit'];
    const tableData = [
        { no: 1, theme: Theme1, category: 'Execution', xyz1: 'Data 1', xyz2: 'Data 2', action: 'Pending' },
        { no: 2, theme: Theme2, category: 'Manufacturer', xyz1: 'Data 3', xyz2: 'Data 4', action: 'Successful' },
        { no: 3, theme: Theme3, category: 'Execution', xyz1: 'Data 5', xyz2: 'Data 6', action: 'Pending' },
    ];

    return (
        <div>
            {/* Dashboard Section */}
            <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-5 bg-white shadow-md rounded text-center"
                    >
                        <h2 className="text-xl font-semibold mb-2">{project}</h2>
                        <p className="text-gray-500">{project}</p>
                    </div>
                ))}
            </div>

            {/* Additional Section */}
            <h2 className="text-2xl font-bold mt-10 mb-5">Current Overview </h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">No</th>
                        <th className="border border-gray-300 p-2">Theme</th>
                        <th className="border border-gray-300 p-2">Category</th>
                        <th className="border border-gray-300 p-2">XYZ 1</th>
                        <th className="border border-gray-300 p-2">XYZ 2</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index} className="text-center">
                            <td className="border border-gray-300 p-2">{row.no}</td>
                            <td className="border border-gray-300 p-2">
                                <img src={row.theme} alt="Theme" className="w-10 h-10 mx-auto" />
                            </td>
                            <td className="border border-gray-300 p-2">{row.category}</td>
                            <td className="border border-gray-300 p-2">{row.xyz1}</td>
                            <td className="border border-gray-300 p-2">{row.xyz2}</td>
                            <td className="border border-gray-300 p-2">
                                <span
                                    className={`px-3 py-1 rounded ${row.action === 'Successful'
                                        ? 'bg-green-200 text-green-700'
                                        : 'bg-yellow-200 text-yellow-700'
                                        }`}
                                >
                                    {row.action}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;