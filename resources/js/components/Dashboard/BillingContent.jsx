import React from 'react';

export default function BillingContent() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Billing & Subscriptions</h2>
                <p className="text-gray-600">Billing management interface will be implemented here.</p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
                        <h3 className="text-lg font-semibold">Current Plan</h3>
                        <p className="text-2xl font-bold mt-2">Enterprise</p>
                        <p className="text-indigo-100 text-sm mt-1">$99/month</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg p-6 text-white">
                        <h3 className="text-lg font-semibold">Next Billing</h3>
                        <p className="text-2xl font-bold mt-2">Apr 15</p>
                        <p className="text-green-100 text-sm mt-1">2025</p>
                    </div>
                </div>
                
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">Coming Soon</h3>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        <li>• Invoice history and downloads</li>
                        <li>• Payment method management</li>
                        <li>• Subscription plan changes</li>
                        <li>• Usage and billing analytics</li>
                        <li>• Automated billing alerts</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
