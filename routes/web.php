<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController;

Route::get('/', function () {
    // If user is authenticated, show the welcome/dashboard page
    if (auth()->check()) {
        return Inertia::render('Welcome', [
            'auth' => [
                'user' => auth()->user(),
            ],
            'canLogin' => false,
            'canRegister' => false,
            'laravelVersion' => \Illuminate\Foundation\Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
    
    // If user is not authenticated, show the login page
    return Inertia::render('Auth/Login');
});

// Authentication Routes
Route::post('/login', [LoginController::class, 'store'])->middleware('guest');

Route::post('/logout', [LoginController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');
