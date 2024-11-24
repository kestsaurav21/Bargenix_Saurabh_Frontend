import React from 'react';
import logo from "../assets/logo.avif";


const Hero = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
      <div className="text-center md:text-left md:max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
          Revolutionize Your Customer Engagement
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Our AI-powered chatbot provides 24/7 support, answers queries, and elevates customer satisfaction.
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-blue-500 text-blue-500 py-3 px-6 rounded-lg hover:bg-blue-500 hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:max-w-md">
        <img
          src={logo}
          alt="Chatbot Illustration"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default Hero;
