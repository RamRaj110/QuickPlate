import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            About <span className="text-orange-500">My Restaurant</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Your favorite food, delivered fast at your door.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              To elevate the quality and convenience of food delivery. We believe that a great meal has the power to bring people together, and we're dedicated to making that experience accessible to everyone, everywhere. We partner with the best local restaurants to ensure a diverse menu of high-quality options.
            </p>
          </div>
          <div className="p-4">
             <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Team" className="rounded-lg shadow-2xl"/>
          </div>
        </div>

         <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-orange-500">Speedy Delivery</h3>
                    <p className="mt-2 text-gray-600">Get your food delivered in the blink of an eye, always hot and fresh.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-orange-500">Wide Variety</h3>
                    <p className="mt-2 text-gray-600">From local delicacies to international cuisines, we have it all.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-orange-500">Trusted Quality</h3>
                    <p className="mt-2 text-gray-600">We partner with top-rated restaurants to ensure the best quality.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
