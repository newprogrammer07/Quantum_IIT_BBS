import React, { useState, useEffect } from 'react';

const Header = ({ onGetStartedClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  
  const handleDemoClick = () => {
      closeMenu();
      onGetStartedClick();
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-brand-orange">Q</span>UANTUM
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#capabilities" className="text-brand-light-gray hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-brand-light-gray hover:text-white transition-colors">About</a>
            <a href="#insights" className="text-brand-light-gray hover:text-white transition-colors">Insights</a>
            <a href="#testimonials" className="text-brand-light-gray hover:text-white transition-colors">Testimonials</a>
          </nav>
          <div className="hidden md:block">
            <button onClick={onGetStartedClick} className="bg-brand-orange text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
              Request Demo
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-brand-dark z-30 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <a href="#capabilities" onClick={closeMenu} className="text-brand-light-gray hover:text-white transition-colors">Features</a>
          <a href="#about" onClick={closeMenu} className="text-brand-light-gray hover:text-white transition-colors">About</a>
          <a href="#insights" onClick={closeMenu} className="text-brand-light-gray hover:text-white transition-colors">Insights</a>
          <a href="#testimonials" onClick={closeMenu} className="text-brand-light-gray hover:text-white transition-colors">Testimonials</a>
           <button onClick={handleDemoClick} className="bg-brand-orange text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity mt-4">
            Request Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;