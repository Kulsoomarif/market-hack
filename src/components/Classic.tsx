import React from 'react';
import Image from 'next/image';

const Classic = () => {
  return (
    <div>
      <section className="bg-green-900 text-white py-10 px-4 item-between">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-bold">SUMMER 2020</h3>
            <br></br>
            <h1 className="text-5xl font-bold mb-4">Vita Classic Product</h1>
            <br></br>
            <h4>Experience the best classic products with us. 
              <br></br>We provide high-quality products at affordable prices.</h4>
            <p>
              <br></br>
              $16.48{' '}
              <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700">
                Add to Cart
              </button>
            </p>
          </div>
          <div className="mt-6 md:mt-0 ">
            <Image src="/boy.png" alt="Vita Classic" width={300} height={300} className="p-3 rounded" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classic;
