import React from 'react';
import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get in touch today!</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="mt-6 text-gray-600 space-y-2">
          <p>Phone : +451 215 215</p>
          <p>Fax : +451 215 215</p>
        </div>
        {/* Image beside text */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-x-8">
          <div className="text-left md:w-1/2">
            <p className="text-gray-600">
              Reach out to us on social media or through the provided phone and fax numbers!
            </p>
            <div className="flex justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <Image 
              src="/shop1.png" 
              alt="shopping"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Business Ideas Section */}
      <section className="bg-gray-100 py-16">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800">We help small businesses with big ideas</h3>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24">
          {/* Contact Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-blue-600 text-3xl mb-4">
              <i className="fas fa-phone"></i>
            </div>
            <p className="text-gray-600">georgia.young@example.com</p>
            <p className="text-gray-600">georgia.young@ple.com</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Submit Request
            </button>
          </div>

          {/* Contact Card 2 */}
          <div className="bg-blue-600 text-white shadow-md rounded-lg p-6 text-center">
            <div className="text-3xl mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p>georgia.young@example.com</p>
            <p>georgia.young@ple.com</p>
            <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-200">
              Submit Request
            </button>
          </div>

          {/* Contact Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-blue-600 text-3xl mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <p className="text-gray-600">georgia.young@example.com</p>
            <p className="text-gray-600">georgia.young@ple.com</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Submit Request
            </button>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="text-center py-16">
        <h3 className="text-xl text-gray-600 mb-4">We cannot wait to meet you</h3>
        <h2 className="text-3xl font-bold text-gray-800">Lets Talk</h2>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Try it free now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Bandage. All rights reserved.
      </footer>
    </div>
  );
};

export default page;
