import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import Dashboard from './components/Dashboard';
import Chat from './components/AppliedProject';
import ChangePassword from './components/ChangePassword';
import Pricing from './components/Pricing';
import FreelanceProject from './components/FreelanceProject';
import ExecutionProject from './components/ExecutionProject';

const DashboardIndex = () => {
    const [activePage, setActivePage] = useState('dashboard');

    const renderPage = () => {
        switch (activePage) {
            case 'dashboard':
                return <Dashboard />;
                case 'pricing':
                    return <Pricing />;
            case 'freelance-project':
                return <FreelanceProject />;
                case 'execution-project':
                    return <ExecutionProject />;
            case 'applied-project':
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
