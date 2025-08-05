import React from 'react';

export default function StorageContent({ activeSubTab }) {
    const renderStorageOverview = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Storage Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500">Total Storage</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">22 TB</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500">Used Storage</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">17.2 TB</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500">Available Storage</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">4.8 TB</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-sm font-medium text-gray-500">Storage Usage</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">78.4%</p>
                </div>
            </div>
        </div>
    );

    const renderFileManager = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">File Manager</h2>
            <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600">File management interface will be implemented here.</p>
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">Features Coming Soon</h3>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        <li>• File browser with folder navigation</li>
                        <li>• File upload and download</li>
                        <li>• File sharing and permissions</li>
                        <li>• File search and filtering</li>
                        <li>• Bulk file operations</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            {activeSubTab === 'file_manager' ? renderFileManager() : renderStorageOverview()}
        </div>
    );
}
