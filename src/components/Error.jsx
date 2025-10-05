import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-8xl font-extrabold text-orange-500">
        {err.status || 'Oops!'}
      </h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        {err.statusText || 'Something went wrong'}
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <button className="mt-8 bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Error;