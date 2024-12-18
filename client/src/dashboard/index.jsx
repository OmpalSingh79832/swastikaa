import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import Dashboard from './components/Dashboard';
import MyProjects from './components/MyProjects';
import Chat from './components/Chat';
import ChangePassword from './components/ChangePassword';

const DashboardIndex = () => {
    const [activePage, setActivePage] = useState('dashboard');

    const renderPage = () => {
        switch (activePage) {
            case 'dashboard':
                return <Dashboard />;
            case 'my-projects':
                return <MyProjects />;
            case 'chat':
                return <Chat />;
            case 'change-password':
                return <ChangePassword />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <DashboardLayout setActivePage={setActivePage}>
            {renderPage()}
        </DashboardLayout>
    );
};

export default DashboardIndex;
