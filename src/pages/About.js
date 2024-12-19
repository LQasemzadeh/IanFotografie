import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-6 md:px-24 py-16 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="relative">
                <img
                    src="/assets/image/FB_IMG_1730798439909.jpg"
                    alt="About Me"
                    className="w-full h-auto object-cover rounded-md shadow-md"
                />
            </div>

            {/* Right Section */}
            <div className="space-y-6">
                <h2 className="text-5xl font-bold">
                    About Me<span className="text-black">.</span>
                </h2>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Senectus scelerisque viverra at id aenean scelerisque.
                    Nec eget condimentum etiam leo.
                </p>
                <p className="text-gray-600">
                    Morbi at eget fusce feugiat volutpat et volutpat malesuada.
                    At suspendisse nisi, quam neque in leo sollicitudin.
                </p>
                <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 transition duration-300">
                    View My Work
                </button>
            </div>
        </div>
    );
};

export default About;
