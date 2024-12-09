"use client"; 

import { useState } from "react";
import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
          Bandage
        </Link>

        
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setIsShopOpen(true)}
            onMouseLeave={() => setIsShopOpen(false)}
          >
            <button className="hover:text-blue-600 flex items-center gap-1">
              Shop
              <span className="text-sm">▼</span>
            </button>
            {isShopOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                <Link href="/shop/shop" className="block px-4 py-2 hover:bg-gray-100">
                  Shop
                </Link>
                <Link href="/shop/team" className="block px-4 py-2 hover:bg-gray-100">
                  Team
                </Link>
                <Link href="/shop/pricing" className="block px-4 py-2 hover:bg-gray-100">
                  Pricing
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link href="/pages" className="hover:text-blue-600">
            Pages
          </Link>
        </nav>

      
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
            <ShoppingCart/>
          </button>
        </div>

        
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

    
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="space-y-4 px-4 py-6 text-gray-700">
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsShopOpen(!isShopOpen)}
                className="w-full text-left hover:text-blue-600 flex items-center gap-1"
              >
                Shop
                <span className="text-sm">▼</span>
              </button>
              {isShopOpen && (
                <ul className="mt-2 bg-gray-50 rounded-lg shadow-inner">
                  <li>
                    <Link href="/shop/shop" className="block px-4 py-2 hover:bg-gray-100">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/team" className="block px-4 py-2 hover:bg-gray-100">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/pricing" className="block px-4 py-2 hover:bg-gray-100">
                      Pricing
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/about" className="block hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/pages" className="block hover:text-blue-600">
                Pages
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
