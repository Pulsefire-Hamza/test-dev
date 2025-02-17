import React from 'react';

const WhyWork = () => {
  const features = [
    {
      title: "Experienced Team",
      description:
        "Our tight-knit team of developers has years of experience under their belts. We've been around the block and know what it takes to help startups and established companies succeed.",
      icon: "🧩", // Placeholder for the puzzle piece icon
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your vision is our mission. We build strong relationships with our clients, working closely with you to make sure your project is a smashing success.",
      icon: "🤝", // Placeholder for handshake icon
    },
    {
      title: "Innovation and Creativity",
      description:
        "We love a good challenge and are always on the lookout for exciting projects. Our passion is finding creative solutions to your tech problems.",
      icon: "💡", // Placeholder for the lightbulb icon
    },
    {
      title: "Local Presence",
      description:
        "As a Pakistan-based company, we get the local market and are stoked to work with businesses in our community and beyond.",
      icon: "📍", // Placeholder for location icon
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">
          Why Work With Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg p-8 flex items-start space-x-4 transition-transform duration-300 ease-in-out transform hover:scale-105 opacity-0 animate-fade-in"
            >
              <div className="text-5xl">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles for Animation */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s forwards;
        }

        /* Delay animations for each feature for a staggered effect */
        .animate-fade-in:nth-child(1) { animation-delay: 0.1s; }
        .animate-fade-in:nth-child(2) { animation-delay: 0.2s; }
        .animate-fade-in:nth-child(3) { animation-delay: 0.3s; }
        .animate-fade-in:nth-child(4) { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
};

export default WhyWork;
