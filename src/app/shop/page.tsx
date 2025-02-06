"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { addtoCart } from "../actions/actions";
import swal from "sweetalert2";

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


const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProducts: Product[] = await client.fetch(allproducts);
      console.log("Fetched products:", fetchedProducts);
      setProducts(fetchedProducts);
    }
    fetchProduct();
  }, []);

  const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    swal.fire({
      position: "top-right",
      icon:"success",
      title:`${product.title} added to cart`,
      showConfirmButton:false,
      timer:1000
    })
    addtoCart(product);
  };

  return (
    <div>
      <div className="max-w-6xl font-bold mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Our Latest Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 font-bold"
            >
              {product.productImage && product.slug ? (
                <>
                  <Link href={`/product/${product.slug.current}`}>
                    {product.productImage ? (
                      <div className="w-62 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={urlFor(product.productImage.asset).url()} 
                        alt={product.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      /></div>
                    ) : (
                      <div className="flex items-center justify-center bg-gray-200 rounded-lg shadow-md">
                        <span>Image not available</span>
                      </div>
                    )}
                    <h1 className="font-semibold text-lg mt-4">{product.title}</h1>
                    <p className="font-semibold text-gray-600 mt-2">
                      {product.price ? `$${product.price}` : "Price not available"}
                    </p>
                  </Link>

                  {/* Button placed outside the Link */}
                  <button
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md 
                    hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out mt-2 w-full"
                    onClick={(e) => handleAddtoCart(e, product)}
                  >
                    Add To Cart
                  </button>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Company Info</h3>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Features</h3>
              <ul>
                <li>Business Marketing</li>
                <li>Live Chat</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul>
                <li>iOS & Android</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
              <form>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg px-4 py-2 mb-2"
                />
                <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2">
                  Subscribe
                </button>
              </form>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-600 text-xl hover:text-blue-800 transition">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="text-pink-600 text-xl hover:text-pink-800 transition">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="text-blue-400 text-xl hover:text-blue-600 transition">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-500">
            Made with ❤️ by Finland. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
