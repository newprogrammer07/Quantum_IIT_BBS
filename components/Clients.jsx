import React from 'react';

const LOGOS = [
  'TechCorp', 'InnovateInc', 'DataDriven', 'SolutionSys', 'NextGen', 'Visionary', 'QuantumLeap', 'Synergy'
];

const ClientLogo = ({ name }) => (
    <div className="flex-shrink-0 w-48 h-20 flex items-center justify-center mx-8">
        <span className="text-2xl font-semibold text-brand-light-gray/50">{name}</span>
    </div>
);


const Clients = () => {
  const extendedLogos = [...LOGOS, ...LOGOS];

  return (
    <section className="py-12 bg-brand-gray border-y border-white/10">
      <div className="container mx-auto text-center">
        <p className="text-brand-light-gray mb-8">Trusted by the world's most innovative companies</p>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-logo-scroll">
            {extendedLogos.map((logo, index) => (
              <ClientLogo key={index} name={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;