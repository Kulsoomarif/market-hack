"use client";
import Link from "next/link"; 
import React, { useState } from "react";


const Header2 = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <header className="bg-grey-300 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <div className="text-2x1 font-bold">
          Bandage
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-6 text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-blue-600">
                Product
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-blue-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="text-blue-600 hover:underline">
            Login/SignUp
          </Link>
          <Link
            href="/team"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Become a member
          </Link>
          </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isClick && (
        <div className="md:hidden px-4 py-2 bg-white shadow-lg">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="block text-gray-700 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="block text-gray-700 hover:text-blue-600">
                Product
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="block text-gray-700 hover:text-blue-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header2;
