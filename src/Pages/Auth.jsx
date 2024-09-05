import React from 'react';
import { Link } from 'react-router-dom';

function Auth() {
  return (
    <div className="flex h-screen w-full justify-center items-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md flex gap-8">
        <Link
          to="signup"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
        >
          Signup
        </Link>
        <Link
          to="signin"
          className="px-6 py-3 bg-gray-600 text-white font-semibold rounded hover:bg-gray-700 transition duration-300"
        >
          Signin
        </Link>
      </div>
    </div>
  );
}

export default Auth;
