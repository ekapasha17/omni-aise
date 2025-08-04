/**
 * Example component demonstrating absolute import patterns
 */

// Import from utils using absolute path
import { api, apiUtils } from '@utils/api';
import { cn } from '@utils/classNames';

// Import from hooks using absolute path
import { useDarkMode } from '@hooks/useDarkMode';

// Import components using absolute path
import Button from '@components/Button';
import Card from '@components/Card';

// Import from features using absolute path
import TechStackCard from '@features/welcome/components/TechStackCard';

// React imports (these stay the same)
import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';

export default function ExampleComponent() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                // Using absolute import for api
                const data = await api.get('/users');
                setUsers(data);
            } catch (err) {
                if (apiUtils.isValidationError(err)) {
                    setError('Validation error occurred');
                } else if (apiUtils.isNetworkError(err)) {
                    setError('Network error occurred');
                } else {
                    setError('An error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const buttonClasses = cn(
        'px-4 py-2 rounded font-medium transition-colors',
        {
            'bg-blue-500 text-white hover:bg-blue-600': !isDarkMode,
            'bg-blue-400 text-gray-900 hover:bg-blue-300': isDarkMode
        }
    );

    return (
        <>
            <Head title="Example Component" />
            <div className="p-6">
                <Card>
                    <h1 className="text-2xl font-bold mb-4">Absolute Import Example</h1>
                    
                    <TechStackCard 
                        title="Absolute Imports" 
                        description="Clean, maintainable import paths" 
                    />

                    <div className="mt-4">
                        <Button 
                            onClick={toggleDarkMode}
                            className={buttonClasses}
                        >
                            Toggle Dark Mode
                        </Button>
                    </div>

                    {loading && <p>Loading users...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    
                    <ul className="mt-4">
                        {users.map(user => (
                            <li key={user.id} className="py-2">
                                {user.name}
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </>
    );
}
