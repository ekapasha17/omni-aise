import DashboardContent from '@/components/Dashboard/DashboardContent';
import AnalyticsContent from '@/components/Dashboard/AnalyticsContent';
import UsersContent from '@/components/Dashboard/UsersContent';
import StorageContent from '@/components/Dashboard/StorageContent';
import BillingContent from '@/components/Dashboard/BillingContent';
import SettingsContent from '@/components/Dashboard/SettingsContent';

/**
 * Content renderer utility for dashboard navigation
 * Maps activeTab to appropriate component
 * 
 * @param {string} activeTab - The currently active tab/section
 * @returns {JSX.Element} - The appropriate content component
 */
export const renderDashboardContent = (activeTab) => {
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
