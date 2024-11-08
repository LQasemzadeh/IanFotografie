import React from 'react';

const Hero = () => {
    return (
        <div className="bg-white flex items-center justify-center h-screen mb-12 bg-fixed bg-center">
            <img src="/assets/image/IMG_0582.jpg" alt="Hero Image"
                 className="absolute inset-0 w-full h-full object-cover"/>
            <div className="z-40 relative space-y-2 text-left -mt-16 pb-16"> {/* Adjust the margin here */}
                <h2 className="text-white text-4xl font-Paprika">Ian Messerschmidt</h2>
                <p className="text-2xl font-bold font-Paprika p-gradient">Fotografie</p>
            </div>
        </div>
    );
};

export default Hero;