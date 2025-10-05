import React from 'react';

const sustainabilityData = [
  {
    title: 'Managed portfolio carbon footprint',
    unit: 'tCO₂e',
    mainValue: '45,048',
    change: '16%',
    changeType: 'increase',
    historicalData: [
      { year: 2022, value: 45048 },
      { year: 2021, value: 14111 },
      { year: 2020, value: 32813 },
      { year: 2019, value: 38673 },
    ],
    ctaText: 'See full breakdown of carbon footprint',
    ctaIcon: 'arrow',
  },
  {
    title: 'Managed portfolio energy intensity',
    unit: 'kWh/m²',
    mainValue: '123',
    change: '22%',
    changeType: 'decrease',
    historicalData: [
      { year: 2022, value: 123 },
      { year: 2021, value: 128 },
      { year: 2020, value: 135 },
      { year: 2019, value: 157 },
    ],
    ctaText: 'Download the data',
    ctaIcon: 'download',
  },
  {
    title: 'Managed portfolio energy consumption',
    unit: 'kWh',
    mainValue: '47,790,662',
    change: '27%',
    changeType: 'decrease',
    historicalData: [
      { year: 2022, value: 47790662 },
      { year: 2021, value: 49324077 },
      { year: 2020, value: 48784205 },
      { year: 2019, value: 65198706 },
    ],
    ctaText: 'Download the data',
    ctaIcon: 'download',
  },
];

const ArrowIcon = ({ type }) => {
    if (type === 'increase') return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L6 10M6 2L2 6M6 2L10 6" stroke="#8C5A5A" strokeWidth="1.5"/></svg>;
    return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10L6 2M6 10L10 6M6 10L2 6" stroke="#8C5A5A" strokeWidth="1.5"/></svg>;
};

const CtaIcon = ({ type }) => {
    if (type === 'arrow') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5C4B44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16L16 12L12 8" stroke="#5C4B44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 12H16" stroke="#5C4B44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5C4B44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16V8" stroke="#5C4B44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 13L12 16L15 13" stroke="#5C4B44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

const KpiCard = ({ data }) => {
  const maxValue = Math.max(...data.historicalData.map(d => d.value));
  
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg text-brand-brown-text max-w-[200px]">{data.title}</h3>
        <span className="text-sm font-semibold text-brand-brown-text/70">{data.unit}</span>
      </div>
      
      <div className="flex justify-between items-center mb-10">
        <p className="text-6xl font-light text-brand-brown-text">{data.mainValue}</p>
        <div className="text-right">
            <div className="flex items-center justify-end gap-1">
                <ArrowIcon type={data.changeType} />
                <p className="text-2xl font-light text-brand-red-dark">{data.change}</p>
            </div>
            <p className="text-sm text-brand-brown-text/70">from 2019</p>
        </div>
      </div>
      
      <div className="space-y-4 mb-10 flex-grow">
        {data.historicalData.map(item => {
            const widthPercentage = (item.value / maxValue) * 100;
            return (
                <div key={item.year} className="grid grid-cols-6 items-center gap-4 text-sm">
                    <span className="col-span-1 text-brand-brown-text">{item.year}</span>
                    <div className="col-span-4 h-2.5 bg-brand-progress-bg rounded-full">
                        <div 
                            className={`h-full rounded-full ${item.year === 2022 ? 'bg-brand-red-dark' : 'bg-brand-red-light'}`} 
                            style={{ width: `${widthPercentage}%` }}
                        ></div>
                    </div>
                    <span className="col-span-1 text-brand-brown-text/70 text-right">{item.value.toLocaleString()}</span>
                </div>
            )
        })}
      </div>

      <div className="flex items-center space-x-2">
        <CtaIcon type={data.ctaIcon} />
        <a href="#" className="text-sm text-brand-brown-text hover:underline">{data.ctaText}</a>
      </div>
    </div>
  );
};

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-20 md:py-32 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 border-t border-brand-brown-text/20 pt-12">
          {sustainabilityData.map((data, index) => (
            <KpiCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
