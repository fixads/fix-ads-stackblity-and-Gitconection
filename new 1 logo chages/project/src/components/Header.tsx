import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Logo from './ui/Logo';
import NavLink from './ui/NavLink';
import MobileMenu from './ui/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 flex-shrink-0 group"
            aria-label="Fix Ads Home"
          >
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <Link
              to="/faq"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              FAQ
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-primary-main hover:bg-primary-hover focus:ring-4 focus:ring-primary-light rounded-lg transition-colors"
            >
              Contact us
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        scrollToSection={scrollToSection}
      />
    </header>
  );
};

export default Header;