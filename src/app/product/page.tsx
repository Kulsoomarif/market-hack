"use client";
import React from "react";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Import the urlFor function

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  tags: string[];
  discountPercentage: number;
  imageUrl: {
    asset: {
      _ref: string;
      _type: "image";
    };
    slug:{
     _type:"slug"
     current: string;
    }
  };
};

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProducts: Product[] = await client.fetch(allproducts);
      setProducts(fetchedProducts);
    }
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="max-w-6xl font-bold mx-auto px-4 py-8">
        <h1 className="text-2x1 font-bold  mb-6 text-center">Our Latest Products  </h1>
        <div className=" grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-col-4">
        {products.map((product) => (
          <div className=" border rounde-lg shadow-md p-4 hover:shadow-lg transition duration-200 font-bold" key={product._id}>
            
            {product.imageUrl && (
              <Image
                src={urlFor(product.imageUrl).url()} // Generate the image URL
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h1 className="font-semibold text-lg mt-4">{product.title}</h1>
            <p className="font-semibold text-grey-600 mt-2">Price: ${product.price}</p>
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
                <a
                  href="#"
                  className="text-blue-600 text-xl hover:text-blue-800 transition"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="#"
                  className="text-pink-600 text-xl hover:text-pink-800 transition"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="#"
                  className="text-blue-400 text-xl hover:text-blue-600 transition"
                >
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