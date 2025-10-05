import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 sm:p-12">
            <form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input type="text" id="name" placeholder="Your Name" className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input type="email" id="email" placeholder="you@example.com" className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea id="message" rows="4" placeholder="Your message..." className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition-all text-lg">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="p-8 sm:p-12 bg-gray-100">
            <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
            <p className="mt-4 text-gray-600">
              Our team is available to assist you.
            </p>
            <div className="mt-8 space-y-6">
              <p className="flex items-center">
                <span className="text-orange-500 mr-3 text-xl">📍</span>
                <span className="text-gray-700">123 Foodie Lane, Flavor Town, 54321</span>
              </p>
              <p className="flex items-center">
                <span className="text-orange-500 mr-3 text-xl">📞</span>
                <span className="text-gray-700">(123) 456-7890</span>
              </p>
              <p className="flex items-center">
                <span className="text-orange-500 mr-3 text-xl">✉️</span>
                <span className="text-gray-700">support@myrestaurant.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;