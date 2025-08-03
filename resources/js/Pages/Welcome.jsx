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
                                <div className="flex items-center">
                                    <svg
                                        className="h-12 w-auto text-red-600 lg:h-16"
                                        viewBox="0 0 62 65"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9884L25.4519 63.7641C25.3971 63.7931 25.3372 63.8128 25.2774 63.8219C25.255 63.8237 25.2325 63.8264 25.2102 63.8264C25.1878 63.8264 25.1654 63.8237 25.143 63.8219C25.0832 63.8128 25.0233 63.7931 24.9685 63.7641L0.997953 49.9884C0.688739 49.8192 0.499176 49.4902 0.499176 49.1337V14.8858C0.499236 14.7978 0.510945 14.7102 0.533804 14.6253C0.543795 14.5908 0.556716 14.5575 0.572137 14.5257C0.580563 14.5088 0.590834 14.4929 0.602545 14.478L0.618667 14.4619C0.628738 14.4514 0.639479 14.4418 0.650787 14.4333L12.7847 7.86689C13.0939 7.69764 13.4605 7.69764 13.7698 7.86689L25.9037 14.4333C25.915 14.4418 25.9257 14.4514 25.9357 14.4619L25.9518 14.478C25.9635 14.4929 25.9738 14.5088 25.9823 14.5257C25.9977 14.5575 26.0106 14.5908 26.0206 14.6253C26.0435 14.7102 26.0552 14.7978 26.0554 14.8858V28.5615C26.0554 28.737 26.0089 28.9095 25.921 29.0614C25.833 29.2132 25.7065 29.3392 25.5542 29.4265L14.0759 36.0351V49.1337C14.0759 49.4902 14.2654 49.8192 14.5746 49.9884L25.143 56.2098C25.3971 56.3363 25.7086 56.3363 25.9628 56.2098L36.5311 49.9884C36.8403 49.8192 37.0298 49.4902 37.0298 49.1337V36.0351L25.5515 29.4265C25.3992 29.3392 25.2727 29.2132 25.1847 29.0614C25.0968 28.9095 25.0504 28.737 25.0504 28.5615V14.8858C25.0505 14.7978 25.0622 14.7102 25.0851 14.6253C25.0951 14.5908 25.108 14.5575 25.1235 14.5257C25.1319 14.5088 25.1421 14.4929 25.1538 14.478L25.17 14.4619C25.18 14.4514 25.1907 14.4418 25.202 14.4333L37.3359 7.86689C37.6451 7.69764 38.0117 7.69764 38.321 7.86689L50.455 14.4333C50.4662 14.4418 50.477 14.4514 50.487 14.4619L50.5031 14.478C50.5148 14.4929 50.5251 14.5088 50.5336 14.5257C50.549 14.5575 50.5619 14.5908 50.5719 14.6253C50.5948 14.7102 50.6065 14.7978 50.6067 14.8858V28.5615C50.6067 28.737 50.5602 28.9095 50.4723 29.0614C50.3843 29.2132 50.2578 29.3392 50.1055 29.4265L38.6272 36.0351V49.1337C38.6272 49.4902 38.8167 49.8192 39.1259 49.9884L49.6942 56.2098C49.9483 56.3363 50.2598 56.3363 50.514 56.2098L61.0823 49.9884C61.3915 49.8192 61.581 49.4902 61.581 49.1337V36.0351L50.1027 29.4265C49.9504 29.3392 49.8239 29.2132 49.7359 29.0614C49.648 28.9095 49.6016 28.737 49.6016 28.5615V14.8858C49.6017 14.7978 49.6134 14.7102 49.6363 14.6253C49.6463 14.5908 49.6592 14.5575 49.6747 14.5257C49.6831 14.5088 49.6933 14.4929 49.705 14.478L49.7212 14.4619C49.7312 14.4514 49.7419 14.4418 49.7532 14.4333L61.887 7.86689C62.1963 7.69764 62.5628 7.69764 62.8721 7.86689L74.006 14.4333C74.0172 14.4418 74.028 14.4514 74.038 14.4619L74.0541 14.478C74.0658 14.4929 74.0761 14.5088 74.0845 14.5257C74.1 14.5575 74.1129 14.5908 74.1229 14.6253C74.1458 14.7102 74.1575 14.7978 74.1577 14.8858V49.1337C74.1577 49.4902 73.9682 49.8192 73.659 49.9884L49.6991 63.7641C49.6443 63.7931 49.5844 63.8128 49.5246 63.8219C49.5022 63.8237 49.4797 63.8264 49.4574 63.8264C49.435 63.8264 49.4126 63.8237 49.3902 63.8219C49.3304 63.8128 49.2705 63.7931 49.2157 63.7641L25.2558 49.9884C24.9466 49.8192 24.7571 49.4902 24.7571 49.1337V14.8858C24.7571 14.7978 24.7688 14.7102 24.7917 14.6253C24.8017 14.5908 24.8146 14.5575 24.8301 14.5257C24.8385 14.5088 24.8487 14.4929 24.8604 14.478L24.8766 14.4619C24.8866 14.4514 24.8973 14.4418 24.9086 14.4333L37.0425 7.86689C37.3517 7.69764 37.7183 7.69764 38.0276 7.86689L50.1615 14.4333C50.1727 14.4418 50.1835 14.4514 50.1935 14.4619L50.2096 14.478C50.2213 14.4929 50.2316 14.5088 50.24 14.5257C50.2555 14.5575 50.2684 14.5908 50.2784 14.6253C50.3013 14.7102 50.313 14.7978 50.3132 14.8858V28.5615C50.3132 28.737 50.2668 28.9095 50.1788 29.0614C50.0909 29.2132 49.9643 29.3392 49.8121 29.4265L38.3338 36.0351V49.1337C38.3338 49.4902 38.5233 49.8192 38.8325 49.9884L49.4008 56.2098C49.6549 56.3363 49.9664 56.3363 50.2206 56.2098L60.789 49.9884C61.0981 49.8192 61.2877 49.4902 61.2877 49.1337V36.0351L49.8093 29.4265C49.657 29.3392 49.5305 29.2132 49.4425 29.0614C49.3546 28.9095 49.3081 28.737 49.3081 28.5615V14.8858C49.3082 14.7978 49.3199 14.7102 49.3428 14.6253C49.3528 14.5908 49.3657 14.5575 49.3812 14.5257C49.3896 14.5088 49.3998 14.4929 49.4115 14.478L49.4277 14.4619C49.4377 14.4514 49.4484 14.4418 49.4597 14.4333L61.5936 7.86689C61.9028 7.69764 62.2694 7.69764 62.5786 7.86689Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="ml-3 text-3xl font-bold text-gray-900 dark:text-white">Laravel</span>
                                </div>
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
                            <div className="text-center mb-8">
                                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                    Welcome to Laravel + Inertia.js + React!
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    Your modern full-stack application is ready to go
                                </p>
                            </div>

                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <div className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:shadow-xl dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <div className="flex items-center mb-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
                                                <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                                                </svg>
                                            </div>
                                            <h2 className="ml-3 text-xl font-semibold text-black dark:text-white">
                                                Laravel 11
                                            </h2>
                                        </div>
                                        <p className="text-sm/relaxed text-gray-600 dark:text-gray-400">
                                            The latest version of Laravel provides a solid foundation with elegant syntax, 
                                            powerful features, and excellent developer experience. Perfect for building 
                                            modern web applications.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:shadow-xl dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <div className="flex items-center mb-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                </svg>
                                            </div>
                                            <h2 className="ml-3 text-xl font-semibold text-black dark:text-white">
                                                Inertia.js
                                            </h2>
                                        </div>
                                        <p className="text-sm/relaxed text-gray-600 dark:text-gray-400">
                                            Inertia.js bridges the gap between server-side and client-side development. 
                                            Build single-page applications using classic server-side routing and controllers 
                                            without the complexity of a separate API.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:shadow-xl dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <div className="flex items-center mb-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900">
                                                <svg className="h-6 w-6 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.412-.465-.797-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                                                </svg>
                                            </div>
                                            <h2 className="ml-3 text-xl font-semibold text-black dark:text-white">
                                                React
                                            </h2>
                                        </div>
                                        <p className="text-sm/relaxed text-gray-600 dark:text-gray-400">
                                            Build dynamic user interfaces with React's component-based architecture. 
                                            Enjoy fast development with hot module replacement powered by Vite for 
                                            instant feedback and lightning-fast builds.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-200 transition duration-300 hover:shadow-xl dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="pt-3 sm:pt-5 lg:pt-0">
                                        <div className="flex items-center mb-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900">
                                                <svg className="h-6 w-6 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C8.387 16.855 9.522 18 12 18c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345C10.613 13.145 9.478 12 7 12z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <h2 className="ml-3 text-xl font-semibold text-black dark:text-white">
                                                Tailwind CSS
                                            </h2>
                                        </div>
                                        <p className="text-sm/relaxed text-gray-600 dark:text-gray-400">
                                            Rapidly build custom designs with Tailwind CSS utility classes. Create 
                                            beautiful, responsive interfaces without leaving your React components. 
                                            No more context switching between CSS files!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 text-center">
                                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-md dark:bg-green-900 dark:text-green-200">
                                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Setup Complete! Your application is ready.
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-gray-500 dark:text-gray-400">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
