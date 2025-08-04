import React from 'react';

export default function Card({ 
    children, 
    className = '', 
    hover = true,
    padding = 'p-6',
    ...props 
}) {
    const baseClasses = 'overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200 dark:bg-zinc-900 dark:ring-zinc-800';
    const hoverClasses = hover ? 'transition duration-300 hover:shadow-xl' : '';
    
    const classes = `${baseClasses} ${hoverClasses} ${padding} ${className}`;
    
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
}
