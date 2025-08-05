import React, { useState } from 'react';
import { 
    HomeIcon, 
    ChartBarIcon, 
    UsersIcon, 
    ServerIcon, 
    CreditCardIcon, 
    CogIcon,
    QuestionMarkCircleIcon,
    EnvelopeIcon,
    ChevronDownIcon
} from '@heroicons/react/24/outline';

export default function Sidebar({ activeTab, setActiveTab, sidebarOpen }) {
    const [storageSubmenuOpen, setStorageSubmenuOpen] = useState(false);

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
        { id: 'analytics', label: 'Analytics', icon: ChartBarIcon },
        { id: 'users', label: 'User Management', icon: UsersIcon },
        { 
            id: 'storage', 
            label: 'Storage Management', 
            icon: ServerIcon,
            hasSubmenu: true,
            submenu: [
                { id: 'storage_overview', label: 'Storage Overview' },
                { id: 'file_manager', label: 'File Manager' }
            ]
        },
        { id: 'billing', label: 'Billing & Subscriptions', icon: CreditCardIcon },
        { id: 'settings', label: 'Settings', icon: CogIcon }
    ];

    const handleStorageClick = () => {
        setStorageSubmenuOpen(!storageSubmenuOpen);
    };

    return (
        <aside className={`bg-white fixed z-20 top-0 left-0 w-64 h-screen transition-transform duration-300 ease-in-out transform shadow-lg ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
            
            {/* Company Logo */}
            <div className="p-4 flex items-center border-b">
                <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-600 rounded-lg p-2 mr-2">
                        <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
                        </svg>
                    </div>
                    <div>
                        <span className="text-xl font-bold text-gray-900">CloudStore</span>
                        <p className="text-xs text-gray-500">Admin Portal</p>
                    </div>
                </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="h-full overflow-y-auto py-4 px-3">
                <ul className="space-y-1.5">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            {item.hasSubmenu ? (
                                <>
                                    <button
                                        onClick={handleStorageClick}
                                        className={`flex items-center justify-between w-full p-2 rounded-lg font-medium ${
                                            activeTab.startsWith('storage') 
                                                ? 'bg-blue-600 text-white' 
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        <div className="flex items-center">
                                            <item.icon className="w-5 h-5 mr-3" />
                                            <span>{item.label}</span>
                                        </div>
                                        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${
                                            storageSubmenuOpen ? 'transform rotate-180' : ''
                                        }`} />
                                    </button>
                                    {storageSubmenuOpen && (
                                        <ul className="ml-4 space-y-1.5 mt-1">
                                            {item.submenu.map((subItem) => (
                                                <li key={subItem.id}>
                                                    <button
                                                        onClick={() => setActiveTab(subItem.id)}
                                                        className={`flex items-center w-full p-2 rounded-lg font-medium ${
                                                            activeTab === subItem.id
                                                                ? 'bg-blue-600 text-white'
                                                                : 'text-gray-700 hover:bg-gray-100'
                                                        }`}
                                                    >
                                                        <span>{subItem.label}</span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <button
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex items-center w-full p-2 rounded-lg font-medium ${
                                        activeTab === item.id
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <item.icon className="w-5 h-5 mr-3" />
                                    <span>{item.label}</span>
                                </button>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Help and Support Section */}
                <div className="mt-8 pt-4 border-t border-gray-200">
                    <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold px-2 mb-2">
                        Help & Support
                    </h3>
                    <ul className="space-y-1.5">
                        <li>
                            <button className="flex items-center w-full p-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
                                <QuestionMarkCircleIcon className="w-5 h-5 mr-3" />
                                <span>Knowledge Base</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center w-full p-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium">
                                <EnvelopeIcon className="w-5 h-5 mr-3" />
                                <span>Contact Support</span>
                            </button>
                        </li>
                    </ul>
                </div>

                {/* System Status Widget */}
                <div className="mt-6 mx-2 bg-gray-50 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">System Status</h4>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">API Services</span>
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                                Operational
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">Storage Services</span>
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                                Operational
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">Analytics</span>
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">
                                Degraded
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
