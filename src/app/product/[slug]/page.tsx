"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Swal from "sweetalert2";
import { addtoCart } from "@/app/actions/actions";

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

interface ProductPageProps {
  params: { slug: string };
}

// Fetch product from Sanity
async function getProduct(slug: string): Promise<Product | null> {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      slug {
        current
      },
      description,
      productImage {
        asset -> {
          _id,
          url
        }
      },
      inventory,
      price,
      tags,
      discountPercentage,
      isNew
    }`,
    { slug }
  );

  return product || null;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct = await getProduct(slug);
      setProduct(fetchedProduct);
    }

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <div className="text-center text-xl mt-10">Product not found</div>;
  }

  const imageUrl = product.productImage?.asset ? urlFor(product.productImage.asset).url() : "";

  // ✅ Handle Add to Cart Function
  const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addtoCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square flex justify-center items-center">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl font-semibold">${product.price}</p>

          {/* Add to Cart Button */}
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md 
                    hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out mt-2 w-full"
            onClick={(e) => handleAddtoCart(e, product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
