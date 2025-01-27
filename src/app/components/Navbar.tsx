"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-5">
        {/* Search Icon */}
        <button
          aria-label="Search"
          className="text-gray-600 hover:text-gray-900 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 17a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35"
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="text-lg font-serif font-semibold text-gray-900">
          <Link href="/">Avion</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <button
            aria-label="Cart"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l1 5h13l1-5h2M16 16a3 3 0 11-6 0M6 6h12"
              />
            </svg>
          </button>

          {/* Profile Icon */}
          <Link href="/login" aria-label="Profile">
            <button className="text-gray-600 hover:text-gray-900 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3s-4.5 2-4.5 4.5S9.5 12 12 12zM6 20a6 6 0 0112 0H6z"
                />
              </svg>
            </button>
          </Link>

          {/* Hamburger Menu Icon (Mobile) */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex justify-center items-center md:space-x-8 space-y-4 md:space-y-0 text-center pb-4 md:pb-0`}
      >
        {[
          "Plant pots",
          "Ceramics",
          "Tables",
          "Chairs",
          "Crockery",
          "Tableware",
          "Cutlery",
        ].map((item) => (
          <a
            key={item}
            href={`/Products/page.tsx${item.toLowerCase().replace(" ", "-")}`}
            className="text-sm font-light text-gray-700 hover:text-gray-900 transition-all px-2"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
