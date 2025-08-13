import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white shadow-inner border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto p-6 lg:py-10">
        
        {/* Top Section */}
        <div className="md:flex md:justify-between items-center">
          
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center group">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="h-16 transition-transform duration-300 group-hover:scale-105"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm text-gray-600">
            
            {/* Resources */}
            <div>
              <h2 className="mb-4 font-bold text-gray-800 uppercase tracking-wide">Resources</h2>
              <ul>
                <li className="mb-2">
                  <Link to="/" className="hover:text-orange-700 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-orange-700 transition">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-4 font-bold text-gray-800 uppercase tracking-wide">Follow Me</h2>
              <ul>
                <li className="mb-2">
                  <a
                    href="https://github.com/RaiMuhammadHaider"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-700 transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/raimuahmmadhaider/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-700 transition"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-4 font-bold text-gray-800 uppercase tracking-wide">Legal</h2>
              <ul>
                <li className="mb-2">
                  <Link to="/privacy" className="hover:text-orange-700 transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-orange-700 transition">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="text-sm text-gray-500">
            © 2025{" "}
            <a href="https://github.com/RaiMuhammadHaider" className="hover:underline text-orange-600">
              Rai Muhammad Haider
            </a>{" "}
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex mt-4 sm:mt-0 space-x-4">
            {/* GitHub Icon */}
            <a
              href="https://github.com/RaiMuhammadHaider"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-orange-600 hover:text-white transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.018.005 2.044.137 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.804 5.624-5.475 5.921.43.37.823 1.102.823 2.222v3.293c0 .318.192.693.8.576C20.565 22.094 24 17.597 24 12.297 24 5.67 18.627.297 12 .297z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/raimuahmmadhaider/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-orange-600 hover:text-white transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8.339 18.339H5.664V9.339h2.675v9zm-1.338-10.3c-.854 0-1.547-.693-1.547-1.547s.693-1.547 1.547-1.547c.854 0 1.547.693 1.547 1.547s-.693 1.547-1.547 1.547zM18.339 18.339h-2.675v-4.632c0-1.104-.021-2.526-1.539-2.526-1.541 0-1.777 1.204-1.777 2.448v4.71h-2.675V9.339h2.564v1.232h.036c.357-.675 1.229-1.387 2.529-1.387 2.704 0 3.203 1.779 3.203 4.092v5.063z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
