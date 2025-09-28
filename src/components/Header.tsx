import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors duration-300"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium text-left"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium text-left"
              >
                Compétences
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium text-left"
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300 font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
