import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import UserManagementContent from '@/components/UserManagement/UserManagementContent';
import { useAuthValidation } from '@/hooks/useAuthValidation';
import { DASHBOARD_CONFIG } from '@/config/dashboardConfig';

export default function UserManagement({ auth, notifications = [] }) {
    const [activeTab, setActiveTab] = useState('users');
    const [sidebarOpen, setSidebarOpen] = useState(DASHBOARD_CONFIG.UI.DEFAULT_SIDEBAR_STATE);

    // Handle authentication validation using custom hook
    // useAuthValidation(); // Temporarily disabled to debug loop issue

    return (
        <>
            <Head title="User Management | CloudStore Admin">
                <meta httpEquiv="Cache-Control" content={DASHBOARD_CONFIG.CACHE_CONTROL.HEADERS['Cache-Control']} />
                <meta httpEquiv="Pragma" content={DASHBOARD_CONFIG.CACHE_CONTROL.HEADERS['Pragma']} />
                <meta httpEquiv="Expires" content={DASHBOARD_CONFIG.CACHE_CONTROL.HEADERS['Expires']} />
            </Head>
            <div className="bg-gray-50 text-gray-800 antialiased min-h-screen">
                <DashboardLayout
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    user={auth.user}
                    notifications={notifications}
                >
                    <UserManagementContent />
                </DashboardLayout>
            </div>
        </>
    );
}
