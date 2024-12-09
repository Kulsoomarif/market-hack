import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discounted: "$6.48",
    rating: 4,
    img: "/shop/s2.jpg",
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discounted: "$6.48",
    rating: 4,
    img: "/shop/s3.jpg",
  },
];

const Shop: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Shop</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="relative group">
            <Image
              src="/shop/category1.jpg"
              alt="Category 1"
              className="w-full rounded-lg"
              width={500} // Define the width of the image
              height={300} // Define the height of the image
              layout="responsive" // This ensures the image is responsive
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-xl font-bold">CLOTHS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-gray-100 rounded-lg shadow-md p-4">
              <Image
                src={item.img}
                alt={item.title}
                className="w-full rounded-lg mb-4"
                width={400} 
                height={300}
                layout="responsive"
              />
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.department}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-green-600 font-bold">{item.discounted}</span>
                <span className="text-gray-400 line-through">{item.price}</span>
              </div>
              <div className="flex items-center mt-2">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-sm">★</span>
                ))}
                {[...Array(5 - item.rating)].map((_, i) => (
                  <span key={i} className="text-gray-300 text-sm">★</span>
                ))}
              </div>
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
