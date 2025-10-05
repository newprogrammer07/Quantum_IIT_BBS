import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <footer className="bg-brand-gray border-t border-white/10 pt-12 pb-8">
      <div className="container mx-auto px-6 text-brand-light-gray">
        <div className="text-center">
          <div className="text-3xl font-bold tracking-wider mb-4">
            <span className="text-brand-orange">Q</span>UANTUM
          </div>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 my-6">
            <a href="#capabilities" className="hover:text-white transition-colors">Features</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#insights" className="hover:text-white transition-colors">Insights</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#careers" className="hover:text-white transition-colors">Careers</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        {/* Careers Section */}
        <div id="careers" className="max-w-2xl mx-auto mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Team</h3>
          <p className="text-brand-light-gray mb-8">
            We're always looking for talented individuals to help us pioneer the future of business intelligence. If you're passionate about data and innovation, we'd love to hear from you.
          </p>
          <a 
            href="mailto:careers@quantum.ai" 
            className="inline-block bg-brand-orange text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact HR
          </a>
        </div>

        {/* Contact Form Section */}
        <div id="contact" className="max-w-2xl mx-auto mt-16 text-left">
          <h3 className="text-3xl font-bold text-center mb-8">Get in Touch</h3>
          {submitted ? (
            <div className="bg-brand-dark p-8 rounded-lg border border-green-500/50 text-center transition-opacity duration-500">
              <p className="text-xl text-green-400">Thank you for your message!</p>
              <p className="text-brand-light-gray mt-2">We'll get back to you soon.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-light-gray mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-dark border border-white/20 rounded-md py-2 px-4 text-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-light-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-dark border border-white/20 rounded-md py-2 px-4 text-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-brand-light-gray mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark border border-white/20 rounded-md py-2 px-4 text-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-light-gray mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark border border-white/20 rounded-md py-2 px-4 text-white focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition outline-none resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-brand-orange text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Demo Button */}
        <div className="text-center my-12">
          <a 
            href="mailto:demo@quantum.ai" 
            className="inline-block bg-brand-orange text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
          >
            Request Demo
          </a>
        </div>

        <div className="text-center pt-16 mt-16 border-t border-white/10">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.facebook.com/quantumai" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/quantumai" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="X (Twitter)"
              className="hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/quantumai" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a 
              href="https://github.com/quantumai" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Quantum AI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;