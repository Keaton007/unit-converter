import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              UnitConverter
            </h1>
            <span className="ml-2 text-sm text-gray-500 hidden sm:inline">
              Fast & Accurate Conversions
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Privacy
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
