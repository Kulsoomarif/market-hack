import React from 'react';
import Image from "next/image";
import Header2 from "@/components/Header2";
import TopFooter from "@/components/TopFooter";
import Footer from "@/components/Footer";

const pricing = () => {
  return (
    <div>
      <Header2 />
      <div className="bg-gray-50 min-h-screen">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold">Simple Pricing</h1>
          <p className="mt-2 text-gray-600">
            <a href="/" className="text-blue-600 hover:underline">
              Home
            </a>{' '}
            &gt; Pricing
          </p>
        </header>

        <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 py-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">FREE</h2>
            <p className="text-4xl font-bold mb-4">$0</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>✔️ Unlimited product updates</li>
              <li>✔️ Unlimited projects</li>
              <li>✔️ 1GB cloud storage</li>
              <li>✔️ Email and community support</li>
            </ul>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Try for Free
            </button>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg transform scale-105">
            <h2 className="text-xl font-semibold mb-4">STANDARD</h2>
            <p className="text-4xl font-bold mb-4">
              $9.99<span className="text-lg">/month</span>
            </p>
            <ul className="space-y-2 mb-6">
              <li>✔️ Unlimited product updates</li>
              <li>✔️ Unlimited projects</li>
              <li>✔️ 10GB cloud storage</li>
              <li>✔️ Email and community support</li>
            </ul>
            <button className="w-full py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200">
              Try for Free
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">PREMIUM</h2>
            <p className="text-4xl font-bold mb-4">$19.99</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>✔️ Unlimited product updates</li>
              <li>✔️ Unlimited projects</li>
              <li>✔️ Unlimited cloud storage</li>
              <li>✔️ Email and community support</li>
            </ul>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Try for Free
            </button>
          </div>
        </section>

        <section className="text-center py-8 bg-gray-100">
          <h3 className="text-xl font-semibold mb-4">
            Trusted by over 4,000 big companies
          </h3>
          <div className="flex justify-center gap-6">
            <Image
              src="/logos/logo1.png"
              alt="Logo 1"
              width={100}
              height={40}
              className="h-10"
            />
            <Image
              src="/logos/logo2.png"
              alt="Logo 2"
              width={100}
              height={40}
              className="h-10"
            />
            <Image
              src="/logos/logo3.png"
              alt="Logo 3"
              width={100}
              height={40}
              className="h-10"
            />
            <Image
              src="/logos/logo4.png"
              alt="Logo 4"
              width={100}
              height={40}
              className="h-10"
            />
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h3 className="text-center text-2xl font-semibold mb-6">Pricing FAQs</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold">What is included in the free plan?</h4>
              <p className="text-gray-600">
                The free plan offers access to limited features such as 1GB cloud
                storage, unlimited updates, and community support.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold">Can I cancel anytime?</h4>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time without
                additional fees.
              </p>
            </div>
          </div>
        </section>
        <footer className="text-center py-8">
          <p className="text-sm text-gray-600">Start your 14 days free trial</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Twitter
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Instagram
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
      <TopFooter />
      <Footer />
    </div>
  );
};

export default pricing;




