export default function SocialLoginButtons() {
    return (
        <div className="flex justify-center mb-6">
            <div className="flex space-x-2 w-2/3">
                <button className="w-1/2 flex justify-center items-center bg-white border border-gray-300 text-gray-800 px-3 py-2.5 text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png" 
                        alt="Google" 
                        className="h-5 w-5 mr-2"
                    />
                    <span>Google</span>
                </button>
                <button className="w-1/2 flex justify-center items-center bg-blue-600 text-white px-3 py-2.5 text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/82/Facebook_icon.svg" 
                        alt="Facebook" 
                        className="h-5 w-5 mr-2"
                    />
                    <span>Facebook</span>
                </button>
            </div>
        </div>
    );
}
