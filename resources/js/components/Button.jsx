import React from 'react';

export default function Button({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    disabled = false,
    onClick,
    type = 'button',
    ...props 
}) {
    const baseClasses = 'rounded-md font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
        primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-red-500',
        ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-red-500'
    };
    
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`;
    
    return (
        <button
            type={type}
            className={classes}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
