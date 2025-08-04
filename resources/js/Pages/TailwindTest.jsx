import React from 'react';
import { Head } from '@inertiajs/react';

export default function TailwindTest() {
    return (
        <>
            <Head title="Tailwind Test" />
            <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        🎨 Tailwind CSS Test
                    </h1>
                    <p className="text-gray-600 mb-6">
                        If you can see this styled properly, Tailwind CSS is working!
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-green-600">Colors working</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-blue-600">Spacing working</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-purple-600">Flexbox working</span>
                        </div>
                    </div>
                    <button className="mt-6 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105">
                        Tailwind is Working! 🚀
                    </button>
                </div>
            </div>
        </>
    );
}
