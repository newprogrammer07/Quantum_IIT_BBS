import React from 'react';
// Make sure you have a 'graph.png' file in your src/assets folder
import graphImage from '../assets/graph.png'; 

const statsData = [
    { label: 'Managed portfolio carbon footprint', value: '45,048', unit: 'tCO₂e', change: '+16%', changeType: 'increase' },
    { label: 'Managed portfolio energy intensity', value: '123', unit: 'kWh/m²', change: '↓ 22%', changeType: 'decrease' },
    { label: 'Managed portfolio energy consumption', value: '47.7M', unit: 'kWh', change: '↓ 27%', changeType: 'decrease' },
];

const DataInsights = () => {
  return (
    <section id="insights" className="py-20 md:py-32 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">Data-Driven Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {statsData.map((stat) => (
            <div key={stat.label} className="bg-brand-dark p-6 rounded-lg border border-white/10">
              <p className="text-brand-light-gray text-sm">{stat.label}</p>
              <div className="flex items-baseline mt-2">
                <p className="text-4xl font-bold text-brand-orange">{stat.value}</p>
                <span className="text-brand-light-gray ml-2">{stat.unit}</span>
              </div>
              <p className={`mt-2 text-sm ${stat.changeType === 'increase' ? 'text-red-400' : 'text-green-400'}`}>{stat.change} from 2019</p>
            </div>
          ))}
        </div>
        <div className="bg-brand-dark p-6 rounded-lg border border-white/10 h-[400px]">
            <h3 className="text-xl font-bold mb-4">Embodied Carbon Emissions</h3>
            <img 
              src={graphImage} 
              alt="Embodied carbon emissions chart" 
              className="w-full h-[calc(100%-2rem)] object-contain"
            />
        </div>
      </div>
    </section>
  );
};

export default DataInsights;