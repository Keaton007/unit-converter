import React from 'react';
import Link from 'next/link';

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/#converter-card', label: 'Converter' },
  { href: '/#popular-converters', label: 'Popular' },
  { href: '/converters', label: 'Playbooks' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
];

const trustLinks = [
  { href: '/contact', label: 'Contact' },
  { href: '/editorial', label: 'Editorial' },
  { href: '/advertising', label: 'Ad Policy' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <Link
          href="/"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="UnitFlow home"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden>
              <path
                fillRule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2h-.01z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">UnitFlow</h1>
            <p className="text-xs text-gray-500">Trusted Unit Converter</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#converter-card"
            className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm flex items-center space-x-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span>Start Converting</span>
          </Link>
        </nav>

        {/* Trust + contact quick links */}
        <div className="hidden md:flex items-center space-x-3 text-sm text-gray-600">
          {trustLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-indigo-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile nav */}
        <div className="md:hidden w-full border-t border-gray-200 pt-3">
          <nav className="flex flex-wrap gap-2 text-sm">
            {[...primaryLinks, ...trustLinks].map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                className="flex-1 min-w-[45%] text-center px-3 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
