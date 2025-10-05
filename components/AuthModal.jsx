import React, { useState } from 'react';

const AuthModal = ({ onClose, onLoginSuccess }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isLoginView ? 'Logging in' : 'Signing up'} with:`, formData);
    // Simulate successful login
    onLoginSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-brand-gray border border-white/10 rounded-lg shadow-2xl w-full max-w-md p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-brand-light-gray hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">{isLoginView ? 'Welcome Back' : 'Create Account'}</h2>
            <p className="text-brand-light-gray mt-2">
                {isLoginView ? "Log in to access your dashboard." : "Get started with Quantum AI."}
            </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLoginView && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-light-gray mb-2">Name</label>
              <input type="text" name="name" id="name" required={!isLoginView} onChange={handleChange} value={formData.name} className="w-full bg-brand-dark border border-white/20 rounded-md py-2 px-4 text-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition outline-none" />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-light-gray mb-2">Email</label>
            <input type="email" name="email" id="email" required onChange={handleChange} value={formData.email} className="w-full bg-brand-dark border border-white/20 rounded-md py-2 px-4 text-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition outline-none" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-light-gray mb-2">Password</label>
            <input type="password" name="password" id="password" required onChange={handleChange} value={formData.password} className="w-full bg-brand-dark border border-white/20 rounded-md py-2 px-4 text-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition outline-none" />
          </div>
          <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
            {isLoginView ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-6">
          <button onClick={() => setIsLoginView(!isLoginView)} className="text-sm text-brand-light-gray hover:text-white transition-colors">
            {isLoginView ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;