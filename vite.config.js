import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
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
});
