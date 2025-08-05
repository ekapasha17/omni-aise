<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController;

Route::get('/', function () {
    // If user is authenticated, redirect to dashboard
    if (auth()->check()) {
        return redirect('/dashboard');
    }
    
    // If user is not authenticated, show the login page
    return Inertia::render('Auth/Login');
})->name('login'); // Add the name here for authentication redirects

// Dashboard route (protected)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'auth' => [
            'user' => auth()->user(),
        ],
        'notifications' => [
            ['id' => 1, 'title' => 'New user registered', 'time' => '2 minutes ago', 'read' => false],
            ['id' => 2, 'title' => 'Server update completed', 'time' => '1 hour ago', 'read' => false],
            ['id' => 3, 'title' => 'Backup process failed', 'time' => '3 hours ago', 'read' => true],
        ],
    ]);
})->middleware(['auth', 'prevent.back'])->name('dashboard');

// Authentication Routes
Route::post('/login', [LoginController::class, 'store'])->middleware('guest');

Route::post('/logout', [LoginController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

// API route for auth check
Route::get('/api/auth-check', function () {
    if (auth()->check()) {
        return response()->json(['authenticated' => true, 'user' => auth()->user()]);
    }
    return response()->json(['authenticated' => false], 401);
})->name('auth.check');
