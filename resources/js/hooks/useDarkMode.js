import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for detecting dark mode preference
 * Optimized to avoid repeated localStorage reads using useRef for caching
 * @returns {boolean} Whether dark mode is preferred
 */
export function useDarkMode() {
    const userPreferenceRef = useRef(null);
    
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage only once and cache the result
        if (userPreferenceRef.current === null) {
            const saved = localStorage.getItem('darkMode');
            userPreferenceRef.current = saved !== null ? JSON.parse(saved) : undefined;
        }
        
        // Use cached preference if available, otherwise fall back to system preference
        return userPreferenceRef.current !== undefined 
            ? userPreferenceRef.current 
            : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        // Update cached preference and save to localStorage whenever it changes
        userPreferenceRef.current = isDarkMode;
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        
        // Update document class
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    useEffect(() => {
        // Listen for system preference changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            // Only update if user hasn't set a preference
            const saved = localStorage.getItem('darkMode');
            if (saved === null) {
                setIsDarkMode(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    return { isDarkMode, toggleDarkMode };
}
