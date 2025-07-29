import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Code, Users, BookOpen, MessageCircle, Calendar} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: 'Mentors', path: '/mentors', icon: Users },
    { name: 'Programs', path: '/programs', icon: BookOpen },
    { name: 'Curriculum', path: '/curriculum', icon: BookOpen },
    { name: 'Events', path: '/events', icon: Calendar },
    // { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Contact', path: '/contact', icon: MessageCircle },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <button 
              onClick={() => navigate('/')}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              DevMentors
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => navigate('/join')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
            >
              Join Free
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium
                    ${isActive ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              );
            })}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <button 
                onClick={() => {
                  navigate('/join');
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
              >
                Join Free
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;