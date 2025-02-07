"use client";
import React, { useState } from "react";
import Image from "next/image";
import { addtoCart } from "@/app/actions/actions";

const Classic = () => {
  const [isLoading, setIsLoading] = useState(false);

  const product = {
    _id: "2",
    title: "Vita Classic Product",
    slug: { current: "vita-classic-product" },
    description: "Experience the best classic products with us.",
    productImage: { asset: { _id: "img2", url: "/soof.png" } },
    inventory: 15,
    price: 16.48,
    tags: ["classic", "summer"],
    discountPercentage: 5,
    isNew: false,
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    await addtoCart(product);
    setIsLoading(false);
    window.location.href = "/shop";
  };

  return (
    <div>
      <section className="bg-green-900 text-white py-10 px-4 item-between">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-bold">SUMMER 2020</h3>
            <br></br>
            <h1 className="text-5xl font-bold mb-4">Vita Classic Product</h1>
            <br></br>
            <h4>
              Experience the best classic products with us.
              <br></br>We provide high-quality products at affordable prices.
            </h4>
            <p>
              <br></br>
              $16.48{" "}
              <button
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700 disabled:opacity-50"
                onClick={handleAddToCart}
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? "Adding to Cart..." : "Add to Cart"}
              </button>
            </p>
          </div>
          <div className="mt-6 md:mt-0 relative w-72 h-72"> {/* Adjusted parent container */}
            <Image
              src="/soof.png"
              alt="Vita Classic"
              fill // Fill the parent container
              style={{ objectFit: "cover" }} // Ensure the image covers the container
              className="p-3 rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classic;