import { Head } from '@inertiajs/react';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import TechStackCard from '../features/welcome/components/TechStackCard';
import LaravelLogo from '../features/welcome/components/LaravelLogo';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const techStack = [
        {
            title: "Laravel + Inertia.js + React",
            description: "You have successfully set up Laravel 11 with Inertia.js and React! This is a modern single-page application powered by Laravel's backend and React's frontend capabilities through Inertia.js."
        },
        {
            title: "Inertia.js",
            description: "Inertia.js lets you quickly build modern single-page React, Vue and Svelte apps using classic server-side routing and controllers. Perfect for Laravel developers who want to use React!"
        },
        {
            title: "React & Vite",
            description: "Your frontend is powered by React with Vite for lightning-fast development and hot module replacement. Build beautiful, interactive user interfaces with the power of React components."
        },
        {
            title: "Tailwind CSS",
            description: "This setup includes Tailwind CSS for rapid UI development. Create beautiful, responsive designs with utility-first CSS classes that integrate perfectly with your React components."
        }
    ];

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <div className="flex items-center">
                                    <LaravelLogo />
                                    <span className="ml-3 text-3xl font-bold text-gray-900 dark:text-white">
                                        Laravel
                                    </span>
                                </div>
                            </div>
                            <Navigation auth={auth} />
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                {techStack.map((tech, index) => (
                                    <Card key={index}>
                                        <TechStackCard
                                            title={tech.title}
                                            description={tech.description}
                                        />
                                    </Card>
                                ))}
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
