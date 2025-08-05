import * as Yup from 'yup';

// Login validation schema
export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email field is required'),
    password: Yup.string()
        .required('Password field is required')
        .min(6, 'Password must be at least 6 characters long'),
});

// Validation helper functions
export const validateFields = async (data) => {
    try {
        await loginSchema.validate(data, { abortEarly: false });
        return { isValid: true, errors: {} };
    } catch (error) {
        const errors = {};
        error.inner.forEach((err) => {
            errors[err.path] = err.message;
        });
        return { isValid: false, errors };
    }
};

export const validateSingleField = async (fieldName, value) => {
    try {
        await loginSchema.validateAt(fieldName, { [fieldName]: value });
        return { isValid: true, error: null };
    } catch (error) {
        return { isValid: false, error: error.message };
    }
};
