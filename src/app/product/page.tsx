


import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { groq } from "next-sanity";

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

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

async function getProduct(slug:string): Promise<Product>{
  return client.fetch(
groq`*[type == "product && slug.current ==$slug][0]{
_id
title,
_type,
productImage,
description,
price,
}`,{slug})
}
export default async function ProductPage ({params}:ProductPageProps){
  const {slug}=await params;
  const product = await getProduct(slug)
return(
<div className="max-w-7xl mx-auto p-4">
  
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      {product.productImage && (
        <Image
          src={urlFor(product.productImage).url()}
          alt={product.title}
          width={400}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      )}
      <p className="mt-2 text-gray-600">{product.description}</p>
      <p className="mt-2 font-semibold">Price: ${product.price}</p>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 mt-10">
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
)

};


