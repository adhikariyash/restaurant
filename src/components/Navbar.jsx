import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu and enable scroll
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Handle showing/hiding navbar on scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll down
      setShowNavbar(false);
    } else {
      // Scroll up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-2 px-4 md:px-8">
        <a href="#home" className="flex items-center">
          <img
            src="/xrestro.png"
            alt="XRestro Logo"
            className="h-16 md:h-20 rounded-full w-16 md:w-20 object-cover mr-3"
          />
          <span className="text-xl md:text-2xl font-bold text-orange-400">XRestro</span>
        </a>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex font-medium text-lg md:text-xl space-x-7">
          <li>
            <a
              href="#home"
              className="text-gray-600 hover:text-black hover:border-l-4 hover:border-orange-500 border-l-4 rounded-full p-1 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="text-gray-600 hover:text-black hover:border-l-4 hover:border-orange-500 p-1 rounded-full border-l-4 transition"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="text-gray-600 hover:text-black hover:border-l-4 hover:border-orange-500 p-1 border-l-4 rounded-full transition"
            >
              Contacts
            </a>
          </li>
          <li>
            <a
              href="#mobile-app"
              className="text-gray-600 hover:text-black hover:border-l-4 hover:border-orange-500 p-1 rounded-full border-l-4 transition"
            >
              Mobile App
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Slide-In */}
      <div
        className={`fixed top-0 right-0 w-64 md:w-72 bg-white overflow-hidden shadow-lg rounded-lg transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-bold text-orange-400">XRestro</span>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center space-y-6 font-medium text-lg md:text-xl p-4">
          <li>
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-800 transition"
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="text-gray-600 hover:text-gray-800 transition"
              onClick={closeMobileMenu}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="text-gray-600 hover:text-gray-800 transition"
              onClick={closeMobileMenu}
            >
              Contacts
            </a>
          </li>
          <li>
            <a
              href="#mobile-app"
              className="text-gray-600 hover:text-gray-800 transition"
              onClick={closeMobileMenu}
            >
              Mobile App
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;