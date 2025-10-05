import React from 'react';

const values = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="m12 9 4 6H8l4-6Z"/></svg>,
    title: 'Innovation',
    description: 'We are driven by a relentless pursuit of innovation, constantly pushing the boundaries of what AI can achieve in business intelligence.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Integrity',
    description: 'We uphold the highest standards of integrity in all our actions, ensuring your data is secure, private, and handled ethically.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>,
    title: 'Customer Success',
    description: 'Your success is our success. We partner with our clients to provide tailored solutions and dedicated support to meet their goals.',
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Pioneering the Future of Business Intelligence
            </h2>
            <p className="mt-6 text-lg text-brand-light-gray">
              Quantum AI was founded with a clear mission: to democratize data and empower organizations of all sizes to make smarter, data-driven decisions. We believe that the right insights have the power to transform industries, and we are building the tools to unlock that potential. Our platform is more than just software; it's a partner in your growth.
            </p>
          </div>
          <div className="space-y-8">
            {values.map((value) => (
              <div key={value.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-brand-gray p-3 rounded-full text-brand-orange">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="mt-1 text-brand-light-gray">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;