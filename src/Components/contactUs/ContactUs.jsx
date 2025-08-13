import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side: Info */}
        <div className="bg-white p-10 rounded-2xl shadow-2xl border-t-8 border-orange-500">
          <h2 className="text-4xl font-extrabold text-orange-700 mb-3">Let’s Talk</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Got a question, idea, or just want to say hello?  
            We’d love to hear from you.
          </p>

          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-700">
                📍
              </div>
              <div>
                <p className="text-gray-700 font-semibold text-lg">Location</p>
                <p className="text-gray-500 text-sm">Lahore, Pakistan</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-700">
                📞
              </div>
              <div>
                <p className="text-gray-700 font-semibold text-lg">Phone</p>
                <p className="text-gray-500 text-sm">+92 311 477 3424</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-700">
                📧
              </div>
              <div>
                <p className="text-gray-700 font-semibold text-lg">Email</p>
                <p className="text-gray-500 text-sm">raimuhammadalihaider@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl border-l-8 border-orange-500 space-y-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Send a Message</h3>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 font-medium"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 font-medium"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 font-medium"
          />
          <textarea
            rows="4"
            placeholder="Your Message..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 font-medium resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
