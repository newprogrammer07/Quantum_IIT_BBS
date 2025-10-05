import React from 'react';
// Make sure you have an image named 'graph.png' in your src/assets folder
import graphImage from '../assets/graph.png'; 

const statsData = [
  { label: 'Data Sources Connected', value: '1,200+' },
  { label: 'Reports Generated Daily', value: '2.5M' },
  { label: 'Queries Processed (p/sec)', value: '500K' },
  { label: 'Uptime', value: '99.99%' },
];

const DataInsights = () => {
  return (
    <section id="insights" className="py-20 md:py-32 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">Data-Driven Insights</h2>
          <p className="mt-4 text-lg text-brand-light-gray max-w-2xl mx-auto">
            Visualize your success with our powerful and intuitive analytics tools.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-6">
            {statsData.map((stat) => (
              <div key={stat.label} className="bg-brand-dark p-6 rounded-lg border border-white/10">
                <p className="text-4xl font-bold text-brand-orange">{stat.value}</p>
                <p className="text-brand-light-gray mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* This part has been replaced with a reliable static image */}
          <div className="bg-brand-dark p-6 rounded-lg border border-white/10 h-[400px]">
            <h3 className="text-xl font-bold mb-4">Quarterly Performance</h3>
            <img 
              src={graphImage} 
              alt="A bar chart showing quarterly performance" 
              className="w-full h-[calc(100%-2rem)] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataInsights;