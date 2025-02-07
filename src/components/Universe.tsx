"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Universe = () => {
  return (
    <div className="bg-white">
      {/* Main Section */}
      <section className="relative bg-gray-100 px-4 py-8 md:px-12 lg:px-20 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Part of the Neural Universe
            </h2>
            <p className="text-gray-600 mb-6">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/shop">
                <button className="px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg">
                  Buy Now
                </button>
              </Link>
              <Link href="/shop">
                <button className="px-6 py-2 text-green-500 border border-green-500 hover:bg-green-50 rounded-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-8 lg:mt-0 relative w-full h-96 lg:w-[500px] lg:h-[500px]">
            <Image
              src="/seater.jpg"
              alt="seater"
              fill
              style={{ objectFit: "cover" }} // Ensure the image covers the container
              className="rounded-lg"
              priority // Preload the image for better performance
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-4 py-12 md:px-12 lg:px-20 bg-white flex flex-col items-center justify-center text-center">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Featured Posts
          </h3>
          <p className="text-gray-500 mb-6">
            Problem trying to resolve the conflict between
            <br /> the two major realms of Classical physics: Newtonian mechanics.
          </p>
          <Link href="/shop">
            <button className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Cards Section */}
      <section className="px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 relative">
              <Image
                src="/room1.jpg"
                alt="Colorful street"
                fill
                style={{ objectFit: "cover" }} // Ensure the image covers the container
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-green-500 mb-2">Trending | New</p>
              <p className="text-lg font-semibold text-gray-800">
                Loudest à la Madison #1 (L Integral)
              </p>
              <p className="text-gray-500 mt-2">
                We focus on ergonomics and meeting you where you work.
              </p>
              <p className="text-gray-400 text-sm mt-4">22 April 2021</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 relative">
              <Image
                src="/room2.jpg"
                alt="Pink car"
                fill
                style={{ objectFit: "cover" }} // Ensure the image covers the container
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-green-500 mb-2">Trending | New</p>
              <p className="text-lg font-semibold text-gray-800">
                Loudest à la Madison #1 (L Integral)
              </p>
              <p className="text-gray-500 mt-2">
                We focus on ergonomics and meeting you where you work.
              </p>
              <p className="text-gray-400 text-sm mt-4">22 April 2021</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg overflow-hidden">
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 relative">
              <Image
                src="/room3.jpeg"
                alt="room"
                fill
                style={{ objectFit: "cover" }} // Ensure the image covers the container
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h5 className="text-blue-600">Practice Advice</h5>
              <p className="text-sm text-green-500 mb-2">Trending | New</p>
              <p className="text-lg font-semibold text-gray-800">
                Loudest à la Madison #1 (L Integral)
              </p>
              <p className="text-gray-500 mt-2">
                We focus on ergonomics and meeting you where you work.
              </p>
              <p className="text-gray-400 text-sm mt-4">22 April 2021</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Universe;