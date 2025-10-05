import React, { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';
import AuthModal from './components/AuthModal.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Dashboard from './pages/Dashboard.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [exitingLoader, setExitingLoader] = useState(false);
  const [route, setRoute] = useState(window.location.pathname);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    // Loader logic
    const mainTimer = setTimeout(() => {
      setExitingLoader(true);
      document.body.style.overflow = 'auto';
      const exitTimer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(exitTimer);
    }, 1500);
    document.body.style.overflow = 'hidden';

    // Router logic
    const handlePopState = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      clearTimeout(mainTimer);
      document.body.style.overflow = 'auto';
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setRoute(path);
  };

  const handleLoginSuccess = () => {
    setIsAuthModalOpen(false);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  if (loading) {
    return <Loader exiting={exitingLoader} />;
  }

  return (
    <div className="bg-brand-dark">
      {isAuthModalOpen && <AuthModal onClose={closeAuthModal} onLoginSuccess={handleLoginSuccess} />}
      
      {route === '/' && <LandingPage onGetStartedClick={openAuthModal} />}
      {route === '/dashboard' && <Dashboard onLogout={handleLogout} />}
    </div>
  );
};

export default App;