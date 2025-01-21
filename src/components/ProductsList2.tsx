import React from 'react';
import Image from 'next/image';
import { sanityFetch } from "@/sanity/lib/fetch";
import { four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  tags: string[];
  discountPercentage: number;
  productImage: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    slug:{
      _type:"slug",
      current:string
    }
  };
};

export default async function ProductsList2() {
  const products: Product[] = await sanityFetch({ query: four });

  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-3xl font-bold mb-8">BESTSELLER PRODUCTS</h3>
          <p className="text-center text-gray-600 mb-8">
            Problems trying to resolve the conflict between
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div className="bg-white rounded-lg shadow-md p-4" key={product._id}>
                <div className="border p-4 rounded-lg shadow-sm flex flex-col items-center">
                  {product.productImage && (
                    <Image
                      src={urlFor(product.productImage).url()}
                      alt={product.title}
                      width={200}
                      height={200}
                    />
                  )}
                  <h2 className="text-xl font-bold text-center">{product.title}</h2>
                  <p className="text-center">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}