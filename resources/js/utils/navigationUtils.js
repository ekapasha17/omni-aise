/**
 * Navigation Utilities
 * Helper functions for navigation state management and route checking
 */

/**
 * Check if a route is currently active
 * @param {string} route - The route to check (can be '#' for placeholder routes)
 * @param {string} itemId - The item ID for fallback comparison
 * @param {string} currentUrl - The current URL from usePage()
 * @param {string} activeTab - The active tab state (used for placeholder routes)
 * @returns {boolean} - Whether the route is active
 */
export const isRouteActive = (route, itemId, currentUrl, activeTab) => {
    if (route === '#') {
        // For placeholder routes, use the activeTab prop
        return activeTab === itemId;
    }
    // For actual routes, check if current URL matches
    return currentUrl === route;
};

/**
 * Get the active tab ID based on current URL
 * @param {string} currentUrl - The current URL from usePage()
 * @returns {string} - The corresponding tab ID
 */
export const getActiveTabFromUrl = (currentUrl) => {
    const routeToTabMap = {
        '/dashboard': 'dashboard',
        '/user-management': 'users',
        '/analytics': 'analytics',
        '/storage': 'storage',
        '/billing': 'billing',
        '/settings': 'settings'
    };
    
    return routeToTabMap[currentUrl] || 'dashboard';
};

/**
 * Check if a submenu should be open based on current route
 * @param {string} currentUrl - The current URL from usePage()
 * @param {string} parentId - The parent menu item ID
 * @returns {boolean} - Whether the submenu should be open
 */
export const shouldSubmenuBeOpen = (currentUrl, parentId) => {
    if (parentId === 'storage') {
        return currentUrl.startsWith('/storage');
    }
    return false;
};
