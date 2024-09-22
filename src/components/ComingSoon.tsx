import React from "react";

const ComingSoon: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-blue-900 text-white">
            <div className="text-center space-y-6">
                <h1 className="text-6xl font-bold">Coming Soon</h1>
                <p className="text-xl">Our app is launching soon. Stay tuned!</p>
                <div className="border-t border-gray-400 mx-auto w-24"></div>
            </div>
        </div>
    );
};

export default ComingSoon;
