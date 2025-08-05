import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout({ 
    activeTab, 
    setActiveTab, 
    sidebarOpen, 
    setSidebarOpen, 
    user, 
    notifications, 
    children 
}) {
    return (
        <div className="relative">
            {/* Overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                sidebarOpen={sidebarOpen}
            />

            {/* Header and Main Content */}
            <div className={`relative min-h-screen transition-all duration-300 ${
                sidebarOpen ? 'ml-64' : 'ml-0'
            }`}>
                {/* Header */}
                <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    user={user}
                    notifications={notifications}
                />

                {/* Main Content */}
                <main className="bg-gray-100 p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
