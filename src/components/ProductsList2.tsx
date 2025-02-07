import React from 'react';
import Image from 'next/image';
import { sanityFetch } from "@/sanity/lib/fetch";
import { eight } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Swal from 'sweetalert2';
import { addtoCart } from '@/app/actions/actions';

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
const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon:"success",
      title:`${product.title} added to cart`,
      showConfirmButton:false,
      timer:1000
    })
    addtoCart (product);
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
  <button
       className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md              
       hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out mt-2 w-full"
       onClick={(e) => handleAddtoCart(e, product)}
                  >
                    Add To Cart
                  </button>

}

}