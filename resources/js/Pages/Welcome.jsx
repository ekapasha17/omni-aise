import { Head, useForm } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post('/logout');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                    <div className="text-center">
                        <img 
                            src="https://flowbite.com/images/logo.svg" 
                            alt="NovaSyncer Logo" 
                            className="w-24 mx-auto mb-6"
                        />
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Welcome to NovaSyncer
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Hello, {auth.user.name}! You are successfully logged in.
                        </p>
                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
