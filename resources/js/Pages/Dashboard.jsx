import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import DashboardContent from '@/components/Dashboard/DashboardContent';
import AnalyticsContent from '@/components/Dashboard/AnalyticsContent';
import UsersContent from '@/components/Dashboard/UsersContent';
import StorageContent from '@/components/Dashboard/StorageContent';
import BillingContent from '@/components/Dashboard/BillingContent';
import SettingsContent from '@/components/Dashboard/SettingsContent';

export default function Dashboard({ auth, notifications = [] }) {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Prevent back button access after logout
    useEffect(() => {
        // Disable back button functionality
        const preventBack = () => {
            window.history.forward();
        };

        // Add event listener for page show (handles back button)
        window.addEventListener('pageshow', preventBack, false);

        // Push a new state to prevent back navigation
        window.history.pushState(null, '', window.location.href);
        window.addEventListener('popstate', preventBack, false);

        return () => {
            window.removeEventListener('pageshow', preventBack, false);
            window.removeEventListener('popstate', preventBack, false);
        };
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'analytics':
                return <AnalyticsContent />;
            case 'users':
                return <UsersContent />;
            case 'storage':
            case 'storage_overview':
            case 'file_manager':
                return <StorageContent activeSubTab={activeTab} />;
            case 'billing':
                return <BillingContent />;
            case 'settings':
                return <SettingsContent />;
            default:
                return <DashboardContent />;
        }
    };

    return (
        <>
            <Head title="Dashboard | CloudStore Admin" />
            <div className="bg-gray-50 text-gray-800 antialiased min-h-screen">
                <DashboardLayout
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    user={auth.user}
                    notifications={notifications}
                >
                    {renderContent()}
                </DashboardLayout>
            </div>
        </>
    );
}
