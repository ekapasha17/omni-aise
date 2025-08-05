import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import { 
    Bars3Icon, 
    MagnifyingGlassIcon, 
    BellIcon, 
    ChevronDownIcon 
} from '@heroicons/react/24/outline';

export default function Header({ sidebarOpen, setSidebarOpen, user, notifications = [] }) {
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showEnvironmentMenu, setShowEnvironmentMenu] = useState(false);

    const unreadNotifications = notifications.filter(n => !n.read).length;

    const handleLogout = () => {
        router.post('/logout');
    };

    return (
        <header className="bg-white shadow-sm z-10 sticky top-0">
            <div className="px-4 py-3 md:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Hamburger Icon for Mobile */}
                    <button 
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-gray-600 mr-4 hover:text-gray-900"
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>

                    {/* Global Search */}
                    <div 
                        className={`relative transition-all duration-200 ${
                            searchExpanded ? 'w-96' : 'w-64'
                        }`}
                        onClick={() => setSearchExpanded(true)}
                        onBlur={() => setSearchExpanded(false)}
                    >
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="search"
                            name="search"
                            className="focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 pr-12 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm transition-all duration-200 ease-in-out"
                            placeholder="Search users, resources, or settings"
                            type="search"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <kbd className="inline-flex items-center px-2 text-sm font-sans font-medium text-gray-400 bg-gray-100 rounded">
                                ⌘K
                            </kbd>
                        </div>
                    </div>

                    {/* Header Right Items */}
                    <div className="flex items-center space-x-3">
                        {/* Environment Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setShowEnvironmentMenu(!showEnvironmentMenu)}
                                className="bg-green-100 text-green-800 px-3 py-1.5 rounded-lg text-sm font-medium inline-flex items-center transition duration-150 ease-in-out"
                            >
                                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                                Production
                                <ChevronDownIcon className="w-4 h-4 ml-1" />
                            </button>
                            {showEnvironmentMenu && (
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none z-50">
                                    <button className="flex items-center w-full px-4 py-2 text-sm text-green-800 bg-green-50">
                                        <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                                        Production
                                    </button>
                                    <button className="flex items-center w-full px-4 py-2 text-sm text-yellow-800 hover:bg-yellow-50">
                                        <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                                        Staging
                                    </button>
                                    <button className="flex items-center w-full px-4 py-2 text-sm text-blue-800 hover:bg-blue-50">
                                        <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                                        Development
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        {/* Notifications Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className="p-1 rounded-full text-gray-600 hover:text-gray-900 relative"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" />
                                {unreadNotifications > 0 && (
                                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                                )}
                            </button>
                            
                            {showNotifications && (
                                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                    <div className="py-2">
                                        <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                                            <h3 className="text-sm font-semibold text-gray-900">System Notifications</h3>
                                            <button className="text-xs text-blue-600 hover:underline">Mark all as read</button>
                                        </div>
                                        <div className="max-h-60 overflow-y-auto">
                                            {notifications.length > 0 ? (
                                                notifications.slice(0, 3).map((notification) => (
                                                    <div key={notification.id} className="block px-4 py-3 hover:bg-gray-50 transition duration-150 ease-in-out">
                                                        <div className="flex">
                                                            <div className="flex-shrink-0">
                                                                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                                                    <BellIcon className="h-5 w-5" />
                                                                </div>
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                                                                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="px-4 py-3 text-sm text-gray-500 text-center">
                                                    No notifications
                                                </div>
                                            )}
                                        </div>
                                        <div className="px-4 py-2 border-t border-gray-100 text-center">
                                            <button className="text-xs text-blue-600 hover:underline">View all notifications</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* User Menu */}
                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center space-x-2 relative"
                            >
                                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                                    {user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'JD'}
                                </div>
                                <span className="hidden md:block text-sm font-medium text-gray-700">
                                    {user?.name || 'John Doe'}
                                </span>
                                <ChevronDownIcon className={`hidden md:block h-4 w-4 text-gray-600 transition-transform ${
                                    showUserMenu ? 'rotate-180' : ''
                                }`} />
                            </button>
                            
                            {/* User Dropdown Menu */}
                            {showUserMenu && (
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                    <div className="py-1">
                                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Your Profile
                                        </button>
                                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Settings
                                        </button>
                                        <div className="border-t border-gray-100"></div>
                                        <button 
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Sign out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
