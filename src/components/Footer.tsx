import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2h-.01z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900">UnitFlow</span>
          </div>
          <p className="text-gray-600 mb-4">The most intuitive unit converter for all your measurement needs.</p>
          
          {/* Legal Links */}
          <div className="flex justify-center items-center space-x-4 mb-4 text-sm">
            <Link 
              href="/privacy" 
              className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              href="/terms" 
              className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>
          
          {/* Copyright Notice */}
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Codtive LLC. All rights reserved.
          </p>
          
          <div className="flex justify-center space-x-6 text-gray-500 hidden">
            {/* Socials hidden for now; keeping semantic placeholders for X, Facebook, Instagram */}
            <span aria-hidden>
              <svg className="w-6 h-6" />
            </span>
            <span aria-hidden>
              <svg className="w-6 h-6" />
            </span>
            <span aria-hidden>
              <svg className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
