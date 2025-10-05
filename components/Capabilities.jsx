import React, { useState } from 'react';

const capabilitiesData = [
  {
    id: 'predictive',
    title: 'Predictive Analytics',
    description: 'Leverage machine learning models to forecast trends and predict future outcomes with unparalleled accuracy. Stay ahead of the curve.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
    ),
  },
  {
    id: 'realtime',
    title: 'Real-Time Dashboards',
    description: 'Monitor your key metrics as they happen with dynamic, live-updating dashboards. Get instant insights into your business operations.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 6v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L12 12" /></svg>
    ),
  },
  {
    id: 'integration',
    title: 'Seamless Integration',
    description: 'Connect to hundreds of data sources with our robust API and pre-built connectors. Quantum works with the tools you already use.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
    ),
  },
  {
    id: 'automation',
    title: 'Automated Reporting',
    description: 'Generate and distribute comprehensive reports automatically. Save time and ensure stakeholders are always informed.',
    icon: (
        <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
    ),
  },
];

const Capabilities = () => {
  const [activeTab, setActiveTab] = useState(capabilitiesData[0].id);

  const activeCapability = capabilitiesData.find(c => c.id === activeTab);

  return (
    <section id="capabilities" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">Advanced Capabilities</h2>
          <p className="mt-4 text-lg text-brand-light-gray max-w-2xl mx-auto">
            Everything you need to turn data into a competitive advantage.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 flex flex-col space-y-4">
            {capabilitiesData.map((capability) => (
              <button
                key={capability.id}
                onClick={() => setActiveTab(capability.id)}
                className={`flex items-center space-x-4 p-4 rounded-lg text-left transition-all duration-300 ${activeTab === capability.id ? 'bg-brand-orange text-white' : 'bg-brand-gray hover:bg-brand-gray/50'}`}
              >
                <div className={`transition-colors ${activeTab === capability.id ? 'text-white' : 'text-brand-orange'}`}>{capability.icon}</div>
                <span className="font-bold text-lg">{capability.title}</span>
              </button>
            ))}
          </div>

          <div className="md:w-2/3 bg-brand-gray rounded-lg p-8 min-h-[200px]">
            {activeCapability && (
              <div>
                <h3 className="text-2xl font-bold text-brand-orange mb-4">{activeCapability.title}</h3>
                <p className="text-brand-light-gray text-lg">{activeCapability.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;