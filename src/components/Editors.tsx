import React from 'react';
import Image from 'next/image';

const Editors = () => {
  return (
    <div className="flex flex-col gap-16">
      <section className="px-4 py-12">
        <h2 className="text-center text-xl font-semibold mb-2"> Editors Pick</h2>
        <p className="text-center text-gray-500 mb-8">
          Problems trying to resolve the conflict between
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="relative w-full h-72">
            <Image
              src="/editors/man.jpg"
              alt="Men"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <span className="absolute bottom-4 left-4 bg-white text-gray-800 px-4 py-1 text-sm">
              Men
            </span>
          </div>
          <div className="relative w-full h-72">
            <Image
              src="/editors/women.jpg"
              alt="Women"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <span className="absolute bottom-4 left-4 bg-white text-gray-800 px-4 py-1 text-sm">
              Women
            </span>
          </div>
          <div className="relative w-full h-72">
            <Image
              src="/editors/acessories.jpg"
              alt="Accessories"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <span className="absolute bottom-4 left-4 bg-white text-gray-800 px-4 py-1 text-sm">
              Accessories
            </span>
          </div>
          <div className="relative w-full h-72">
            <Image
              src="/editors/kids.jpg"
              alt="Kids"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <span className="absolute bottom-4 left-4 bg-white text-gray-800 px-4 py-1 text-sm">
              Kids
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Editors;
