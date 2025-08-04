import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting dark mode preference
 * @returns {boolean} Whether dark mode is preferred
 */
export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage first
        const saved = localStorage.getItem('darkMode');
        if (saved !== null) {
            return JSON.parse(saved);
        }
        
        // Fall back to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        // Save to localStorage whenever it changes
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
