import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-red-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264305-7e2764da873b?auto=format&fit=crop&q=80')] opacity-10 bg-center bg-cover" />
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-12 md:py-16">
          {/* Content */}
          <div className="text-white space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Digital Agency for
              <span className="block text-yellow-400">Performance Marketing</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0">
              We implement marketing strategies with a clear purpose: to achieve your goals and drive meaningful results.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[140%] aspect-square">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-full animate-spin-slow opacity-20" />
            </div>
            <img
              src="/laptop-social.png"
              alt="Social Media Marketing"
              className="relative z-10 w-full max-w-2xl mx-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;