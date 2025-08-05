import React from 'react';

export default function SettingsContent() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
                <p className="text-gray-600">System settings and configuration options will be implemented here.</p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">General Settings</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Site configuration</li>
                            <li>• Time zone settings</li>
                            <li>• Language preferences</li>
                        </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Security Settings</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Two-factor authentication</li>
                            <li>• Password policies</li>
                            <li>• API key management</li>
                        </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Notification Settings</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Email notifications</li>
                            <li>• Push notifications</li>
                            <li>• Alert preferences</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
