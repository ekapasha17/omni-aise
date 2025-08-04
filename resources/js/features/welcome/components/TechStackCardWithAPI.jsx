import { useState } from 'react';
import { api, apiUtils } from '@utils/api';

export default function TechStackCard({ title, description }) {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLearnMore = async () => {
        setLoading(true);
        setError(null);

        try {
            // Example API call - this would be a real endpoint in your Laravel app
            const techDetails = await api.get(`/tech-stack/${title.toLowerCase().replace(/\s+/g, '-')}`);
            setDetails(techDetails);
        } catch (err) {
            if (apiUtils.isNetworkError(err)) {
                setError('Network error. Please check your connection.');
            } else {
                setError('Unable to load additional details at this time.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-3 sm:pt-5 lg:pt-0">
            <h2 className="text-xl font-semibold text-black dark:text-white">
                {title}
            </h2>
            <p className="mt-4 text-sm/relaxed text-gray-600 dark:text-gray-300">
                {description}
            </p>
            
            {/* Example of API usage */}
            <div className="mt-4">
                <button
                    onClick={handleLearnMore}
                    disabled={loading}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <svg className="w-4 h-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Loading...
                        </>
                    ) : (
                        'Learn More'
                    )}
                </button>
            </div>

            {/* Error display */}
            {error && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-600">{error}</p>
                </div>
            )}

            {/* Details display */}
            {details && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Additional Information
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {details.additional_info || 'No additional information available.'}
                    </p>
                    {details.links && (
                        <div className="mt-2">
                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                                Useful Links:
                            </p>
                            <ul className="space-y-1">
                                {details.links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
