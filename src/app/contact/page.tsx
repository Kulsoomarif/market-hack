import React from "react";
import Image from "next/image";
import Header2 from "@/components/Header2";
import TopFooter from "@/components/TopFooter";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Header2 />
      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 text-center bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch Today!</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
          We know how large objects will act, but things on a small scale can be unpredictable. Let's connect and discuss!
        </p>
        <div className="mt-6 text-gray-600 space-y-2 text-lg">
          <p>Phone: <a href="tel:+451215215" className="text-blue-600 hover:underline">+451 215 215</a></p>
          <p>Fax: <a href="fax:+451215215" className="text-blue-600 hover:underline">+451 215 215</a></p>
        </div>

        {/* Image beside text */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-8">
          <div className="text-left md:w-1/2 space-y-4">
            <p className="text-gray-600 text-lg">
              Reach out to us on social media or through the provided contact information!
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-2xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/shop1.png" 
              alt="Shopping"
              width={800}
              height={800}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      
      {/* Business Ideas Section */}
      <section className="bg-gray-100 py-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800">We Help Small Businesses with Big Ideas</h3>
          <p className="text-gray-600 mt-4">Get personalized support for your business growth!</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24">
          {/* Contact Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-phone"></i>
            </div>
            <p className="text-gray-600">georgia.young@example.com</p>
            <p className="text-gray-600">georgia.young@ple.com</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Submit Request
            </button>
          </div>

          {/* Contact Card 2 */}
          <div className="bg-blue-600 text-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p>georgia.young@example.com</p>
            <p>georgia.young@ple.com</p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-200">
              Submit Request
            </button>
          </div>

          {/* Contact Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <p className="text-gray-600">georgia.young@example.com</p>
            <p className="text-gray-600">georgia.young@ple.com</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Submit Request
            </button>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h3 className="text-xl mb-4">We Cannot Wait to Meet You</h3>
        <h2 className="text-4xl font-bold">Let's Talk</h2>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-200">
          Try It Free Now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-gray-50">
        &copy; {new Date().getFullYear()} Bandage. All rights reserved.
      </footer>
      <TopFooter />
      <Footer />
    </div>
  );
};

export default page;
