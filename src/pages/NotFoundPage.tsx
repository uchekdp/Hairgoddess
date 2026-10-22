import React from 'react';
import { Link } from '../context/RouterContext';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-md mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] block mb-3">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-light text-[#28252A] tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-600 mb-8 leading-relaxed">
          The page you requested could not be located. Please check the URL or return to our homepage
          to explore our salon services and studio offerings.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
        >
          <Home className="w-4 h-4 text-[#C6A15B]" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};
