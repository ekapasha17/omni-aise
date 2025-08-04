/**
 * Enhanced API utility for Laravel + Inertia.js + React
 * Uses Axios for better error handling and request/response interceptors
 */

import axios from 'axios';

/**
 * Create axios instance with Laravel-optimized configuration
 */
const apiClient = axios.create({
    baseURL: '/api',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

/**
 * Request interceptor - Add CSRF token and auth headers
 */
apiClient.interceptors.request.use(
    (config) => {
        // Add CSRF token for Laravel
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (csrfToken) {
            config.headers['X-CSRF-TOKEN'] = csrfToken;
        }

        // Add auth token if available (for API routes)
        const authToken = localStorage.getItem('auth_token');
        if (authToken) {
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * Response interceptor - Handle Laravel-specific responses and errors
 */
apiClient.interceptors.response.use(
    (response) => {
        // Return data directly for successful responses
        return response.data;
    },
    (error) => {
        // Handle different types of errors
        if (error.response) {
            const { status, data } = error.response;

            switch (status) {
                case 401:
                    // Unauthorized - redirect to login
                    console.warn('Unauthorized access - redirecting to login');
                    window.location.href = '/login';
                    break;

                case 403:
                    // Forbidden
                    throw {
                        type: 'forbidden',
                        message: 'Access denied',
                        errors: data.errors || {}
                    };

                case 422:
                    // Laravel validation errors
                    throw {
                        type: 'validation',
                        message: data.message || 'Validation failed',
                        errors: data.errors || {}
                    };

                case 429:
                    // Rate limiting
                    throw {
                        type: 'rate_limit',
                        message: 'Too many requests. Please try again later.',
                        errors: {}
                    };

                case 500:
                    // Server error
                    throw {
                        type: 'server_error',
                        message: 'Internal server error. Please try again.',
                        errors: {}
                    };

                default:
                    throw {
                        type: 'unknown',
                        message: data.message || 'An unexpected error occurred',
                        errors: data.errors || {}
                    };
            }
        } else if (error.request) {
            // Network error
            throw {
                type: 'network',
                message: 'Network error. Please check your connection.',
                errors: {}
            };
        } else {
            // Other error
            throw {
                type: 'unknown',
                message: error.message || 'An unexpected error occurred',
                errors: {}
            };
        }
    }
);

/**
 * API methods for use alongside Inertia.js
 * Use these for AJAX calls that don't require page navigation
 */
export const api = {
    /**
     * GET request
     */
    get: (url, params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        const fullUrl = queryString ? `${url}?${queryString}` : url;
        return apiClient.get(fullUrl);
    },

    /**
     * POST request
     */
    post: (url, data = {}) => apiClient.post(url, data),

    /**
     * PUT request
     */
    put: (url, data = {}) => apiClient.put(url, data),

    /**
     * PATCH request
     */
    patch: (url, data = {}) => apiClient.patch(url, data),

    /**
     * DELETE request
     */
    delete: (url) => apiClient.delete(url),

    /**
     * File upload with progress tracking
     */
    uploadFile: (url, file, onProgress = null) => {
        const formData = new FormData();
        formData.append('file', file);

        return apiClient.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                if (onProgress) {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    onProgress(percentCompleted);
                }
            }
        });
    },

    /**
     * Live search with debouncing support
     */
    search: (url, query, params = {}) => {
        return apiClient.get(url, {
            params: { q: query, ...params }
        });
    },

    /**
     * Upload multiple files
     */
    uploadMultipleFiles: (url, files, onProgress = null) => {
        const formData = new FormData();
        files.forEach((file, index) => {
            formData.append(`files[${index}]`, file);
        });

        return apiClient.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                if (onProgress) {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    onProgress(percentCompleted);
                }
            }
        });
    }
};

/**
 * Utility functions
 */
export const apiUtils = {
    /**
     * Check if error is a validation error
     */
    isValidationError: (error) => error?.type === 'validation',

    /**
     * Check if error is a network error
     */
    isNetworkError: (error) => error?.type === 'network',

    /**
     * Get validation errors for a specific field
     */
    getFieldErrors: (error, fieldName) => {
        if (!apiUtils.isValidationError(error)) return [];
        return error.errors[fieldName] || [];
    },

    /**
     * Get first validation error for a field
     */
    getFirstFieldError: (error, fieldName) => {
        const errors = apiUtils.getFieldErrors(error, fieldName);
        return errors.length > 0 ? errors[0] : null;
    }
};

/**
 * Export axios instance for advanced usage
 */
export { apiClient };

/**
 * Legacy exports for backward compatibility
 */
export const get = api.get;
export const post = api.post;
export const put = api.put;
export const del = api.delete;
