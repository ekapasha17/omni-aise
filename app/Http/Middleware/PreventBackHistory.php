<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PreventBackHistory
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Add comprehensive headers to prevent caching and back button access
        $response->headers->set('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate, private');
        $response->headers->set('Pragma', 'no-cache');
        $response->headers->set('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT');
        $response->headers->set('Last-Modified', gmdate('D, d M Y H:i:s') . ' GMT');
        $response->headers->set('X-Accel-Expires', '0');

        return $response;
    }
}
