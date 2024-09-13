import React from 'react';

function Footer() {
  return (
    <footer className="bg-black rounded-full text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} XRestrodinne. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
