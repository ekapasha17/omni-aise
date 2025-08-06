import React, { useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb';
import UserFilters from './UserFilters';
import UserTable from './UserTable';
import { sampleUsers } from '@/data/sampleUsers';

export default function UserManagementContent() {
    // State management
    const [users, setUsers] = useState(sampleUsers);
    const [filteredUsers, setFilteredUsers] = useState(sampleUsers);
    const [selectedUsers, setSelectedUsers] = useState(new Set());
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        role: 'all',
        status: 'all',
        dateRange: 'all'
    });
    const [bulkActionDropdown, setBulkActionDropdown] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    // Filter users based on search and filters
    useEffect(() => {
        let filtered = users;

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(user => 
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Role filter
        if (filters.role !== 'all') {
            filtered = filtered.filter(user => user.role.toLowerCase() === filters.role);
        }

        // Status filter
        if (filters.status !== 'all') {
            filtered = filtered.filter(user => user.status.toLowerCase() === filters.status);
        }

        // Date range filter (simplified for demo)
        if (filters.dateRange !== 'all') {
            // Implementation would depend on actual date filtering logic
        }

        setFilteredUsers(filtered);
        setCurrentPage(1); // Reset to first page when filters change
    }, [users, searchTerm, filters]);

    // Handle user selection
    const handleSelectUser = (userId) => {
        const newSelected = new Set(selectedUsers);
        if (newSelected.has(userId)) {
            newSelected.delete(userId);
        } else {
            newSelected.add(userId);
        }
        setSelectedUsers(newSelected);
    };

    // Handle select all - works with current page users
    const handleSelectAll = (currentPageUsers) => {
        const allCurrentPageSelected = currentPageUsers.every(user => selectedUsers.has(user.id));
        const newSelected = new Set(selectedUsers);
        
        if (allCurrentPageSelected) {
            // Unselect all users on current page
            currentPageUsers.forEach(user => newSelected.delete(user.id));
        } else {
            // Select all users on current page
            currentPageUsers.forEach(user => newSelected.add(user.id));
        }
        
        setSelectedUsers(newSelected);
    };

    // Handle bulk actions
    const handleBulkAction = (action) => {
        const selectedUserIds = Array.from(selectedUsers);
        switch (action) {
            case 'delete':
                if (confirm(`Are you sure you want to delete ${selectedUserIds.length} users?`)) {
                    setUsers(users.filter(user => !selectedUsers.has(user.id)));
                    setSelectedUsers(new Set());
                }
                break;
            case 'activate':
                setUsers(users.map(user => 
                    selectedUsers.has(user.id) ? { ...user, status: 'Active' } : user
                ));
                break;
            case 'deactivate':
                setUsers(users.map(user => 
                    selectedUsers.has(user.id) ? { ...user, status: 'Inactive' } : user
                ));
                break;
        }
        setBulkActionDropdown(false);
    };

    // Handle export CSV
    const handleExportCSV = () => {
        const csvContent = [
            ['Name', 'Email', 'Role', 'Status', 'Last Login'],
            ...filteredUsers.map(user => [
                user.name,
                user.email,
                user.role,
                user.status,
                user.lastLogin
            ])
        ].map(row => row.join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'users.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    // Handle add user
    const handleAddUser = () => {
        // This would typically open a modal or navigate to an add user page
        alert('Add User functionality would be implemented here');
    };

    // Pagination logic
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    return (
        <div className="space-y-6">
            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                        <p className="text-sm text-gray-600 mt-1">
                            Manage user accounts, roles, and permissions
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={handleExportCSV}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Export CSV
                        </button>
                        <button
                            onClick={handleAddUser}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add User
                        </button>
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <UserFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filters={filters}
                setFilters={setFilters}
                selectedUsers={selectedUsers}
                bulkActionDropdown={bulkActionDropdown}
                setBulkActionDropdown={setBulkActionDropdown}
                handleBulkAction={handleBulkAction}
                totalUsers={filteredUsers.length}
            />

            {/* User Table */}
            <UserTable
                users={paginatedUsers}
                selectedUsers={selectedUsers}
                handleSelectUser={handleSelectUser}
                handleSelectAll={handleSelectAll}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                totalUsers={filteredUsers.length}
                startIndex={startIndex}
                itemsPerPage={itemsPerPage}
            />
        </div>
    );
}
