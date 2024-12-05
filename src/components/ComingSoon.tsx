import React from "react";

const ComingSoon: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-blue-900 text-white">
            <div className="w-full h-full">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Jpih0erxpjg?autoplay=1&mute=1&loop=1&playlist=Jpih0erxpjg"
                    title="Coming Soon Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default ComingSoon;
