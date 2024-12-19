import React from 'react';

const Gallery = () => {
    return (
        <div className="container mx-auto px-24 py-16 grid md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="space-y-4">
                <h2 className="text-5xl font-bold">
                    Gallery<span className="text-black"></span>
                </h2>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Senectus scelerisque viverra at id aenean scelerisque.
                    Nec eget condimentum etiam leo.
                </p>
                <button className="px-4 py-2 bg-black text-white rounded-md transform transition-transform duration-300 hover:bg-gray-700 hover:scale-105">
                    Learn More
                </button>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-2 gap-4">
                <div className="w-full aspect-square">
                    <img
                        src="/assets/image/IMG_0582.jpg"
                        alt="Portfolio Item"
                        className="w-full h-full object-cover rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                </div>
                <div className="w-full aspect-square">
                    <img
                        src="/assets/image/IMG_0582.jpg"
                        alt="Portfolio Item"
                        className="w-full h-full object-cover rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                </div>
                <div className="w-full aspect-square">
                    <img
                        src="/assets/image/IMG_0559.jpg"
                        alt="Portfolio Item"
                        className="w-full h-full object-cover rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                </div>
                <div className="w-full aspect-square">
                    <img
                        src="/assets/image/Adrian%20Dribbling.jpg"
                        alt="Portfolio Item"
                        className="w-full h-full object-cover rounded-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
