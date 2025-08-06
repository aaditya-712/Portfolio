import React from 'react';
import { Link } from 'react-router-dom'; // Only needed if using react-router
import { Ghost } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-4">
      <div className="glass-card max-w-xl text-center p-10 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-md">
            <Ghost className="h-10 w-10 text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-extrabold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
