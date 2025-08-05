import React from 'react';
import { 
    UsersIcon, 
    CurrencyDollarIcon, 
    ClipboardDocumentListIcon, 
    ServerIcon,
    ArrowUpIcon,
    ArrowDownIcon
} from '@heroicons/react/24/outline';

export default function StatsCards() {
    const stats = [
        {
            id: 1,
            title: 'Total Users',
            value: '1,245',
            change: '+12.5%',
            changeType: 'increase',
            icon: UsersIcon,
            iconBg: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            id: 2,
            title: 'Total Revenue',
            value: '$42,345',
            change: '+8.2%',
            changeType: 'increase',
            icon: CurrencyDollarIcon,
            iconBg: 'bg-green-50',
            iconColor: 'text-green-500'
        },
        {
            id: 3,
            title: 'New Orders',
            value: '120',
            change: '-3.4%',
            changeType: 'decrease',
            icon: ClipboardDocumentListIcon,
            iconBg: 'bg-purple-50',
            iconColor: 'text-purple-500'
        },
        {
            id: 4,
            title: 'Storage Usage',
            value: '78.4%',
            subtitle: '17.2 TB / 22 TB',
            showProgress: true,
            progressValue: 78.4,
            icon: ServerIcon,
            iconBg: 'bg-yellow-50',
            iconColor: 'text-yellow-500'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
                <div 
                    key={stat.id} 
                    className="bg-white rounded-lg shadow p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                        <div className={`h-10 w-10 rounded-lg ${stat.iconBg} flex items-center justify-center`}>
                            <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            {stat.subtitle && (
                                <span className="text-xs text-gray-500">{stat.subtitle}</span>
                            )}
                        </div>
                        
                        {stat.change && (
                            <div className="flex items-center mt-1">
                                {stat.changeType === 'increase' ? (
                                    <ArrowUpIcon className="h-4 w-4 text-green-500" />
                                ) : (
                                    <ArrowDownIcon className="h-4 w-4 text-red-500" />
                                )}
                                <span className={`text-xs ml-1 ${
                                    stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                                }`}>
                                    {stat.change} from last month
                                </span>
                            </div>
                        )}
                        
                        {stat.showProgress && (
                            <div className="mt-2">
                                <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-blue-600 rounded-full transition-all duration-300"
                                        style={{ width: `${stat.progressValue}%` }}
                                    ></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
