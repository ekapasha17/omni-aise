import { Head } from '@inertiajs/react';
import { useLoginForm } from '@hooks/useLoginForm';
import AuthLayout from '@components/Auth/AuthLayout';
import SocialLoginButtons from '@components/Auth/SocialLoginButtons';
import LoginForm from '@components/Auth/LoginForm';

export default function Login() {
    const loginForm = useLoginForm();

    return (
        <>
            <Head title="Sign In - NovaSyncer" />
            
            <AuthLayout>
                {/* Logo */}
                <img 
                    src="https://flowbite.com/images/logo.svg" 
                    alt="NovaSyncer Logo" 
                    className="w-32 mb-8 mx-auto"
                />

                <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                    Log in to your Account
                </h2>
                <p className="text-sm text-center text-gray-600 mb-8">
                    Welcome back! Select method to log in:
                </p>

                {/* Social Media Login */}
                <SocialLoginButtons />

                {/* Or Continue with Email */}
                <div className="my-6 text-center">
                    <span className="text-sm text-gray-600">or continue with email</span>
                </div>

                {/* Email & Password Input Form */}
                <LoginForm {...loginForm} />

                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <span className="text-blue-600">
                            Contact your administrator
                        </span>
                    </p>
                </div>
            </AuthLayout>
        </>
    );
}