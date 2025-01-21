import React from 'react';
import Image from 'next/image';

const Editors = () => {
  return (
    <div className="flex flex-col gap-16">
      <section className="px-4 py-12">
        <h2 className="text-center text-xl font-semibold mb-2">Editors Pick</h2>
        <p className="text-center text-gray-500 mb-8">
          Problems trying to resolve the conflict between
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {/* Men */}
          <div className="relative w-full h-72">
            <Image
              src="/editors/chair.jpg"
              alt="Men"
              layout="fill"
              className="rounded-md"
            />
            <span className="absolute text-bold bottom-4 left-4 bg-white text-gray-800 px-4 py-1 text-sm">
              Chair
            </span>
          </div>

          {/* Women */}
          <div className="relative w-full h-72">
            <Image
              src="/editors/Sofa.jpg"
              alt="Women"
              layout="fill"
              className="rounded-md"
            />
            <span className="absolute text-bold bottom-4 left-4 bg-white text-gray-800 px-4 py-1 text-sm">
              Sofa
            </span>
          </div>

          {/* Accessories */}
          <div className="relative w-full h-72">
            <Image
              src="/editors/bed.jpg"
              alt="Accessories"
              layout="fill"
              className="rounded-md"
            />
            <span className="absolute text-bold  bottom-4 left-4 bg-white text-gray-800 px-4 py-1 text-sm">
              Bed
            </span>
          </div>

          {/* Kids */}
          <div className="relative w-full h-72">
            <Image
              src="/editors/table.jpg"
              alt="Table"
              layout="fill"
              className="rounded-md"
            />
            <span className="absolute text-bold bottom-4 left-4 bg-white text-gray-800 px-4 py-1 text-sm">
              Table
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Editors;