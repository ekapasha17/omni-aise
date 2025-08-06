import React from 'react';

export default function UserFilters({ 
    searchTerm, 
    setSearchTerm, 
    filters, 
    setFilters,
    selectedUsers,
    bulkActionDropdown,
    setBulkActionDropdown,
    handleBulkAction,
    totalUsers
}) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Search Bar */}
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3">
                    {/* Role Filter */}
                    <select
                        value={filters.role}
                        onChange={(e) => setFilters({ ...filters, role: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="all">All Roles</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="user">User</option>
                        <option value="viewer">Viewer</option>
                    </select>

                    {/* Status Filter */}
                    <select
                        value={filters.status}
                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="pending">Pending</option>
                    </select>

                    {/* Date Range Filter */}
                    <select
                        value={filters.dateRange}
                        onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="all">All Time</option>
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="year">This Year</option>
                    </select>

                    {/* Bulk Actions Dropdown */}
                    {selectedUsers.size > 0 && (
                        <div className="relative">
                            <button
                                onClick={() => setBulkActionDropdown(!bulkActionDropdown)}
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Actions ({selectedUsers.size})
                                <svg className="ml-2 -mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {bulkActionDropdown && (
                                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                    <div className="py-1">
                                        <button
                                            onClick={() => handleBulkAction('activate')}
                                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                                        >
                                            Activate Users
                                        </button>
                                        <button
                                            onClick={() => handleBulkAction('deactivate')}
                                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                                        >
                                            Deactivate Users
                                        </button>
                                        <button
                                            onClick={() => handleBulkAction('delete')}
                                            className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left"
                                        >
                                            Delete Users
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
                Showing {totalUsers} {totalUsers === 1 ? 'user' : 'users'}
                {selectedUsers.size > 0 && (
                    <span className="ml-2 text-blue-600">
                        ({selectedUsers.size} selected)
                    </span>
                )}
            </div>
        </div>
    );
}
