import React from 'react';

const Hero = () => {
    return (
        <div className="bg-white flex items-center justify-start h-screen mb-12 bg-fixed bg-center">
            <img src="/assets/image/IMG_0582.jpg" alt="Hero Image"
                 className="absolute inset-0 w-full h-full object-cover"/>
            <div className="z-40 relative space-y-2 text-left ml-12 mt-28 p-5 mr-8 md:mr-0">
                <h2 className="text-white text-4xl font-Inria">Ian Messerschmidt</h2>
                <p className="text-2xl font-bold font-Paprika p-gradient">Fotografie</p>
            </div>
        </div>
    );
};

export default Hero;