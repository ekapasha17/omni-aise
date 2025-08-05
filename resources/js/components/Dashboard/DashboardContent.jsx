import React from 'react';
import StatsCards from './StatsCards';
import Charts from './Charts';
import RecentActivities from './RecentActivities';
import QuickTasks from './QuickTasks';

export default function DashboardContent() {
    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold">Welcome back, John!</h2>
                            <p className="mt-1 opacity-90">Here's what's happening with your cloud storage today.</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition duration-200">
                                View Reports
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Stats Cards */}
            <StatsCards />
            
            {/* Charts Row */}
            <Charts />
            
            {/* Recent Activities and Quick Tasks */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activities */}
                <div className="lg:col-span-2">
                    <RecentActivities />
                </div>
                
                {/* Quick Tasks */}
                <div>
                    <QuickTasks />
                </div>
            </div>
        </div>
    );
}
