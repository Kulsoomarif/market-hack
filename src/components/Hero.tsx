"use client";
import { addtoCart } from "@/app/actions/actions";
import React from "react";
import Image from "next/image"; // Import Image from next/image

const Hero = () => {
  const product = {
    _id: "1",
    title: "Summer Collection",
    slug: { current: "summer-collection" },
    description: "A stylish summer collection.",
    productImage: { asset: { _id: "img1", url: "/fur.jpg" } },
    inventory: 10,
    price: 49.99,
    tags: ["summer", "new"],
    discountPercentage: 10,
    isNew: true,
  };

  const handleShopNow = async () => {
    await addtoCart(product); // Add product to cart
    // Optionally, you can redirect the user to the cart page after adding the product
    window.location.href = "/shop"; // Redirect to the cart page
  };

  return (
    <div className="flex max-h-[1000px] max-w-[1700px] flex-col gap-16">
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 flex items-center justify-start h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/fur.jpg" // Path to your image
            alt="Summer Collection Background"
            fill // Fill the parent container
            style={{ objectFit: "cover", objectPosition: "center top" }} // Adjust object-fit and position
            priority // Preload the image for better performance
          />
        </div>

        {/* Content */}
        <div className="text-left gap-4 sm:gap-6 md:gap-8 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] relative z-10">
          <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            SUMMER 2020
          </h5>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mt-2 sm:mt-3 md:mt-4">
            NEW COLLECTION
          </h2>
          <h4 className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-white">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button
            className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600"
            onClick={handleShopNow} // Call handleShopNow on click
          >
            SHOP NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;