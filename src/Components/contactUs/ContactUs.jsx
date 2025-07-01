import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Info */}
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-4xl font-bold text-orange-700 mb-4">Get in touch</h2>
          <p className="text-gray-600 text-lg mb-6">
            We’d love to hear from you! Fill in the form to start a conversation.
          </p>

          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-gray-700 font-medium">Acme Inc</p>
                <p className="text-gray-500 text-sm">123 Street, State, ZIP</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.516l1.13-2.257a1 1 0 011.21-.502l4.49 1.498a1 1 0 01.685.949V19a2 2 0 01-2 2h-1C9.72 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-gray-700 font-medium">Phone</p>
                <p className="text-gray-500 text-sm">+44 123 456 7890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-gray-700 font-medium">Email</p>
                <p className="text-gray-500 text-sm">info@acme.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl space-y-6">
          <h3 className="text-3xl font-bold text-gray-800">Contact Form</h3>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 font-medium"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 font-medium"
          />
          <input
            type="tel"
            placeholder="Telephone Number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 font-medium"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 font-medium resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
