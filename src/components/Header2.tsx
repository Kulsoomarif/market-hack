"use client";

import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"; // Adjust this path as needed
import { ShoppingCart, Heart, Search, Menu } from "lucide-react"; // Ensure lucide-react is installed

const Header2 = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <div className="text-lg font-bold">Bandage</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li>
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="/product" className="hover:text-blue-600">
              Product
            </a>
          </li>
          <li>
            <a href="/pricing" className="hover:text-blue-600">
              Pricing
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex space-x-4">
          <a href="/login" className="text-blue-600 hover:underline">
            Login/SignUp
          </a>
          <a
            href="/team"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Become a member
          </a>
          <Search />
          <Heart />
          <ShoppingCart />
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <SmallScreenMenu />
        </div>
      </nav>
    </header>
  );
};

const SmallScreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="text-gray-600 p-2"
          aria-label="Open Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4">
        <div className="space-y-4">
          <a
            href="/"
            className="block text-gray-600 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/product"
            className="block text-gray-600 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Product
          </a>
          <a
            href="/pricing"
            className="block text-gray-600 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a
            href="/contact"
            className="block text-gray-600 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <div className="pt-4 border-t border-gray-200">
            <a
              href="/login"
              className="block text-blue-600 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Login/SignUp
            </a>
            <a
              href="/team"
              className="block px-4 py-2 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Become a member
            </a>
          </div>
          <div className="flex space-x-4 pt-4">
            <Search className="text-gray-600" />
            <Heart className="text-gray-600" />
            <ShoppingCart className="text-gray-600" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Header2;
