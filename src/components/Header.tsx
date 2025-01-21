"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
          Bandage
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
          About
          </Link>
          <Link href="/product" className="hover:text-blue-600">
          Product
          </Link>
          <Link href="/pricing" className="hover:text-blue-600">
          Pricing
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <Link href="/login" className="hover:text-blue-600">
            Login / Register
          </Link>
          <button aria-label="Search" className="hover:text-blue-600">
            <Search />
          </button>
          <button aria-label="Wishlist" className="hover:text-blue-600">
            <Heart />
          </button>
          <button aria-label="Cart" className="hover:text-blue-600">
            <ShoppingCart />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="space-y-4 px-4 py-6 text-gray-700">
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-blue-600">
                About
              </Link>
            </li>
           
            <li>
            <Link href="/product" className="block hover:text-blue-600">
            Product
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="block hover:text-blue-600">
            Pricing
            </Link>
          </li>
              
              <li>
              <Link href="/contact" className="block hover:text-blue-600">
                Contact
              </Link>
            </li>
                     </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
