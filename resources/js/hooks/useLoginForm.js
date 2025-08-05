import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { validateFields, validateSingleField } from '@utils/validation';

export const useLoginForm = () => {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [clientErrors, setClientErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Clear previous client errors
        setClientErrors({});
        
        // Validate fields client-side first using Yup
        const { isValid, errors: validationErrors } = await validateFields(data);
        if (!isValid) {
            setClientErrors(validationErrors);
            return;
        }
        
        post('/login', {
            preserveScroll: true,
            onError: (errors) => {
                console.log('Server validation errors:', errors);
            }
        });
    };

    const handleEmailChange = async (e) => {
        const value = e.target.value;
        setData('email', value);
        
        // Clear server error when user starts typing
        if (errors.email) {
            clearErrors('email');
        }
        
        // Real-time validation with debounce effect
        if (value.trim()) {
            const { error } = await validateSingleField('email', value);
            setClientErrors(prev => ({ ...prev, email: error }));
        } else {
            setClientErrors(prev => ({ ...prev, email: null }));
        }
    };

    const handlePasswordChange = async (e) => {
        const value = e.target.value;
        setData('password', value);
        
        // Clear server error when user starts typing
        if (errors.password) {
            clearErrors('password');
        }
        
        // Real-time validation
        if (value.trim()) {
            const { error } = await validateSingleField('password', value);
            setClientErrors(prev => ({ ...prev, password: error }));
        } else {
            setClientErrors(prev => ({ ...prev, password: null }));
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberChange = (e) => {
        setData('remember', e.target.checked);
    };

    // Use client errors if they exist, otherwise use server errors
    const displayErrors = {
        email: clientErrors.email || errors.email,
        password: clientErrors.password || errors.password,
    };

    return {
        // Form data
        data,
        processing,
        showPassword,
        displayErrors,
        
        // Form handlers
        handleSubmit,
        handleEmailChange,
        handlePasswordChange,
        handleRememberChange,
        togglePasswordVisibility,
    };
};
