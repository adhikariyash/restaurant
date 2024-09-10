import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="flex items-center">
          <img
            src="/xrestro.png"
            alt="XRestro Logo"
            className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-full mr-3"
          />
          <span className="text-xl md:text-2xl font-bold text-orange-400">XRestro</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
          <li><Link to="/menu" className="hover:text-orange-500">Menu</Link></li>
          <li><Link to="/contacts" className="hover:text-orange-500">Contacts</Link></li>
          <li><Link to="/mobile-app" className="hover:text-orange-500">Mobile App</Link></li>
          <li><Link to="/orders" className="hover:text-orange-500">Cart</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <span className="text-xl font-bold text-orange-400">XRestro</span>
          <button
            onClick={closeMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="p-6 space-y-6 text-lg font-medium">
          <li><Link to="/" className="block" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/menu" className="block" onClick={closeMobileMenu}>Menu</Link></li>
          <li><Link to="/contacts" className="block" onClick={closeMobileMenu}>Contacts</Link></li>
          <li><Link to="/mobile-app" className="block" onClick={closeMobileMenu}>Mobile App</Link></li>
          <li><Link to="/orders" className="block" onClick={closeMobileMenu}>Cart</Link></li>
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
