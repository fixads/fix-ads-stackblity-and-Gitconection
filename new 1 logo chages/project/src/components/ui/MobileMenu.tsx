import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu = ({ isOpen, onClose, scrollToSection }: MobileMenuProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => {
                  navigate('/');
                  onClose();
                }}
                className="block w-full text-left py-2 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-left py-2 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                Solutions
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('results')}
                className="block w-full text-left py-2 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <Link
                to="/faq"
                className="block py-2 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={onClose}
              >
                FAQ
              </Link>
            </li>
          </ul>
          
          <div className="mt-8">
            <Link
              to="/contact"
              className="block w-full py-3 px-4 text-center text-white bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              onClick={onClose}
            >
              Contact us
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;