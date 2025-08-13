import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
      <div className="py-16 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-12 md:space-y-0 md:flex md:items-center md:gap-12">
            {/* Image Section */}
            <div className="md:w-5/12 lg:w-5/12">
              <img
                src="https://www.developernation.net/static/1059d00476e8a20f2daee4dbdb7bc256/71d4d/image2-5.webp"
                alt="About us"
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-7/12 lg:w-6/12">
              <p className="text-orange-600 font-semibold uppercase tracking-wide text-sm">
                Who We Are
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl leading-snug">
                React development powered by passion, creativity, and innovation
              </h2>

              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                We are a team of developers committed to building high-quality, scalable, and visually appealing web
                applications. From concept to deployment, we blend creativity with technical expertise.
              </p>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                Every project we take on is a chance to push boundaries, challenge norms, and deliver solutions that
                truly make a difference for businesses and users alike.
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 text-xl mr-3">✔</span>
                  High-performance and scalable web applications
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 text-xl mr-3">✔</span>
                  Mobile-friendly and responsive designs
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 text-xl mr-3">✔</span>
                  Continuous support and improvements
                </li>
              </ul>

              {/* Quote / Testimonial */}
              <div className="mt-8 p-5 bg-white border-l-4 border-orange-500 rounded-lg shadow-sm italic text-gray-600">
                "Our mission is simple: build products that people love to use and developers love to create."
              </div>

              {/* Button */}
              <div className="mt-8">
                <NavLink
                  to="/contact"
                  className="inline-block bg-orange-600 text-white text-md font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-200 transition duration-300"
                >
                  Go to Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
