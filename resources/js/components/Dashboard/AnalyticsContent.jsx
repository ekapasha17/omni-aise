import React from 'react';

export default function AnalyticsContent() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h2>
                <p className="text-gray-600">Advanced analytics and reporting features will be implemented here.</p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                        <h3 className="text-lg font-semibold">Page Views</h3>
                        <p className="text-2xl font-bold mt-2">125,847</p>
                        <p className="text-blue-100 text-sm mt-1">+12.5% from last month</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                        <h3 className="text-lg font-semibold">Conversion Rate</h3>
                        <p className="text-2xl font-bold mt-2">3.24%</p>
                        <p className="text-green-100 text-sm mt-1">+0.8% from last month</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                        <h3 className="text-lg font-semibold">Bounce Rate</h3>
                        <p className="text-2xl font-bold mt-2">42.1%</p>
                        <p className="text-purple-100 text-sm mt-1">-5.2% from last month</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
