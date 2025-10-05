import React from 'react';

// Simplified SVG icons for demonstration purposes
const techLogos = {
  aws: (
    <svg viewBox="0 0 128 128" fill="currentColor"><path d="M115.15 76.15c0 8.5-1.4 15.8-4.21 21.89-2.81 6.1-6.71 10.7-11.72 13.9-5 3.2-10.71 4.8-17.12 4.8-8.5 0-15.11-2.4-19.82-7.21-4.71-4.81-7.01-11.22-7.01-19.22 0-8.5 2.1-15.31 6.31-20.52s9.92-7.81 17.12-7.81c6.7 0 12.11 2.2 16.21 6.6 4.1 4.41 6.21 10.41 6.21 18.01zm-50.63 26.69c-2.4 2.8-5.3 4.2-8.71 4.2-4.1 0-7.2-1.7-9.31-5-2.1-3.3-3.1-8.1-3.1-14.4 0-5.8 1.1-10.51 3.3-14.11 2.2-3.6 5.3-5.4 9.31-5.4s7.2 2 9.41 6c2.2 4 3.3 9.6 3.3 16.8.01 6.2-1.09 11-3.2 14.3zM25.79 31.9c.7 2.1.7 4.9.1 8.4l-3.3 17.1c-1.2 5.6-2.9 9.3-5.1 11.2-2.2 1.9-4.8 2.8-7.81 2.8-3.1 0-5.6-.8-7.51-2.4-1.9-1.6-2.8-3.9-2.8-6.9 0-3.9 1.6-8.91 4.8-15.02L12.45 28c3-6.1 4.7-9.9 5-11.4.3-1.5.2-2.7-.1-3.6s-1-1.3-2-1.3c-1.3 0-2.8.6-4.5 1.8l-2.6-4.5c1.9-1.3 4-2 6.3-2 3.9 0 6.7 1.4 8.3 4.2 1.6 2.81 2 6.41 1.1 10.81z"/></svg>
  ),
  azure: (
     <svg viewBox="0 0 128 128" fill="currentColor"><path d="M79.5 119.2 34.6 90.3 3.1 90.4 46.1 27.9 74 5.3l50.9 66.2zM38.1 84.9 74 109.9 74 58.1z"/></svg>
  ),
  gcp: (
     <svg viewBox="0 0 128 128" fill="currentColor"><path d="M64 101.4c-19.1 0-35.1-12.8-39.8-30.2h79.6c-4.7 17.4-20.7 30.2-39.8 30.2zM98.8 63.2H29.2c-1.2-4.1-1.8-8.4-1.8-12.8 0-21.8 17.8-39.6 39.6-39.6s39.6 17.8 39.6 39.6c0 4.4-.6 8.7-1.8 12.8z"/></svg>
  ),
  snowflake: (
     <svg viewBox="0 0 128 128" fill="currentColor"><path d="M110.3 72.3 84.1 57.6l26.2-14.7c2.2-1.2 2.9-4 1.7-6.2l-8.8-15.2c-1.2-2.2-4-2.9-6.2-1.7L71 34.5V4.8c0-2.6-2.1-4.8-4.8-4.8h-4.5c-2.6 0-4.8 2.1-4.8 4.8v29.7L31 19.8c-2.2-1.2-5-0.5-6.2 1.7L16 36.7c-1.2 2.2-0.5 5 1.7 6.2l26.2 14.7-26.2 14.7c-2.2 1.2-2.9 4-1.7 6.2l8.8 15.2c1.2 2.2 4 2.9 6.2 1.7l26.2-14.7v29.7c0 2.6 2.1 4.8 4.8 4.8h4.5c2.6 0 4.8-2.1 4.8-4.8V92.1l26.2 14.7c2.2 1.2 5 0.5 6.2-1.7l8.8-15.2c1.2-2.2 0.5-5-1.7-6.2zM64 78.4c-8 0-14.4-6.5-14.4-14.4s6.5-14.4 14.4-14.4 14.4 6.5 14.4 14.4-6.4 14.4-14.4 14.4z"/></svg>
  ),
  databricks: (
    <svg viewBox="0 0 128 128" fill="currentColor"><path d="M64 5.1 13.9 35.7v61.2L64 127.5l50.1-30.6V35.7L64 5.1zm-30.6 81.7V41l30.6-18.4 30.6 18.4v56.3L64 115.7l-30.6-18.9z"/><path d="m42.6 50.2 21.4 12.8 21.4-12.8-21.4-12.8-21.4 12.8zm0 15.3 21.4 12.8 21.4-12.8L64 65.5l-21.4-12.8v12.8z"/></svg>
  ),
  salesforce: (
    <svg viewBox="0 0 128 128" fill="currentColor"><path d="M89.7 128c-12.4 0-23.3-4.2-32-12.5-9.3-8.8-13.8-20.3-13.3-34.1.5-14.7 6.6-26.6 17.5-35.1 10-7.7 22.3-11.2 36.1-10.3 14.1.9 25.8 6.4 34.6 16 8.1 8.8 12.1 20.3 11.9 34-.3 13.5-5.2 24.5-14.5 32.7-8.7 7.7-19.4 11.8-31.8 11.8zm-1.8-87.3c-10-.6-18.4 2.3-24.8 8.4-6.8 6.5-9.9 15.4-9.2 26.5.6 11.3 4.8 20.3 12.3 26.5 7.1 5.9 15.6 8.6 25 7.8 10.1-.8 18.4-4.8 24.6-11.6 6.3-6.9 9.2-16.1 8.8-27-.5-11.4-4.5-20.2-11.8-26-6.6-5.3-14.5-7.8-23.4-7.2zM.1 83.1c1-12.6 6.2-22.9 15.3-30.3 8.3-6.7 18.1-9.6 28.8-8.5 2.1.2 4.1.6 6 1.1-12.2 4-22.1 11.4-29.2 21.8-6.1 8.9-9.1 19.6-9 31.6.1 11.6 3.1 21.4 8.7 29.1-3.6.1-7.1-.8-10.2-2.7-11.2-6.9-17.7-17.6-19.1-31.7-.1-1.5-.1-3-.2-4.4z"/></svg>
  ),
  tableau: (
    <svg viewBox="0 0 128 128" fill="currentColor"><path d="M64 16c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM32 64c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm24 24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm24 24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-24c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg>
  ),
  powerbi: (
    <svg viewBox="0 0 128 128" fill="currentColor"><path d="M16 16v96h24V72h24c13.3 0 24-10.7 24-24S77.3 24 64 24H40v-8h-8V0H16v16zm24 16h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H40V32z M96 56v56h16V56H96z"/></svg>
  ),
};

const TechStack = () => {
  return (
    <section id="integrations" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">Integrates with Your Favorite Tools</h2>
          <p className="mt-4 text-lg text-brand-light-gray max-w-2xl mx-auto">
            Quantum connects seamlessly with the data ecosystem you already use, amplifying your capabilities without disrupting workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {Object.entries(techLogos).map(([name, icon]) => (
            <div key={name} className="group bg-brand-gray border border-white/10 rounded-lg aspect-square flex items-center justify-center p-8 transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:scale-105">
              <div className="w-16 h-16 text-brand-light-gray group-hover:text-white transition-colors duration-300">
                {icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
