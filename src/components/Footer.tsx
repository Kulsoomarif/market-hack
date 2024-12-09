export default function Footer() {
    return (
      <footer className="bg-white text-black py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
        
          <div>
            <h3 className="font-semibold text-lg mb-4">Company Info</h3>
            <p className="mb-4">About Us</p>
            <p className="mb-4">Career</p>
            <p className="mb-4">We are Hiring</p>
            <p className="mb-4">Blog</p>
                      </div>
        
        
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <p className="mb-4">About Us</p>
            <p className="mb-4">Career</p>
            <p className="mb-4">We are Hiring</p>
            <p className="mb-4">Blog</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <p className="mb-4">Business Marketing</p>
            <p className="mb-4">User Anlytic</p>
            <p className="mb-4">Live Chat</p>
            <p className="mb-4">Unlimited Support</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <p className="mb-4">IOS And Android</p>
            <p className="mb-4">Watch and Demo</p>
            <p className="mb-4">Customer</p>
            <p className="mb-4">API</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md text-black outline-black w-full"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-gray-200"
              >
              </button>
            </form>

            </div>
        </div>
      </footer>
    );
  }
  