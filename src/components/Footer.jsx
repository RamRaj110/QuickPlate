import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-8">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4">My Restaurant</h3>
            <p className="text-gray-400">
              Bringing your favorite meals right to your doorstep. Quality and speed you can trust.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500">&copy; 2025 My Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;