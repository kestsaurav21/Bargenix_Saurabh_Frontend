import React from 'react';
import { featureList } from '../utils/featureList';

const Features = () => {

  return (
    <section id="features" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Key Features</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Discover how our chatbot transforms customer engagement.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
