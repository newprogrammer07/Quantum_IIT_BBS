import React from 'react';

const testimonialsData = [
  {
    quote: "Quantum has fundamentally changed how we approach data. We're making decisions 10x faster and with more confidence than ever before.",
    author: "Jane Doe",
    company: "CEO, InnovateInc",
  },
  {
    quote: "The real-time dashboards are a game-changer. Our operations team can now spot and address issues before they become problems.",
    author: "John Smith",
    company: "COO, TechCorp",
  },
  {
    quote: "We integrated Quantum with our existing stack in under a week. The support team was phenomenal, and the platform is incredibly intuitive.",
    author: "Emily White",
    company: "Head of Analytics, DataDriven",
  },
  {
    quote: "The predictive analytics feature has opened up new revenue streams for us. It's like having a crystal ball for our business.",
    author: "Michael Brown",
    company: "VP of Strategy, SolutionSys",
  },
  {
    quote: "A truly indispensable tool for any data-focused organization. Quantum provides clarity in a sea of complexity.",
    author: "Sarah Green",
    company: "Lead Data Scientist, NextGen",
  },
  {
    quote: "The level of detail we get from Quantum's automated reports is astounding. It has saved our team hundreds of hours a month.",
    author: "Carlos Rodriguez",
    company: "CTO, Synergy Solutions",
  },
    {
    quote: "As a non-technical founder, I was worried about the complexity. Quantum is incredibly user-friendly and has empowered our entire team to become data experts.",
    author: "Priya Singh",
    company: "Founder, Visionary Ventures",
  },
  {
    quote: "Quantum's ability to seamlessly integrate with our legacy systems was the deciding factor. The transition was flawless, and the results speak for themselves.",
    author: "David Chen",
    company: "IT Director, QuantumLeap Logistics",
  },
];

const Testimonials = () => {
  const extendedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-brand-light-gray max-w-2xl mx-auto">
            Real stories from businesses transformed by Quantum.
          </p>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] w-full max-w-2xl mx-auto overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-brand-dark to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-dark to-transparent z-10"></div>
          
          <div className="animate-testimonial-scroll group-hover:[animation-play-state:paused]">
            {extendedTestimonials.map((testimonial, index) => (
              <div key={index} className="p-8 mb-8 bg-brand-gray border border-white/10 rounded-lg">
                <p className="text-lg text-brand-light-gray italic">"{testimonial.quote}"</p>
                <div className="mt-4 text-right">
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-brand-orange text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;