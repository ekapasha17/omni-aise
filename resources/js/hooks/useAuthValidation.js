import { useEffect } from 'react';
import { DASHBOARD_CONFIG } from '@/config/dashboardConfig';

/**
 * Custom hook to handle authentication validation for protected pages
 * Provides comprehensive session checking and automatic redirect on auth failure
 * 
 * Features:
 * - Detects stale page navigation (back button usage)
 * - Periodic authentication validation via API
 * - Event-based validation (focus, visibility, popstate)
 * - Automatic cleanup of event listeners and intervals
 */
export const useAuthValidation = () => {
    useEffect(() => {
        const { AUTH_CHECK } = DASHBOARD_CONFIG;
        
        // Function to check if user is still authenticated
        const validateAuth = async () => {
            try {
                const response = await fetch(AUTH_CHECK.ENDPOINT, {
                    method: 'GET',
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Cache-Control': 'no-cache',
                    }
                });
                
                if (!response.ok || response.status === 401) {
                    // User is not authenticated, redirect to login
                    window.location.href = '/';
                }
            } catch (error) {
                // If there's an error (network, etc.), assume not authenticated
                console.error('Auth check failed:', error);
                window.location.href = '/';
            }
        };

        // Set up periodic auth validation (but not immediately)
        const authCheckInterval = setInterval(validateAuth, AUTH_CHECK.INTERVAL);

        // Check auth on page focus/visibility
        const handleFocus = () => validateAuth();
        const handleVisibilityChange = () => {
            if (!document.hidden) {
                validateAuth();
            }
        };

        // Detect back button navigation
        const handlePopState = () => {
            validateAuth();
        };

        // Add event listeners
        window.addEventListener('focus', handleFocus);
        window.addEventListener('popstate', handlePopState);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Cleanup
        return () => {
            clearInterval(authCheckInterval);
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('popstate', handlePopState);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);
};
