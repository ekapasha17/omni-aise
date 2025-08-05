export default function AuthLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-blue-600">
            {/* Left Section: Sign In Form */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                {children}
            </div>

            {/* Right Section: Illustration / Graphic */}
            <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-blue-700 text-white p-12">
                <div className="flex justify-center items-center mb-8">
                    <img
                        src="https://cyclr.com/nitropack_static/VuXxlbQNhqQgnktlfMtCedOWhlGohlKT/assets/images/optimized/rev-3b34f54/cyclr.com/wp-content/uploads/2024/04/Application-Connectors.png"
                        alt="Illustration"
                        className="w-100 h-100"
                    />
                </div>
                <h2 className="text-3xl font-semibold mb-4">
                    Connect with every application.
                </h2>
                <p className="text-lg text-center">
                    Everything you need in an easily customizable dashboard.
                </p>
            </div>
        </div>
    );
}
