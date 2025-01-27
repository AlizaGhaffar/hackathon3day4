import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D2B45] text-white text-sm">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">New arrivals</a></li>
            <li><a href="/" className="hover:underline">Best sellers</a></li>
            <li><a href="/" className="hover:underline">Recently viewed</a></li>
            <li><a href="/" className="hover:underline">Popular this week</a></li>
            <li><a href="/" className="hover:underline">All products</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Crockery</a></li>
            <li><a href="/" className="hover:underline">Furniture</a></li>
            <li><a href="/" className="hover:underline">Homeware</a></li>
            <li><a href="/" className="hover:underline">Plant pots</a></li>
            <li><a href="/" className="hover:underline">Chairs</a></li>
          </ul>
        </div>

        {/* Our company */}
        <div>
          <h3 className="font-semibold mb-4">Our company</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">About us</a></li>
            <li><a href="/" className="hover:underline">Vacancies</a></li>
            <li><a href="/" className="hover:underline">Contact us</a></li>
            <li><a href="/" className="hover:underline">Privacy</a></li>
            <li><a href="/" className="hover:underline">Returns policy</a></li>
          </ul>
        </div>

        {/* Mailing List */}
        <div>
          <h3 className="font-semibold mb-4">Join our mailing list</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-2 rounded-l-md bg-[#3E3C61] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-white text-[#2D2B45] px-4 py-2 rounded-r-md font-semibold">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>&copy; 2022 Avion LTD</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Skype" className="hover:text-white">
              <i className="fab fa-skype"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-white">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
