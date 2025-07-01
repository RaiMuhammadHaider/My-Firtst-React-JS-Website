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
              <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                React development is carried out by passionate developers
              </h2>
              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo
                perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur!
              </p>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo
                possimus nesciunt dicta veniam aspernatur quam mollitia.
              </p>

              {/* Button */}
              <div className="mt-8">
                <NavLink
                  to="/contact"
                  className="inline-block bg-orange-600 text-white text-md font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-700 transition duration-300"
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
