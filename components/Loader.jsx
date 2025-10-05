import React from 'react';

const Loader = ({ exiting }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-brand-dark transition-opacity duration-500 ${exiting ? 'opacity-0' : 'opacity-100'}`}>
      <div className={`relative flex items-center justify-center transition-transform duration-500 ${exiting ? 'scale-90' : 'scale-100'}`}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-16 w-16 rounded-full border-2 border-brand-orange/50"
            style={{
              width: `${(i + 1) * 4}rem`,
              height: `${(i + 1) * 4}rem`,
              animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
        <div className="text-2xl font-bold text-white tracking-widest">
            <span className="text-brand-orange">Q</span>UANTUM
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;