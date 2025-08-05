/**
 * Dashboard Configuration
 * Centralized configuration for dashboard behavior and settings
 */

export const DASHBOARD_CONFIG = {
    // Authentication validation settings
    AUTH_CHECK: {
        INTERVAL: 10000, // Check every 10 seconds (reduced frequency)
        ENDPOINT: '/api/auth-check',
        STALE_NAVIGATION_THRESHOLD: 1000, // 1 second
    },

    // UI Settings
    UI: {
        DEFAULT_SIDEBAR_STATE: false, // Start with sidebar closed on mobile
        DEFAULT_ACTIVE_TAB: 'dashboard',
    },

    // Cache control settings
    CACHE_CONTROL: {
        HEADERS: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
        }
    }
};
