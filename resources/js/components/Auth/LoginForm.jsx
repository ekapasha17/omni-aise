export default function LoginForm({ 
    data, 
    processing, 
    showPassword, 
    displayErrors,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
    handleRememberChange,
    togglePasswordVisibility 
}) {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full" noValidate>
            {/* Email Field */}
            <div className="mb-4 w-2/3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleEmailChange}
                    className={`mt-1 block w-full px-3 py-2 border ${
                        displayErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                    } focus:outline-none focus:ring-2 rounded-md`}
                    placeholder="Enter your email"
                    autoComplete="email"
                />
                {displayErrors.email && (
                    <p className="mt-2 text-sm text-red-600 font-medium">{displayErrors.email}</p>
                )}
            </div>

            {/* Password Field */}
            <div className="mb-6 w-2/3">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handlePasswordChange}
                        className={`mt-1 block w-full px-4 py-2 pr-10 border ${
                            displayErrors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                        } focus:outline-none focus:ring-2 rounded-md`}
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    >
                        {showPassword ? (
                            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        ) : (
                            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            </svg>
                        )}
                    </button>
                </div>
                {displayErrors.password && (
                    <p className="mt-2 text-sm text-red-600 font-medium">{displayErrors.password}</p>
                )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mb-4 w-2/3">
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={data.remember}
                        onChange={handleRememberChange}
                        className="h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-600"
                    />
                    <label htmlFor="rememberMe" className="text-sm text-gray-600">
                        Remember me
                    </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                    Forgot password?
                </a>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={processing}
                className={`w-2/3 bg-blue-600 text-white px-4 py-2 focus:outline-none hover:bg-blue-700 transition duration-200 ${
                    processing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                {processing ? 'Logging In...' : 'Log In'}
            </button>
        </form>
    );
}
