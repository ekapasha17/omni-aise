# Laravel 11 + Inertia.js + React - Complete Setup Guide

This document contains **every exact command and fix** applied during our complete setup journey of Laravel 11 with Inertia.js, React, Tailwind CSS, and MySQL database.

## 🎯 What You'll Get
- ✅ **Laravel 11** with modern architecture
- ✅ **Inertia.js** for seamless React integration  
- ✅ **React** with beautiful, styled components
- ✅ **Tailwind CSS** fully configured and working
- ✅ **Vite** for lightning-fast development
- ✅ **MySQL database** with migrations
- ✅ **Production-ready** build system

## Prerequisites
- PHP 8.2+ with MySQL extension
- Composer
- Node.js & npm
- MySQL server (we'll use port 3307)

## Step 1: Install Laravel 11

```bash
# Navigate to your projects directory
cd c:\Projects

# Create Laravel 11 project
composer create-project laravel/laravel laravel-aise "^11.0"
cd laravel-aise
```

## Step 2: Install Inertia.js Server-side

```bash
# Install Inertia Laravel adapter
composer require inertiajs/inertia-laravel
```

**Important**: The `php artisan inertia:middleware` command may not be available, so we'll create the middleware manually.

### Update bootstrap/app.php to register middleware:

```php
<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
```

### Create HandleInertiaRequests middleware manually:

**File: `app/Http/Middleware/HandleInertiaRequests.php`**

```php
<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
        ];
    }
}
```

## Step 3: Install Client-side Dependencies

```bash
# Install Inertia React adapter and React
npm install @inertiajs/react react react-dom

# Install Vite React plugin
npm install --save-dev @vitejs/plugin-react
```

## Step 4: Update vite.config.js

**File: `vite.config.js`**

```javascript
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
```

## Step 5: Create React Entry Point & Import CSS

**Important**: We need to import Tailwind CSS in our React entry point for styling to work.

**File: `resources/js/app.jsx`**

```jsx
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import '../css/app.css'; // Import Tailwind CSS

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
```

## Step 6: Update Tailwind Config for JSX Files

**Important**: Tailwind needs to watch `.jsx` files to apply styles properly.

**File: `tailwind.config.js`**

```javascript
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx', // Added this line for React support
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
```

## Step 7: Create Beautiful Welcome React Component

**File: `resources/js/Pages/Welcome.jsx`**

```jsx
import { Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <h1 className="text-3xl font-bold text-red-600">Laravel</h1>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth?.user ? (
                                    <a
                                        href="/dashboard"
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </a>
                                ) : (
                                    <>
                                        <a
                                            href="/login"
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </a>
                                        <a
                                            href="/register"
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </a>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <div className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:shadow-xl dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laravel + Inertia.js + React
                                        </h2>
                                        <p className="mt-4 text-sm/relaxed">
                                            You have successfully set up Laravel 11 with Inertia.js and React! 
                                            This is a modern single-page application powered by Laravel's backend 
                                            and React's frontend capabilities through Inertia.js.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:shadow-xl dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Inertia.js
                                        </h2>
                                        <p className="mt-4 text-sm/relaxed">
                                            Inertia.js lets you quickly build modern single-page React, Vue and 
                                            Svelte apps using classic server-side routing and controllers. 
                                            Perfect for Laravel developers who want to use React!
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:shadow-xl dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            React & Vite
                                        </h2>
                                        <p className="mt-4 text-sm/relaxed">
                                            Your frontend is powered by React with Vite for lightning-fast 
                                            development and hot module replacement. Build beautiful, interactive 
                                            user interfaces with the power of React components.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:shadow-xl dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Tailwind CSS
                                        </h2>
                                        <p className="mt-4 text-sm/relaxed">
                                            This setup includes Tailwind CSS for rapid UI development. 
                                            Create beautiful, responsive designs with utility-first CSS 
                                            classes that integrate perfectly with your React components.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
```

## Step 8: Update Web Routes

**File: `routes/web.php`**

```php
<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => \Illuminate\Foundation\Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
```

## Step 9: Create App Layout (Remove @routes to prevent white line)

**Important**: We remove the `@routes` directive to prevent an unwanted white line at the top of the page.

**File: `resources/views/app.blade.php`**

```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
```

## Step 10: Database Setup (MySQL on Port 3307)

### Configure Database Connection

**Update `.env` file:**

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3307
DB_DATABASE=laravel_aise
DB_USERNAME=root
DB_PASSWORD=

# Enable database-backed features
SESSION_DRIVER=database
CACHE_STORE=database
QUEUE_CONNECTION=database
```

### Create Database and Run Migrations

```bash
# Create the database
mysql -u root -P 3307 -h 127.0.0.1 -e "CREATE DATABASE IF NOT EXISTS laravel_aise;"

# Clear Laravel config cache
php artisan config:clear

# Run migrations to create tables
php artisan migrate
```

## Step 11: Build Assets and Test

```bash
# Install all dependencies
npm install

# Build assets for development
npm run dev

# In another terminal window, start Laravel server
php artisan serve
```

## 🎉 Success! Access Your Application

Your Laravel + Inertia.js + React application is now fully functional at:
- **Development Server**: http://127.0.0.1:8000

## ✅ What's Fully Configured & Working

✅ **Laravel 11** framework with modern architecture  
✅ **Inertia.js** server-side adapter with custom middleware  
✅ **React** with Inertia.js client adapter  
✅ **Vite** for fast development and building  
✅ **Tailwind CSS** fully configured and applied  
✅ **MySQL database** with all migrations  
✅ **Database-backed sessions, cache, and queues**  
✅ **Beautiful welcome page** with responsive design  
✅ **Production-ready** build setup  

## 🚨 Common Issues & Solutions

### Issue: Tailwind CSS not applying
**Solution**: Ensure `.jsx` is included in `tailwind.config.js` and CSS is imported in `app.jsx`

### Issue: @routes showing as text
**Solution**: Remove `@routes` directive from `app.blade.php`

### Issue: Database connection failed
**Solution**: Use MySQL on port 3307 with correct credentials in `.env`

### Issue: Inertia middleware not found
**Solution**: Manually create `HandleInertiaRequests.php` and register in `bootstrap/app.php`

## 🛠 Development Commands

```bash
# Development with hot reloading
npm run dev

# Start Laravel server
php artisan serve

# Build for production
npm run build

# Clear caches
php artisan config:clear
php artisan cache:clear
```

## 📁 Project Structure

Your project now has:
```
laravel-aise/
├── resources/
│   ├── js/
│   │   ├── app.jsx (React entry point with CSS import)
│   │   └── Pages/
│   │       └── Welcome.jsx (Beautiful styled component)
│   ├── css/
│   │   └── app.css (Tailwind CSS)
│   └── views/
│       └── app.blade.php (Clean layout without @routes)
├── bootstrap/
│   └── app.php (Inertia middleware registered)
├── app/Http/Middleware/
│   └── HandleInertiaRequests.php (Custom middleware)
├── vite.config.js (React + Laravel Vite plugin)
├── tailwind.config.js (Configured for .jsx files)
└── .env (MySQL configuration)
```  

## 🚀 Next Steps

1. **Add Authentication** (Optional):
   ```bash
   composer require laravel/breeze --dev
   php artisan breeze:install react
   ```

2. **Create New Pages**:
   - Add new React components in `resources/js/Pages/`
   - Create routes in `routes/web.php` using `Inertia::render()`

3. **Database Models**:
   ```bash
   php artisan make:model Post -m  # Creates model with migration
   php artisan make:controller PostController --resource
   ```

4. **Additional React Libraries**:
   ```bash
   npm install @headlessui/react  # Accessible UI components
   npm install @heroicons/react   # Beautiful icons
   ```

## 📚 Helpful Resources

- **Inertia.js Docs**: https://inertiajs.com/
- **Laravel Docs**: https://laravel.com/docs/11.x
- **React Docs**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/docs

## 🎯 Optional Enhancements

Consider adding these packages for enhanced development:
- `tightenco/ziggy` for route helpers in React
- `inertiajs/progress` for loading indicators  
- `@headlessui/react` for accessible UI components
- Additional React libraries as needed

---

**🎉 Congratulations!** Your Laravel 11 + Inertia.js + React setup is complete and ready for building amazing web applications! The setup includes database integration, beautiful styling, and a production-ready build system.
