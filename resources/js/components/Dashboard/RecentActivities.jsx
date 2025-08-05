import React from 'react';
import { 
    UserPlusIcon, 
    CheckCircleIcon, 
    ExclamationTriangleIcon, 
    ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';

export default function RecentActivities() {
    const activities = [
        {
            id: 1,
            title: 'New user registered',
            description: 'Sarah Johnson created a new account',
            time: '2 minutes ago',
            icon: UserPlusIcon,
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600'
        },
        {
            id: 2,
            title: 'Payment received',
            description: '$499.00 payment from Enterprise Inc.',
            time: '45 minutes ago',
            icon: CheckCircleIcon,
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600'
        },
        {
            id: 3,
            title: 'Storage warning',
            description: 'Server #3 approaching storage limit (92%)',
            time: '1 hour ago',
            icon: ExclamationTriangleIcon,
            iconBg: 'bg-yellow-100',
            iconColor: 'text-yellow-600'
        },
        {
            id: 4,
            title: 'New support request',
            description: 'Alex Morgan opened ticket #45928',
            time: '3 hours ago',
            icon: ChatBubbleLeftRightIcon,
            iconBg: 'bg-purple-100',
            iconColor: 'text-purple-600'
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="border-b px-4 py-3 flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-700">Recent Activities</h3>
                <button className="text-sm text-blue-600 hover:text-blue-500 transition duration-200">
                    View All
                </button>
            </div>
            <div className="p-4 divide-y divide-gray-100">
                {activities.map((activity) => (
                    <div key={activity.id} className="py-3 first:pt-0 last:pb-0">
                        <div className="flex">
                            <div className={`flex-shrink-0 h-10 w-10 rounded-full ${activity.iconBg} flex items-center justify-center ${activity.iconColor}`}>
                                <activity.icon className="h-5 w-5" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                                <p className="text-xs text-gray-500">{activity.description}</p>
                                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
