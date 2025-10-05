import React from 'react';
// This line imports the image directly from your project folder
import parallaxBgImage from '../assets/parallax-bg.jpg'; 

const ParallaxShowcase = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        // This line uses your local image, which will not fail
        style={{ backgroundImage: `url(${parallaxBgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-brand-dark/80"></div>
      <div className="relative z-10 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold">Clarity at Scale</h2>
        <p className="mt-4 text-lg md:text-xl text-brand-light-gray max-w-3xl mx-auto">
          From kilobytes to petabytes, Quantum processes your data with unprecedented speed and efficiency, revealing insights that were previously hidden.
        </p>
      </div>
    </section>
  );
};

export default ParallaxShowcase;