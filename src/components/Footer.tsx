import React from 'react';
import Link from 'next/link';

const resourceColumns = [
  {
    title: 'Converters',
    links: [
      { href: '/#converter-card', label: 'Universal Converter' },
      { href: '/#popular-converters', label: 'Popular Conversions' },
      { href: '/converters', label: 'Converter Playbooks' },
      { href: '/guides', label: 'Measurement Guides' },
      { href: '/guides/length', label: 'Length Guide' },
      { href: '/guides/temperature', label: 'Temperature Guide' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About UnitFlow' },
      { href: '/contact', label: 'Contact Support' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Use' },
    ],
  },
  {
    title: 'Trust Center',
    links: [
      { href: '/editorial', label: 'Editorial Guidelines' },
      { href: '/advertising', label: 'Advertising Policy' },
      { href: '/guides#quality', label: 'Quality Commitments' },
      { href: '/#trust-signals', label: 'Why People Trust Us' },
    ],
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2h-.01z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">UnitFlow</span>
                <p className="text-sm text-gray-500">Codtive LLC</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Trusted by students, engineers, chefs, and travelers for accurate conversions and bite-sized education.
            </p>
            <p className="text-sm text-gray-500">Email: <a href="mailto:keaton@codtive.com" className="text-indigo-600 hover:text-indigo-800">keaton@codtive.com</a></p>
          </div>

          {resourceColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase mb-3">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-600 hover:text-indigo-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {currentYear} Codtive LLC. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-indigo-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-indigo-600 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
