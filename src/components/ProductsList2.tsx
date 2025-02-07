import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { sanityFetch } from "@/sanity/lib/fetch";
import { eight } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type Product = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  productImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  inventory: number;
  price: number;
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
};

export default async function ProductsList2() {
  const products: Product[] = await sanityFetch({ query: eight });

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
                    <div className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={urlFor(product.productImage).url()}
                        alt={product.title}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-center mt-4">{product.title}</h2>
                  <p className="text-center text-gray-600">${product.price}</p>

                  {/* Slug Link */}
                  <Link
                    href={`/products/${product.slug.current}`} // Link to the product detail page
                    className="text-blue-600 hover:text-blue-800 text-sm mt-2"
                  >
                    View Details
                  </Link>

                  {/* Order Now Button */}
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 transition"
                  ><Link
                  href="/cart" // Link to the cart page
                  className="text-white hover:text-gray-800 text-sm mt-2"
                >
                  Add to Cart
                </Link>
                    
                  </button>

                
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}