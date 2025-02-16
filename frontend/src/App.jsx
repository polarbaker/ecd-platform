import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Dashboard from './pages/Dashboard';
import Lessons from './pages/Lessons';
import Students from './pages/Students';
import './styles/fonts.css';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Dashboard', path: '/', icon: HomeIcon },
    { name: 'Lessons', path: '/lessons', icon: BookOpenIcon },
    { name: 'Students', path: '/students', icon: UserGroupIcon },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-earth-black/95 backdrop-blur-xl border-b border-earth-gray-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-earth-white text-xl font-semibold tracking-tight">
              ECD Platform
            </Link>
          </div>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium tracking-wide
                         transition-all duration-200 ${
                           isActive(item.path)
                             ? 'bg-earth-gray-800 text-earth-white'
                             : 'text-earth-gray-400 hover:text-earth-white hover:bg-earth-gray-800/50'
                         }`}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-earth-black">
      <Navigation />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
