import React from 'react';

const Shimmer = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
        <div className="w-full sm:w-1/2 h-12 bg-gray-200 rounded-xl"></div>
        <div className="flex gap-2">
          <div className="w-24 h-12 bg-gray-200 rounded-xl"></div>
          <div className="w-28 h-12 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {Array(9).fill("").map((_, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-40 bg-gray-200"></div>
            <div className="p-4">
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;