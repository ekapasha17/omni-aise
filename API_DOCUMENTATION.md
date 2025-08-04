# API Utility Documentation

## 📋 **Overview**

The updated `api.js` provides a robust, Laravel-optimized HTTP client for your React components. It's built on top of Axios and includes automatic CSRF handling, error management, and Laravel-specific features.

## 🚀 **When to Use `api.js`**

Since you're using **Inertia.js**, you have two options for HTTP requests:

### **Use Inertia.js for:**
- Page navigation
- Form submissions that reload the page
- Standard CRUD operations with page transitions

### **Use `api.js` for:**
- File uploads with progress tracking
- Real-time features (live search, autocomplete)
- Background operations (notifications, sync)
- AJAX calls that don't require page refresh
- Third-party API integrations

## 📖 **Basic Usage**

### **Import the API utility:**
```javascript
import { api } from '../utils/api';
```

### **Basic HTTP Methods:**
```javascript
// GET request
const users = await api.get('/users');

// POST request  
const newUser = await api.post('/users', { name: 'John', email: 'john@example.com' });

// PUT request
const updatedUser = await api.put('/users/1', { name: 'John Updated' });

// DELETE request
await api.delete('/users/1');
```

## 🔧 **Advanced Features**

### **1. File Upload with Progress**
```javascript
import { api } from '../utils/api';

function FileUpload() {
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleUpload = async (file) => {
        try {
            const result = await api.uploadFile('/upload', file, (progress) => {
                setUploadProgress(progress);
            });
            console.log('Upload successful:', result);
        } catch (error) {
            console.error('Upload failed:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={(e) => handleUpload(e.target.files[0])} />
            {uploadProgress > 0 && <div>Progress: {uploadProgress}%</div>}
        </div>
    );
}
```

### **2. Live Search**
```javascript
import { api } from '../utils/api';
import { useState, useEffect } from 'react';

function SearchComponent() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query.length > 2) {
            const searchUsers = async () => {
                try {
                    const data = await api.search('/search/users', query);
                    setResults(data);
                } catch (error) {
                    console.error('Search failed:', error);
                }
            };

            const debounceTimer = setTimeout(searchUsers, 300);
            return () => clearTimeout(debounceTimer);
        }
    }, [query]);

    return (
        <div>
            <input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search users..."
            />
            <ul>
                {results.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
```

### **3. Error Handling**
```javascript
import { api, apiUtils } from '../utils/api';

function UserForm() {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (formData) => {
        setLoading(true);
        setErrors({});

        try {
            await api.post('/users', formData);
            // Success - redirect or show success message
        } catch (error) {
            if (apiUtils.isValidationError(error)) {
                setErrors(error.errors);
            } else if (apiUtils.isNetworkError(error)) {
                alert('Network error. Please check your connection.');
            } else {
                alert(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" />
            {apiUtils.getFieldErrors(errors, 'name').map((error, index) => (
                <div key={index} className="text-red-500">{error}</div>
            ))}
            
            <button type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
            </button>
        </form>
    );
}
```

## 🛡️ **Error Types**

The API utility provides structured error handling:

### **Validation Errors (422)**
```javascript
{
    type: 'validation',
    message: 'Validation failed',
    errors: {
        email: ['The email field is required.'],
        name: ['The name must be at least 3 characters.']
    }
}
```

### **Authentication Errors (401)**
- Automatically redirects to `/login`

### **Authorization Errors (403)**
```javascript
{
    type: 'forbidden',
    message: 'Access denied',
    errors: {}
}
```

### **Network Errors**
```javascript
{
    type: 'network',
    message: 'Network error. Please check your connection.',
    errors: {}
}
```

## 🔧 **Laravel Integration**

### **CSRF Protection**
- Automatically includes CSRF token from `<meta name="csrf-token">`
- No manual token handling required

### **Authentication**
- Supports Bearer tokens for API authentication
- Automatically includes `X-Requested-With: XMLHttpRequest` header

### **Validation Errors**
- Properly formats Laravel validation responses
- Easy access to field-specific errors

## 📝 **Usage Examples in Your Project**

### **In a Feature Component:**
```javascript
// features/users/components/UserProfile.jsx
import { api, apiUtils } from '../../../utils/api';

export default function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await api.get(`/users/${userId}`);
                setUser(userData);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>User not found</div>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
}
```

### **In a Custom Hook:**
```javascript
// hooks/useUsers.js
import { useState, useEffect } from 'react';
import { api } from '../utils/api';

export function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await api.get('/users');
                setUsers(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const createUser = async (userData) => {
        try {
            const newUser = await api.post('/users', userData);
            setUsers(prev => [...prev, newUser]);
            return newUser;
        } catch (error) {
            throw error;
        }
    };

    return { users, loading, error, createUser };
}
```

## 🎯 **Best Practices**

1. **Use with Inertia.js**: Don't replace Inertia.js - use alongside it
2. **Error Handling**: Always handle errors appropriately
3. **Loading States**: Show loading indicators for better UX
4. **Debouncing**: Use debouncing for search functionality
5. **Cleanup**: Clean up pending requests in `useEffect` cleanup

## 🔄 **Migration from Old API**

The new API maintains backward compatibility:

```javascript
// Old way (still works)
import { get, post } from '../utils/api';

// New way (recommended)
import { api } from '../utils/api';
const data = await api.get('/users');
```

Your Laravel + Inertia.js + React project now has a production-ready API utility! 🚀
