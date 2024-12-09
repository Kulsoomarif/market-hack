const Header2 = () => {
    return (
      <div className="min-h-screen bg-white">
        
        <nav className="flex justify-between items-center p-6 bg-white shadow-md">
          <div className="text-lg font-bold">Bandage</div>
          <ul className="hidden md:flex space-x-6 text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/product" className="hover:text-blue-600">Product</a></li>
            <li><a href="/pricing" className="hover:text-blue-600">Pricing</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
          <div className="hidden md:flex space-x-4">
            <a href="/login" className="text-blue-600 hover:underline">Login/SignUp</a>
            <a
              href="/team"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Become a member
            </a>
          </div>
        </nav>
        </div>
        )
        }
        export default Header2