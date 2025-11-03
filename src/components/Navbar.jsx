import React from 'react';
import { Activity, Brain, Mail, Info } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { href: '#home', label: 'Home', icon: Activity },
    { href: '#about', label: 'About the Model', icon: Brain },
    { href: '#predict', label: 'Prediction', icon: Info },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-pink-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-blue-400" />
          <span className="font-semibold text-slate-800">Breast Cancer Prediction</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#predict"
          className="md:inline-flex hidden px-4 py-2 rounded-md text-white bg-gradient-to-r from-pink-500 to-blue-500 shadow-sm hover:shadow-pink-200/60 transition-shadow"
        >
          Try Prediction
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
