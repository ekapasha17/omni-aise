import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { useAuthValidation } from '@/hooks/useAuthValidation';
import { renderDashboardContent } from '@/utils/dashboardUtils';
import { DASHBOARD_CONFIG } from '@/config/dashboardConfig';

export default function Dashboard({ auth, notifications = [] }) {
    const [activeTab, setActiveTab] = useState(DASHBOARD_CONFIG.UI.DEFAULT_ACTIVE_TAB);
    const [sidebarOpen, setSidebarOpen] = useState(DASHBOARD_CONFIG.UI.DEFAULT_SIDEBAR_STATE);

    // Handle authentication validation using custom hook
    // useAuthValidation(); // Temporarily disabled to debug loop issue

    return (
        <>
            <Head title="Dashboard | CloudStore Admin">
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
                    {renderDashboardContent(activeTab)}
                </DashboardLayout>
            </div>
        </>
    );
}
