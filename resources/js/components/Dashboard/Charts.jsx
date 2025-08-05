import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function Charts() {
    const salesChartRef = useRef(null);
    const userGrowthChartRef = useRef(null);
    const salesChartInstance = useRef(null);
    const userGrowthChartInstance = useRef(null);

    useEffect(() => {
        // Sales Chart
        if (salesChartRef.current) {
            // Destroy existing chart if it exists
            if (salesChartInstance.current) {
                salesChartInstance.current.destroy();
            }

            const salesCtx = salesChartRef.current.getContext('2d');
            salesChartInstance.current = new Chart(salesCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Revenue',
                            data: [12500, 14200, 13800, 15600, 16200, 17500, 18300, 19200, 20100, 21500, 22300, 24500],
                            borderColor: '#2563eb',
                            backgroundColor: 'rgba(37, 99, 235, 0.1)',
                            borderWidth: 2,
                            pointBackgroundColor: '#2563eb',
                            tension: 0.3,
                            fill: true
                        },
                        {
                            label: 'Orders',
                            data: [150, 172, 165, 188, 195, 210, 220, 232, 242, 258, 267, 294],
                            borderColor: '#10b981',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            borderWidth: 2,
                            pointBackgroundColor: '#10b981',
                            tension: 0.3,
                            fill: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                usePointStyle: true,
                                boxWidth: 6
                            }
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                                drawBorder: false
                            }
                        }
                    }
                }
            });
        }

        // User Growth Chart
        if (userGrowthChartRef.current) {
            // Destroy existing chart if it exists
            if (userGrowthChartInstance.current) {
                userGrowthChartInstance.current.destroy();
            }

            const userCtx = userGrowthChartRef.current.getContext('2d');
            userGrowthChartInstance.current = new Chart(userCtx, {
                type: 'bar',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [
                        {
                            label: 'New Users',
                            data: [120, 145, 135, 178],
                            backgroundColor: '#2563eb',
                            borderRadius: 4,
                            barThickness: 12
                        },
                        {
                            label: 'Active Users',
                            data: [420, 456, 479, 510],
                            backgroundColor: '#60a5fa',
                            borderRadius: 4,
                            barThickness: 12
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                usePointStyle: true,
                                boxWidth: 6
                            }
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false,
                                drawBorder: false
                            }
                        }
                    }
                }
            });
        }

        // Cleanup function
        return () => {
            if (salesChartInstance.current) {
                salesChartInstance.current.destroy();
            }
            if (userGrowthChartInstance.current) {
                userGrowthChartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales & Revenue Chart */}
            <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-700">Sales & Revenue</h3>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded-md">
                            Monthly
                        </button>
                        <button className="px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded-md">
                            Quarterly
                        </button>
                        <button className="px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded-md">
                            Yearly
                        </button>
                    </div>
                </div>
                <div className="h-64">
                    <canvas ref={salesChartRef}></canvas>
                </div>
            </div>
            
            {/* User Growth Chart */}
            <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-700">User Growth</h3>
                    <select className="text-sm border-gray-200 rounded-md focus:border-blue-600 focus:ring focus:ring-blue-100 focus:ring-opacity-50">
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                        <option>Last 6 months</option>
                        <option>Last year</option>
                    </select>
                </div>
                <div className="h-64">
                    <canvas ref={userGrowthChartRef}></canvas>
                </div>
            </div>
        </div>
    );
}
