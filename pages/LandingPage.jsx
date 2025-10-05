import React from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Clients from '../components/Clients.jsx';
import Capabilities from '../components/Capabilities.jsx';
import AboutUs from '../components/AboutUs.jsx';
import TechStack from '../components/TechStack.jsx';
import DataInsights from '../components/DataInsights.jsx';
import ParallaxShowcase from '../components/ParallaxShowcase.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Footer from '../components/Footer.jsx';

const LandingPage = ({ onGetStartedClick }) => {
  return (
    <>
      <Header onGetStartedClick={onGetStartedClick} />
      <main>
        <Hero onGetStartedClick={onGetStartedClick} />
        <Clients />
        <Capabilities />
        <AboutUs />
        <TechStack />
        <DataInsights />
        <ParallaxShowcase />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;