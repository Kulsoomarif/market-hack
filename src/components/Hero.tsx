import React from 'react';

const Hero = () => {
  return (
    <div className="flex max-h-[1000px] max-w-[1700px] flex-col gap-16">
      <section
        className="relative px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 flex items-center justify-start bg-cover bg-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full"
        style={{ 
          backgroundImage: "url('/fur.jpg')",
          backgroundPosition: "center top", 
        }}
      >
        <div className="text-left gap-4 sm:gap-6 md:gap-8 max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
          <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            SUMMER 2020
          </h5>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mt-2 sm:mt-3 md:mt-4">
            NEW COLLECTION
          </h2>
          <h4 className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-white">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600">
            SHOP NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;