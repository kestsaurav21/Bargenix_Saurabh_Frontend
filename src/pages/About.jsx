import React from 'react';
import logo from "../assets/logo.avif";

const About = () => (
  <section id="about" className="bg-white py-16">
    <div className="container mx-auto px-6 text-center md:text-left md:flex md:items-center md:justify-between">
      {/* Content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-800">
          About Our Company
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          We are a team of passionate innovators dedicated to transforming customer engagement with cutting-edge AI solutions. Our chatbot technology empowers businesses to provide 24/7 assistance, improve customer satisfaction, and streamline operations.
        </p>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Since our inception, we've helped startups, SMBs, and enterprises leverage AI to achieve their goals efficiently and effectively.
        </p>
      </div>

      {/* Image */}
      <div className="mt-8 md:mt-0 md:w-1/2">
        <img
          src={logo}
          alt="About Us Illustration"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default About;
