import React from 'react';

const Dashboard = () => {
    const projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-5 bg-white shadow-md rounded text-center"
                    >
                        <h2 className="text-xl font-semibold mb-2">{project}</h2>
                        <p className="text-gray-500">Details about {project}.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
