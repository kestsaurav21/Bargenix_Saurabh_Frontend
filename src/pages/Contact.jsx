import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-gray-600 text-lg">
            We'd love to hear from you! Reach out with any questions, feedback, or partnership inquiries.
          </p>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <form>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Full Name"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Or email us at: <a href="mailto:support@chatbot.com" className="text-blue-500 hover:underline">support@chatbot.com</a>
          </p>
          <p className="text-gray-600 text-lg">
            Call us at: <span className="text-blue-500">+1 (123) 456-7890</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
