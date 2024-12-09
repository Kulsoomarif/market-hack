import React from 'react';
import Image from 'next/image';

const Products = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-3xl font-bold mb-8">BESTSELLER PRODUCTS</h3>
          <p className="text-center text-gray-600 mb-8">
            Problems trying to resolve the conflict between
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/landing/one.jpg"
                alt="Product 1"
                layout="responsive"
                width={300}
                height={400}
                className="object-cover"
              />
              <h4 className="mt-4 text-sm text-gray-600">Graphic Design</h4>
              <p className="text-xs text-gray-500">English Department</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">$6.48</span>
                <span className="text-sm line-through text-gray-400">$16.48</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/landing/two.jpg"
                alt="Product 2"
                layout="responsive"
                width={300}
                height={400}
                className="object-cover"
              />
              <h4 className="mt-4 text-sm text-gray-600">Graphic Design</h4>
              <p className="text-xs text-gray-500">English Department</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">$12.48</span>
                <span className="text-sm line-through text-gray-400">$25.48</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/landing/three.jpg"
                alt="Product 3"
                layout="responsive"
                width={300}
                height={400}
                className="object-cover"
              />
              <h4 className="mt-4 text-sm text-gray-600">Graphic Design</h4>
              <p className="text-xs text-gray-500">English Department</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">$8.99</span>
                <span className="text-sm line-through text-gray-400">$18.99</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/landing/four.jpg"
                alt="Product 4"
                layout="responsive"
                width={300}
                height={400}
                className="object-cover"
              />
              <h4 className="mt-4 text-sm text-gray-600">Graphic Design</h4>
              <p className="text-xs text-gray-500">English Department</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">$9.99</span>
                <span className="text-sm line-through text-gray-400">$22.99</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/landing/five.jpg"
                alt="Product 5"
                layout="responsive"
                width={300}
                height={400}
                className="object-cover"
              />
              <h4 className="mt-4 text-sm text-gray-600">Graphic Design</h4>
              <p className="text-xs text-gray-500">English Department</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">$9.99</span>
                <span className="text-sm line-through text-gray-400">$22.99</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/landing/six.jpg"
                alt="Product 6"
                layout="responsive"
                width={300}
                height={400}
                className="object-cover"
              />
              <h4 className="mt-4 text-sm text-gray-600">Graphic Design</h4>
              <p className="text-xs text-gray-500">English Department</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">$9.99</span>
                <span className="text-sm line-through text-gray-400">$22.99</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/landing/seven.jpg"
                alt="Product 7"
                layout="responsive"
                width={300}
                height={400}
                className="object-cover"
              />
              <h4 className="mt-4 text-sm text-gray-600">Graphic Design</h4>
              <p className="text-xs text-gray-500">English Department</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">$9.99</span>
                <span className="text-sm line-through text-gray-400">$22.99</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/landing/eight.jpg"
                alt="Product 8"
                layout="responsive"
                width={300}
                height={400}
                className="object-cover"
              />
              <h4 className="mt-4 text-sm text-gray-600">Graphic Design</h4>
              <p className="text-xs text-gray-500">English Department</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">$9.99</span>
                <span className="text-sm line-through text-gray-400">$22.99</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Products;
