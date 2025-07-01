import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-t from-gray-100 to-white shadow-inner">
        <div className="max-w-screen-xl mx-auto p-6 lg:py-10">
          <div className="md:flex md:justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                  className="h-16"
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm text-gray-600">
              <div>
                <h2 className="mb-4 font-bold text-gray-800 uppercase">Resources</h2>
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
              <div>
                <h2 className="mb-4 font-bold text-gray-800 uppercase">Follow Us</h2>
                <ul>
                  <li className="mb-2">
                    <a
                      href="https://github.com/raimuhammadhaider"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-orange-700 transition"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <Link to="https://github.com/raimuhammadhaider" className="hover:text-orange-700 transition">
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 font-bold text-gray-800 uppercase">Legal</h2>
                <ul>
                  <li className="mb-2">
                    <Link to="https://github.com/raimuhammadhaider" className="hover:text-orange-700 transition">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="https://github.com/raimuhammadhaider" className="hover:text-orange-700 transition">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="flex flex-col sm:flex-row justify-between items-center">
            <span className="text-sm text-gray-500">
              © 2025{" "}
              <a href="#" className="hover:underline text-orange-600">
                Rai Muhammad Haider
              </a>{" "}
              . All Rights Reserved.
            </span>

            <div className="flex mt-4 sm:mt-0 space-x-4">
              {/* Example social icon using heroicons */}
              <a href="#" className="text-gray-500 hover:text-orange-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.55 9.95v-7.06h-2.4V12h2.4V9.77c0-2.38 1.42-3.7 3.6-3.7 1.04 0 2.13.18 2.13.18v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48V12h2.64l-.42 2.89h-2.22v7.06A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.05 9.05 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 0a4.48 4.48 0 0 0-4.37 5.48A12.94 12.94 0 0 1 1.64 1.15a4.48 4.48 0 0 0 1.39 6A4.38 4.38 0 0 1 .96 6v.06a4.48 4.48 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2.01.08 4.48 4.48 0 0 0 4.2 3.12A9 9 0 0 1 0 19.54a12.85 12.85 0 0 0 6.95 2" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10a9.96 9.96 0 0 0 6.84 9.54c.5.1.66-.22.66-.48 0-.24-.01-1.04-.01-1.88-2.78.6-3.37-1.16-3.37-1.16a2.65 2.65 0 0 0-1.1-1.45c-.9-.62.07-.6.07-.6a2.11 2.11 0 0 1 1.54 1.04 2.15 2.15 0 0 0 2.93.84 2.13 2.13 0 0 1 .63-1.34c-2.22-.25-4.56-1.11-4.56-4.95a3.88 3.88 0 0 1 1.04-2.7 3.6 3.6 0 0 1 .1-2.66s.84-.27 2.75 1.02a9.42 9.42 0 0 1 5 0c1.9-1.3 2.74-1.02 2.74-1.02a3.6 3.6 0 0 1 .1 2.66 3.87 3.87 0 0 1 1.03 2.7c0 3.85-2.34 4.69-4.57 4.94a2.4 2.4 0 0 1 .68 1.85c0 1.34-.01 2.42-.01 2.75 0 .27.17.59.68.48A10 10 0 0 0 12 2.04Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
