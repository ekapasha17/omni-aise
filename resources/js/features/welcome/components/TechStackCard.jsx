import React from 'react';

export default function TechStackCard({ title, description, icon }) {
    return (
        <div className="flex flex-col items-start gap-6 pt-3 sm:pt-5 lg:pt-0">
            {icon && (
                <div className="text-red-600 text-2xl mb-2">
                    {icon}
                </div>
            )}
            <div>
                <h2 className="text-xl font-semibold text-black dark:text-white">
                    {title}
                </h2>
                <p className="mt-4 text-sm/relaxed text-gray-600 dark:text-gray-300">
                    {description}
                </p>
            </div>
        </div>
    );
}
