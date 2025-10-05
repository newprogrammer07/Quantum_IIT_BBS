import React,{ useState, useEffect } from 'react';

const Hero = ({ onGetStartedClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      <div
        className="absolute inset-0 z-0 transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 0, 0.15), transparent 80%)`,
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Unlock Business Intelligence
          <br />
          with <span className="text-brand-orange">Quantum AI</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-brand-light-gray max-w-2xl mx-auto">
          Transform your data into actionable insights with our next-generation AI platform. Make smarter decisions, faster.
        </p>
        <div className="mt-10">
          <button onClick={onGetStartedClick} className="bg-brand-orange text-white font-bold py-4 px-10 rounded-lg text-lg hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
      
      {/* Floating UI Cards */}
      <div className="absolute inset-0 z-0 opacity-20 md:opacity-100">
        <div className="absolute top-[10%] left-[5%] w-48 h-24 bg-brand-gray/50 rounded-lg shadow-2xl p-2 animate-float-1">
            <div className="w-1/3 h-2 bg-brand-orange/50 rounded-sm mb-2"></div>
            <div className="w-full h-1 bg-white/20 rounded-sm mb-1"></div>
            <div className="w-2/3 h-1 bg-white/20 rounded-sm mb-1"></div>
            <div className="w-full h-1 bg-white/20 rounded-sm"></div>
        </div>
        <div className="absolute top-[20%] right-[8%] w-56 h-32 bg-brand-gray/50 rounded-lg shadow-2xl p-2 animate-float-2">
            <div className="flex justify-between items-center mb-2">
                <div className="w-1/2 h-2 bg-brand-orange/50 rounded-sm"></div>
                <div className="w-8 h-8 bg-white/10 rounded-full"></div>
            </div>
            <div className="w-full h-16 bg-white/10 rounded-sm"></div>
        </div>
         <div className="absolute bottom-[15%] left-[10%] w-64 h-40 bg-brand-gray/50 rounded-lg shadow-2xl p-3 animate-float-3">
            <div className="w-1/3 h-2 bg-brand-orange/50 rounded-sm mb-3"></div>
            <div className="flex space-x-2">
                <div className="w-1/3 h-24 bg-white/10 rounded-sm"></div>
                <div className="w-1/3 h-24 bg-white/20 rounded-sm"></div>
                <div className="w-1/3 h-24 bg-white/10 rounded-sm"></div>
            </div>
        </div>
        <div className="absolute bottom-[10%] right-[5%] w-40 h-20 bg-brand-gray/50 rounded-lg shadow-2xl p-2 animate-float-1" style={{animationDelay: '1s'}}>
            <div className="w-1/3 h-2 bg-brand-orange/50 rounded-sm mb-2"></div>
            <div className="w-full h-1 bg-white/20 rounded-sm mb-1"></div>
            <div className="w-2/3 h-1 bg-white/20 rounded-sm mb-1"></div>
        </div>
      </div>

      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(25px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;