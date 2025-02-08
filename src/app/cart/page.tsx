"use client"; 
import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";

type Product = {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  productImage?: { asset?: { _id: string; url?: string } }; // Optional properties to prevent errors
  inventory: number;
  price: number;
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
};

const Page = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1D4ED8",
      cancelButtonColor: "#10B981",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1D4ED8",
      cancelButtonColor: "#10B981",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been placed successfully!", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item._id} className="border rounded-lg p-4 shadow-md bg-white">
              {/* Image Handling */}
              {item.productImage?.asset?.url ? (
                <Image
                  src={item.productImage.asset.url}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md"
                  width={200}
                  height={200}
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-gray-200 rounded-md">
                  <p className="text-gray-500">No Image</p>
                </div>
              )}

              <h2 className="text-lg font-semibold mt-3">{item.title}</h2>
              <p className="font-bold text-lg mt-2">${item.price.toFixed(2)}</p>

              {/* Quantity Controls */}
              <div className="flex items-center mt-3">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400 transition"
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-200">{item.inventory}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400 transition"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemove(item._id)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Checkout Section */}
      {cartItems.length > 0 && (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold">Total: ${calculatedTotal().toFixed(2)}</h2>
          <button
            onClick={handleProceed}
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
