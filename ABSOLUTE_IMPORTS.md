# Absolute Imports Configuration

## 🎯 **Overview**

Your Laravel + Inertia.js + React project now supports absolute imports, making your code cleaner and more maintainable.

## ✅ **Before vs After**

### **❌ Before (Relative Imports):**
```javascript
// Messy relative paths
import { api } from '../../../utils/api';
import Card from '../../components/Card';
import TechStackCard from '../features/welcome/components/TechStackCard';
import { useDarkMode } from '../../../../hooks/useDarkMode';
```

### **✅ After (Absolute Imports):**
```javascript
// Clean, absolute paths
import { api } from '@utils/api';
import Card from '@components/Card';
import TechStackCard from '@features/welcome/components/TechStackCard';
import { useDarkMode } from '@hooks/useDarkMode';
```

## 📁 **Available Import Aliases**

| Alias | Path | Usage |
|-------|------|-------|
| `@` | `resources/js` | Base directory |
| `@components` | `resources/js/components` | Reusable components |
| `@features` | `resources/js/features` | Feature-specific components |
| `@utils` | `resources/js/utils` | Utility functions |
| `@hooks` | `resources/js/hooks` | Custom React hooks |
| `@pages` | `resources/js/Pages` | Inertia.js pages |
| `@assets` | `resources/js/assets` | Images, icons, etc. |

## 🛠️ **Configuration Files**

### **1. Vite Configuration (`vite.config.js`)**
```javascript
resolve: {
    alias: {
        '@': path.resolve(__dirname, 'resources/js'),
        '@components': path.resolve(__dirname, 'resources/js/components'),
        '@features': path.resolve(__dirname, 'resources/js/features'),
        '@utils': path.resolve(__dirname, 'resources/js/utils'),
        '@hooks': path.resolve(__dirname, 'resources/js/hooks'),
        '@pages': path.resolve(__dirname, 'resources/js/Pages'),
        '@assets': path.resolve(__dirname, 'resources/js/assets'),
    }
}
```

### **2. JSConfig (`jsconfig.json`)**
```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["resources/js/*"],
            "@components/*": ["resources/js/components/*"],
            "@features/*": ["resources/js/features/*"],
            "@utils/*": ["resources/js/utils/*"],
            "@hooks/*": ["resources/js/hooks/*"],
            "@pages/*": ["resources/js/Pages/*"],
            "@assets/*": ["resources/js/assets/*"]
        }
    }
}
```

## 📝 **Usage Examples**

### **1. API Utilities**
```javascript
// Import API utilities
import { api, apiUtils } from '@utils/api';
import { cn } from '@utils/classNames';

// Usage
const users = await api.get('/users');
const classes = cn('btn', { 'btn-primary': isPrimary });
```

### **2. Components**
```javascript
// Import reusable components
import Button from '@components/Button';
import Card from '@components/Card';
import Navigation from '@components/Navigation';

// Import feature-specific components
import TechStackCard from '@features/welcome/components/TechStackCard';
import LoginForm from '@features/auth/components/LoginForm';
```

### **3. Hooks**
```javascript
// Import custom hooks
import { useDarkMode } from '@hooks/useDarkMode';
import { useApi } from '@hooks/useApi';
import { useAuth } from '@hooks/useAuth';
```

### **4. Assets**
```javascript
// Import images and icons
import reactLogo from '@assets/images/react.png';
import chevronIcon from '@assets/icons/chevron.svg';
```

## 🎯 **Real-World Examples**

### **Welcome Page with Absolute Imports:**
```javascript
import { Head } from '@inertiajs/react';
import Card from '@components/Card';
import Navigation from '@components/Navigation';
import TechStackCard from '@features/welcome/components/TechStackCard';
import LaravelLogo from '@features/welcome/components/LaravelLogo';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // Component logic...
}
```

### **API-Connected Component:**
```javascript
import { useState, useEffect } from 'react';
import { api, apiUtils } from '@utils/api';
import { cn } from '@utils/classNames';
import Button from '@components/Button';
import LoadingSpinner from '@components/LoadingSpinner';

export default function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await api.get('/users');
                setUsers(data);
            } catch (error) {
                if (apiUtils.isValidationError(error)) {
                    // Handle validation error
                }
            } finally {
                setLoading(false);
            }
        };
        
        fetchUsers();
    }, []);
    
    // Rest of component...
}
```

### **Feature Component with Multiple Imports:**
```javascript
import { useState } from 'react';
import { api } from '@utils/api';
import { cn } from '@utils/classNames';
import { useDarkMode } from '@hooks/useDarkMode';
import Card from '@components/Card';
import Button from '@components/Button';
import Input from '@components/Input';

export default function UserProfile({ user }) {
    // Component logic using all imports...
}
```

## 💡 **Benefits**

### **1. Cleaner Code**
- No more counting `../../../` levels
- Imports are self-documenting
- Easier to read and understand

### **2. Better Refactoring**
- Moving files doesn't break imports
- IDE auto-completion works better
- Consistent import paths across the project

### **3. Team Productivity**
- New developers understand structure immediately
- Less time debugging import paths
- Standardized across the entire project

## 🚀 **IDE Support**

### **VS Code Features:**
- ✅ **Auto-completion** for import paths
- ✅ **Go to definition** works perfectly
- ✅ **Automatic import suggestions**
- ✅ **Path intellisense**

### **WebStorm/PhpStorm Features:**
- ✅ **Smart import resolution**
- ✅ **Refactoring support**
- ✅ **Code navigation**

## 📋 **Migration Guide**

### **Step 1: Update Existing Files**
Replace relative imports with absolute imports:

```javascript
// Old
import { api } from '../../../utils/api';

// New  
import { api } from '@utils/api';
```

### **Step 2: Use Absolute Imports for New Files**
Always use absolute imports for new components:

```javascript
// ✅ Good
import Card from '@components/Card';
import { api } from '@utils/api';

// ❌ Avoid
import Card from '../../../components/Card';
import { api } from '../../../../utils/api';
```

## 🔧 **Troubleshooting**

### **Issue: Imports not resolving**
1. Restart your development server: `npm run dev`
2. Check `vite.config.js` has the alias configuration
3. Ensure `jsconfig.json` exists in project root

### **Issue: IDE not recognizing paths**
1. Restart your IDE
2. Check `jsconfig.json` is properly configured
3. Install VS Code ES6 extensions

Your Laravel + React project now has a professional, maintainable import system! 🎯
